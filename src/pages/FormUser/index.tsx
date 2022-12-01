import { Button, Grid, InputAdornment, Paper, TextField } from "@mui/material"
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { ICreateUserRequest, ICreateUserResponse } from "../../services/user/types";
import { useMutation } from "react-query";
import { api } from "../../services";

const FormUser = () => {
    const routes = useNavigate();

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
      } = useForm<ICreateUserRequest>({
        defaultValues: {
          username: '',
          password: '',
        },
        mode: 'all',
        criteriaMode: 'all'
      });
    
    const createUserMutation = useMutation((data: ICreateUserRequest) => {
        return api.user.post(data);
    }, {
        onSuccess: () => {
            console.info("Create with sucess");
            routes("/login");
        }, 
        onError: (error: any) => {
            console.log(error.response.data.message);
        }   
    });
    
    const onSubmit = handleSubmit((data: ICreateUserRequest) => {
        createUserMutation.mutate(data);
        cleanForm();
    });

    const cleanForm = () => {
        reset();
        routes("/login");
    }
    return (
        <Paper elevation={10} className="w-1/3 h-2/3">
            <Grid container rowSpacing={3}>
                <Grid item xs={12} className="flex justify-center">
                    <figure>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/51a8ba125652239.6136f3b715098.jpg" 
                            alt="Logo NG.Cash"
                            width="150px" />
                    </figure>
                    
                </Grid>
                <Grid item xs={12} className="flex justify-center items-center">
                    <span className="text-neutral-900/80 text-2xl">Create a new account now</span>
                </Grid>
                <form className='w-full mt-5' onSubmit={onSubmit}>
                <Grid item xs={12} className="flex justify-center h-24">
                    <Controller
                        control={control}
                        name="username"
                        rules={{
                            required: {
                                value: true,
                                message: 'Required field'
                            },
                            minLength: {
                                value: 3,
                                message: "Username has less than 3 characteres"
                            }
                        }}
                        render={ ({ field: { onChange, onBlur, value } }) => 
                            (<TextField
                                error = {Boolean(errors?.username)}
                                id="username"
                                label="Username"
                                className="w-3/4"
                                placeholder="username"
                                helperText= {errors?.username?.message}
                                
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
                        name="password"
                        rules={{
                            required: {
                            value: true,
                            message: 'Required field'
                            },
                            pattern: {
                                value:
                                /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                                message: "Password is invalid!"
                              }
                        }}
                        render={ ({ field: { onChange, onBlur, value } }) => 
                            (<TextField
                                error = {Boolean(errors?.password)}
                                id="password"
                                type="password"
                                label="Password"
                                placeholder="Your password"
                                helperText= {errors?.password?.message}
                                className="w-3/4 h-auto"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>
                                }}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                />)
                        }
                    />
                </Grid>
                <Grid item xs={12} className="flex justify-center items-center h-24">
                    <div className="flex justify-end items-center w-3/4">
                        <div className="mr-4">
                            <Button 
                                variant="outlined" 
                                className="w-32 h-12" 
                                onClick={() => cleanForm()}>
                                Cancel
                            </Button>
                        </div>
                        <Button 
                            type="submit"
                            variant="contained" 
                            color="success" 
                            className="w-32 h-12">
                            Save
                        </Button>
                    </div>
                </Grid>
                </form>
            </Grid>
      </Paper>
    )
}

export { FormUser }

