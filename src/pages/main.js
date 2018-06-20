import React from 'react';
import './main.css'
import Projects from '../components/allProject';


class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="menu">    
                    <div className="options">
                        <Projects />
                        
                    </div>
                </div>
                <div className="brief-infor">
                    
                </div>
            </div>
        );
    }
}

export default Main;