import React from 'react';
import {JumbotronContainer} from "../containers/jumbotron";
import {FaqsContainer} from "../containers/faq";
import {FooterContainer} from "../containers/footer";

const Home = () => {
    return (
        <>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    );
};

export default Home;