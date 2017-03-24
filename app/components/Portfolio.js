require('style-loader!css-loader!./Portfolio.css');

var React = require('react');
var ReactDOM = require('react-dom');


var Portfolio = React.createClass({
    render: function () {
        return (
            <div className="portfolio">
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


ReactDOM.render(<Portfolio />, document.getElementById('app'))
