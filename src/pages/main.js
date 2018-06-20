import React from 'react';
import './main.css'
import ProjectMain from '../components/projectMain';


class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="menu">    
                    <div className="options">
                        <ProjectMain />
                        
                    </div>
                </div>
                <div className="brief-infor">
                    
                </div>
            </div>
        );
    }
}

export default Main;