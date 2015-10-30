var React = require('react');
var RatingsPanel = require('./ratingspanel.jsx');
var RightAccordionContainer = require('./rightaccordioncontainer.jsx');

//INPUT NONE
//OUTPUT: CONTAINER FOR ACCORDION
var RightPanel = React.createClass({
	render: function(){
		return(
			<div>
				<RatingsPanel />
        <RightAccordionContainer />
      </div>
		)
	}
});

ReactDOM.render(
	<RightPanel />, 
	document.getElementById('rightControlPanel')
);