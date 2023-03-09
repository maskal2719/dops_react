import React, {FC} from 'react';

type SuperButtonPropsType = {
    title: string
    callback: () => void
}


const SuperButton: FC<SuperButtonPropsType> = ({title, callback}) => {

    const onClickHandler = () => {
        callback();
    }

    return (
        <button onClick={onClickHandler}>{title}</button>
    );
};

export default SuperButton;