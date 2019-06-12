import React from 'react';

class Experience extends React.Component {
	render() {
		if ( this.props.data ) {
			var education = this.props.data.education.map(function(education){
				return <div key={education.school}>
					<p class="date"><span class="font-italic">{education.graduated}</span></p>
					<p className="degree"><strong>{education.degree}</strong></p>
					<p class="school my-0">{education.school}</p>
					<p class="gpa experience-des">GPA: {education.gpa}</p>
				</div>
			})
			var work = this.props.data.work.map(function(work){
				return <div key={work.company}>
				<p class="date"><span class="font-italic">{work.years}</span></p>
				<p><strong>{work.title}</strong></p>
				<p class="company my-0">At {work.company}</p>
				<p class="experience-des">{work.description}</p>
				</div>
			})
		}
		return (
			<section id="Experience" className="segment space-small">
			<div className="container">

			<div className="row">
			<div className="col-md-12">
			<h4><strong>Experience</strong></h4>
			</div>
			</div>

			<div className="row">
			<div className="col-md-12">
			{work}
			</div>
			</div>
			
			<div className="row">
			<div className="col-md-12">
			{education}
			</div>
			</div>
			</div>
			</section>
			);
		}
	}
	export default Experience;
	