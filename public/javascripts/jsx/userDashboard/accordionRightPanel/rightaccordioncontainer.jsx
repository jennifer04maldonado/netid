var React = require('react');
var YourOffersPanel = require('./yourofferspanel');
var YourFriends = require('./yourfriends');

//
var RightAccordionContainer = React.createClass({
	render: function(){
		return(
			<div className="accordion2" id="accordion2">
				<YourOffersPanel />
		        <YourFriends />
		     </div>
		)
	}
});

module.exports = RightAccordionContainer;