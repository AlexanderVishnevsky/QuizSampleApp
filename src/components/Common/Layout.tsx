import React, { ReactNode } from 'react';
import { Grow, Paper } from '@material-ui/core';
import { useStyles } from '../../styles/Common/LayoutStyle';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
    const classes = useStyles();
    return (
        <Grow in={true} {...{ timeout: 500 }}>
            <Paper elevation={8} className={classes.paper}>
                {children}
            </Paper>
        </Grow>
    );
};

export default Layout;
