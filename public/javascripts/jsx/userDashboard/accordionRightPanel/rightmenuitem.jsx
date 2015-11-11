var React = require('react');

//INPUT NONE
//OUTPUT: CONTAINER FOR ACCORDION
var RightMenuItem = React.createClass({

	setActive: function(event) {
		console.log('set active: ' + event.target.dataset.menuId);
		console.log('classname: ' + event.target.className);

		var activeMenuId = event.target.dataset.menuId;
		this.setState({activeMenuId: activeMenuId});
		this.props.selectHandlerCallback(activeMenuId);
	},
	getInitialState: function(){
		return {
			activeMenuId: ''
		}
	},
	render: function(){
		var self = this;
		var className = 'rightMenuItem';
		var href = '#' + this.props.title;
		var title = this.props.title;
		var image = '/images/target.jpeg';
		var menuId = this.props.menuId;

		console.log(this.state.activeMenuId + "=" + menuId);

		if (this.state.activeMenuId == menuId) {
			className+= ' selected';
		}

		return(
			<div className={className}>
				<a href={href} >
					<img src={image} onClick={this.setActive} data-menu-id={menuId} title={title} />
				</a>
			</div>
		)
	}
});


module.exports = RightMenuItem;
