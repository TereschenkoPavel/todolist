import {Action} from 'redux'
import {store} from './redux'

export class Task{
    taskid:number;
    text:string;
    done:boolean;
    constructor(text:string, id:number){
      this.text = text;
      this.taskid=id;
      this.done = false;
    }
  }
  
export class PayloadAction implements Action{
public readonly type:string;
public readonly payload:string|number|[number,string];
constructor(type:string, payload:string|number|[number,string]) 
    {
    this.type=type;
    this.payload=payload;
    }
}
  
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch