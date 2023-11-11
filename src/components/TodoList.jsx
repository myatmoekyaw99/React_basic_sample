import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function TodoList(){

    const {todoList,setTodoList} = useContext(ThemeContext);

    const [todo,setTodo] = useState('');
    const [searchList,setSearchList] = useState([]);
    const todoArr = [];
    let tdlist = document.getElementById('tdlist');
    let add = document.getElementById('todo-add');

    function handleAdd(e){
        if(add.value !== ''){
            tdlist.style.display = 'block';
            setTodoList([...todoList,todo]);
            // console.log(todoArr);
            setTodo('');
            setSearchList([]);
        }else{
            alert("Input is empty!");
        }
    }

    function handleDelete(data){
        let newArr = todoList.filter(val => val !== data);
        let newSearchArr = todoArr.filter(val => val !== data);
        setTodoList(newArr);
        setSearchList(newSearchArr);
    }

    function handleSearch(data){

        todoList.forEach((val) =>{
            
            if(val.indexOf(data) !== -1){
                todoArr.push(val);
            }
        });

        if(todoArr.length !== 0){
            setSearchList(todoArr);
        }
    }

    return (
        <div className="todo-section">
            <input type="text" id="search" name="search" className="todo-input" placeholder="Search todo" onChange={(e)=>handleSearch(e.target.value)}/> <br></br>
            <input type="text" id="todo-add" name="todo-add" className="todo-input" placeholder="Enter your new todo" value={todo} onChange={(e)=>setTodo(e.target.value)}/><br></br>
            <button className="todo-add-btn" onClick={handleAdd}>Add Todo</button>
 
            <div className="show-todo-lists">
                <h2 className="todo-header">Your Todo Lists</h2>
                <ol className="todo-ol-list" id="tdlist">
                {
                    searchList.length > 0  ? searchList.map((data ,id) => <li className="todo-list" key={id}><strong id="list-word">{data}</strong><i className="fa-solid fa-trash" id="todo-icon" onClick={()=>handleDelete(data)}></i></li>) :
                    todoList.map((data ,id) =>
                        <li className="todo-list" key={id}><strong id="list-word">{data}</strong><i className="fa-solid fa-trash" id="todo-icon" onClick={()=>handleDelete(data)}></i></li>
                    ) 
                }
                </ol>
            </div>
        </div>  
    );
}

export default TodoList;