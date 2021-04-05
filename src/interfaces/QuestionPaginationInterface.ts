import { AppPages } from './AppPages';
import React from 'react';
import { QuestionsStateType } from './QuestionsStateType';

export interface QuestionPaginationInterface {
    steps: number;
    activeQuestion: number;
    handleChangePage: (page: AppPages) => void;
    handleNext: () => void;
    handleBack: () => void;
    questionsState: QuestionsStateType;
    setResult: React.Dispatch<React.SetStateAction<number>>;
}
