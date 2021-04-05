import { BasicTypes } from './BasicTypes';

export type QuestionsStateType = Array<{ id: number; value: BasicTypes; isAnswerCorrect: boolean }> | '';
