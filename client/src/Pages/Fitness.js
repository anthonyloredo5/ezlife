import React, {useState, useEffect, useContext} from "react"; 
import { UserContext } from "../utils/UserContext";
import Drawer from '../components/Drawer';
import WorkoutCalendar from "../components/WorkoutCalendar.js";

function Fitness () { 
    const [user, dispatch] = useContext(UserContext)
    console.log(user, 'should be user from log in')
    console.log(user.firstTime);
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
        <WorkoutCalendar/>
        </>
    )
}

export default Fitness; 