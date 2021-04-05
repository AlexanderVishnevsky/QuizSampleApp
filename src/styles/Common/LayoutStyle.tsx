import { makeStyles } from '@material-ui/core';
import Layout from '../../components/Common/Layout';

/**
 * @see Layout
 */
export const useStyles = makeStyles({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        padding: '30px',
        width: '30vw',
        height: '60vh',
    },
});
