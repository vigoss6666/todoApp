import react , {useState} from 'react'; 


export default function Todo({todoList, ondelete, addCompleted}){
  const todoTemplate = todoList.map(val => {
    return <li key = {val.id}>
       <div style = {styles.listStyle}>
       <input type = 'checkbox' data-testid="cbShowHide" style = {{marginRight:'20px'}} defaultChecked = {val.checked} onChange = {() => addCompleted(val.id)}/>
       <h2 style = {{marginRight:'10px'}}>{val.task}</h2>
       <button style = {styles.xStyle} onClick = {() => ondelete(val.id)}>x</button>
       </div>
       </li>
  })
     return ( 
         <div style = {styles.main}>
          <ul style = {{listStyleType:'none'}}>
            {todoTemplate}
            </ul>         
            </div>
     )
}

const styles = {
    main:{
      alignSelf:'center',
    },
    listStyle:{
      display:'flex', 
      flexDirection:'row',
      alignItems:'center',
    },
    buttonStyle:{
      display:'flex', 
      flex:0.5,
      height:'30px',
      justifyContent:'center', 
      alignItems:'center'
    },
    xStyle:{
      marginleft:'10px'
    }
}