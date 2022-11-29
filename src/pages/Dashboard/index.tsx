import { Checkbox, Divider, FormControlLabel, Grid, Paper, Typography } from "@mui/material"
import { AvatarMenu } from "../../components/AvatarMenu";
import { FormTransferer } from "../../components/FormTransferer";
import { TableTransactions } from "../../components/TableTransactions";

const Dashboard = () => {
    
    return (
        <Paper elevation={10} className="w-2/3 h-4/5 overflow-auto">
            <Grid container rowSpacing={3}>
                <Grid item xs={12} className="flex justify-between items-center">
                    <figure>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/51a8ba125652239.6136f3b715098.jpg" 
                            alt="Logo NG.Cash"
                            width="150px" />
                    </figure>
                    <div className="mr-10 flex justify-end items-center">
                        <span className="mr-3">@username</span>
                        <AvatarMenu />
                    </div>
                </Grid>
                <Grid item xs={12} >
                    <Divider />
                    <div className="flex justify-between items-center">
                        <div className="mt-3 mb-3">
                            <span className="text-base ml-10">
                                Balance:
                            </span>
                            <span className="text-base text-neutral-900/80 ml-2">
                                R$ {10.00}
                            </span>
                        </div>
                        <div className="mt-3 mb-3 mr-10">
                            <FormTransferer />
                        </div>
                    </div>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">Log Transactions</Typography>
                    
                </Grid>
                <Grid item xs={12}>
                    <div className="flex justify-around">
                        <span className="ml-10 mt-3">Filters:</span>               
                        <FormControlLabel control={<Checkbox />} label="Debit" />
                        <FormControlLabel control={<Checkbox />} label="Credit" />
                        
                    </div>
                    
                </Grid>
                <Grid item xs={12}>
                    <TableTransactions />
                </Grid>
            </Grid>
      </Paper>
    )
}

export { Dashboard }