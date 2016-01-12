var ComposeMessageModal = require('.././common/composeMessageModal');


var MessagesContainer = React.createClass({
	getDefaultProps: function() {
	    return {
	      value: 'default value'
	    }
	},
	getInitialState: function(){		
		return {
            allMessages : [],
            personaMessages: []
        }
	},
  	componentWillReceiveProps: function(nextProps) {
				
		if (nextProps.allMessages.length > 0 && nextProps.activePersona) {	      				
			this.setState({allMessages: nextProps.allMessages});			
			var activePersonaId = nextProps.activePersona.id;
      	  	this.getMessages(activePersonaId);      	  	
		}	    
  	},	    
    componentDidMount: function(){  

    },
    setMemberPersonaId: function(event){
    	//TODO:
    	console.log('view emails from:' + event.target.dataset.fromPersonaId);   
    	var personaId = event.target.dataset.fromPersonaId;
    	this.props.setMemberPersonaId(personaId);
    },

    getMessages: function(personaId) {    
    	var thisPersonaMessages = [];
    	var self = this;
	    this.state.allMessages.forEach(function(row, index) {
	        if (personaId == row.to_persona_id) {
	          	thisPersonaMessages.push(row);	              	
	        }
    	});
    	self.setState({personaMessages: thisPersonaMessages});    	
  	}, 
	render: function(){
			var self = this;
			var messageNodes = this.state.personaMessages.map(function(message, index){
				return (
					<div className="col-sm-12 messageInd" key={message.id}>
						<ul>
							<li className="messageName"><a onClick={self.setMemberPersonaId} data-from-persona-id={message.from_persona_id} href="#">{message.from_persona_name}</a></li>
							<li>{message.date}</li>
							<li>{message.body}</li>
						</ul>
					</div>				
				);
			});

        return(
			<div id="messagesContainer">
				<div className="col-sm-12 messageTitleCntnr">
					<h5>Messages
						<a href="#composeMessageModal" data-toggle="modal" data-target="#composeMessageModal"><i className="fa fa-pencil-square-o"></i></a>	
					</h5>	
				</div>
				<div className="col-sm-12 messageSearchCntnr">
					<input type="text" className="form-control" placeholder="Search"></input>	
				</div>
				<div className="col-sm-12 messageRightContent">
					{messageNodes}	
				</div>
				<ComposeMessageModal/>				
			</div>
		)
	}
});


module.exports = MessagesContainer;
