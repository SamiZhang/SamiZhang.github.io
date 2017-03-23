var React = require('react');
var ReactDOM = require('react-dom');


var Portfolio = React.createClass({
    render: function () {
        return (
            <div> 
                Bello World
            </div>
        )
    }
});


ReactDOM.render(<Portfolio />, document.getElementById('app'))
