var AddPersonaModal = React.createClass({		
	getInitialState: function() {
	    return {
	    	value: ''
	    }
  	},
	createPersona: function(){
		var net = this.props.api
		var tempSchema = net.account.schemaObject
		console.log(tempSchema[0])
		var i = tempSchema.length
		tempSchema[i] = {
			id: JSON.stringify(Math.random()*100000000000000000), 
			persona_name: this.refs.personaCreateForm.name.value, 
			profile_id: "12345674896", 
			persona_type: this.props.personaType, 
			description: this.refs.personaCreateForm.personaDescription.value, 
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
		console.log(tempSchema[5])
		net.account.addPersona(tempSchema)
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
						    	<input name="name" type="name" className="form-control" id="exampleName" placeholder="Persona Name"></input>
						    </fieldset>
						    <fieldset className="form-group">
						    	<label htmlFor="personaDescription">What is your Persona like?</label>
						    	<textarea name="personaDescription" className="form-control" id="personaDescription" rows="3"></textarea>
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
				    	<button type="submit" className="btn btn-primary col-sm-12" onClick={this.createPersona}>Submit</button>
				    </div>
		    	</div>
		    </div>
		</div>       	
        );
    }
});

module.exports = AddPersonaModal;
