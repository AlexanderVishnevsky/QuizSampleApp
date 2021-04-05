import { makeStyles } from '@material-ui/core';
import Preloader from '../../components/Common/Preloader';

/**
 * @see Preloader
 */
export const useStyles = makeStyles({
    skeleton: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
