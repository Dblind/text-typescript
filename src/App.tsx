import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BlockLike } from 'typescript';

const cl = console.log;


let a: number | null | string | undefined = 10;
a = undefined;

let gender: "male" | "female";
gender = "male";

let names: Array<string> = ["Ann"];
let names2: string[] = ["Bob"];


type UserType = {
  sayHello: Function,
  sayBye?: (message: string) => void,
  name: string,
  age: number,
  gender?: string,
}

let user: UserType = {
  sayHello: function(f: Boolean) { return {}},
  name: "Ann",
  age: 12,
  // condition: "have",
}

const summ: (a: number, b: number) => number = (a, b) => {
  return a + b;
}
cl(summ(2, 5));

const initialState = {
  some: null as string | null,
  num: 20,
  string: "string",
}
export type InitialStateType = typeof initialState;


const GET_TASKS = "APP/GetTasks";
type GetTasksActionType = {
  type: typeof GET_TASKS,   // <--- typeof
  id: number,
}

let action: GetTasksActionType = {
  type: GET_TASKS,
  id: 28,
}








function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
