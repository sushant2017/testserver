import React, { useState } from 'react'

function Universal() {
  return (
    <div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
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
