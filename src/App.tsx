import * as React from 'react';
import { useState } from 'react';
import { useStyles } from './styles/AppStyle';
import Layout from './components/Common/Layout';
import Question from './components/QuestionPage/Question';
import { AppPages } from './interfaces/AppPages';
import StartPage from './components/StartPage/StartPage';
import ResultPage from './components/ResultPage/ResultPage';

const App = (): JSX.Element => {
    const classes = useStyles();
    const [page, setPage] = useState<AppPages>('start');
    const [result, setResult] = useState(0);

    const handleChangePage = (page: AppPages) => {
        setPage(page);
    };

    return (
        <div className={classes.layout}>
            <Layout>
                {page === 'start' && <StartPage handleChangePage={handleChangePage} />}
                {page === 'quiz' && <Question handleChangePage={handleChangePage} setResult={setResult} />}
                {page === 'result' && <ResultPage handleChangePage={handleChangePage} result={result} />}
            </Layout>
        </div>
    );
};

export default App;
