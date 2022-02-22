import {useState} from 'react'; 
import Todo from './Todo'; 



function App(props) {
  const [todoList,setTodoList] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);  
  

const _deleteTodo = (id) => {
    const copy = todoList.concat();  
    const filtered = copy.filter(val => val.id !== id); 
    setTodoList(filtered); 

  }
  const addCompleted = (id) => {
    const copy = todoList.concat();
    let todoIndex = copy.findIndex(val => val.id === id);
    copy[todoIndex].checked = true;
    setTodoList(copy);  
  }

   const _addTodo = () => {
    if(input.length < 1){
      setError(true); 
      return; 
    }
    setError(false);  
    let copy = todoList.concat(); 
    copy.push({task:input,checked:false, id:Math.floor(Math.random() * 100)})
    setTodoList(copy)
  }

  return (
    <div style = {styles.mainHeader}> 
    <h1 style = {styles.header}>Todo List </h1>
    <h3 style = {styles.header}>Tasks</h3>
    <input style = {styles.input} value = {input} onChange = {(e) => setInput(e.target.value)}/>
    <button style = {styles.addButton} onClick = {() => _addTodo()}> <span>Add todo</span></button>
    {error ? <h6 style = {styles.error} data-testid="error">Todo length should be more than 1</h6>:null}
    <Todo todoList = {todoList} ondelete = {_deleteTodo} addCompleted = {addCompleted}/>
    </div>
  );
}


const styles = {
  mainHeader:{
    display:'flex',
    flexDirection:'column' 
    }, 
  header:{
    alignSelf: 'center',
  },
  input:{
    height:'30px', 
    width:'200px',
    alignSelf: 'center',
  },
  addButton:{
    height:'30px', 
    width:'210px',
    alignSelf: 'center',
    marginTop:'10px'
  },
  error:{
   alignSelf:'center', 
   color:'red' 
  }

}

export default App;
