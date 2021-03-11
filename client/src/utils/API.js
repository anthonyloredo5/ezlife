import axios from "axios";

// eslint-disable-next-line 
export default {

  // Gets all todos
  getTodos: function() {
    return axios.get("http://localhost:5000/api/todos");
  },
  // Deletes the book with the given id
  deleteTodo: function(id) {
    return axios.delete("http://localhost:5000/api/todos" + id);
  },
  // Saves a book to the database
  saveTodo: function(todoData) {
    console.log(todoData);
    return axios.post("http://localhost:5000/api/todos", todoData);
  }
};