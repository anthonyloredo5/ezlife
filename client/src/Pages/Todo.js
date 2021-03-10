import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Container from "../components/Container"; 
import Row from "../components/Row"; 
import Col from "../components/Col"; 
import DeleteBtn from "../components/DeleteBtn";
import HomeBtn from "../components/HomeBtn"; 

import { Input, TextArea, FormBtn } from "../components/Form"; 


function Todos() {
  // Setting our component's initial state
  const [todos, setTodos] = useState([])
  const [formObject, setFormObject] = useState({
    title:"", 
    todoNote: ""
  })

  // Load all todos and store them with setBooks
  useEffect(() => {
    loadTodos()
  }, [])

  // Loads all todos and sets them to todos
  function loadTodos() {
    API.getTodos()
      .then(res => 
        setTodos(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteTodo(id) { 
    API.deleteTodo(id)
    .then(res => loadTodos)
    .catch(err => console.log(err));
  }

  function handleInputChange(event) { 
    const { name, value } = event.target; 
    setFormObject({...formObject, [name]: value})
  }; 
  
  function handleFormSubmit(event) { 
    console.log("trying to add todo")
    event.preventDefault(); 
    if(formObject.title && formObject.todoNote) { 
      API.saveTodo({
        title: formObject.title, 
        todoNote: formObject.todoNote
      })
      .then(() => setFormObject({
        title: "", 
        todoNote: ""
      }))
      .then (() => loadTodos())
      .catch(err => console.log(err)); 
    }
  }; 


    return (
      <Container fluid>
           <HomeBtn />
        <Row>
        <Col size="md-6">
            <h1>To Do: </h1>
        
            {todos.length ? (
              <List>
                {todos.map(todo => {
                  return (
                    <ListItem key={todo._id}>
                      <a href={"/todos/" + todo._id}>
                        <strong>
                          {todo.title} || {todo.todoNote}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => deleteTodo(todo._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
              <br></br>
          <Col size="md-6">
              <h1>Add Todos</h1>
              
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title"
                value={formObject.title}
              />
              <TextArea
                onChange={handleInputChange}
                name="todoNote"
                placeholder="Todo"
                value={formObject.todoNote}
              />
              <FormBtn
                disabled={!(formObject.title && formObject.todoNote)}
                onClick={handleFormSubmit}
              >
                Save Todo
              </FormBtn>
            </form>
          </Col>
        
        </Row>
      </Container>
    );
  }


export default Todos;
