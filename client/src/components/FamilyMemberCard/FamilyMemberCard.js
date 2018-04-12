import React from 'react';
import moment from 'moment';
import { Card, CardTitle } from 'material-ui/Card';

const FamilyMemberCard = (props) => {
    const birthDate = props.familyMember.dob,
        bDate = moment(new Date(birthDate)).format('MMMM DD YYYY');
    return (
        <div align="center">
            <Card>
                <strong><CardTitle title={props.familyMember.firstName + ' ' + props.familyMember.lastName} /></strong>
                <p>Date of Birth: {bDate} </p>
                <p>Address: {props.familyMember.address}</p>
                <br />
            </Card>
        </div>
    )
}

export default FamilyMemberCard;