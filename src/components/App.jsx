import React from 'react';
import Main from './layout/main/Main';
import Header from './layout/header/Header';
import Projects from '../pages/Projects';

const App = () => {
    return (
        <div className='app__container'>
            <Header />
            <Main>
                <Projects />
            </Main>
        </div>
    );
};

export default App;
