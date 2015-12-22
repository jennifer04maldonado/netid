var PersonaForm = require('./personaForm');

var EditPersonaModal = React.createClass({		
	getDefaultProps: function() {
		return {
			readOnly: false
		}
	},
   	getInitialState: function() {
	    return {
	    	persona: this.props.activePersona
	    }
	},
	//method to update persona
   	updatePersona: function(event) {
		event.preventDefault();
		console.log("TODO: update persona");
	},

    render: function(){
        return (	           			    
		<div id="editPersonaModal" className="modal fade" role="dialog">
		    <div className="modal-dialog">
		        <div className="modal-content">
				    <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h5 className="modal-title">Edit Persona</h5>
				    </div>
				    <div className="modal-body">
				    	<PersonaForm activePersona={this.props.activePersona} />
				    </div>
				    <div className="modal-footer">
				    	<button data-toggle="modal" data-target="#editPersonaModal" onClick={this.updatePersona} type="submit" className={this.props.readOnly ? "hidden" : "btn btn-primary col-sm-12"}>Update</button>
				    </div>
		    	</div>
		    </div>
		</div>       	
        );
    }
});

module.exports = EditPersonaModal;
