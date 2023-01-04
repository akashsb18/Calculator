import React from 'react'

const Dark = ({ darkTheme, setDarkTheme }) => {
    return (
        <div>
            <button type='button' onClick={() => setDarkTheme(!darkTheme)}>
                {darkTheme ? <h2 className="text-white">Light</h2> : "Dark"}
            </button>
        </div>
    )
}

export default Dark