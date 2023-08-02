/* eslint-disable no-lone-blocks */

import React, { useEffect, useState } from "react";

const Dashboard = () => {

const [users, setUsers] = useState([]);

{/*Dashboard get methode*/}
const getData = async () => {

    try {
    const response = await fetch(
        "https://64c3feea67cfdca3b6608abe.mockapi.io/Comments"
    );
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();

    setUsers(data); 
    } catch (error) {
    console.error("Error fetching data:", error);
    }
};

useEffect(() => {
    getData();
}, []);

{/*Dashboard delete methode*/}
const handleDelete = async (userId) => {
    
    try {
    const response = await fetch(
        `https://64c3feea67cfdca3b6608abe.mockapi.io/Comments/${userId}`,
        {
        method: "DELETE",
        }
    );

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    setUsers((prevUsers) => 
    prevUsers.filter((user) => user.id !== userId));
    }
    
    catch (error) {
    console.error("Error deleting user:", error);
    }
};

return (
    <>
    <h2 style={{ 
        color: 'maroon' 
            }}>
            User List:
    </h2>
    
    <div 
    style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        textAlign: 'start' 
    }}>

    {users.map((user) => (
            <div key={user.id} 
            style={{ 
                margin: '10px', 
                border: '1px solid grey', 
                backgroundColor: 'grey', 
                lineHeight: '10px', 
                padding: '10px' 
            }}>

                {user.image &&
                    <img src={user.image}
                        alt="User Profile"
                        style={{ 
                            width: '200px', 
                            height: '200px' 
                        }} />}

                <p style={{ marginLeft: '20px' }}>
                    <span style={{ 
                        fontSize: '14px', 
                        fontWeight: 'bold', 
                        textAlign: 'center',
                        color:'lightgreen'  
                }}>
                NAME:</span>&nbsp; {user.name}</p>
                
                <p style={{ marginLeft: '20px' }}>
                    <span style={{ 
                        fontSize: '14px', 
                        fontWeight: 'bold', 
                        textAlign: 'center',
                        color:'lightgreen' 
                    }}>
                    AGE:</span> &nbsp;
                    {user.age}
                </p>

                <p style={{ marginLeft: '20px' }}>
                    <span style={{ 
                        fontSize: '14px', 
                        fontWeight: 'bold',
                        color:'lightgreen'  
                        }}>
                        GENDER:</span> &nbsp;
                        {user.gender}
                </p>
                <br />
                
                <button onClick={() => handleDelete(user.id)}
                    style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '5px',
                        marginLeft: '50px'
                    }}>
                    Delete
                </button>
            </div>
        ))}
    </div></>
);
};

export default Dashboard;
