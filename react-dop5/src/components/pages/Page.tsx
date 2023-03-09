import React, {FC} from 'react';
import {PagesType} from "../data/dataState";
import {useParams} from "react-router-dom";
type PagePropsType = {
    pages: Array<PagesType>
}

export const Page:FC<PagePropsType> = ({pages}) => {

    const params = useParams()
    console.log(Number(params.id))

    return (
        <div>
            <div>{pages[Number(params.id)].heading}</div>
            <div>{pages[Number(params.id)].about}</div>
        </div>
    );
};

