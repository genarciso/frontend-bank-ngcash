import LockIcon from '@mui/icons-material/Lock';
import { Grid, Paper, Button, InputAdornment, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const routes = useNavigate()
    const login = () => {
        routes("/");
    }
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
                        id="password"
                        type="password"
                        label="Password"
                        placeholder="Your password"
                        helperText="Incorrect entry."
                        className="w-3/4 h-auto"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>
                          }}
                        />
                </Grid>
                <Grid item xs={12} className="flex justify-center ">
                    <Button 
                        variant="contained" 
                        color="success" 
                        className="w-3/4 h-12"
                        onClick={
                            () => login()
                        }
                        >
                        Sign in
                    </Button>
                </Grid>
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