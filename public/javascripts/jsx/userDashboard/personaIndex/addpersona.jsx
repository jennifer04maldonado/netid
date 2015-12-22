var AddPersona = React.createClass({
	setAddPersonaType: function(personaType) {
		this.props.setAddPersonaType(personaType);
	},
	render: function(){
		return(
			<div className="addPersona">
				<h5><a href="#addPersona" onClick={this.setAddPersonaType.bind(this, this.props.personaType)} data-toggle="modal" data-target="#addPersonaModal"><i className="fa fa-plus"></i>Add New</a></h5>
			</div>
		)
	}
});

module.exports = AddPersona;
