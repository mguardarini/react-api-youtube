import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconSearch from 'material-ui/svg-icons/action/search.js';
class Button extends RaisedButton {

  constructor(props){
    super(props);
  }

  render(){
    return (

        <RaisedButton
            label={this.props.label}
            onClick={this.props.searchVideo}
            className='button-default'
            icon={<IconSearch/>}
        />

    )
  
  }
}

export default Button;