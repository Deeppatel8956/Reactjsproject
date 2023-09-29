import React from 'react';
import { useParams } from 'react-router-dom';

function User(props) {
    const {userid}=useParams();
    return (
        <>
         <div className=' bg-red-600 text-3xl p-4 mt-4 mb-4'>User: {userid}</div>   
        </>
    );
}

export default User;