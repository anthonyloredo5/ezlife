import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';



function ToDoItem(props) {
   
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)
                }} />
                <span>

                    <DeleteIcon onClick={() => {
                        props.deleteItem(item.key)
                    }} ></DeleteIcon>
                </span>
            </p>

        </div>
    })
    return <div>
        {listItems}
        
    </div>;
    
}

export default ToDoItem;