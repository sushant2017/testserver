import React, { useState } from 'react'

function Child(props) {
    const [state, setState] = useState({
        firstname: props.firstname,
        lastname: props.lastname
    });
    const context = React.createContext(state);
    const handleClick = (e) => {
        e.preventDefault();
        setState({ firstname: 'Ketan' });
    }
    return (
        <context.Provider>
            <div>
                <h3>User Details</h3>
                <p>First Name : {state.firstname}</p>
                <p>Last Name : {state.lastname}</p>
                <button onClick={handleClick}>Rename</button>
            </div>
        </context.Provider>
    )
}

export default Child
