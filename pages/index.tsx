import React from 'react';

import { Wrapper, Main, Header, Body } from '@components';
import GlobalStyle from '@styles/globalStyles';

const Home: React.FC = () => {
    return (
        <Wrapper>
            <GlobalStyle />
            <Header />
            <Main />
            <Body />
        </Wrapper>
    );
};
export default Home;
