import * as React from 'react';
import { useStyles } from './styles/AppStyle';
import Layout from './components/Common/Layout';
import Question from './components/QuestionPage/Question';
import { AppPages } from './interfaces/AppPages';
import StartPage from './components/StartPage/StartPage';
import ResultPage from './components/ResultPage/ResultPage';

/**
 * Root component
 * @constructor
 */
const App = (): JSX.Element => {
    const classes = useStyles();
    const [page, setPage] = React.useState<AppPages>('start'); // Fake pagination. Don't need real for certain case
    const [result, setResult] = React.useState(0); // Overall result of quiz

    // Pagination
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
