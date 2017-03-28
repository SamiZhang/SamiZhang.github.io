require('style-loader!css-loader!../stylesheets/home.css');
var React = require('react');

var Home = React.createClass ({
    render: function () {
        return (
            <div className="home">
                <img className="background_img" src="./img/relax.gif" />
                
                <div className="name">
                   [Sami-Z]    
                </div>
                <div className="title">
                    Full Stack Developer
                </div>
            </div>        
        )
    }
});

module.exports = Home;