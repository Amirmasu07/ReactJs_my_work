import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class ListKeysMap extends Component {
    render() {
        let MenuData = { "/": "Home", "/about": "About", "/examples": "Components" }

        let MenuItem = Object.entries(MenuData).map(([key, data],index) =>  {

            return <li key={index}> <Link to={key}> {data}</Link> </li>
        })

        return (
            <>
                <div className='container mt-2 border-top'>
                    <h4 className='text-dark border-bottom py-2 fw-bold'>Key List Map And Array :</h4>
                    <ul className='sub-content'>
                        <li>With keys React keep record of elements</li> {/*for keylist*/}
                        <li>This ensures that if an item is updated or removed</li  >
                        <li>only that item will be re-rendered instead of the entire list</li>
                        <li>store your data in array as object </li>{/*for array*/}
                        <li>after that access that data  by 'map' method </li>{/*Data Acces using map list*/}
                        <li>to show output you have to link that key to your respective router path </li>
                        <li>link to key shows data in list element</li>
                        <li>array data ne access karva mmate for loop ne define karya vagr to map no use karay.</li>    
                    </ul>
                    
                    {MenuItem}
                </div>

            </>
        );
    }
}

export default ListKeysMap;