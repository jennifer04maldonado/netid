var CommunityDetailContainer = React.createClass({
	viewList: function(event){				
		this.props.viewList();
	},		
	render: function(){
		return(
			<div className="col-sm-12 bodyContent">
				<a onClick={this.viewList} href="#back"> Back </a>

				Community Detail
				<h2> {this.props.activeCommunity.id}</h2>
				<p>{this.props.activeCommunity.name}</p>
				<p>{this.props.activeCommunity.description}</p>

			</div>
		)
	}
});

module.exports = CommunityDetailContainer;
