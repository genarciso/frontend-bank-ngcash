import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}
  
function BootstrapDialogTitle(props: DialogTitleProps) {
const { children, onClose, ...other } = props;

return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
    {children}    
    <IconButton
        aria-label="close"
        onClick={onClose}
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
);
}

const FormTransferer = () => {
    const transferMoney = () => {

    }

    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <div>
            <Button variant="outlined" color="success"  onClick={handleClickOpen}>
                Transfer money
            </Button>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <span className="text-neutral-900/80 text-base">Tranferer your money to a friend</span>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Grid container rowSpacing={3}>
                        <Grid item xs={12} className="flex justify-center h-24">
                            <TextField
                                error
                                id="username"
                                label="Username"
                                placeholder="username"
                                helperText="Incorrect entry."
                                className="w-3/4"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><span className="text-xl w-6">@</span></InputAdornment>
                                    }}
                                />
                        </Grid>
                        <Grid item xs={12} className="flex justify-center h-24">
                            <TextField
                                error
                                id="value"
                                label="Amount"
                                placeholder="Transfer amount"
                                helperText="Incorrect entry."
                                className="w-3/4 h-auto"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><span className="text-xl w-6">R$</span></InputAdornment>
                                    }}
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
                                () => handleClose()
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
            </Dialog>
        </div>
    );
}

export { FormTransferer }