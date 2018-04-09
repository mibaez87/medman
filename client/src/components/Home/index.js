import React from 'react';
import "./style.css";
import FamilyHome from "../FamilyHome/FamilyHome.js";
import axios from "axios";
import ToolBar from "../ToolBar/ToolBar.js"

class Home extends React.Component {
	state = {
		familyMembers:[]
	}

	componentDidMount(){
		axios.get("/api/family")
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
				<FamilyHome familyMembers={this.state.familyMembers}/>
			</div>
		)
	}
}

export default Home;