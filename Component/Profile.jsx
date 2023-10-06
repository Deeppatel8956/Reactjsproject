import React, { useContext } from 'react'
import Usercontext from '../Context/Usercontext'
const Profile = () => {
    const {user} = useContext(Usercontext)


    if (!user) return <div>please login</div>

    return <div>Welcome {user.username} and {user.age}</div>
}

export default Profile;