//Higher-Order Component that returns another component (WrappedComponent)
import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'pink', 'blue', 'orange', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = randomColour + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/> {/*import the props to that component */}
            </div>
        )
    }
}

export default Rainbow;
