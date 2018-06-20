import React from 'react';
import './projectMain.css';
import Projects from './projects'

class projectMain extends React.Component {
    render() {
        return(
            <div className="allproject-main">
                <Projects />
            </div>
        );
    }
}

export default projectMain;