import React from 'react';
import ToDoItem from './ToDoItem';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

class ToDoList extends React.Component {
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
          <div className="ToDoList">
            <header>
              <form id="to-do-form" onSubmit={this.addItem}>
                <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
                <AddCircleOutlineIcon type="submit">Add</AddCircleOutlineIcon>
              </form>
              <p>{this.state.items.text}</p>
              
                <ToDoItem items={this.state.items} deleteItem={this.deleteItem}/>
              
            </header>
          </div>
        );
       }
      }
      
      
      export default ToDoList