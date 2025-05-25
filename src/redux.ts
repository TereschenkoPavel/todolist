import { Task } from './types.ts';
import { configureStore , createSlice } from '@reduxjs/toolkit'

const initialState:{todos:Task[]} = {todos:[]};

export const todosSlice = createSlice({
  name:'todos',
  initialState,
  reducers: {
    todoCheck(state:{todos:Task[]}, action){
       const matchingTodo = state.todos.find(
          (todo) => todo.taskid == action.payload
        )
        if (matchingTodo) {
          matchingTodo.done = !matchingTodo.done;
        }
    }
    },
    todoAdd(state:{todos:Task[]},action){
      state.todos.push(new Task
        (action.payload,
          state.todos.reduce((maxId,todo)=>
          Math.max(todo.taskid,maxId),-1) + 1
        ))
    },
    todoEdit(state:{todos:Task[]},action){
      const {id,text} = action.payload;
      const matchingTodo = state.todos.find(
          (todo) => todo.taskid == id
        )
      if (matchingTodo){
        matchingTodo.text = text;
      }
    },
    todoDelete(state:{todos:Task[]},action){
      state.todos = state.todos.filter((todo) => todo.taskid != action.payload)
    }
  }
})
export const {todoAdd,todoCheck,todoDelete,todoEdit} = todosSlice.actions;
export const store = configureStore({
  reducer: todosSlice.reducer})

