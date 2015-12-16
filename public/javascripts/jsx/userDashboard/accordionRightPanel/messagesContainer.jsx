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
		 if (nextProps.activePersona !== this.props.activePersona) {
		    var activePersonaId = nextProps.activePersona.id;
	    	if(this.props.useIPFS){
	    		this.getMessagesIPFS(activePersonaId);
	    	} else {
	    		this.getMessages(activePersonaId);
	    	}	
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
    	//console.log('finding personaId: '+ personaId);
	    var net = this.props.api;
	    var messages = net.account.getMessages();
	    if (this.isMounted()) { 
	      net.account.ee.on('message',err => {
	        //console.log('Freind Object Received '+ net.account.friendsList.length+' friends')
	        var allMessages = net.account.messagesList;
	        var thisPersonaMessages = [];
	        for (var i=0; i < net.account.messagesList.length; i++) {
	        	//console.log('persona name: '+ net.account.messagesList[i].from_persona_name);
	          if (personaId == net.account.messagesList[i].to_persona_id) {
	              thisPersonaMessages.push(net.account.messagesList[i]);
	          }
	        }
	        this.setState({personaMessages: thisPersonaMessages});
	      }) 
	    } 
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
