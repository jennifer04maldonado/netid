//INPUT: NONE
//OUTPUT: CREATION OF NEW PERSONA IN PERSONA INDEX
var React = require('react');


var CollapseContainer = React.createClass({
	clickHandler: function() {
		this.props.collapsePersona();

	},
	render: function(){
		return(
			<div className="collapseContainer">
				<input id="leftCollapseImg" data-toggle="collapse" type="button" data-target="collapse" value={this.props.arrowDirection} onClick={this.clickHandler}/>
			</div>
		)
	}
});

module.exports = CollapseContainer;