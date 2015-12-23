var PersonaValidation = require('./../mixins/personaValidation');

var PersonaForm = React.createClass({		
	mixins: [PersonaValidation],
  	//TODO: do the rest of fields
  	//constratins on fields
   	getInitialState: function() {
	    return {
	    	persona: this.props.activePersona
	    }
	},
    //validation
	onChangeHandler: function(event){
		// console.log('event: ' + event.target.name);
		// console.log('value: ' + event.target.value);
		//TODO: validation

		var persona = this.state.persona;
		var elementName = event.target.name;

		switch (elementName)  {
			case "name":
					persona.persona_name = event.target.value;
					break;
			case "personaDescription":
					persona.description = event.target.value;
					break;
			case "age":
					persona.age = event.target.value;
					break;
			case "gender":
					persona.gener = event.target.value;
					break;
			case "relationshipStatus":
					persona.relationship_status = event.target.value;
					break;
			case "personaType":
					persona.persona_type = event.target.value;
					break;
			default: 			
		}
		this.setState({persona: persona});
		this.props.setPersona(persona);		
	},
    render: function(){
    	var persona = this.state.persona;
        return (	           			    
	      	<form name="myform" ref="personaCreateForm">
			    <fieldset className="form-group">
			    	<input  onChange={this.onChangeHandler} value={persona ? persona.persona_name: ''} name="name" type="name" className="form-control" id="exampleName" placeholder="Persona Name"></input>
			    </fieldset>
			    <fieldset className="form-group">
			    	<label htmlFor="personaDescription">What is your Persona like?</label>
			    	<textarea  onChange={this.onChangeHandler} value={persona ? persona.description: ''} name="personaDescription" className="form-control" id="personaDescription" rows="3"></textarea>
			    </fieldset>
			    <fieldset className="form-group col-sm-6 personaAge">
			    	<label>Age</label>
			    	<input onChange={this.onChangeHandler} value={persona ? persona.age: ''} name="age" type="age" className="form-control" id="personaAge"></input>
			    </fieldset>
			    <fieldset className="form-group">
			    	<label>Sex</label>
					    <select onChange={this.onChangeHandler} name="gender" className="form-control" value={persona ? persona.gender : ''}>
					      <option value="Male">Male</option>
					      <option value="Female">Female</option>
					    </select>
			    </fieldset>
			    <fieldset className="form-group col-sm-6 relationshipField">
			    	<label>Relationship Status</label>
					    <select onChange={this.onChangeHandler} name="relationshipStatus" className="form-control" value={persona ? persona.relationship_status : ''}>
					      <option value="Single">Single</option>
					      <option value="Engaged">Engaged</option>
					      <option value="Married">Married</option>
					      <option value="Divorced">Divorced</option>
					      <option value="Open">In an open relationship</option>
					    </select>
			    </fieldset>
			    <fieldset className="form-group ">
			    	<label>Persona Type</label>
					    <select onChange={this.onChangeHandler} name="personType" className="form-control" value={persona ? this.state.persona.persona_type: ''}>
					      <option>Social</option>
					      <option>Professional</option>
					    </select>
			    </fieldset>

			    <fieldset className="form-group">
			    	<label>What is your ethnicity?</label>
				    <select name="ethnicity" multiple className="form-control" >
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
			    	<label htmlFor="personaMovies">List soome of your favorite Movies</label>
			    	<p>Separated by commas</p>
			    	<textarea name="movies" className="form-control" id="personaMovies"></textarea>
			    </fieldset>				  
			    <fieldset className="form-group">
				   <label htmlFor="exampleInputFile">Upload an Image</label>
				   <input name="file" type="file" className="form-control-file" id="exampleInputFile"></input>
			    </fieldset>	
			</form>
		);
    }
});

module.exports = PersonaForm;
