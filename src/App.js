import Navbar from './components/Navbar'
import UserList from './components/UserList';
import React, { useReducer, useState } from 'react'
import Search from './components/Search';
import Alert from './components/Alert';
import UsersReducer from './reducers/usersReducer';


const App = ()=>{

    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(false)
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(UsersReducer, initialState)
    const [error, setError] = useState(null)


    const searchUsers = (text) => {
        setLoading();
        fetch(`https://api.github.com/search/users?q=${text}`)
        .then(res => res.json())
        .then(data => 
                {
                    // setUsers(data.items)
                    dispatch({type: "SERACH_USERS", users: data.items})
                    // setLoading(false);
                }
            )
    }


    const setLoading = () =>{
        dispatch({ type:"SET_LOADING" })
    }

    const clearResult = () => {
        dispatch({ type:"CLEAR_USERS"})
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
            clearButton={state.users.length > 0 ? true : false} 
            displayAlert={displayAlert} />
        <Alert error={error}/> 

        <div className="container mt-3">
            <UserList users={state.users} key={state.users.id} loading={state.loading} />
        </div>
    </div>
    );
}

export default App



