import { Typography } from '@material-ui/core';

const QuestionHeader = ({ title }: { title: string }): JSX.Element => {
    return <Typography variant={'h5'}>{title}</Typography>;
};
export default QuestionHeader;
