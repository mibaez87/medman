import React from 'react';
import axios from 'axios';
import ToolBar from '../ToolBar/ToolBar.js';
import FamilyMemberCard from '../FamilyMemberCard/FamilyMemberCard.js'

class PrescriptionHome extends React.Component {
	state = {
		prescriptions:[]
	}

	componentDidMount(){
		axios.get("/api/prescriptions")
			.then((response)=>{
				console.log(response.data);
				this.setState({
					prescriptions: response.data
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
				<FamilyMemberCard prescriptions={this.state.prescriptions}/>
			</div>
		)
	}
}

export default Home;