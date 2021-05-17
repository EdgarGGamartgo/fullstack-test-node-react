import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './Paginator.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface PaginatorProps {
  pages: number, page: number, handleChange: (event: React.ChangeEvent<unknown>, value: number) => void
}

export const Paginator = ({ pages, page, handleChange }: PaginatorProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={pages} page={page} onChange={handleChange} />
    </div>
  );
}

