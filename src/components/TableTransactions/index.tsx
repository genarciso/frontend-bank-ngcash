import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useState } from "react";
import moment from 'moment';

interface Column {
    id: 'debitedUser' | 'creditedUser' | 'value' | 'date';
    label: string;
    minWidth?: number;
    align?: 'right';
}

const columns: readonly Column[] = [
    { id: 'debitedUser', label: 'Debited Account', minWidth: 170 },
    { id: 'creditedUser', label: 'Credited Account', minWidth: 170 },
    { id: 'value', label: 'Amount', minWidth: 50},
    {
    id: 'date',
    label: 'Date',
    minWidth: 100,
    }
];

interface ObjUser {
    user: {
        username: string;
    };
}

interface Data {
    debitedUser: string;
    creditedUser: string;
    value: number;
    date: string;
}

function createData(
    debit: ObjUser,
    credit: ObjUser,
    value: number,
    date: string,
): Data {
    const dateFormat = moment(date).format(
        'DD/MM/YYYY HH:mm:ss'
      ) as string
    return {
        debitedUser: debit.user.username,
        creditedUser: credit.user.username,
        value,
        date: dateFormat
    };
}

const rows = [
    createData({user: {username: "teste"}}, {user: {username: "teste2"}}, 1, "2022-11-24T01:56:30.310Z"),
    createData({user: {username: "teste"}}, {user: {username: "teste2"}}, 1, "2022-11-24T01:56:30.310Z"),
    createData({user: {username: "teste"}}, {user: {username: "teste2"}}, 1, "2022-11-24T01:56:30.310Z"),
    createData({user: {username: "teste"}}, {user: {username: "teste2"}}, 1, "2022-11-24T01:56:30.310Z"),
    createData({user: {username: "teste"}}, {user: {username: "teste2"}}, 1, "2022-11-24T01:56:30.310Z"),
    createData({user: {username: "teste"}}, {user: {username: "teste2"}}, 1, "2022-11-24T01:56:30.310Z"),
];


const TableTransactions = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'auto', height: "100%" }}>
            <TableContainer sx={{ maxHeight: 250}}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.date}>
                            {columns.map((column) => {
                            const value = row[column.id];
                            return (
                                <TableCell key={column.id} align={column.align}>
                                { value }
                                </TableCell>
                            );
                            })}
                        </TableRow>
                        );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );

};

export { TableTransactions }