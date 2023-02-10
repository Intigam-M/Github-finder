import User from './User';
import Loading from './Loading';
import { useContext } from 'react';
import { UsersContext } from '../context/usersContext';

const UserList = () => {
    const {loading, users} = useContext(UsersContext)
    if(loading) return <Loading />
    return (
        <div className="container mt-3">
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}

export default UserList