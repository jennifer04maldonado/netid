var React = require('react');

var RightMenuItem = React.createClass({
	setActive: function(event) {
		var activeMenuId = event.target.dataset.menuId;
		this.props.selectHandlerCallback(activeMenuId);
	},
	render: function(){
		var self = this;
		var className = 'rightMenuItem';
		var href = '#' + this.props.title;
		var title = this.props.title;
		var image = '/images/target.jpeg';
		var menuId = this.props.menuId;

		console.log("selected: " + this.props.activeMenuId + "=" + menuId);

		if (this.props.activeMenuId == menuId) {
			className += ' selected';
		}

		return(
			<div className={className} onClick={this.setActive} data-menu-id={menuId} title={title} >
				<a href={href} data-menu-id={menuId}>
					<img src={image} data-menu-id={menuId}/>
				</a>
			</div>
		)
	}
});


module.exports = RightMenuItem;
