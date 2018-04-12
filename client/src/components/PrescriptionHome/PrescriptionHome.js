import React from 'react';
import API from '../../utils/API.js'
import ToolBar from '../ToolBar/ToolBar.js';
import FamilyMemberCard from '../FamilyMemberCard/FamilyMemberCard.js'

class PrescriptionHome extends React.Component {
	state = {
		familyMember: {}
	};

	componentDidMount() {
		API.findOneMember(this.props.match.params.id)
			.then(res => this.setState({ familyMember: res.data }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<ToolBar />
				<FamilyMemberCard familyMember={this.state.familyMember} />
			</div>
		);
	}
}

export default PrescriptionHome;