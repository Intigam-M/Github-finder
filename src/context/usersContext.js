import React, { useReducer } from "react";
import UsersReducer from '../reducers/usersReducer';

export const UsersContext = React.createContext()

const UsersContextProvider = (props) => {

    const initialState = {
        users: [],
        loading: false
    }
    const [state, dispatch] = useReducer(UsersReducer, initialState)

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

    const clearUsers = () => {
        dispatch({ type:"CLEAR_USERS"})
    }

    return(
        <UsersContext.Provider value={{
            users: state.users,
            loading: state.loading,
            searchUsers,
            clearUsers
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider