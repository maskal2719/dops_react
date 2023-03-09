import React, {FC} from 'react';
import s from './SuperButton.module.css'

type SuperButtonPropsType = {

    callBack: () => void
    color?: string
    children: React.ReactNode
    size?: string
    disabled?: boolean
}

export const SuperButton: FC<SuperButtonPropsType> = (props) => {
//FC<PropsType> - children
    const {callBack, color, children, disabled, ...otherProps} = props // вынесли пропсы в переменную


    const onClickHandler = () => {
        callBack()
    }

    const finalClassName = `${s.button} 
                            ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
                            ${disabled ? s.disabled : s.default}
                            `

    return (
        <button className={finalClassName} onClick={onClickHandler}>{children}</button>
    );
};
//
// const finalClassName = s.button
// + (disabled
//         ? ...
//         : xType === 'red'
//             ? ...
// + (className ? ' ' + className : '') // задачка на смешивание классов

