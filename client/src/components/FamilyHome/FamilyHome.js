import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import AddMember from 'material-ui/svg-icons/social/person-add';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: '100%',
        overflowY: 'auto',
    },
};

const familyMembers = [
    {
        img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: 'John',
        nextRefill: Date.now,
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: 'Jane',
        nextRefill: Date.now,
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: 'Randy',
        nextRefill: Date.now,
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: 'Rebecca',
        nextRefill: Date.now,
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: 'Chris',
        nextRefill: Date.now,
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: 'Carmen',
        nextRefill: Date.now,
    }
];

const FamilyHome = () => {
    return (
        <div>
            <h2 align="center">Your Household Members {<IconButton><AddMember /></IconButton>}</h2>
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    {familyMembers.map((familyMember) => (
                        <GridTile
                            key={familyMember.img}
                            title={familyMember.name}
                            subtitle={<span>Next Refill: <b>{familyMember.nextRefill}</b></span>}
                            actionIcon={<IconButton><ModeEdit color="white" /></IconButton>}
                        >
                            <img src={familyMember.img} alt={familyMember.name} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
        </div>
    );
};

export default FamilyHome;