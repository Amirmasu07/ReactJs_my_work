import React, { Component } from 'react';


class ClassCompoControlled extends Component {
    constructor (props) {
         super(props);
         this.state = {inpUName:"update",username:"",formData:{}}
    }

    render() {
        return (
            <>
                <p>
                    In HTML, form elements such as &lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt; typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
                </p>
                <p>
                    We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a <q>controlled component</q>.
                </p>

                <p>
                    For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:
                </p>
                <h3>set Data to State with function </h3>
            </>
        );
    }
}

export default ClassCompoControlled;