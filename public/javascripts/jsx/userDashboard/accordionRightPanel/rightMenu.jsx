var React = require('react');
var RightMenuItem = require('./rightmenuitem');

var RightMenu = React.createClass({
	selectedHandler: function(activeMenuId) {
        this.props.displaySelectedPanel(activeMenuId);
	},
	render: function(){
        var self = this;
        var menuNodes = this.props.menuItems.map(function(item,index) {
            return (
                    <RightMenuItem key={index} activeMenuId={self.props.activeMenuId} item={item} selectHandlerCallback={self.selectedHandler} />
            );
        });

        return(
			<ul className='rightMenu nav nav-pills nav-stacked' >            
                {menuNodes}
                <li className="rightMenuFiller"> </li>
			</ul>
		)
	}
});


module.exports = RightMenu;
