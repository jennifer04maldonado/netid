var React = require('react');
var RightMenuItem = require('./rightmenuitem');

//INPUT NONE
//OUTPUT: CONTAINER FOR ACCORDION
var RightMenu = React.createClass({
	getInitialState: function(){
		return {
			activeMenuId: ''
		}
	},
	selectedHandler: function(activeMenuId) {
		console.log('call back3: ' + activeMenuId);
        this.props.displaySelectedPanel(activeMenuId);
		//this.setState({
			//selectedItem: activeItem
		//});

	},
	render: function(){
        var self = this;
        var menuNodes = this.props.menuItems.map(function(item,index) {
            console.log('menu chosen -->' + item.id);
            console.log('menu chosen -->' + item.title);
            return (
                    <RightMenuItem key={index} menuId={item.id} selectHandlerCallback={self.selectedHandler}  title={item.title}/>
            );
        });

        return(
			<div className='rightMenu'>
                {menuNodes}
                <div className="rightMenuFiller"> </div>
			</div>
		)
	}
});


module.exports = RightMenu;
