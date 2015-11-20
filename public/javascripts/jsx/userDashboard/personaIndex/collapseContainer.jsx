//INPUT: NONE
//OUTPUT: CREATION OF NEW PERSONA IN PERSONA INDEX
var React = require('react');

var CollapseContainer = React.createClass({
	getInitialState: function() {
		return {
			arrowDirection: '<<'
		}
	},
	clickCollapse1: function(event) {
		this.props.collapsePersona();
		var arrowDir = '<<';
		if (this.state.arrowDirection == '<<') {
			arrowDir = '>>';
		};
		this.setState({arrowDirection: arrowDir});	
	},
	render: function(){
		return(
			<div className='col-sm-9' id='collapseContainer'>
				<a className='collapseLink' href='#' id='leftCollapseImg' onClick={this.clickCollapse1} > 
					{this.state.arrowDirection}
				</a>
			</div>
		)
	}
});

module.exports = CollapseContainer;