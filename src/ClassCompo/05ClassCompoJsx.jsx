import React, { Component } from 'react'

class ClassCompoJsx extends Component {
    changeDataDmFunction = () => {
        console.log("changeDataDmFunction");
    }
  render() {
    const koidata = "something";
    const changeData = () => {
        console.log("called");
    }
    return (
      <>
      <div className="class-content mt-2 border-top">
        <h5 className='text-dark border-bottom py-2 fw-bold'>JSX :</h5>
        <ul className='sub-content'>
                {koidata}
            <li>
                <div>Addition of 10+5 is {10+5}</div>
            </li>
            <li>
                <div className='d-flex  align-items-center'>
                    {<button onClick={changeData()}>Click</button>}
                    <button onClick={changeData} className='btn btn-secondary me-3'>Click</button>
                    <button onClick={this.changeDataDmFunction} className='btn btn-secondary'>Click</button>
                </div>
            </li>
        </ul>
      </div>
      </>
    )
  }
}

export default ClassCompoJsx;