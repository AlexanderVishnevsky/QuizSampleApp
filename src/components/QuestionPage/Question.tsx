import QuestionHeader from './components/QuestionHeader';
import { QuestionData } from '../../data/QuestionData';
import QuestionBody from './components/QuestionBody';
import QuestionPagination from './components/QuestionPagination';
import * as React from 'react';
import { AppPages } from '../../interfaces/AppPages';
import Preloader from '../Common/Preloader';
import { BasicTypes } from '../../interfaces/BasicTypes';
import { useStyles } from '../../styles/Question/QuestionStyle';

const Question = ({
    handleChangePage,
    setResult,
}: {
    handleChangePage: (page: AppPages) => void;
    setResult: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element => {
    const classes = useStyles();
    const [activeQuestion, setActiveQuestion] = React.useState(0);

    const [loading, setLoading] = React.useState(true);

    const [questionsState, setQuestionsState] = React.useState<
        Array<{ id: number; value: BasicTypes; isAnswerCorrect: boolean }> | ''
    >('');

    const timer = React.useRef<number>();

    React.useEffect(() => {
        if (loading) {
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, []);

    React.useEffect(() => {
        try {
            if (QuestionData instanceof Array) {
                const newArray = new Array(QuestionData.length)
                    .fill({ id: 0, value: '' })
                    .map((value, idx) => ({ ...value, id: idx }));

                setQuestionsState(newArray);
            }
        } catch (e) {
            console.error(`Can't load data properly`);
        }
    }, []);

    const handleNext = () => {
        debugger;
        if (!loading && questionsState instanceof Array && questionsState[activeQuestion + 1].value === '') {
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
        setActiveQuestion((prevActiveQuestion) => prevActiveQuestion + 1);
    };

    const handleBack = () => {
        setActiveQuestion((prevActiveQuestion) => prevActiveQuestion - 1);
    };

    const handleChoseAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (questionsState instanceof Array) {
            const temp = [...questionsState];
            const isCorrect = (event.target as HTMLInputElement).value === QuestionData[activeQuestion].correctAnswer;
            temp[activeQuestion] = {
                ...temp[activeQuestion],
                value: (event.target as HTMLInputElement).value,
                isAnswerCorrect: isCorrect,
            };
            setQuestionsState(temp);
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
