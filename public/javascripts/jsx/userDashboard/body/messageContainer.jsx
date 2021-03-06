var MessageContainer = React.createClass({
	getInitialState: function() {
		return {			
			fromGroup: [],
			allMessagaes: [],			
			activeMessage: '',
			activeFromId: '',
			activeFromName: '',
			activePersona: this.props.activePersona
		}	
	},	
	componentWillReceiveProps: function(nextProps) {
		if (nextProps.activePersona != this.props.activePersona) {	      	
	      	var personaId = nextProps.activePersona.id;			
	      	this.setState({activePersona: nextProps.activePersona});
	      	
		}
		if (nextProps.fromGroup != this.props.fromGroup) {	      	
      	  	this.setState({fromGroup: nextProps.fromGroup});
      	  	this.initFromActive(nextProps.fromGroup);
		}		
		if (nextProps.allMessages != this.props.allMessages) {	      	
      	  	this.setState({allMessages: nextProps.allMessages});
		}		

	},
	setActiveFrom: function(fromPersonaId, fromPersonaName) {
		// console.log('set active from');							 
  //   	console.log('id: ' + fromPersonaId);
  //   	console.log('name: ' + fromPersonaName);
    	this.setState({activeFromId: fromPersonaId});
    	this.setState({activeFromName: fromPersonaName});    	
	},
    sendMessage: function(event) {    	
    	event.preventDefault();    	
    	//console.log('message: ' + this.state.activeMessage);
    	var message = {};
    	message.id = Math.floor(Math.random()*100000000000000000);
    	message.body = this.state.activeMessage;
        message.to_persona_id = this.state.activeFromId;
        message.from_persona_name = this.state.activePersona.persona_name;
        message.from_persona_id = this.state.activePersona.id;
        message.image = this.state.activePersona.image;
        message.date = new Date();        

        this.appendToMessagesByFrom(message);
        this.setState({activeMessage: ''});

	},	
    appendToMessagesByFrom: function(message) {    	
    	var from = message.to_persona_id;
		var messages = [];
		var fromGroup =  this.state.fromGroup;
		if (fromGroup[from]) {
			messages = fromGroup[from];
			messages.push(message);
			fromGroup[from] = messages;
		} else {
			messages.push(message);
			fromGroup[from] = messages;
		}

    	this.setState({fromGroup: fromGroup});
	},		
  	initFromActive:function(fromGroup) {	
  		var count =  0;
  		var self = this;  		
		fromGroup.forEach(function(messageArray, key) {
			if (count == 0) {
				self.setState({activeFromId: messageArray[0].from_persona_id});
				self.setState({activeFromName: messageArray[0].from_persona_name});
			}
			count++;										
		});
  	},

    textHandler: function(event) {    	
    	this.setState({activeMessage: event.target.value});
	},		
  	//this sets first on list to active from email sender
	render: function(){
		var count =0;
		var self = this;
		var fromList = this.state.fromGroup.map(function(messageArray, index){				
			count++;
			return (
					<li onClick={self.setActiveFrom.bind(self,messageArray[0].from_persona_id, messageArray[0].from_persona_name)}   className={count  == 1 ? 'active' : ''} key={messageArray[0].id}><a data-toggle="tab" href={"#" + messageArray[0].from_persona_name} className="list-group-item"><span className="badge">{messageArray.length}</span><img src={messageArray[0].image}/><span className="personaName">{messageArray[0].from_persona_name}</span></a></li>					
				)						
		});

		var messageList = [];
		count = 0;
		this.state.fromGroup.forEach(function(messageArray, key) {
			// console.log('key2: ' + key);			
			// console.log('messageArray length: ' + messageArray.length);			
			var message = messageArray.map(function(message, index) {				
							// console.log('message from: ' + message.from_persona_name);
							// console.log('body ' + message.body);
							return (								
									    <a key={index} href="#" className="list-group-item">
										    <span className="time">1:44 pm</span>
										    <img src={message.image}/>
										    <span className="personaName">{message.from_persona_name}</span>
										    <p className="col-sm-offset-1">{message.body}</p>
										</a>
							)
			});
			var cssClass = 'list-group tab-pane fade in';
			count == 0 ? cssClass += ' active': '';
			count++;

			var messageWrapper = <div key={key} id={messageArray[0].from_persona_name} className={cssClass}> {message} </div>;
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
							<input value={this.state.activeMessage} onChange={this.textHandler} type="text" className="form-control msgTextField" placeholder="Post something here"></input>
							<button onClick={this.sendMessage} className="btn msgTextBtn"><i className="fa fa-paper-plane"></i></button>
						</form>
					</div>
				</div>	
			</div>
		)
	}
});

module.exports = MessageContainer;
