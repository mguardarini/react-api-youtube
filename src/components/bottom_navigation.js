import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLike from 'material-ui/svg-icons/action/favorite-border';
import IconDeslike from 'material-ui/svg-icons/content/block.js';

const recentsIcon = <FontIcon className="material-icons"></FontIcon>;
const favoritesIcon = <FontIcon className="material-icons"></FontIcon>;
const nearbyIcon = <IconLike />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
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
            label="Recents"
            icon={recentsIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            icon={nearbyIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Bottom;