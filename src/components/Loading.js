import React from 'react'

const loading = () => {
    return (
        <div className='d-flex.justify-content-center'>
            <div className='spinner-grow text-primary'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    )
}

export default loading