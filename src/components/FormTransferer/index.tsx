import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IRequestTransferAmount } from "../../services/account/types";
import { useMutation } from "react-query";
import { api } from "../../services";

interface IFormTransfererProps {
    refetchTransactions: () => void;
    refetchBalance: () => void;
}
const FormTransferer = (props: IFormTransfererProps) => {
    const {refetchTransactions, refetchBalance} = props;
    const [openModal, setOpenModal] = useState(false);
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
      } = useForm<IRequestTransferAmount>({
        defaultValues: {
          receiverUserUsername: '',
          value: 0,
        },
        mode: 'all',
        criteriaMode: 'all'
      });

    const cleanForm = () => {
        reset();
    }
    const handleClickOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        cleanForm();
        setOpenModal(false);
    };
    
    const transferMutation = useMutation((data: IRequestTransferAmount) => {
        return api.account.postTrasferAmount(data);
    }, {
        onSuccess: () => {
            console.info("Transfered with sucess");
            refetchTransactions();
            refetchBalance();
            handleCloseModal();
        }, 
        onError: (error: any) => {
            console.error(error.response.data.message);
        }   
    });

    
    const transferMoney = handleSubmit((data: IRequestTransferAmount) => {
        transferMutation.mutate(data);
    });

    return (
        <div>
            <Button variant="outlined" color="success"  onClick={handleClickOpenModal}>
                Transfer money
            </Button>
            <Dialog
                onClose={handleCloseModal}
                aria-labelledby="customized-dialog-title"
                open={openModal}
            >
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    <span className="text-neutral-900/80 text-base">Tranferer your money to a friend</span>    
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseModal}
                        sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <form className='w-full' onSubmit={transferMoney}>
                <DialogContent dividers>
                    <Grid container rowSpacing={3}>
                        <Grid item xs={12} className="flex justify-center h-24">
                            <Controller
                                control={control}
                                name="receiverUserUsername"
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'Required field'
                                    }
                                }}
                                render={ ({ field: { onChange, onBlur, value } }) => 
                                    (<TextField
                                        error = {Boolean(errors?.receiverUserUsername)}
                                        id="receiverUserUsername"
                                        label="Username"
                                        className="w-3/4"
                                        placeholder="username"
                                        helperText= {errors?.receiverUserUsername?.message}
                                        
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><span className="text-xl w-6">@</span></InputAdornment>
                                        }}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />)
                                }
                            />
                        </Grid>
                        <Grid item xs={12} className="flex justify-center h-24">
                            <Controller
                                control={control}
                                name="value"
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'Required field'
                                    }
                                }}
                                render={ ({ field: { onChange, onBlur, value } }) => 
                                    (<TextField
                                        error = {Boolean(errors?.value)}
                                        id="value"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        label="Amount"
                                        placeholder="Transfer amount"
                                        helperText={errors?.value?.message}
                                        className="w-3/4 h-auto"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><span className="text-xl w-6">R$</span></InputAdornment>
                                            }}
                                        />)
                                }
                            />
                            
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                        <Button  
                            sx={{
                                color: "black"
                            }}
                            className="w-28 h-10"
                            onClick={
                                () => handleCloseModal()
                            }
                            >
                                Cancel
                        </Button>
                        <Button 
                            variant="contained" 
                            color="success" 
                            className="w-28 h-10"
                            onClick={
                                () => transferMoney()
                            }
                            >
                                Transfer
                        </Button>
                </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export { FormTransferer }