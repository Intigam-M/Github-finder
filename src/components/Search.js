import { useContext, useState } from 'react';
import { AlertContext } from '../context/alertContext';
import { UsersContext } from '../context/usersContext';

const Search = () => {

    const [ text, setText ]  = useState('')
    const {searchUsers, users, clearUsers } = useContext(UsersContext)
    const {displayAlert} = useContext(AlertContext)

    const onChange = (e) => {
        setText(e.target.value);
    }

   const onSubmit = (e) => {
        e.preventDefault();

        if(text === '') {
            displayAlert('Please enter something', 'danger');
        }else{
            searchUsers(text);
            setText('');
        }
    }

    return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" value={text} onChange={onChange} className='form-control' placeholder='Search User' />
                    <button className='btn btn-primary' type='submit'>Search</button>
                </div>
            </form>
            {
               users.length > 0 && <button onClick={clearUsers} className='btn btn-danger mt-2 col-12'>Clear result</button>
            }
        </div>
    )
}

export default Search