import React from 'react';
import API from '../../utils/API.js'
import ToolBar from '../ToolBar/ToolBar.js';
import { Card, CardTitle } from 'material-ui/Card';

class FamilyMemberCard extends React.Component {
    state = {
        familymembers: {}
    }

    componentDidMount() {
        API.findOneMember(this.props.match.params.id)
            .then(res => this.setState({ familymembers: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <ToolBar />
                <div align="center">
                    <Card>
                        <CardTitle title={this.state.familymembers.firstName + "'s Profile & Prescriptions"} />
                        <p><strong>First Name:</strong> {this.state.familymembers.firstName}
                            <br />
                            <strong>Last Name:</strong> {this.state.familymembers.lastName}
                            <br />
                            <strong>Date of Birth:</strong> {this.state.familymembers.dob}
                            <br />
                            <strong>Address:</strong> {this.state.familymembers.address}
                        </p>
                    </Card>
                </div>
            </div>
        )
    }
}

export default FamilyMemberCard;