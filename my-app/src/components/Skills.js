import React from 'react';

class Skills extends React.Component {
    render() {
        if ( this.props.data ) {
            var skills = this.props.data.skills.map(function(skills){
                var className = 'bar-expand '+skills.name.toLowerCase();
                return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
            })
            
        }
        return (
        <section id="Experience" className="segment space-small">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4><strong>Skills</strong></h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="skills">
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
export default Skills;
