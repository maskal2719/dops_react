import React from 'react';

type SuperButtonPropsType = {
    name: string
    callBack: () => void
}

const SuperButton = (props: SuperButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default SuperButton;