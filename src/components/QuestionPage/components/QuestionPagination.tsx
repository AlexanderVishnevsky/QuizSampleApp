import { Button, MobileStepper, useTheme } from '@material-ui/core';
import React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { useStyles } from '../../../styles/Question/QuestionPaginationStyle';
import { QuestionPaginationInterface } from '../../../interfaces/QuestionPaginationInterface';

const QuestionPagination = ({
    steps,
    activeQuestion,
    handleChangePage,
    handleNext,
    handleBack,
    questionsState,
    setResult,
}: QuestionPaginationInterface): JSX.Element => {
    const classes = useStyles();
    const theme = useTheme();

    const finishQuiz = () => {
        let a = 0;
        if (questionsState instanceof Array) {
            questionsState.map((i) => (i.isAnswerCorrect ? a++ : a));
            setResult(Math.round((a * 100) / steps));
        }

        handleChangePage('result');
    };

    return (
        <MobileStepper
            variant="text"
            steps={steps}
            position="static"
            activeStep={activeQuestion}
            className={classes.root}
            nextButton={
                steps === activeQuestion + 1 ? (
                    <Button
                        size="small"
                        onClick={finishQuiz}
                        disabled={questionsState === '' || questionsState[activeQuestion].value === ''}
                    >
                        Done
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                ) : (
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={questionsState === '' || questionsState[activeQuestion].value === ''}
                    >
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                )
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={activeQuestion === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
            }
        />
    );
};
export default QuestionPagination;
