import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 30,
};

const Button = ({title}) => (
  <div>
    <RaisedButton 
      label={title}
      default={true}
      style={style}
    />
  </div>
);

export default Button;