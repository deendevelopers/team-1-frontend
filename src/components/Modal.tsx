import React from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Row,
	Col,
	InputGroup,
	Input,
} from 'reactstrap';

class CustomModal extends React.Component<any> {
	state: any = {
		mosqueId: this.props.mosqueId,
		comments: [],
	};

	handleChange = (e: any) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	async componentDidMount() {
		const response = await fetch(
			`https://frontrow-fe.herokuapp.com/fr/mosques/${
				this.state.mosqueId
			}/comments`,
		).then(res => res.json());
		this.setState({
			comments: response,
		});
	}

	handleSubmit = (e: any) => {
		e.preventDefault();
		fetch(
			`https://frontrow-fe.herokuapp.com/fr/mosques/${
				this.props.mosqueId
			}/comments`,
			{
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify({
					user_id: 1,
					category_name: this.state.category,
					comment_type: this.state.type,
					comment: this.state.comment,
				}),
			},
		);
	};

	render() {
		return (
			<div>
				<Modal isOpen={this.props.modal} className={this.props.className}>
					<ModalHeader>Comments</ModalHeader>
					<ModalBody>{this.props.children}</ModalBody>
					<ModalFooter>
						<Row className="m-0 align-items-center w-100">
							<Col className="pl-0" xs="6" sm="6" md="6" lg="6">
								<div className="form-group">
									<label>Category</label>
									<select
										className="form-control"
										name="category"
										onChange={this.handleChange}
									>
										<option value="Recitation">Recitation</option>
										<option value="Sisters">Sisters</option>
										<option value="Madrassah">Madrassah</option>
										<option value="Accessibility">Accessibility</option>
										<option value="Jumah">Jumah</option>
										<option value="Khutba">Khutba</option>
										<option value="Imams">Imams</option>
										<option value="Air Conditioning">Air Conditioning</option>
									</select>
								</div>
							</Col>
							<Col className="pr-0" xs="6" sm="6" md="6" lg="6">
								<div className="form-group">
									<label>Type</label>
									<select
										className="form-control"
										name="type"
										onChange={this.handleChange}
									>
										<option value="Comment">Comment</option>
										<option value="Feedback">Feedback</option>
										<option value="Question">Question</option>
									</select>
								</div>
							</Col>
							<Col className="p-0" xs="12" sm="12" md="12" lg="12">
								<InputGroup className="filter-wrapper mb-0">
									<Input
										type="textarea"
										placeholder="Post a comment"
										name="comment"
										onChange={this.handleChange}
									/>
								</InputGroup>
							</Col>
							<Col xs="12" sm="12" md="12" lg="12" className="p-0">
								<div className="modal-button-wrapper">
									<Button color="primary" onClick={this.props.closeModal}>
										Close
									</Button>
									<Button color="primary" onClick={this.handleSubmit}>
										Submit
									</Button>
								</div>
							</Col>
						</Row>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default CustomModal;
