var MessageModal = React.createClass({		
	getDefaultProps: function() {
		return {
			//src: 'images/loading1.gif'
		}
	},

    render: function(){
        return (		   
		<div id="messageModal" className="modal fade" role="dialog">
			<div className="modal-dialog">
			    <div className="modal-content">
			        <div className="modal-header">
			        	<button type="button" className="close" data-dismiss="modal">&times;</button>
			        	<h4 className="modal-title">Send Message</h4>
			        </div>
			        <div className="modal-body">
				      	<form>
				      		<fieldset className="form-group">
						    	<label htmlFor="personaDescription"><p>Send to {this.props.sendTo} </p></label>
						    	<textarea className="form-control" id="personaDescription" rows="4" placeholder="Write message"></textarea>
						    </fieldset>
				      	</form>
			      	</div>
			      	<div className="modal-footer">
			        	<button type="button" className="btn btn-default col-sm-12" data-dismiss="modal">Send</button>
			      	</div>
			    </div>
			</div>
		</div>        	
        );
    }
});

module.exports = MessageModal;
