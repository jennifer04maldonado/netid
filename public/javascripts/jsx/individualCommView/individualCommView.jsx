


//INPUT: DATA OBJECT FROM AJAX CALL INITIATED BY CLICKING IN PERSONA PANEL
//OUTPUT: THE POSTS AND VIEWS OF EACH COMMUNITY CREATED

var React = require('react');
var CommHeading = require('./commheading.jsx');
var PostPanel = require('./postpanel.jsx');
var CommPost = require('./commpost.jsx');

var IndCommView = React.createClass({
	render: function(){
		return (
			<div>
				<CommHeading />
				<PostPanel />
				<CommPost />
			</div>
		)
	}
});
ReactDOM.render(
	<IndCommView />, 
	document.getElementById('viewPort')
);