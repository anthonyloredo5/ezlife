import React, { useState, useEffect, useContext } from "react"; 
import { UserContext } from "../utils/UserContext";
import Drawer from '../components/Drawer';
import background from '../images/bubble.svg';
import Hero from '../components/Hero';
import { useHistory } from 'react-router-dom';

function Goals () { 
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
        <Hero backgroundImage= {background}>
            <h1 style={{color: "orange"}}>GOALS</h1>
        <h2 style={{color: "white"}}> This page will allow the user to input and track any otherwise unspecified goals, including longterm visions and accolades.</h2>
        </Hero>

        
        </>
    )
}

export default Goals; 
