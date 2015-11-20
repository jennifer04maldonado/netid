
var React = require('react');
var RightMenu = require('./rightMenu');

var RightMenuContainer = React.createClass({

	displaySelectedPanel: function(activeMenuId) {
		this.props.displaySelectedPanel(activeMenuId);
	},

	render: function(){
		return(
			<div className="accordion2" id="accordion2">
		    	<RightMenu activeMenuId={this.props.activeMenuId} displaySelectedPanel={this.displaySelectedPanel} menuItems={this.props.menuItems}/>
			</div>
		)
	}
});
module.exports = RightMenuContainer;