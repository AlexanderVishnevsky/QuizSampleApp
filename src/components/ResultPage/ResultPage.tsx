import { Button, Typography } from '@material-ui/core';
import { SettingsBackupRestoreOutlined } from '@material-ui/icons';
import { AppPages } from '../../interfaces/AppPages';

const ResultPage = ({
    handleChangePage,
    result,
}: {
    handleChangePage: (page: AppPages) => void;
    result: number;
}): JSX.Element => {
    const resultText = (): string => {
        if (result >= 75) {
            return 'Well done 🥳';
        } else if (result <= 75 && result >= 50) {
            return 'Not bad, but could do it better 🙄';
        } else return 'You should to prepare better 🧐';
    };

    return (
        <>
            <Typography variant={'h5'}>{resultText()}</Typography>
            <Typography variant={'h6'} color={'primary'}>
                Your rating is <b>{result}%</b>
            </Typography>
            <Button
                variant={'outlined'}
                color={'primary'}
                endIcon={<SettingsBackupRestoreOutlined />}
                fullWidth
                size={'large'}
                onClick={() => handleChangePage('start')}
            >
                Try Again
            </Button>
        </>
    );
};
export default ResultPage;
