var AddFriendModal = React.createClass({		
	getDefaultProps: function() {
		return {
			//src: 'images/loading1.gif'
		}
	},
  	addFriend: function(event) {	    
	    event.preventDefault();
	    try {
	        var friendPersona = event.target.name.value;     
	        //console.log('addFriend' + friendPersona); 
	        if (this.props.useIPFS) {
		        //TODO: add IPFS
		        
		    } else {


		    }
	    } catch (err){
	    	console.log('error: ' + err);
	      //self.setState({status: "error", message: err})
	    } finally {
	    	//reset form
	    	event.target.name.value = '';
	    	$('#addFriendModal').modal('hide');	
	    }
		
    },
    render: function(){
        return (		   
		<div id="addFriendModal" className="modal fade" role="dialog">
			<div className="modal-dialog">
			    <div className="modal-content">
			        <div className="modal-header">
			        	<button type="button" className="close" data-dismiss="modal">&times;</button>
			        	<h4 className="modal-title">Add Friend</h4>
			        </div>
			        <div className="modal-body">
				      	<form onSubmit={this.addFriend} action="/userDashboard" method="post">
				      		<fieldset className="form-group">
						    	<label htmlFor="name"><p>Send to {this.props.sendTo} </p></label>
						    	<input className="form-control" name="name" placeholder="friend persona"/>
						    </fieldset>
			      			<div className="modal-footer">
			        			<button type="submit" className="btn btn-default col-sm-12">Add</button>
			      			</div>
				      	</form>
			      	</div>
			    </div>
			</div>
		</div>        	
        );
    }
});

module.exports = AddFriendModal;
