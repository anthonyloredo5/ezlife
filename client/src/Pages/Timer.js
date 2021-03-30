import React, { useContext, useState, useEffect } from "react"; 
import { UserContext } from "../utils/UserContext";
import Drawer from '../components/Drawer';
import Timer from "../components/Widgets/Timer/Timer";
import { useHistory } from 'react-router-dom';

function TimerPage () { 
    const history = useHistory();
    const [user, dispatch] = useContext(UserContext)
    console.log(user, 'should be user from log in')
    console.log(user.firstTime);
    const firstTime = user.firstTime;

    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetch('api/users/user', {
            credentials: 'include'
        })
            .then((res) => {
                console.log(`response to authenticate ${res}`);
                return res.json(res)

            })
            .then(data => {
                console.log(data, 'user DATA');
                dispatch({
                    type: "GET_USER",
                    payload: data
                })

            })
            .catch((err) => {
                alert("Could not detect current user");
                history.push("/")
                console.log('Error fetching authorized user.');
            });
    }, []);

    const getStarted = (e) => {
        e.preventDefault();

        setModal(!modal)
    }

    return ( 
        <>
        <Drawer getStarted={getStarted}/>
        
        <h1> does this work lol </h1>
        <Timer />
        
        </>
    )
}

export default TimerPage; 