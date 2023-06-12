import React, { Component } from 'react';
import Props from './06Props';


class ClassCompoProps extends Component {
    render(props) {
        return (
            <>
                <div className='class-content border-top mt-2'>
                    <h5 className='text-dark border-bottom py-2 fw-bold'>PROPS :</h5>
                    <ul className='class-content'>
                        <li>
                            <p>props in React to <strong className='text-primary'> pass data from one component to another (from a parent component to a child component(s))</strong>.</p>
                        </li>
                        <li>
                            <p>Props is just a shorter way of saying properties.</p>
                        </li>
                        <li>
                            <p>They are useful when you want the flow of data in your app to be dynamic.</p>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default ClassCompoProps;