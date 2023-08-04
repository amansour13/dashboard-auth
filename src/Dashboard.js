import { useEffect, useState } from "react";
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';


function Dashboard () {
    const[load1, setLoad1] = useState(false);
    const[load2, setLoad2] = useState(false);

    const navigate = useNavigate();

    
    useEffect(()=>{

        async function fetchData(){

            const token = localStorage.getItem('token');
            await axios.get('https://dummyjson.com/auth/users' , 
                        { headers: {"Authorization" : `Bearer ${token}`,  'Content-Type': 'application/json'}
                    })
            .then((res) => {
                if (res.status === 200)
                    setLoad1(true);
                console.log(res);
            }).catch(
                (error) => {
                setLoad2(true);
                console.log(error);
            }
        );
        }
        fetchData();
    }, [])

    if(load1 && !load2)
        return (
            <div className="dashboard">
                <h2>welcome to Dashboard</h2>
                <button onClick={
                    () => {
                        localStorage.setItem("token", '');
                        navigate('/login');
                    }
                }>Logout</button>
            </div>
        );
    if(!load1 && load2)
        return (
            <div className="dashboard">
                <h2>you have no rights to access this page ...</h2>
                <button onClick={
                    () => {
                        localStorage.setItem("token", '');
                        navigate('/login');
                    }
                }>Login</button>
            </div>
        );
    else
        return (
            <div className="dashboard">
                <h2>Loading ...</h2>
            </div>
        );
}
export default Dashboard;