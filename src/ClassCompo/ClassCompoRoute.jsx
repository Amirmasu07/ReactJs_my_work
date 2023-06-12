import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu';
import ClassCompoIntro from './01ClassCompoIntro.jsx';
import WelcomeToClassCompo from './02WelcomeToClassCompo.jsx';
import ClassCompoConstructor from './03ClassCompoConstructor.jsx';
import ClassCompoState from './04ClassCompoState.jsx';
import ClassCompoJsx from './05ClassCompoJsx.jsx';
import ClassCompoProps from './06ClassCompoProps.jsx';



class ClassCompoRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="classcompointro" element={<ClassCompoIntro />} />
                        <Route path="welcometoclasscompo" element={<WelcomeToClassCompo />} />
                        <Route path="classcompoconstructor" element={<ClassCompoConstructor />} />
                        <Route path="classcompostate" element={<ClassCompoState />} />
                        <Route path="classcompojsx" element={<ClassCompoJsx />} />
                        <Route path="classcompoprops" element={<ClassCompoProps />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassCompoRoute;