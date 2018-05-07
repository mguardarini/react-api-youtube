import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLike from 'material-ui/svg-icons/action/favorite-border';
import IconShare from 'material-ui/svg-icons/social/share.js';

const shareIcon = <IconShare/>;
const likeIcon = <IconLike />;

class Bottom extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          
          <BottomNavigationItem
            label="Share"
            icon={shareIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            icon={likeIcon}
            label='Like'
            onClick={() => this.select(1)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Bottom;