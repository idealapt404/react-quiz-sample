import React, { ReactNode } from 'react';
import Header from './Header';
import { useQuiz } from '../contexts/QuizContext';
import Main from './Main';
import { StateType } from '../state/reducer';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import StartScreen from './StartScreen';
import Progress from './Progress';
import Question from './Question';
import Footer from './Footer';
import Timer from './Timer';
import NextButton from './NextButton';
import FinishScreen from './FinishScreen';

export type ParentProps = {
  children: ReactNode;
}

function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === StateType.LOADING && <Loader />}
        {status === StateType.ERROR && <ErrorMessage />}
        {status === StateType.READY && <StartScreen />}
        {status === StateType.ACTIVE && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === StateType.FINISHED && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
