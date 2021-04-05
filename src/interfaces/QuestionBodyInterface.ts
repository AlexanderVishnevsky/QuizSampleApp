import { BasicTypes } from './BasicTypes';
import * as React from 'react';

export interface QuestionBodyInterface {
    answers: Array<BasicTypes>;
    questionsState: { id: number; value: BasicTypes }[] | '';
    activeQuestion: number;
    handleChoseAnswer: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
