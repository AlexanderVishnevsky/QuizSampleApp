import QuestionHeader from './components/QuestionHeader';
import { QuestionData } from '../../data/QuestionData';
import QuestionBody from './components/QuestionBody';
import QuestionPagination from './components/QuestionPagination';
import * as React from 'react';
import { AppPages } from '../../interfaces/AppPages';
import Preloader from '../Common/Preloader';
import { BasicTypes } from '../../interfaces/BasicTypes';
import { useStyles } from '../../styles/Question/QuestionStyle';
import { QuestionsStateType } from '../../interfaces/QuestionsStateType';

/**
 * Page with quiz
 * @param handleChangePage
 * @param setResult
 * @constructor
 */
const Question = ({
    handleChangePage,
    setResult,
}: {
    handleChangePage: (page: AppPages) => void;
    setResult: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element => {
    const classes = useStyles();
    const [activeQuestion, setActiveQuestion] = React.useState(0); // Current active question

    const [loading, setLoading] = React.useState(true); // State for loader

    const [questionsState, setQuestionsState] = React.useState<QuestionsStateType>(''); // Whole answers state

    const timer = React.useRef<number>();

    // Simulating DB delay
    React.useEffect(() => {
        if (loading) {
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, []);

    // Simulating querying Data from external resource
    React.useEffect(() => {
        try {
            if (QuestionData instanceof Array) {
                // Dynamic Array fill
                const newArray = new Array(QuestionData.length)
                    .fill({ id: 0, value: '' })
                    .map((value, idx) => ({ ...value, id: idx }));

                setQuestionsState(newArray);
            }
        } catch (e) {
            console.error(`Can't load data properly`);
        }
    }, []);

    // Switch to next question
    const handleNext = () => {
        if (!loading && questionsState instanceof Array && questionsState[activeQuestion + 1].value === '') {
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
        setActiveQuestion((prevActiveQuestion) => prevActiveQuestion + 1);
    };

    // Move back to previous question
    const handleBack = () => {
        setActiveQuestion((prevActiveQuestion) => prevActiveQuestion - 1);
    };

    // Write chosen answer to the state
    const handleChoseAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (questionsState instanceof Array) {
            const data = [...questionsState];
            // Check if the answer is correct
            const isCorrect = (event.target as HTMLInputElement).value === QuestionData[activeQuestion].correctAnswer;
            data[activeQuestion] = {
                ...data[activeQuestion],
                value: (event.target as HTMLInputElement).value,
                isAnswerCorrect: isCorrect,
            };
            setQuestionsState(data);
        }
    };

    return (
        <>
            {loading ? (
                <Preloader />
            ) : (
                <>
                    <QuestionHeader title={QuestionData[activeQuestion].questionTitle} />
                    <div className={classes.scrollableDiv}>
                        <QuestionBody
                            answers={QuestionData[activeQuestion].answers}
                            questionsState={questionsState}
                            activeQuestion={activeQuestion}
                            handleChoseAnswer={handleChoseAnswer}
                        />
                    </div>
                    <QuestionPagination
                        steps={QuestionData.length}
                        activeQuestion={activeQuestion}
                        handleChangePage={handleChangePage}
                        handleNext={handleNext}
                        handleBack={handleBack}
                        questionsState={questionsState}
                        setResult={setResult}
                    />
                </>
            )}
        </>
    );
};
export default Question;
