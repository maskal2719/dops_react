import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperTodoList} from "./components/SuperTodoList";

export type TaskDataType = {
    id: number
    title: string
    isDone: boolean
}

function App() {

    const [tasks, setTasks] = useState<TaskDataType[]>([
        {id: 1, title: 'Html', isDone: true},
        {id: 2, title: 'Css', isDone: true},
        {id: 3, title: 'Js', isDone: false},
    ])


    return (
        <div>
            {/*<SuperButton color={'red'} callBack={() => console.log('123')}>Red supe btn </SuperButton>*/}
            {/*<SuperButton color={'secondary'} callBack={() => console.log('123')}>Without color supe btn</SuperButton>*/}
            {/*<SuperButton disabled={true} callBack={() => console.log('123')}>Disabled </SuperButton>*/}


            <SuperTodoList tasks={tasks}>
                <SuperButton color={'red'} callBack={() => console.log('123')}>Red supe btn </SuperButton>
                <SuperButton color={'secondary'} callBack={() => console.log('123')}>Without color supe btn</SuperButton>
                <SuperButton disabled={true} callBack={() => console.log('123')}>Disabled </SuperButton>
            </SuperTodoList>
                <hr/>
            <SuperTodoList tasks={tasks}>
                <SuperButton disabled={true} callBack={() => console.log('123')}>Disabled </SuperButton>
                <div>123123</div>
                <div>123123</div>
                <div>123123</div>
                <div>123123</div>
                <div>123123</div>
            </SuperTodoList>
            <hr/>
        </div>
    );
}

export default App;
