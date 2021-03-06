var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hasHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).ready(function() {

});

var obj = {
    name: 'Rajesh'
}

ReactDOM.render(
    <Router history={hasHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>
      <Route path="/about" component={About}/>
      <Route path="/examples" component={Examples}/>
    </Route>
</Router>, document.getElementById('app'));
