import { useState } from "react"
import TodoListItem from "./TodoListItem/TodoListItem"

const Todolist=(props)=>{
    const {list , deleteItem, triggerEdit} = props
    if(list.length <=0 ){
        return(
            <center>No item to display!</center>
        )
    }
    return(
        <>
        {list.map((item, index)=>
        <TodoListItem 
        key={index} 
        item={item} 
        index= {index} 
        onDelete={deleteItem}
        onEdit={triggerEdit}
        />)}
        </> 
    )
}
export default Todolist