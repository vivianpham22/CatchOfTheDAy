//components can be different in files to be orginzed
//if you need in a js Modules, must import to every file you need it in
import React from 'react';

// each Component need a method (Render)
class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
            <h2>Please Enter A Store</h2> {}
            <input type='text' required placeholder='Store Name'/>
            <button type='submit'>Visit Store</button>
            </form> //JSX only return ONE parent elements 

        )
    }
}

export default StorePicker;