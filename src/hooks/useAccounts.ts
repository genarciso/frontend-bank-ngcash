import { useState } from "react";
import { useQuery } from "react-query";
import { ITransactions } from "../models/ITransactions";
import { api } from "../services";
import { IRequestTransferAmount } from "../services/account/types";

export function useAccounts() {
    const [ balance, setBalance ] = useState<number>(0);
    const [ transactionCashIn, setTransactionCashIn] = useState<boolean>(false);
    const [ transactionCashOut, setTransactionCashOut] = useState<boolean>(false);

    const {refetch: getBalance } = useQuery(
        'getBalanceByUser', 
        api.account.getBalance, {
        onSuccess: ({data}) => setBalance(data.result.balance)
    });

    const {refetch: refetchTransactions } = useQuery(
        'getAllTransactionByUser', 
        () => { return api.account.getCheckTransactions({
            transactionCashIn: transactionCashIn,
            transactionCashOut: transactionCashOut
        })  }, {});
    
    const checkTransactionsIn = (value: boolean) => {
        setTransactionCashIn(value);
    }

    const checkTransactionsOut = (value: boolean) => {
        setTransactionCashOut(value);
    }
    const transferAmountMutation = useMutation((data: IRequestTransferAmount) => {
        return api.account.postTrasferAmount(data);
    }, {
        onSuccess: ({data}: { data: ITransactions }) => {
            console.info(data);
        },
        onError: (
            error: {
                response: { 
                    status: number;
                    data: {
                        message: string;
                    } 
                }
            }
        ) => {
            if (error.response.status >= 400 && error.response.status <= 600) {
                console.error(
                    error.response.data.message
                );
            }
        }
    });

    const transferAmount = transferAmountMutation.mutate;


    return { 
        getBalance, 
        refetchTransactions, 
        checkTransactionsIn, 
        checkTransactionsOut, 
        transferAmount, 
        transferAmountMutation
    }
}