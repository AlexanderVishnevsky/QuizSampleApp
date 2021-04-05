import { BasicTypes } from './BasicTypes';
import * as React from 'react';
import { QuestionsStateType } from './QuestionsStateType';

export interface QuestionBodyInterface {
    answers: Array<BasicTypes>;
    questionsState: QuestionsStateType;
    activeQuestion: number;
    handleChoseAnswer: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
