

var CommunitiesContainer = React.createClass({
	render: function(){
		return(
			<div className='bodyContent'>
				<span> Communities Container for {this.props.activePersona.persona_name} </span>
			</div>
		)
	}
});

module.exports = CommunitiesContainer;
