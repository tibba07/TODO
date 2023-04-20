

// import './App.css'
// import { useEffect, useState } from "react"
// import NewItem from './components/NewItem/NewItem'
// import TodoList from './components/TodoList/TodoList'
// import { nanoid } from 'nanoid';
// const DEFAULT_LIST=[{
//   title:'study JS',
//   priority:'high',
//   id:nanoid()
// },
// {
//   title:'study CSS',
//   priority:'low',
//   id:nanoid()
// },
// {
//   title:'study React',
//   priority:'medium',
//   id:nanoid()
// }]

// const App = () => {

//   const[list,setList] = useState(DEFAULT_LIST)
//   const[editState,setEditState]=useState({})
//  useEffect(()=>
//  {
//   fetch('http://localhost:3000/api/v1/list').then((res)=>{
//     res.json().then((json)=>{
//       setList(json)
//     })
//   }).catch(()=>{
//     console.log("NETWORK ERROR")
//   })
//  },[])
//     const deleteItem = (id) =>{
//        const filteredList = list.filter((item)=> item.id != id)
//         setList([...filteredList])
//     }
//     const triggerEdit=(item)=>
//     {
//       setEditState(item)
//     }
//     const editItem=(updatedItem)=>
//     {
//       const updatedList=list.map((item)=>
//      (item.id===updatedItem.id)?updatedItem:item)
//         setList([...updatedList])
//       }

    
//     const addItem=(item)=>{
//       item.id=nanoid();
//       setList((prev)=>[item, ...prev])
//       fetch('http://localhost:3000/api/v1/list',{
//         method:'POST',
//         headers:{
//             'Accept':'application/json, text/plain,*/*',
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(item)
      
//     }).then((res)=>{
//         setList(json)
//     }).catch(()=>{
//       console.log("NETWORK ERROR")
//     })
  
// };
// return (
//   <>
//   <div className='app'>
//  <h1 className='title'>Todo List</h1>
//  <NewItem addItem={addItem} editState={editState}  editItem={editItem}/>
//  <TodoList list={list} deleteItem={deleteItem} triggerEdit={triggerEdit}/>
//  </div>
//  </>
// );
// }

// export default App;


// import './App.css';
// import Todo from './components/TodoList/TodoList';
// import Newitem from './components/NewItem/NewItem';
// import{useEffect, useState}from "react";
// import {nanoid} from "nanoid";

// import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

//  const App=()=> {
//   const[list,setList]=useState([])
//   const [editState,setEditState]=useState({})

//   useEffect(()=>{
//     fetch('http://localhost:3000/api/v1/list').then((res)=>{
//       res.json().then((json)=>{
//         setList(json)
//          }) 
//         })
//         .catch(()=>{
//           console.log('network error!!')
//         })
//   },[]  )

  
//   const addItem=(item)=>{
//     item.id=nanoid()

//     // setList((prev)=>[item, ...prev])
//     fetch('http://localhost:3000/api/v1/list',{
//     method:'POST',
//     headers:{
//     'Accept':'application/json,text/plain,*/*',
//     'Content-Type':'application/json'
//     },
//     body: JSON.stringify(item)
     
//   }).then(()=>{
   
//       setList((prev)=>[item, ...prev])
//       toast.success('added successfully')
//     })
  
// }
// const deleteItem=(id)=>{
  

//   // setList((prev)=>[item, ...prev])
//   fetch(`http://localhost:3000/api/v1/list/${id}`,{
//   method:'DELETE',
//   headers:{
//   'Accept':'application/json,text/plain,*/*',
//   'Content-Type':'application/json'
//   },
//   // body: JSON.stringify(item)
   
// }).then(()=>{
 
//   const filteredList=list.filter((item)=> item.id!==id)
//   setList([...filteredList])
//     toast.error('deleted successfully')
//   })

// }
//   const triggerEdit=(item)=>{
    
//       setEditState(item)
//   }

//   const editItem=(updatedItem)=>{
//       const updatedList =  list.map((item)=>
//            item.id===updatedItem.id?updatedItem:item)
//            setList([...updatedList])

//   }

  
//     return (
//     <div className="app">
//     <h1 className="title">TodoList</h1>
//      <Newitem addItem={addItem} editState={editState}  editItem={editItem}/>
//      <Todo  list={list} deleteItem={deleteItem} triggerEdit={triggerEdit}/> 
//    </div>
//   )
  
// }

// export default App


import { useEffect, useState } from "react";
import "./App.css";
import NewItem from "./components/NewItem/NewItem";
import TodoList from "./components/TodoList/TodoList";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const App = () => {
  const [list, setList] = useState([]);
  const [editState, setEditState] = useState({});

  useEffect(() => {
    fetch("http://localhost:3002/api/v2/todo")
      .then((res) => {
        res.json().then((json) => {
          console.log(json);
          setList(json.data);
        });
      })
      .catch(() => {
        console.log("Network Error!");
      });
  }, []);

  const deleteItem = (id) => {
    fetch(`http://localhost:3002/api/v2/todo/${id}` ,{
      method  :'DELETE',
      headers :{
        'Accept' : 'application/json ,text/plain ,*/*',
        'Content-Type': 'application/json'
      },
    }).then((res)=>{
      res.json().then((json)=>{
        console.log(json)
        const filteredList = list.filter((item) => item.id !== id)
        setList([...filteredList])
        toast.error("Deleted Successfully");
      })
    })
    
  };

  const triggerEdit = (item) => {
    setEditState(item);
  };

  const editItem = (updatedItem) => {
    const updatedList = list.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setList([...updatedList]);
  };

  const addItem = (item) => {
    item.id = nanoid();
    fetch("http://localhost:3002/api/v2/todo", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then(() => {
     
        setList((prev) => [json.data, ...prev]);
      
      
      toast.success("Added successfully!");
    });
  };

  return (
    <div className="app">
      <h1 className="title">Todo List</h1>
      <NewItem addItem={addItem} editState={editState} editItem={editItem} />
      <TodoList list={list} deleteItem={deleteItem} triggerEdit={triggerEdit} />
    </div>
  );
};

export default App;
