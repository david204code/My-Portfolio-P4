import React from 'react';
import './projects.css';

class Projects extends React.Component {
    render() {
            // const title="title";
        // const codeLanguage="language";
        // const projects = this.props.title + this.props.codeLanguage;
        // const projects = title + codeLanguage;

        // const allProject = {
        //     "projectName": "",
        //     "codeLanguage": ""
        // };

        // const allProjects = [allProject];

        //My logo for the project
        const style = {
            backgroundImage: "url('')"
        };
        return(
            <div className="allproject-main">

                <div className="allproject-logo" style={style}>
                    
                </div>

                <div className="allproject-label">
                    
                    
                </div>

            </div>
        )
    }
}

export default Projects;