import React from "react";
import { Header, Segment, Input, Icon } from 'semantic-ui-react'

class MessagesHeader extends React.Component {
  render() {
    const { 
      channelName, 
      nonUniqueUsers, 
      handleSearchChange, 
      searchLoading,
      isPrivateChannel,
    } = this.props;

    return (
      <Segment clearing>
        {/* Channel Title */}
        <Header fluid="true" as="h2" floated="left" style={{ marginBotton: 0 }}>
         <span>
            { channelName }
            {!isPrivateChannel && <Icon name={"star outline"} color="black" />}
         </span>
         <Header.Subheader>
          { nonUniqueUsers }
         </Header.Subheader>
        </Header>

        {/* Channel search Input */}
        <Header floated="right">
          <Input 
            loading={searchLoading}
            onChange={handleSearchChange}
            size="mini" 
            icon="search" 
            name="searchTerm" 
            placeholder="Search Messages " 
          />
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;