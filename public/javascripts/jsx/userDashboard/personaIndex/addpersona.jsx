var AddPersona = React.createClass({
	render: function(){
		return(
			<div className="addPersona">
				<h5><a href="#addPersona" data-toggle="modal" data-target={dataTarget}><i className="fa fa-plus"></i>Add New</a></h5>
		)
	}
});

module.exports = AddPersona;
