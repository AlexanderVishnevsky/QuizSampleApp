import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { BasicTypes } from '../../../interfaces/BasicTypes';
import { useStyles } from '../../../styles/Question/QuestionBodyStyle';
import * as React from 'react';
import { QuestionBodyInterface } from '../../../interfaces/QuestionBodyInterface';

const QuestionBody = ({
    answers,
    questionsState,
    activeQuestion,
    handleChoseAnswer,
}: QuestionBodyInterface): JSX.Element => {
    const classes = useStyles();

    return (
        <FormControl component="div" className={classes.root}>
            <RadioGroup
                aria-label="question"
                name="question"
                value={questionsState !== '' ? questionsState[activeQuestion].value : ''}
                onChange={handleChoseAnswer}
            >
                {answers.map((item: BasicTypes, index: number) => (
                    <FormControlLabel key={index} value={item} control={<Radio />} label={item} />
                ))}
            </RadioGroup>
        </FormControl>
    );
};
export default QuestionBody;
