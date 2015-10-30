var React = require('react');

//INPUT: NONE
//OUTPUT: STATIC DATA
var RatingsPanel = React.createClass({
	render: function(){
		return(
			<div className="col-sm-12 ratingsPanel">
	          My Ratings 
	          <a className="col-sm-offset-6 masterScore" href="#">78</a> 
	          <a href="#" className="socialScore">45</a> 
	          <a href="#" className="professionalScore">81</a>
     		</div>
		)
	}
});

module.exports = RatingsPanel;