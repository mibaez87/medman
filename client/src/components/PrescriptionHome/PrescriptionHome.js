import React from 'react';
import API from '../../utils/API.js';
import ToolBar from '../ToolBar/ToolBar.js';
import FamilyMemberCard from '../FamilyMemberCard/FamilyMemberCard.js';
import PrescriptionTable from '../PrescriptionTable/PrescriptionTable.js'

class PrescriptionHome extends React.Component {
	state = {
		familyMember: {},
		prescriptions: []
	};

	componentDidMount() {
		API.findOneMember(this.props.match.params.id)
			.then(res => this.setState({ familyMember: res.data }))
			.catch(err => console.log(err));
		API.getMemberMeds(this.props.match.params.id)
			.then(res => this.setState({ prescriptions: res.data }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<ToolBar />
				<FamilyMemberCard familyMember={this.state.familyMember} />
				<PrescriptionTable prescriptions={this.state.prescriptions} />
			</div>
		);
	}
}

export default PrescriptionHome;