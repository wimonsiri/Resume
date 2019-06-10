import React from 'react';

class Experience extends React.Component {
	render() {
		if ( this.props.data ) {
			var education = this.props.data.education.map(function(education){
				return <div key={education.school}><p><strong>{education.school}</strong></p>
				<p className="info">{education.degree} <span>&bull;</span> GPA: { education.gpa }<span> &bull; </span> <em className="date">{education.graduated}</em></p>
				<p>{education.description}</p></div>
			})
			var work = this.props.data.work.map(function(work){
				return <div key={work.company}><h3>{work.company}</h3>
				<p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
				<p>{work.description}</p>
				</div>
			})
		}
		return (
			<section id="Experience" className="segment space-huge">
			<div className="container">
			<div className="row">
			<div className="col-md-12 text-center">
			<h2 className="text-uppercase">Experience</h2>
			</div>
			</div>
			<div className="row justify-content-center">
			<div className="col-md-10 text-center">
			{education}
			</div>
			</div>
			<div className="row justify-content-center">
			<div className="col-md-10 text-center">
			{work}
			</div>
			</div>
			</div>
			</section>
			);
		}
	}
	export default Experience;
	