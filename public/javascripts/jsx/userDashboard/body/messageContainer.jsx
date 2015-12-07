

var MessageContainer = React.createClass({
	render: function(){
		return(
			<div className='bodyContent'>
				<span> messages lorem ipsem for for {this.props.activePersona.persona_name}
				</span>
			</div>
		)
	}
});

module.exports = MessageContainer;
