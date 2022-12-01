import { Checkbox, Divider, FormControlLabel, Grid, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { AvatarMenu } from "../../components/AvatarMenu";
import { FormTransferer } from "../../components/FormTransferer";
import { TableTransactions } from "../../components/TableTransactions";
import { IAccount } from "../../models/IAccount";
import { ITransactions } from "../../models/ITransactions";
import { api } from "../../services";
import { IResponseBalance, IResponseCheckTransactios } from "../../services/account/types";

const Dashboard = () => {
    const [transactionCashIn, setTransactionCashIn] = useState(true);
    const [transactionCashOut, setTransactionCashOut] = useState(true);
    const [transactions, setTransactions] = useState<ITransactions[]>([]);
    const [account, setAccount] = useState<IAccount>({} as IAccount);
    const { refetch: refetchBalance } = useQuery(
        'getBalance',
        () => api.account.getBalance(),
        {
            onSuccess: ({data} : {data: IResponseBalance}) => {
                setAccount(data.result);
            }
        }
    )

    const { refetch: refetchTransactions } = useQuery(
        'getTransactions',
        () => api.account.getCheckTransactions({
            transactionCashIn,
            transactionCashOut
        }),
        {
            onSuccess: ({data} : {data: IResponseCheckTransactios}) => {
                setTransactions(data.userTransactions);
            }
        }
    );

    useEffect(() => {
        refetchTransactions()
    }, [transactionCashIn, transactionCashOut]);

    return (
        <Paper elevation={10} className="w-2/3 h-full overflow-auto">
            <Grid container rowSpacing={3}>
                <Grid item xs={12} className="flex justify-between items-center">
                    <figure>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/51a8ba125652239.6136f3b715098.jpg" 
                            alt="Logo NG.Cash"
                            width="150px" />
                    </figure>
                    <div className="mr-10 flex justify-end items-center">
                        <span className="mr-3">@{account.user?.username}</span>
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
                                R$ {account.balance}
                            </span>
                        </div>
                        <div className="mt-3 mb-3 mr-10">
                            <FormTransferer refetchTransactions={refetchTransactions} refetchBalance={refetchBalance} />
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
                        <FormControlLabel control={<Checkbox checked={transactionCashOut} onChange={(event) => { setTransactionCashOut(event.target.checked) } }/>} label="Debit" />
                        <FormControlLabel control={<Checkbox checked={transactionCashIn}  onChange={(event) => { setTransactionCashIn(event.target.checked) } }/>} label="Credit" />
                        
                    </div>
                    
                </Grid>
                <Grid item xs={12}>
                    <TableTransactions transactions={transactions} />
                </Grid>
            </Grid>
      </Paper>
    )
}

export { Dashboard }