var AddPersona = React.createClass({
	render: function(){
		var dataTarget = '#';
		if (this.props.personaType.indexOf('social')  > -1 ) {
			dataTarget += 'addSocialPersonaModal';
		} else {
			dataTarget += 'addProfessionalPersonaModal';
		}

		return(
			<div className="addPersona">
				<h5><a href="#addPersona" data-toggle="modal" data-target={dataTarget}><i className="fa fa-plus"></i>Add New</a></h5>				
			</div>
			
		)
	}
});

module.exports = AddPersona;
