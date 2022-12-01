import LockIcon from '@mui/icons-material/Lock';
import { Grid, Paper, Button, InputAdornment, TextField } from "@mui/material";
import { Controller, useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import { ILoginRequestData } from '../../services/auth/types';

const Login = () => {    
    const { login } = useAuth();

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
      } = useForm<ILoginRequestData>({
        defaultValues: {
          username: '',
          password: '',
        },
        mode: 'all',
        criteriaMode: 'all'
      });

    const loginSubmit = handleSubmit((data: ILoginRequestData) => {
        login(data);
        reset();
    });
    return (
        <Paper elevation={10} className="w-1/3 h-4/5">
            <Grid container rowSpacing={3}>
                <Grid item xs={12} className="flex justify-center">
                    <figure>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/51a8ba125652239.6136f3b715098.jpg" 
                            alt="Logo NG.Cash"
                            width="150px" />
                    </figure>
                    
                </Grid>
                <Grid item xs={12} className="flex justify-center items-center">
                    <span className="text-neutral-900/80 text-2xl">Sign in to NG.Cash</span>
                </Grid>
                <form className='w-full mt-5' onSubmit={loginSubmit}>
                    <Grid item xs={12} className="flex justify-center h-24">
                        <Controller
                            control={control}
                            name="username"
                            rules={{
                                required: {
                                    value: true,
                                    message: 'Required field'
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
                    <Grid item xs={12} className="flex justify-center ">
                        <Button 
                            variant="contained" 
                            color="success" 
                            className="w-3/4 h-12"
                            type="submit"
                            >
                            Sign in
                        </Button>
                    </Grid>
                </form>
                <Grid item xs={12} className="flex justify-center" >
                    <div className="flex justify-between items-center h-16 w-3/4">
                        <label>New here?</label>
                        <Link to="/user/new" className="w-3/4 h-16 flex items-center">
                            <Button variant="outlined" className="w-full h-12">
                            Create a new account
                            </Button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
      </Paper>
    );
}

export { Login }