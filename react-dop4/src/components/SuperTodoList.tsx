import React, {FC} from 'react';
import {TaskDataType} from "../App";

type SuperTodoListPropsType = {
    tasks: Array<TaskDataType>
    children?: React.ReactNode
}

export const SuperTodoList: FC<SuperTodoListPropsType> = ({tasks, children, ...otherProps}) => {
    return (
        <div>
            <ul>
                {tasks.map(el => <li key={el.id}>
                    <span>{el.id}. </span>
                    <span>{el.title}</span>
                    <input checked={el.isDone} type="checkbox"/>
                </li>)}
            </ul>
            {children}
        </div>
    );
};