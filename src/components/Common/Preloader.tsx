import { Skeleton } from '@material-ui/core';
import * as React from 'react';
import { useStyles } from '../../styles/Common/PreloaderStyle';

const Preloader = (): JSX.Element => {
    const classes = useStyles();
    return (
        <>
            <Skeleton variant={'rectangular'} width={'100%'} height={'20%'} />
            <Skeleton variant={'text'} width={'80%'} height={'10%'} />
            <Skeleton variant={'text'} width={'80%'} height={'10%'} />
            <Skeleton variant={'text'} width={'80%'} height={'10%'} />
            <div className={classes.skeleton}>
                <Skeleton variant={'text'} width={'20%'} height={40} />
                <Skeleton variant={'circular'} width={24} height={24} />
                <Skeleton variant={'text'} width={'20%'} height={40} />
            </div>
        </>
    );
};

export default Preloader;
