import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
// import About from './components/About'
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route
// } from "react-router-dom";

export default function App() {

    const [mode, setMode] = useState('light'); //
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500)
    }

    const toggleMode = () => {
        if(mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'grey';
            showAlert("Dark Mode has been enabled", "success");
            // document.title = 'TextUtils - Home(Dark)';
        }else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("light Mode has been enabled", "success");
        }
    }

    
    return (
        <>
            {/* adding props here ex: title */}
            {/* <Router> */}
                <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} /> 
                <Alert alert={alert} />
                <div className="container my-3">
                    {/* <Routes> */}
                        {/* exact -> matching exact path */}
                        {/* <Route exact path="/" element={ <TextForm heading="Enter The Text to analyze below" mode={mode} showAlert={showAlert} /> } /> */}
                        <TextForm heading="Enter The Text to analyze below" mode={mode} showAlert={showAlert} />
                        {/* <Route exact path='/about' element={ <About /> } /> */}
                    {/* </Routes> */}
                </div>
            {/* </Router> */}
        </>
    )
}
