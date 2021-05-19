import React, {useEffect, useState} from 'react';
import useContentListener from "../hooks/use-content-listener";
import SelectionFilter from "../utils/selection-filter";
import {BrowseContainer} from "../containers/browse";

const Browse = () => {

    const {series} = useContentListener('series');
    const {films} = useContentListener('films');
    const slides = SelectionFilter({series, films})


    return <BrowseContainer slides={slides}/>
};

export default Browse;