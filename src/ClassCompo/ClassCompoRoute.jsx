import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu';
import ClassCompoIntro from './01ClassCompoIntro.jsx';
import WelcomeToClassCompo from './02WelcomeToClassCompo.jsx';



class ClassCompoRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="ClassCompoIntro" element={<ClassCompoIntro />} />
                        <Route path="WelcomeToClassCompo" element={<WelcomeToClassCompo />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassCompoRoute;