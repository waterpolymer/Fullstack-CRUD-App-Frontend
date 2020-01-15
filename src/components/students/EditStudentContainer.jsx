import React, { Component } from "react";
import { connect } from "react-redux";

import EditStudentView from "./EditStudentView";

import { editStudent, getStudentThunk } from "../../actions";

class EditStudent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
			firstName: "",
			lastName: "",
			email: "",
			imageUrl: "https://i.stack.imgur.com/l60Hf.png",
			gpa: "",
			campusId: ""
		};
	}

	componentDidMount() {
		this.setState({
			id: this.props.currStudent.id,
			firstName: this.props.currStudent.firstName,
			lastName: this.props.currStudent.lastName,
			email: this.props.currStudent.email,
			imageUrl: this.props.currStudent.imageUrl,
			gpa: this.props.currStudent.gpa,
			campusId: this.props.currStudent.campusId
		});
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

		this.props.editStudent(student, this.state.id);
	};

	render() {
		return (
			<div>
				<EditStudentView
					id={this.props.studentId}
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
		studentId: parseInt(window.location.pathname.split("/")[2]),
		currStudent: state.student.currStudent
	};
};

const mapDispatch = dispatch => {
	return {
		editStudent: (student, studentId) =>
			dispatch(editStudent(student, studentId)),
		getStudent: id => dispatch(getStudentThunk(id))
	};
};

export default connect(mapState, mapDispatch)(EditStudent);
