var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./home');
var NavBar = require('./nav_bar')

var SamiZ = React.createClass({
    render: function() {
        return (
            <div className="sami">
                <Home />
                <NavBar />
            </div>
        )
    }
});


ReactDOM.render(<SamiZ />, document.getElementById('app'))
