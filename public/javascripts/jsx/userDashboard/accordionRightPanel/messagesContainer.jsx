var MessagesContainer = React.createClass({
	getDefaultProps: function() {
	    return {
	      value: 'default value'
	    };
	},
	getInitialState: function(){		
		return {
            allMessages : [],
            personaMessages: []
        }
	},
  	componentWillReceiveProps: function(nextProps) {
		//console.log('componentWillReceiveProps: ' + nextProps.activePersona.id);
	    var activePersonaId = nextProps.activePersona.id;
    	if(this.props.useIPFS){
    		this.getMessagesIPFS(activePersonaId);
    	} else {
    		this.getMessages(activePersonaId);
    	}	
  	},	    
    componentDidMount: function(){
    },
    setEmail: function(){
    	//TODO:
    	//console.log('view emailss');
    },

    getMessages: function(personaId) {    
    	var thisPersonaMessages = [];
    	var self = this;
	    $.get('.././json_files/data/netid-account/personas/messages.json', function(result) {
	    	if (self.isMounted()) {  					             	          
	        	for (var i=0; i < result.length; i++) {
	            	if (personaId == result[i].to_persona_id) {
	            		//console.log('1 personaid: ' + result[i].from_persona_name);
	              		thisPersonaMessages.push(result[i]);	              	
	            	}
	          	}
	    		self.setState({personaMessages: thisPersonaMessages});
	      	}
    	});
    	
  	}, 
    getMessagesIPFS: function(personaId) {    
	
	},
	render: function(){
			var self = this;
			var messageNodes = this.state.personaMessages.map(function(message, index){
				return (
						<div className="col-sm-12 messageInd" key={message.id}>
							<ul>
								<li className="messageName"><a onClick={self.setEmail} data-from-persona-id={message.from_persona_id} href="#">{message.from_persona_name}</a></li>
								<li>{message.date}</li>
								<li>{message.body}</li>
							</ul>
						</div>				
				);
			});

        return(
			<div id='messagesContainer'>
				<div className="col-sm-12 messageTitleCntnr">
					<h5>Messages
						<a href="#">
							<i className="fa fa-pencil-square-o"></i>
						</a>	
					</h5>	
				</div>
				<div className="col-sm-12 messageSearchCntnr">
					<input type="text" className="form-control" placeholder="Search"></input>	
				</div>
				<div className="col-sm-12 messageRightContent">
					{messageNodes}
				</div>
			</div>
		)
	}
});


module.exports = MessagesContainer;
