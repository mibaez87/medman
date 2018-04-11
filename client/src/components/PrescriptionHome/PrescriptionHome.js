import React from 'react';
import axios from 'axios';
import ToolBar from '../ToolBar/ToolBar.js';
import FamilyMemberCard from '../FamilyMemberCard/FamilyMemberCard.js'

class PrescriptionHome extends React.Component {
	state = {
		familyMembers:[]
	}

	componentDidMount(){
		axios.get("/api/family/:id")
			.then((response)=>{
				console.log(response.data);
				this.setState({
					familyMembers: response.data
				});
			})
			.catch((err)=>{
				console.log(err);
			});
	}

	render(){
		return (
			<div>
				<ToolBar />
				<FamilyMemberCard familyMembers={this.state.familyMembers}/>
			</div>
		)
	}
}

export default PrescriptionHome;