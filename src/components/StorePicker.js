//components can be different in files to be orginzed
//if you need in a js Modules, must import to every file you need it in
import React from 'react';
import { getFunName } from '../helpers'

// each Component need a method (Render)
class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }
    // SEE onSubmit goToStore below are simular constructor

    goToStore(event) {
        event.preventDefault();
        console.log("You changed the URL");

        //1st grab text from box
        const storeId = this.storeInput.value;
        console.log(`Going to ${storeId}`)

        //2nd going to transition from to store/:storeId
        this.context.router.transitionTo(`/store/${storeId}`);
    }


    render() {
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
            <h2>Please Enter A Store</h2> {}
            <input type='text' required placeholder='Store Name' defaultValue={getFunName()} 
                ref={(input) => {this.storeInput = input}}/>
            <button type='submit'>Visit Store</button>
            </form> //JSX only return ONE parent elements 

        )
    }
}

//telling React there is a router -- make it available
StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;