import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Workout from './Workouts';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';


class WorkoutTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [],
        currentItem: {
            text: '',
            key: ''
        }
    }

    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
}
addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
}
handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })
}    
  render(){
    return (
      <TableContainer component={Paper} >
      <div className="ToDoList">
        <header>
        <h1>Fitness Tracker</h1>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input className
              type="text" 
              placeholder="Add your workout here!" 
              value={this.state.currentItem.text} 
              name="toDo" 
              onChange={this.handleInput}
             />
            <AddCircleOutlineIcon style={{ color: "black" }}
            type="submit"
            onClick={this.addItem}
            >Add</AddCircleOutlineIcon>
          </form>
          <p>{this.state.items.text}</p>
          
            <Workout items={this.state.items} deleteItem={this.deleteItem}/>
          
        </header>
      </div>
      </TableContainer>
    );
   }
  }
  
  
  export default WorkoutTracker;