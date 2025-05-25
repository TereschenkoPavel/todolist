import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {store} from './redux.ts'
import {TodoList, Inputs} from './components.tsx'

const root = ReactDOM.createRoot(document.getElementById('root') as ReactDOM.Container)
root.render(
  <Provider store={store}>
    <Inputs/>
    <TodoList/>
  </Provider>,
)

