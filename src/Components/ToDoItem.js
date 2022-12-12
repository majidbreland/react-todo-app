import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';


function ToDoItem(props) {
    return (
    <div key="{props.item.id}" className="todo-item row justify-content-center">
        <div className="col-lg-4">
            <div className="input-group mb-3">
                <div className="input-group-text">
                    <input onChange={()=> props.markDone(props.item.id)} className='form-check-input  mt-0' type='checkbox' checked={props.item.completed}/>
                </div>
                    { 
                    props.item.completed ? 
                    <input 
                        className={props.item.completed ? 'complete form-control' : ''} 
                        defaultValue={props.item.text} 
                        readOnly></input> 
                    : <input onChange={()=> props.updateTask(props.item.id)} 
                        className="form-control" 
                        type="text" 
                        defaultValue={props.item.text}></input>
                    }
       
                <button onClick={() => props.deleteTask(props.item.id)} className='btn btn-danger'> <FontAwesomeIcon icon={faTrashCan}/></button>
            </div>

        </div>


    </div>
    )
}

export default ToDoItem;