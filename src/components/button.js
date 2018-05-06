import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

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
        />

    )
  
  }
}

export default Button;