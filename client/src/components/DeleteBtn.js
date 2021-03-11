import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn float-right" {...props} role="button" tabIndex="0">
      <DeleteForeverIcon />
    </span>
  );
}

export default DeleteBtn;
