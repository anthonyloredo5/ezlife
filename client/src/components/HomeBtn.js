import React from "react"; 
import Button from '@material-ui/core/Button';



function HomeBtn () { 

    return ( 
        <Button size="small" variant="outlined" color="primary" className="float-right" href="/dash"> Home </Button>
    )
}

export default HomeBtn; 



{/* <Button onClick={() => { alert('clicked') }}>Click me</Button> */}