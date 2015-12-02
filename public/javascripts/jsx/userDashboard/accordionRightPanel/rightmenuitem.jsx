var React = require('react');

var RightMenuItem = React.createClass({
	setActive: function(event) {
		var activeMenuId = event.target.dataset.menuId;
		this.props.selectHandlerCallback(activeMenuId);
	},
	render: function(){
		var self = this;
		var className = 'rightMenuItem';
		var href = '#' + this.props.item.title;
		var title = this.props.item.title;
		var image = this.props.item.image;
		var menuId = this.props.item.id;

		//console.log("selected: " + this.props.activeMenuId + "=" + menuId);

		if (this.props.activeMenuId == menuId) {
			className += ' active';
		}

		return(
			<li className={className} onClick={this.setActive} data-menu-id={menuId} title={title} >
				<a href={href} data-menu-id={menuId}>
					<img src={image} data-menu-id={menuId}/>
				</a>
			</li>
		)
	}
});


module.exports = RightMenuItem;
