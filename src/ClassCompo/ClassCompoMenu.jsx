import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoIntro extends Component {
  render() {
    return (
      <>
        <div className='col-md-6 col-12 border border-bottom-0 border-start-0 border-top-0 border-warning pb-3'>
          <div className="class-content mt-2">
            <ul>
              <li><Link to="classcompointro">Class Components Intro</Link></li>
              <li><Link to="welcometoclasscompo">Welcome To ClassCompo</Link></li>
            </ul>
            <Outlet></Outlet>
          </div>
        </div>
      </>
    );
  }
}

export default ClassCompoIntro;