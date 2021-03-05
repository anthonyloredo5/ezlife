import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import "./Todo.css";


function ToDoItem(props) {
   
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text" style={{backgroundColor: "white", fontFamily:"Arial"}} id={item.key} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)
                }} />
                <span>

                    <DeleteIcon style={{ color: "#2196f3" }} onClick={() => {
                        props.deleteItem(item.key)
                    }} ></DeleteIcon>
                </span>
            </p>

        </div>
    })
    return <div style={{
        
    }}>
        {listItems}
        
    </div>;
    
}

export default ToDoItem;