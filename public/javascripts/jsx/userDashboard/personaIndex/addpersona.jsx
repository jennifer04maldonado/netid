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
				<h4><a href="#addPersona" data-toggle="modal" data-target={dataTarget}> + add persona </a></h4>				
			</div>
			
		)
	}
});

module.exports = AddPersona;
