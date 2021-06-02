import React ,{useState} from 'react'

function TodoForm(props) {
    const [state, setState] = useState('');
   
    const click =(event)=>{ 
        event.preventDefault();

        props.onSubmit({
            text:state,
            id :Math.floor(Math.random()*1000),
           // Done : false
        });
        setState('');

    }



    return (
        <form onSubmit={click} className="todo-form">
        <input 
        type='text' placeholder="Write your note here !" 
        name='text'
        value ={state}
        onChange={event => setState(event.target.value)}
        className="todo-input"
        />
        <button className ="todo-button">Submit</button>
      
      </form>
    )
}

export default TodoForm
