import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
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

                    <DeleteOutlineIcon style={{ color: "grey" }} onClick={() => {
                        props.deleteItem(item.key)
                    }} ></DeleteOutlineIcon>
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