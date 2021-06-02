import React , {useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri' ;
import {TiEdit} from 'react-icons/ti';
import { AiOutlineDelete } from 'react-icons/ai';
import TodoForm from './TodoForm';



function Todo(props) {
    const [state, setstate] = useState({
        id:null,
        value:''
    }
    
    );

    const submit_update = (value)=>{
        props.update_note(state.id,value)
        setstate({
            id:null,
        value:''

        });
    };
    if (state.id)
    {return <TodoForm      edit={state} onSubmit={submit_update}/>}


    
    return props.Notes.map((one_note,index) =>(
        <div className={one_note.Done ?'todo-row complete' :'todo-row'} key={index}>
            
            <div key={one_note.id} >
                {one_note.text}
                {one_note.id}

            </div>

            <div className = 'icons'>
            <RiCloseCircleLine
            className ='delete-icon'
            onClick={()=>props.remove_note(one_note.id)}
            />
            
             <TiEdit
             className ='edit-icon'
             onClick={()=>setstate({value : one_note.text , id: one_note.id  })}
             />
            
                {one_note.Done? <AiOutlineDelete 
             onClick={()=>props.remove_all(one_note.id)}/> : ''}

            

             

             <input key={one_note.id} type="checkbox"  onClick={()=>props.completed(one_note.id)}  defaultChecked={one_note.Done ?true :false}/>
            </div>
        </div>

    )

    ) 
       
};

export default Todo
