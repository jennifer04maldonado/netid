var MessageContainer = React.createClass({
	getInitialState: function() {
		return {
			personas: this.props.personas,
			fromGroup: []

		}	
	},	
	componentWillReceiveProps: function(nextProps) {
		if (nextProps.activePersona !== this.props.activePersona) {	      	
	      	var personaId = nextProps.activePersona.id;			
			if (this.props.useIPFS) {
				this.getMessagesIPFS(personaId);
			} else {
				this.getMessages(personaId);
			}			
		}
	},
    getMessagesIPFS: function(personaId) {    	

	},
    getMessages: function(personaId) {        	
    	var self = this;
	    $.get('.././json_files/data/netid-account/personas/messages.json', function(result) {
	    	if (self.isMounted()) {  	
	    		var fromGroup = [];				             	          
	        	for (var i=0; i < result.length; i++) {
	            	if (personaId == result[i].to_persona_id) {
	            		//console.log('from persona: ' + result[i].from_persona_name);
	            		var from = result[i].from_persona_id;
	            		var messages = [];
	            		if (fromGroup[from]) {
	            			messages = fromGroup[from];
	            			messages.push(result[i]);
	            			fromGroup[from] = messages;
	            		} else {
	            			messages.push(result[i]);
							fromGroup[from] = messages;
	            		}
	            	}
	          	}
	    		self.setState({fromGroup: fromGroup});
	      	}
    	});
    	
  	}, 	
	render: function(){
		var fromList = this.state.fromGroup.map(function(messageArray, index){				
			return (
					<li key={messageArray[0].id}><a data-toggle="tab" href={"#" + messageArray[0].from_persona_name} className="list-group-item"><span className="badge">{messageArray.length}</span><img src={""}/><span className="personaName">{messageArray[0].from_persona_name}</span></a></li>
				)			
		});


		var messageList = [];
		this.state.fromGroup.forEach(function(messageArray, key) {
			// console.log('key2: ' + key);			
			// console.log('messageArray length: ' + messageArray.length);			
			var message = messageArray.map(function(message, index) {				
							// console.log('message from: ' + message.from_persona_name);
							// console.log('body ' + message.body);
							return (								
									    <a key={index} href="#" className="list-group-item">
										    <span className="time">1:44 pm</span>
										    <img src={"/images/ein.jpeg"}/>
										    <span className="personaName">{message.from_persona_name}</span>
										    <p className="col-sm-offset-1">{message.body}</p>
										</a>
							)
			});
			var messageWrapper = <div key={key} id={messageArray[0].from_persona_name} className="list-group tab-pane fade in"> {message} </div>;
			messageList.push(messageWrapper);
		});

		return(
			<div className="col-sm-12 messageContent">
				<div className="col-sm-12 msgTitle">
					<h4><i className="fa fa-envelope"></i>Messages</h4>
				</div>
				<div className="col-sm-12 msgPersonaIndex">
					<div className="col-sm-3 msgLeftList">
						<input type="text" className="form-control" placeholder="Search"></input>
						<ul className="list-group nav nav-pills nav-stacked">
							{fromList}
						</ul>
					</div>	
					<div className="col-sm-9 msgRightContent tab-content">		
					{messageList}
					<form>
							<input type="text" className="form-control msgTextField" placeholder="Post something here"></input>
							<button className="btn msgTextBtn"><i className="fa fa-paper-plane"></i></button>
						</form>
					</div>
				</div>	
			</div>
		)
	}
});

module.exports = MessageContainer;
