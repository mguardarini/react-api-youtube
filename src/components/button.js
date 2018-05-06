import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  margin: 30,
  
};

class Button extends RaisedButton {

  constructor(props){
    super(props);
  }

  render(){
    return (

        <RaisedButton
            label={this.props.label}
            onClick={this.props.searchVideo}
            style={style}
        />

    )
  
  }



}


export default Button;