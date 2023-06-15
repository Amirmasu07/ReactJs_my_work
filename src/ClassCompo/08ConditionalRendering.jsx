import React, { Component } from 'react';



class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = { theme: "dark", enable: true }
    }

    changThemeDark = () => {
        this.setState({ theme: "dark" })
    }
    changThemeLight = () => {
        this.setState({ theme: "light" })
    }
    toggleTheme = () => {
        if (this.state.theme === "dark") {
            this.setState({ theme: "light" })
        }
        else {
            this.setState({ theme: "dark" })
        }
    }

    render() {
        let ThemeDarkData = ""
        if (this.state.theme === "dark") {    // add condition before return render.
            ThemeDarkData = <div className="dark">This will display dark theme data</div>
        } else {
            ThemeDarkData = <div className="light">This will display light theme data</div>
        }
        return (
            <>
                <div className="class-content mt-2 border-top">
                    <h4 className='text-dark border-bottom py-2 fw-bold'>Conditional Rendering:</h4>
                    <ul className='sub-content'>
                        <li>Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false</li>
                        <li>Rendering external data from an API.</li>
                        <li>Showing or hiding elements.</li>
                        <li>Toggling application functionality.</li>
                    </ul>
                </div>
                <div className='container border-top mt-2'>
                    <h4 className='border-bottom fw-bold'>Conditional Rendering Example:</h4><br />
                    <button onClick={this.changThemeDark} className='btn btn-dark me-2'>Drak</button>
                    <button onClick={this.changeThemeLight} className='btn btn-primary me-2'>Light</button>
                    <button onClick={this.toggleTheme} className='btn btn-success'>Toggle Theme</button>
                    <button onClick={() => this.setState({ enabled: !this.state.enabled })} className='btn btn-danger mt-2'>Toggle Theme</button>

                    <h3>{JSON.stringify(this.state.enabled)}</h3>

                    {this.state.enabled ? <div>Enabled data</div> : <div>Disabled data</div>} {/*apply turnery operator foe true or false*/}

                    <div className='conditional'>
                        <h2>inside html render return </h2>
                        <p>if we want to perform some data according condition that time we need to adopt trnary operator ? :</p>
                        {(this.state.theme === 'dark') ? "data" : "else"}
                        {(this.state.theme === 'dark') ? <>my division data</> : <>my section data</>}
                    </div>

                    <h2>Load data from render before return condition</h2>
                    {ThemeDarkData}

                    <div className='dark' style={ (this.state.theme === 'dark') ? {backgroundColor:"grey",color:"white"} : {}}>
                        This Will Change
                    </div>

                </div>
            </>
        );
    }
}

export default ConditionalRendering;