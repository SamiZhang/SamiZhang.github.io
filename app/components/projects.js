require('style-loader!css-loader!../stylesheets/projects.css');
var React = require('react');

var Projects = React.createClass({
    render: function() {
        return (
            <div className="projects">
                projects
            </div>
        )
    }    
});

module.exports = Projects;