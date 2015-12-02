

var RightMenuItem = require('./rightmenuitem');

var RightMenuContainer = React.createClass({

	displaySelectedPanel: function(activeMenuId) {
		this.props.displaySelectedPanel(activeMenuId);
	},

	render: function(){
		var self = this;
        var menuNodes = this.props.menuItems.map(function(item,index) {
            return (
                    <RightMenuItem key={index} selectedMenuId={self.props.selectedMenuId} item={item} selectHandlerCallback={self.displaySelectedPanel} />
            );
        })
		return(
			<div className="accordion2" id="accordion2">
				<ul className='rightMenu nav nav-pills nav-stacked' >            
                	{menuNodes}
                	<li className="rightMenuFiller"> </li>
				</ul>		    	
			</div>
		)
	}
});
module.exports = RightMenuContainer;