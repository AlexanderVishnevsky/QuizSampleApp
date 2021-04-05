import { AppPages } from './AppPages';
import { BasicTypes } from './BasicTypes';
import React from 'react';

export interface QuestionPaginationInterface {
    steps: number;
    activeQuestion: number;
    handleChangePage: (page: AppPages) => void;
    handleNext: () => void;
    handleBack: () => void;
    questionsState: { id: number; value: BasicTypes; isAnswerCorrect: boolean }[] | '';
    setResult: React.Dispatch<React.SetStateAction<number>>;
}
