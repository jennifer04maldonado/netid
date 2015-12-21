var AddPersonaModal = React.createClass({		
	getDefaultProps: function() {
		return {
		}
	},
	getInitialState: function() {
	    return {
	    	personas: this.props.personas,
			newPersona: {
				persona_name: '',
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
	    }
  	},
	setForm: function() {

  	},  	
	createPersonaHandler: function(event){
		event.preventDefault();
		if (this.props.useIPFS) {
			this.createPersonaIPFS();
		} else {
			this.createPersona();
		}
		this.resetForm();
	},
	createPersona: function(){

		//temp
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
	onChangeHandler: function(event){
		//console.log('event: ' + event.target.name);
		//console.log('value: ' + event.target.value);
		var newPersona = this.state.newPersona;
		switch (event.target.name)  {
			case "name":
					newPersona.persona_name = event.target.value;
					break;
			case "personaDescription":
					newPersona.description = event.target.value;
					break;
			default: 
			
		}

		this.setState({newPersona: newPersona});
	},	
    resetForm: function(){		
    	//inital
    	//TODO: rest of the fields
    	//console.log('reseting form');
		var resetPersona = this.state.newPersona;
		resetPersona.persona_name = '';
		resetPersona.description = '';
		this.setState({newPersona: resetPersona});
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
				      	<form name="myform" ref="personaCreateForm">
						    <fieldset className="form-group">
						    	<input onChange={this.onChangeHandler} value={this.state.newPersona.persona_name} name="name" type="name" className="form-control" id="exampleName" placeholder="Persona Name"></input>
						    </fieldset>
						    <fieldset className="form-group">
						    	<label htmlFor="personaDescription">What is your Persona like?</label>
						    	<textarea onChange={this.onChangeHandler} value={this.state.newPersona.description} name="personaDescription" className="form-control" id="personaDescription" rows="3"></textarea>
						    </fieldset>
						    <fieldset className="form-group col-sm-6 personaAge">
						    	<label>Age</label>
						    	<input name="age" type="age" className="form-control" id="personaAge"></input>
						    </fieldset>
						    <fieldset className="form-group">
						    	<label>Sex</label>
								    <select name="gender" className="form-control">
								      <option>Male</option>
								      <option>Female</option>
								    </select>
						    </fieldset>
						    <fieldset className="form-group ">
						    	<label>Relationship Status</label>
								    <select name="relationshipStatus" className="form-control">
								      <option>Single</option>
								      <option>Engaged</option>
								      <option>Married</option>
								      <option>Divorced</option>
								      <option>In an open relationship</option>
								    </select>
						    </fieldset>
						    <fieldset className="form-group">
						    	<label>What is your ethnicity?</label>
							    <select name="ethnicity" multiple className="form-control">
							      <option>White/ Caucasian</option>
							      <option>Black/ African Americam</option>
							      <option>Hispanic/ Latino</option>
							      <option>Pacific Islander</option>
							      <option>Asian</option>
							      <option>Indian</option>
							      <option>Middle Eastern</option>
							    </select>
						    </fieldset>
							<fieldset className="form-group">
						    	<label htmlFor="personaHobbies">List some of your favorite Hobbies</label>
						    	<p>Separated by commas</p>
						    	<textarea name="hobbies" className="form-control" id="personaHobbies" ></textarea>
						    </fieldset>	
						    <fieldset className="form-group">
						    	<label htmlFor="personaMovies">List some of your favorite Movies</label>
						    	<p>Separated by commas</p>
						    	<textarea name="movies" className="form-control" id="personaMovies"></textarea>
						    </fieldset>				  
						    <fieldset className="form-group">
							   <label htmlFor="exampleInputFile">Upload an Image</label>
							   <input name="file" type="file" className="form-control-file" id="exampleInputFile"></input>
						    </fieldset>
						</form>
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
