import { makeStyles } from '@material-ui/core';
import Question from '../../components/QuestionPage/Question';

/**
 * @see Question
 */
export const useStyles = makeStyles({
    scrollableDiv: {
        marginTop: '10px',
        height: 'calc(100% - 10px)',
        overflowY: 'auto',
        width: '100%',
    },
});
