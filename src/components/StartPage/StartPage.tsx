import { Button, Typography } from '@material-ui/core';
import { PlayArrowOutlined } from '@material-ui/icons';
import { AppPages } from '../../interfaces/AppPages';

const StartPage = ({ handleChangePage }: { handleChangePage: (page: AppPages) => void }): JSX.Element => {
    return (
        <>
            <Typography variant={'h4'}>Welcome to QUIZ</Typography>
            <Typography variant={'h6'} color={'primary'}>
                Press start to play
            </Typography>
            <Button
                variant={'outlined'}
                color={'primary'}
                endIcon={<PlayArrowOutlined />}
                fullWidth
                size={'large'}
                onClick={() => handleChangePage('quiz')}
            >
                Play
            </Button>
        </>
    );
};
export default StartPage;
