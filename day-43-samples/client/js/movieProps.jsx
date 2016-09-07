import React from 'react';

class MovieProps extends React.Component {

  render() {
    return (
      <div className ="outer-container">
        <h1 className = "title">{this.props.title}</h1>
        <h2>{this.props.genre}</h2>
        <img src={this.props.moviePic}/>
        <p className = "p-starring">{this.props.actor}</p>
        <p className ="p-desc">{this.props.desc}</p>
      </div>
    );

  }


}
module.exports = MovieProps;
