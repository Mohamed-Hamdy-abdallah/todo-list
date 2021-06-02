import React , {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [state, setState] = useState( [] );

    const AddNote = note=>
    {
        if (note.text === '' || /^\s*$/.test(note.text) ){
            alert ("Note shoulden't be empty ");
            return ;
            
        }

          
          setState([note , ...state] );
          console.log(...state);

    }

    
    const completed = id => {
       
        let updatedList = state.map(note => {
          if (note.id === id) {
            
            note.Done = !note.Done;
          }
          return note;
        });
        setState(updatedList);
      };

      const removing =(id)=>{
        setState(state.filter(pro=>pro.id != id))

      }

      const remove_all =(id)=>
      {
        setState(
          state.filter(
            pro=>(pro.id != id && !pro.Done)

          
          )
        )


      }

      const update_note =(id , value)=>{
        if (value.text === '' || /^\s*$/.test(value.text) ){
          alert ("Note shoulden't be empty ");
          return ;
          
      }
      setState(prev => prev.map(item=> item.id===id ?value : item ))


      }
    
    
    return (
        <div>
            <h1>Hello , what do u think to do today !</h1>
            <TodoForm onSubmit = {AddNote} />
            <Todo Notes={state} completed={completed} remove_note={removing} remove_all={remove_all} update_note={update_note}/>
        </div>
    )
}

export default TodoList
