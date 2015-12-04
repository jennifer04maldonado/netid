
//INPUT: NONE
//OUTPUT: CREATION OF NEW PERSONA IN PERSONA INDEX


var AddPersona = React.createClass({
	render: function(){
		var myClassName = '';
		if (!this.props.isOpen) {
			myClassName = myClassName.replace('out', 'in');
		}
		return(
			<div className={myClassName}>
			</div>
		)
	}
});

module.exports = AddPersona;
