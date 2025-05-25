import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {Task, RootState, AppDispatch } from './types';
import {todoAdd,todoCheck,todoDelete,todoEdit} from './redux.ts'
import React, { useState, } from 'react';


export function TodoList(){
    const todos:Task[] = useSelector<RootState, Task[]>((state:RootState) => state.todos, shallowEqual)
    const dispatch:AppDispatch = useDispatch<AppDispatch>()
    return(
    <div id='todolist'>
      {
          todos.map(
              (task:Task)=>{
                return(
                    <div className='task'>
                    <input type="checkbox" onChange={()=>dispatch(todoCheck(task.taskid))} checked={task.done} />
                    <input type="text" className={task.done?'crossed':''} disabled={true} value={task.text} 
                        onBlur={()=>{
                            var textbox = (document.getElementById(task.taskid.toString()) as HTMLInputElement)
                            textbox.disabled = true;
                        }
                        }id={task.taskid.toString()} 
                        onChange={(e)=>{
                            var input = (document.getElementById(task.taskid.toString()) as HTMLInputElement).value
                            dispatch(todoEdit({id:task.taskid,text:input}))
                        }
                        }/>
                    <button onClick={()=>{
                        const textbox = document.getElementById(task.taskid.toString()) as HTMLInputElement 
                         textbox.disabled = false;
                        textbox?.focus();
                    }}>edit</button>
                    <button onClick={()=>dispatch(todoDelete(task.taskid))}>delete</button>
                </div>)
            }
        )
    }
    </div>
    )
}
export function Inputs(){
    const dispatch:AppDispatch = useDispatch<AppDispatch>()
    const [text, setText] = useState('')
    return(
    <div id="inp">
        <input id="taskinp" type="text" placeholder="Enter task name" value={text} onChange={(e)=>{setText(e.target.value)}}/>
        <button id="add" onClick={()=>dispatch(todoAdd(text))} >Add</button>
    </div>)
}