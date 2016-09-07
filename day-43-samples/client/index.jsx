var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx');
//import PropsComponent from './js/PropsComponent.jsx';
import MovieProps from './js/movieProps.jsx';

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Header />

        <MovieProps title = 'Forest Gump' genre = 'Drama' actor='Tom Hanks' desc='Stupid is as stupid does' moviePic = 'forrest-gump-poster-1994-tom-hanks.png'/>

        <MovieProps title = 'Predator' genre = 'Action/Sci-fi' actor='Arnold Schwartzeneggar' desc='Get to da choppa ! ! !' />

        <MovieProps title = 'Anchor Man' genre = 'Comedy' actor='Will Ferrell' desc='THAT escalated quickly' />


      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
