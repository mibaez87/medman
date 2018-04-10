import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';

const FamilyMemberCard = (props) => {
    return (
        <div align="center">
            <Card>
                {props.familyMembers.map((familyMember, index) => (
                    <CardTitle title="FirstName LastName" />
                    <div>
                        <p>Date of Birth: {familyMember.dob}</p>
                        <br/>
                        <p>Address: {familyMember.address}</p>
                    </div>
                ))}
            </Card>
        </div>
    )
}

export default FamilyMemberCard;