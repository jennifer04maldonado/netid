//INPUT: NONE
//OUTPUT: CREATION OF NEW PERSONA IN PERSONA INDEX
var React = require('react');

var AddPersona = React.createClass({
	render: function(){
		return(
			<div className="col-sm-12 addPersona">
				<p>Add New Persona</p>
			</div>
		)
	}
});

module.exports = AddPersona;