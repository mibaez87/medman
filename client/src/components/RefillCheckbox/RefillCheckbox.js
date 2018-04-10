import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionRenew from 'material-ui/svg-icons/action/autorenew';

const styles = {
    block: {
      maxWidth: 250,
    },
    checkbox: {
      marginBottom: 16,
    },
  };
  
  class RefillCheckbox extends React.Component {
    state = {
      checked: false,
    }
  
    render() {
      return (
        <div style={styles.block}>
          <Checkbox
            checkedIcon={<ActionRenew />}
            label="Refill(s) Available"
            style={styles.checkbox}
          />
        </div>
      );
    }
  }
  
  export default RefillCheckbox;