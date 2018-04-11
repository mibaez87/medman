import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';

const FamilyMemberCard = (prop) => {
    return (
        <div align="center">
            <Card>
                <CardTitle title="Prescriptions for:" />
                <p>{}</p>
            </Card>
        </div>
    )
}

export default FamilyMemberCard;