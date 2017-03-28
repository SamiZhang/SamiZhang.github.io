require('style-loader!css-loader!../stylesheets/contact.css');
var React = require('react');

var Contact = React.createClass({
    render: function() {
        return (
            <div className="contact">
                contact
            </div>
        )
    }    
});

module.exports = Contact;