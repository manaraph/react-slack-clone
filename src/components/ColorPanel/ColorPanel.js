import React from 'react';
import { Sidebar, Menu, Divider, Button } from 'semantic-ui-react'
class ColorPanel extends React.Component {
  render() {
    return (
        <Sidebar 
        as={Menu} 
        icon="labeled"  
        inverted 
        vertical 
        visible 
        width="very thin"
        >
          <Divider />
          <Button icon="add" size="small" color="blue" />   
        </Sidebar>
    );
  }
}

export default ColorPanel;