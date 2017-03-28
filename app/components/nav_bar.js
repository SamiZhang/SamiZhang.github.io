require('style-loader!css-loader!../stylesheets/nav_bar.css');
var React = require('react');

var NavBar = React.createClass({
    render: function() {
        return (
            <nav>
                testing
            </nav>
        )
    }    
});

module.exports = NavBar;