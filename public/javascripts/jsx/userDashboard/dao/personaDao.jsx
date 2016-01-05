var PersonaDao = {
	getInitialState: function(){		
		return {
            personas : [],
            allPersonas: [],            
            activePersona: null
            }
	},	
	componentWillUpdate: function(nextProps, nextState) {		
	 	if (nextState.activePersona !== this.state.activePersona) {
	  // 		console.log('init personas this persona: ' + this.state.activePersona);
			// console.log('init personas  next persona:' + nextState.activePersona);
			if (this.props.useIPFS) {
				this.getAllPersonasIPFS(nextState.activePersona);
			} else {
				this.getAllPersonas(nextState.activePersona);
			}
	  	}
	},	
	setActivePersona: function(activePersonaId) {
		var self = this;
		$.each(this.state.personas, function (index,  persona) {
			//console.log('"persona id:" + persona.id);
			//console.log("persona name:" + persona.persona_name);			
			if (activePersonaId == persona.id) {
				//console.log('seting active persona: ' + persona.persona_name);
				self.setState({
					activePersona: persona,
					viewMemberPersona:false
				});
			}
		});		
	},
	//when user clicks user link, it renders their information in the profile tab
	setMemberPersona: function(personaId) {
		//console.log('getting persona for personaId: ' + personaId);
		var self = this;
		this.getPersonaByPersonaId(personaId, function(persona) {			
			self.setState({viewMemberPersona: true});
			self.setState({memberPersona: persona});
		});

	},		
    getPersonaByPersonaId: function(personaId,done){
		//console.log("getting persona from table. id= " + personaId);	    
	    $.each(this.state.allPersonas, function (index,  persona) {
	      if (personaId == persona.persona_id) {
	        //console.log("found persona activePersonaId =" + persona.persona_id);	        
	        done(persona);
	      }
	    });				
    },
                   
    updatePersonas: function(tempSchema){
    	//console.log("updating personas: " + tempSchema);
    	var self = this;
    	self.setState({ 
        	personas: tempSchema
        });
    },
    addPersona: function(newPersona){
		var myPersonas = this.state.personas;
		myPersonas.push(newPersona);
		this.setState({ personas: myPersonas })    		  		
    },
    setAddPersonaType: function(personaType) {
    	this.setState({personaType: personaType});
    },    

    getAllPersonas: function(){
		var self = this;
		if (this.state.allPersonas.length == 0) {
			//console.log("Pre loading all personas from ajax");
			$.get( ".././json_files/data/netid-account/personas/personaTable.json", function( result, status ) {
			  	//console.log('result size: '  + result.length);	
				if (status == 'success') {				   
		         	self.setState({allPersonas: result});
			 	}	 
			});			
		} 		
	},
    getAllPersonasIPFS: function() {
    	//load only once
		if (this.state.allPersonas.length == 0) {
			//console.log("Pre loading all personas from IPFS");
			//only load once
		  	var net = this.state.api;	    
	       	var allPersonas = net.account.loadPersonaTable();		    		       	
		    net.account.ee.on('personaTable',err => {
		    	 this.setState({allPersonas: net.account.personaTable});		         
		     });
		}
	}
};


module.exports = PersonaDao;
