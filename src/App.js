import Navbar from './components/Navbar'
import UserList from './components/UserList';
import React, { useState } from 'react'
import Search from './components/Search';
import Alert from './components/Alert';


const App = ()=>{

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const searchUsers = (text) => {
        setLoading(true);
        fetch(`https://api.github.com/search/users?q=${text}`)
        .then(res => res.json())
        .then(data => 
                {
                    setUsers(data.items)
                    setLoading(false);
                }
            )
    }

    const clearResult = () => {
        setUsers([])
    }

    const displayAlert = (msg, type) => {
        setError({msg, type})
        setTimeout(() => {
            setError(null)
        }
        , 3000);
    }

    return (
    <div>
        <Navbar />
        <Search 
            searchUsers={searchUsers} 
            clear={clearResult} 
            clearButton={users.length > 0 ? true : false} 
            displayAlert={displayAlert} />
        <Alert error={error}/> 

        <div className="container mt-3">
            <UserList users={users} key={users.id} loading={loading} />
        </div>
    </div>
    );
}

export default App



