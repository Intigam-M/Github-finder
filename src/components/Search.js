import { useState } from 'react';

const Search = ({displayAlert, searchUsers, clearButton, clear}) => {

    const [ text, setText ]  = useState('')

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
               clearButton && <button onClick={clear} className='btn btn-danger mt-2 col-12'>Clear result</button>
            }
        </div>
    )
}

export default Search