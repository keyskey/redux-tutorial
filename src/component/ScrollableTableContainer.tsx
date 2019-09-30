import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      overflowX: 'auto'
    },
    nameCol: {
      position: 'absolute',
      backgroundColor: 'white',
      borderBottom: '1px solid rgba(224, 224, 224, 1)'
    },
    bodyCell: {
      width: 97
    }
  })
);

function createMonthColumns(numMonth: number) {
  return Array.from({ length: numMonth }, (v, k) => k).map(i => ({
    id: `month${i}`,
    label: `Month${i}`
  }));
}

function createDatas(numRows: number, numMonth: number) {
  const monthColumns = (rowIndex, numMonth) => {
    const monthArray = Array.from({ length: numMonth }, (v, k) => k).map(i => ({
      [`month${i}`]: rowIndex + i
    }));

    return Object.assign({}, ...monthArray);
  };

  return Array.from({ length: numRows }, (v, k) => k).map(i => ({
    name: `item${i}`,
    ...monthColumns(i, numMonth)
  }));
}

const numMonth = 12;
const numRows = 5;
const columns = [
  { id: 'name', label: 'Name' },
  ...createMonthColumns(numMonth)
];
const rows = createDatas(numRows, numMonth);

export default function ScrollableTableContainer() {
  const classes = useStyles({});

  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.nameCol}>
              {columns[0].label}
            </TableCell>
            <Box ml={11}>
              {columns.slice(1).map(column => (
                <TableCell align="center" key={column.id}>
                  {column.label}
                </TableCell>
              ))}
            </Box>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                <TableCell className={classes.nameCol}>
                  {row[columns[0].id]}
                </TableCell>
                <Box ml={11}>
                  {columns.slice(1).map(column => (
                    <TableCell
                      className={classes.bodyCell}
                      key={column.id}
                      align="center"
                    >
                      {row[column.id]}
                    </TableCell>
                  ))}
                </Box>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
