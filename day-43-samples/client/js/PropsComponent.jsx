import React from 'react';

class PropsComponent extends React.Component {

  render () {
    console.log(this.props);
    return (
      <div className ="props-component" style={{backgroundColor: this.props.bgColor}}>{this.props.text}</div>
    );

    }
  }


module.exports = PropsComponent;
