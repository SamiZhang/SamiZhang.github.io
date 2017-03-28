require('style-loader!css-loader!../stylesheets/about.css');
var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div className="about">
                about
            </div>
        )
    }    
});

module.exports = About;