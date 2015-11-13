//INPUT: NONE
//OUTPUT: CREATION OF NEW PERSONA IN PERSONA INDEX
var React = require('react');

var AddPersona = React.createClass({
	render: function(){
		var myClassName = 'col-sm-12 addPersona out';
		if (!this.props.isOpen) {
			myClassName = myClassName.replace('out', 'in');
		}
		return(
			<div className={myClassName}>
				<p>+<span className={this.props.isOpen ? 'panel-title' : 'hidden'}> Add New Persona
				</span>
				</p>
			</div>
		)
	}
});

module.exports = AddPersona;