var AddPersonaModal = React.createClass({		
	getDefaultProps: function() {
		return {
			//src: 'images/loading1.gif'
		}
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
		      	<form>
				    <fieldset className="form-group">
				    	<input type="name" className="form-control" id="exampleName" placeholder="Persona Name"></input>
				    </fieldset>
				    <fieldset className="form-group">
				    	<label for="personaDescription">What is your Persona like?</label>
				    	<textarea className="form-control" id="personaDescription" rows="3"></textarea>
				    </fieldset>
				    <fieldset className="form-group col-sm-6 personaAge">
				    	<label>Age</label>
				    	<input type="age" className="form-control" id="personaAge"></input>
				    </fieldset>
				    <fieldset className="form-group">
				    	<label>Sex</label>
						    <select className="form-control">
						      <option>Male</option>
						      <option>Female</option>
						    </select>
				    </fieldset>
				    <fieldset className="form-group ">
				    	<label>Relationship Status</label>
						    <select className="form-control">
						      <option>Single</option>
						      <option>Engaged</option>
						      <option>Married</option>
						      <option>Divorced</option>
						      <option>In an open relationship</option>
						    </select>
				    </fieldset>
				    <fieldset className="form-group">
				    	<label>What is your ethnicity?</label>
					    <select multiple className="form-control">
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
				    	<label for="personaHobbies">List some of your favorite Hobbies</label>
				    	<p>Separated by commas</p>
				    	<textarea className="form-control" id="personaHobbies" maxlength="150"></textarea>
				    </fieldset>	
				    <fieldset className="form-group">
				    	<label for="personaMovies">List some of your favorite Movies</label>
				    	<p>Separated by commas</p>
				    	<textarea className="form-control" id="personaMovies" maxlength="150"></textarea>
				    </fieldset>				  
				    <fieldset className="form-group">
					    <label for="exampleInputFile">Upload an Image</label>
					    <input type="file" className="form-control-file" id="exampleInputFile"></input>
				    </fieldset>
				</form>
		    </div>
		    <div className="modal-footer">
		    	<button type="submit" className="btn btn-primary col-sm-12">Submit</button>
		    </div>
		    </div>
		  </div>
		</div>        	
        );
    }
});

module.exports = AddPersonaModal;
