import React from 'react';
import moment from 'moment';
import { Card, CardTitle } from 'material-ui/Card';

const FamilyMemberCard = (props) => {
    const birthDate = props.familyMember.dob,
        bDate = moment(new Date(birthDate)).format('MMMM DD YYYY');
    return (
        <div align="center">
            <Card>
                <CardTitle title={props.familyMember.firstName + "'s Profile & Prescriptions"} />
                <p><strong>Full Name:</strong> {props.familyMember.firstName} {props.familyMember.lastName}
                    <br />
                    <strong>Date of Birth:</strong> {bDate}
                    <br />
                    <strong>Address:</strong> {props.familyMember.address}
                </p>
                <br />
            </Card>
        </div>
    )
}

export default FamilyMemberCard;