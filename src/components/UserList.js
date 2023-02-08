import User from './User';
import Loading from './Loading';

const UserList = ({loading, users}) => {

    if(loading) return <Loading />
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}

export default UserList