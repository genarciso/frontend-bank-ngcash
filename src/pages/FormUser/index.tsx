import { Button, Grid, InputAdornment, Paper, TextField } from "@mui/material"
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from "react-router-dom";

const FormUser = () => {
    const routes = useNavigate();

    const cleanForm = () => {
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
                            variant="contained" 
                            color="success" 
                            className="w-32 h-12">
                            Save
                        </Button>
                    </div>
                    
                </Grid>
            </Grid>
      </Paper>
    )
}

export { FormUser }

