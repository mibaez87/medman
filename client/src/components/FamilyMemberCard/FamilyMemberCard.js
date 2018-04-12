import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';

const FamilyMemberCard = (props) => {
    return (
        <div align="center">
            <Card>
                <CardTitle title={props.familyMember.firstName + "'s Profile & Prescriptions"} />
                <p><strong>First Name:</strong> {props.familyMember.firstName}
                    <br />
                    <strong>Last Name:</strong> {props.familyMember.lastName}
                    <br />
                    <strong>Date of Birth:</strong> {props.familyMember.dob}
                    <br />
                    <strong>Address:</strong> {props.familyMember.address}
                </p>
            </Card>
        </div>
    )
}

export default FamilyMemberCard;