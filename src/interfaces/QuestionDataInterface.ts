import { BasicTypes } from './BasicTypes';

export interface QuestionDataInterface {
    id: number;
    questionTitle: string;
    answers: string[] | number[];
    correctAnswer: BasicTypes;
}
