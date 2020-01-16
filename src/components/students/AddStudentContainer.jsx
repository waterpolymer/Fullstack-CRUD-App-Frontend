import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import AddStudentView from "./AddStudentView";

import { addStudent } from "../../actions";

class AddStudent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 20,
			firstName: "",
			lastName: "",
			email: "",
			imageUrl: "",
			gpa: "",
			campusId: ""
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		let student = {
			id: this.state.id,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			imageUrl: this.state.imageUrl,
			gpa: this.state.gpa,
			campusId: this.state.campusId
		};
		this.props.addStudent(student);
		console.log(this.props.allStudents);
		this.props.history.push('.');
	};

	render() {
		return (
			<div>
				<AddStudentView
					firstName={this.state.firstName}
					lastName={this.state.lastName}
					campusName={this.state.campusName}
					email={this.state.email}
					imageUrl={this.state.imageUrl}
					gpa={this.state.gpa}
					campusId={this.state.campusId}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
				/>
			</div>
		);
	}
}

const mapState = state => {
	return {
		allStudents: state.student.allStudents
	};
};

const mapDispatch = dispatch => {
	return {
		addStudent: student => dispatch(addStudent(student))
	};
};

export default connect(mapState, mapDispatch)(withRouter(AddStudent));
