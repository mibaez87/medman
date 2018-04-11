import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';

const FamilyMemberCard = props => {
    return (
        <div align="center">
            <Card>
                <CardTitle title="Prescriptions for:" />
                {/* <div>
                    <p>First Name: {familyMember.firstName}</p>
                    <br />
                    <p>Last Name: {familyMember.lastName}</p>
                    <br />
                    <p>Date of Birth: {familyMember.dob}</p>
                    <br />
                    <p>Address: {familyMember.address}</p>
                </div> */}
            </Card>
        </div>
    )
}

export default FamilyMemberCard;