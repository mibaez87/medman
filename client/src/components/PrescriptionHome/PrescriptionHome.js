import React from 'react';
import API from '../../utils/API.js';
import ToolBar from '../ToolBar/ToolBar.js';
import FamilyMemberCard from '../FamilyMemberCard/FamilyMemberCard.js';
import PrescriptionTable from '../PrescriptionTable/PrescriptionTable.js'

class PrescriptionHome extends React.Component {
	state = {
		familyMember: {},
		// prescriptions:[]
	};

	componentDidMount() {
		API.findOneMember(this.props.match.params.id)
			.then(res => this.setState({ familyMember: res.data }))
			.catch(err => console.log(err));
		// API.getMemberMeds(this.props.match.params.id)
		// 	.then(res => console.log("ME", res))
	}

	render() {
		return (
			<div>
				<ToolBar />
				<FamilyMemberCard familyMember={this.state.familyMember} />
				<PrescriptionTable />
			</div>
		);
	}
}

export default PrescriptionHome;