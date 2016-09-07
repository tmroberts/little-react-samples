var React = require('react');



class Header extends React.Component {

  render () {
    console.log('In render function');


    return (
      <header>
        <h1>Coming Attractions !</h1>

      </header>

    );
  }
}

module.exports = Header;
