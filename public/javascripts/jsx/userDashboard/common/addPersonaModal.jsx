var PersonaForm = require('./personaForm');

var AddPersonaModal = React.createClass({		
	getDefaultProps: function() {
		return {
			
		}
	},
	getInitialState: function() {
	    return {
	    	personaForm: null,
	    	personas: this.props.personas,
	    	newPersona: {}
	    }
  	},
	createPersonaHandler: function(event){
		event.preventDefault();
		if (this.props.useIPFS) {
			this.createPersonaIPFS();
		} else {
			this.createPersona();
		}		
		//calls child function	
		this.refs.formRef.resetForm();		
	},
	createPersona: function(){

		//temp
		//cannot use as reactjs inital or default props cause it will return a duplicate object when pushing to an array
		var newPersona = {
				profile_id: "12345674896", 
				image: "images/ein.jpeg",
			    show_sex: true,
			    age: "8",
			    show_age: true,
			    phone_number: "888-888-8888",
			    hometown: "Boston",
			    add_personal_info: "I have a perverse fear of cats",
			    education: "",
			    add_edu_info: "Won 5th grade spelling bee",
			    employment_history:"",
			    add_employ_info: "none",
			    political_affiliation: "democrat",
			    religion: "agnostic",
			    relationship_status: "single",
			    number_children:"9",
			    gender: "male",
			    zodiac_sign: "Aquarius",
			    languages_spoken:"swahili, mandarin, french",
			    ethnicity: "African-American",
			    more_info: "",
			    height: "5'6",
			    weight: "290 lbs",
			    hair_color: "blonde",
			    eye_color: "green",
			    phys_add_info: "",
			    add_interests_info:"",
			    score: "9/10",
			    ratings:""
			}			

		
		newPersona.id = JSON.stringify(Math.floor(Math.random()*100000000000000000));				
		newPersona.persona_name = this.state.newPersona.persona_name;
		newPersona.persona_type = this.props.personaType;
		newPersona.description = this.state.newPersona.description;
		this.props.addPersona(newPersona);
	},	
	createPersonaIPFS: function(){
		//console.log('add personas using IPFS:');
		var net = this.props.api;
		var tempSchema = net.account.schemaObject;				
		
		//default temp
		//cannot use as reactjs inital or default props cause it will return a duplicate object when pushing to an array
		var newPersona = {
				profile_id: "12345674896", 
				image: "images/ein.jpeg",
			    show_sex: true,
			    age: "8",
			    show_age: true,
			    phone_number: "888-888-8888",
			    hometown: "Boston",
			    add_personal_info: "I have a perverse fear of cats",
			    education: "",
			    add_edu_info: "Won 5th grade spelling bee",
			    employment_history:"",
			    add_employ_info: "none",
			    political_affiliation: "democrat",
			    religion: "agnostic",
			    relationship_status: "single",
			    number_children:"9",
			    gender: "male",
			    zodiac_sign: "Aquarius",
			    languages_spoken:"swahili, mandarin, french",
			    ethnicity: "African-American",
			    more_info: "",
			    height: "5'6",
			    weight: "290 lbs",
			    hair_color: "blonde",
			    eye_color: "green",
			    phys_add_info: "",
			    add_interests_info:"",
			    score: "9/10",
			    ratings:""
			}			


		newPersona.id = JSON.stringify(Math.floor(Math.random()*100000000000000000));				
		newPersona.persona_name = this.state.newPersona.persona_name;
		newPersona.persona_type = this.props.personaType;
		newPersona.description = this.state.newPersona.description;

		//console.log(tempSchema[5])
		tempSchema.push(newPersona);
		net.account.addPersona(tempSchema);
		this.props.addPersona(newPersona);	
	},			
    setPersona: function(persona){		
    	//inital
    	//TODO: rest of the fields
		this.setState({newPersona: persona});

	},
    render: function(){
        return (	           			    
		<div id="addPersonaModal" className="modal fade" role="dialog">
		    <div className="modal-dialog">
		        <div className="modal-content">
				    <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h5 className="modal-title">Add {this.props.personaType} Persona</h5>
				    </div>
				    <div className="modal-body">

				    <PersonaForm ref='formRef' personaType={this.props.personaType} setPersona={this.setPersona} activePersona={null} />

				    </div>
				    <div className="modal-footer">
				    	<button type="submit" data-toggle="modal" data-target="#addPersonaModal" className="btn btn-primary col-sm-12" onClick={this.createPersonaHandler}>Submit</button>
				    </div>
		    	</div>
		    </div>
		</div>       	
        );
    }
});

module.exports = AddPersonaModal;
