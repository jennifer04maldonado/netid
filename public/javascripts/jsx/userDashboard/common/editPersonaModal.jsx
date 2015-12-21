var EditPersonaModal = React.createClass({		
   
    render: function(){
        return (	           			    
		<div id="editPersonaModal" className="modal fade" role="dialog">
		    <div className="modal-dialog">
		        <div className="modal-content">
				    <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h5 className="modal-title">Edit Persona</h5>
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
						    <fieldset className="form-group col-sm-6 relationshipField">
						    	<label>Relationship Status</label>
								    <select name="relationshipStatus" className="form-control">
								      <option>Single</option>
								      <option>Engaged</option>
								      <option>Married</option>
								      <option>Divorced</option>
								      <option>In an open relationship</option>
								    </select>
						    </fieldset>
						    <fieldset className="form-group ">
						    	<label>Persona Type</label>
								    <select name="personType" className="form-control">
								      <option>Social</option>
								      <option>Professional</option>
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
						    <fieldset className="form-group">
							    <div className="dropup col-sm-12">
								    <button className="btn btn-default dropdown-toggle col-sm-3" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
								        Change Color
								        <span className="caret"></span>
								    </button>
									    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
										    <div className="col-sm-12 colorPicker">
											    <a href="#">	
											    	<div className="col-sm-4 colorBox1"></div>
											    </a>	
										    	<a href="#">	
											    	<div className="col-sm-4 colorBox2"></div>
											    </a>	
										    	<a href="#">	
											    	<div className="col-sm-4 colorBox3"></div>
											    </a>		
										    </div>
										    <div className="col-sm-12 colorPicker">
											    <a href="#">	
											    	<div className="col-sm-4 colorBox4"></div>
											    </a>	
										    	<a href="#">	
											    	<div className="col-sm-4 colorBox5"></div>
											    </a>	
										    	<a href="#">	
											    	<div className="col-sm-4 colorBox6"></div>
											    </a>		
										    </div>
									  	</ul>
								  	<a href="#">	
										<div className="colorBoxSelect col-sm-3"></div>
									</a>
								</div>
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

module.exports = EditPersonaModal;