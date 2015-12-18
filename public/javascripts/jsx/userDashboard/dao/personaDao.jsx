var PersonaDao = React.createClass({
	getDefaultProps: function() {		
	    return {
	      //useIPFS: false
	    };
	},
	getInitialState: function(){		
		return {
          isLoaded: false  
        }
	},
  	componentWillReceiveProps: function(nextProps) {    
	    if (nextProps.activePersona !== this.props.activePersona) {	    	
			if (nextProps.useIPFS) {
				this.getAllPersonasIPFS();
			} else {
				this.getAllPersonas();
			}
	    }
  	},    

    componentDidMount: function(){    

	},    
    getAllPersonas: function(){
		var self = this;
		if (!this.state.isLoaded) {
			//console.log("Pre loading all personas from ajax");
			$.get( ".././json_files/data/netid-account/personas/personaTable.json", function( result, status ) {
			  	//console.log('result size: '  + result.length);	
				if (status == 'success') {				   
		         	self.props.setAllPersonas(result);
		         	self.setState({isLoaded: true});
			 	}	 
			});			
		} 		
	},
    getAllPersonasIPFS: function() {
		if (!this.state.isLoaded) {
			//console.log("Pre loading all personas from IPFS");
			//only load once
		  	var net = this.props.api;	    
	       	var allPersonas = net.account.loadPersonaTable();		    		       	
		    net.account.ee.on('personaTable',err => {
		         this.props.setAllPersonas(net.account.personaTable);
		         this.setState({isLoaded: true});
		     });
		}
	},
	render: function(){
        return(
			<div>
			</div>
		)
	}
});


module.exports = PersonaDao;
