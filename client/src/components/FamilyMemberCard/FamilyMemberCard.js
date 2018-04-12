import React from 'react';
import moment from 'moment';
import IconButton from 'material-ui/IconButton';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import { Card, CardTitle } from 'material-ui/Card';
import { Link } from 'react-router-dom';

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
                <br />
                <h2>Prescriptions {<IconButton><Link to ="/addprescription"><AddCircle /></Link></IconButton>}</h2>
            </Card>
        </div>
    )
}

export default FamilyMemberCard;