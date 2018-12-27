import React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme: any) => createStyles({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

interface Row {
    readonly positionName: string;
    readonly location: string;
    readonly link: string;
}

interface TableProps extends WithStyles<typeof styles> {
    readonly data: Row[];
}

function ComapanyTable(props: TableProps) {
    const { classes, data } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Position</TableCell>
                        <TableCell>Locations</TableCell>
                        <TableCell>Link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((value: Row, index: number) => {
                        const link: any = ({innerRef, ...propsSpread}: any) => <a {...propsSpread} target={'_blank'} rel={'noopener noreferrer nofollow'} href={value.link} />;
                        const styledLink: JSX.Element = <Typography component={link}>Link</Typography>;

                        return (
                            <TableRow key={index}>
                                <TableCell component="th">
                                    {value.positionName}
                                </TableCell>
                                <TableCell>{value.location}</TableCell>
                                <TableCell>
                                    {styledLink}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default withStyles(styles)(ComapanyTable);
