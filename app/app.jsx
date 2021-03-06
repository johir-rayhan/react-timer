var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
//App css
require('style!css!applicationStyle')

var Main = require('Main');
var Timer = require('Timer');
var About = require('About');
var Countdown = require('Countdown');
var Contact = require('Contact');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='about' component={About}/>
      <Route path='countdown' component={Countdown}/>
      <Route path='contact' component={Contact}/>
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
