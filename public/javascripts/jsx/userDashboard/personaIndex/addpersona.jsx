

//INPUT: NONE
//OUTPUT: CREATION OF NEW PERSONA IN PERSONA INDEX
var React = require('react');
var CollapseContainer = require('./collapseContainer');

var AddPersona = React.createClass({
	clickHandler: function() {
		console.log("calling call back" + this.props.isOpen);
		this.props.clickHandlerCallback(this.props.isOpen);
	},
	render: function(){
		var myClassName = 'col-sm-12 addPersona out';
		if (!this.props.isOpen) {
			myClassName = myClassName.replace('out', 'in');
		}
		return(
			<div className={myClassName}>
				<p><span className='panel-title'> Create New Persona
					<CollapseContainer arrowDirection={this.props.arrowDirection} collapsePersona={this.clickHandler} />
				</span>
				</p>
			</div>
		)
	}
});

module.exports = AddPersona;
