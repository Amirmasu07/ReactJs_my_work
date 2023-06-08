import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoIntro extends Component {
  render() {
    return (
      <>
        <div className='col-md-6 col-12 border border-start-5 border-warning pb-3'>
          <div className="class-content mt-2">
            <ul>
              <li><Link to="classcompointro">Class Components Intro</Link></li>
              <li><Link to="welcometoclasscompo">Welcome To ClassCompo</Link></li>
              <li><Link to="ClassCompoConstructor">Class Compo Constructor</Link></li>
              <li><Link to="ClassCompostate">Class Compo State</Link></li>
              <li><Link to="ClassCompojsx">Class Compo Jsx</Link></li>
            </ul>
            <Outlet></Outlet>
          </div>
        </div>
      </>
    );
  }
}

export default ClassCompoIntro;