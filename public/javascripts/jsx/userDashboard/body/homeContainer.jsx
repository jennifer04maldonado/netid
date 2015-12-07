

var HomeContainer = React.createClass({
	render: function(){
		return(
			<div className='bodyContent'>
				<span> This is where feeds will go for {this.props.activePersona ? this.props.activePersona.persona_name: ''}
				</span>
			</div>
		)
	}
});

module.exports = HomeContainer;
