var React = require('react');

var StatsContainer = React.createClass({
	render: function(){
		return(
			<div className="col-sm-12 StatsContainer">
				<h3 className="col-sm-offset-2 statsTitle">Score Overview</h3>
				<div className="progress col-sm-8 col-sm-offset-2">
					<div className="progressOne progress-bar" role="progressbar">
					   Master Rating<br></br>60%
					</div>
					<div className="progressTwo progress-bar" role="progressbar">
					    Social<br></br>10%
					</div>
					<div className="progressThree progress-bar" role="progressbar">
					    Professional<br></br>30%
					</div>
				</div>
			</div> 
		)
	}
});

module.exports = StatsContainer;