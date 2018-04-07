import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import AddMember from 'material-ui/svg-icons/social/person-add';
import { Link } from 'react-router-dom';

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

const FamilyHome = (props) => {
    return (
        <div>
            <h2 align="center">Your Household Members {<IconButton><Link to ="/addfamily"><AddMember /></Link></IconButton>}</h2>
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    {props.familyMembers.map((familyMember,index) => (
                        <GridTile
                            key={familyMember._id}
                            title={familyMember.firstName}
                            subtitle={<span>Next Refill: <b>{familyMember.nextRefill}</b></span>}
                            actionIcon={<IconButton><ModeEdit color="white" /></IconButton>}
                        >
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt={familyMember.firstName} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
        </div>
    );
};

export default FamilyHome;