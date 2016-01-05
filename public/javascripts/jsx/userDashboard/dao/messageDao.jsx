var MessageDao = {
	getInitialState: function() {
		return {
			fromGroup: [],
			allMessages: []
			}	
	},	
	componentWillUpdate: function(nextProps, nextState) {		
	 	if (nextState.activePersona !== this.state.activePersona) {
	  // 		console.log('init community this persona: ' + this.state.activePersona);
			// console.log('init community next persona:' + nextState.activePersona);
			var personaId = nextState.activePersona.id;     
			var self = this;	    	
			if (this.props.useIPFS) {
				this.getAllMessagesIPFS(function (){
					self.setGroupMessagesByFrom(personaId);					
				});    			
			} else {
				this.getAllMessages(function (){	
					self.setGroupMessagesByFrom(personaId);
				});				
			}
	  	}
	  	if (nextState.allMessages !== this.state.allMessages)  {
	  		this.setSortedMessagesByPersonas(nextState.allMessages);
	  	}
	},	
    getAllMessagesIPFS: function(done) {    					
	  	var net = this.state.api;	    
	   	net.account.getAllMessages();		  
	    net.account.ee.on('allMessages',err => {		    	
	    	var result = net.account.allMessages;
	    	this.setState({allMessages: result});      					
	    	done();
	     });

	},
    getAllMessages: function(done) {        	
    	var self = this;    	
	    $.get('.././json_files/data/netid-account/personas/messages.json', function(result) {
	    	self.setState({allMessages: result});      		
	    	done();
    	});
    	
  	}, 	
    setGroupMessagesByFrom: function(personaId) {        
    	var fromGroup = [];				             	          	   	
	    var self = this;	
    	
    	var allMessages = this.state.allMessages;

    	for (var i=0; i < allMessages.length; i++) {
        	if (personaId ==  allMessages[i].to_persona_id) {
        		//console.log('from persona: ' + result[i].from_persona_name);
        		var from = allMessages[i].from_persona_id;
        		var messages = [];
        		if (fromGroup[from]) {
        			messages = fromGroup[from];
        			messages.push(allMessages[i]);
        			fromGroup[from] = messages;
        		} else {
        			messages.push(allMessages[i]);
					fromGroup[from] = messages;
        		}
        	}
      	}
		self.setState({fromGroup: fromGroup});
		self.setFromActive();

    },
  	//this sets first on list to active from email sender  	
  	setFromActive:function() {
  		
  		var count =  0;
  		var self = this;
		this.state.fromGroup.forEach(function(messageArray, key) {
			if (count == 0) {
				self.setState({activeFromId: messageArray[0].from_persona_id});
				self.setState({activeFromName: messageArray[0].from_persona_name});
			}
			count++;										
		});
  	},    
    setSortedMessagesByPersonas: function(allMessages) {        
    	var messages = [];				             	          	   	
	    var self = this;	
    	var personaIds = [];
    	//we only need the ids
    	this.state.personas.forEach(function (persona, index) {
    			personaIds.push(persona.id);
    	});

		allMessages.forEach(function (message, index) {			
			if (personaIds.indexOf(message.to_persona_id) > -1) {        		        		
        		var temp = [];
        		if (messages[message.to_persona_id]) {
        			temp = messages[message.to_persona_id];
        			temp.push(message);
        			messages[message.to_persona_id] = temp;
        		} else {					
					temp.push(message);
        			messages[message.to_persona_id] = temp;
        		}
			}

		});
		self.setState({messagesSortedByPersonas: messages});
    }

};

module.exports = MessageDao;
