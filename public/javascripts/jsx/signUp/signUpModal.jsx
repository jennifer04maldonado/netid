var LoadingModalComponent = require('../userDashboard/common/loadingModal')
var NetidAPI = require('../../libraries/netid-api-wrapper.js')
var SignUpModal = React.createClass({
  getInitialState: function() {
    return {
      showLoading: false
    }
  },   
  createNetidAccount: function(e) {
    var newAccount = {
        profile_id: "", 
        persona_name: "",
        persona_type: "",
        image: "",
        show_sex: true,
        age: "",
        show_age: true,
        phone_number: "888-888-8888",
        hometown: "",
        add_personal_info: "",
        education: "",
        add_edu_info: "",
        employment_history:"",
        add_employ_info: "",
        political_affiliation: "",
        religion: "",
        relationship_status: "",
        number_children:"",
        gender: "",
        zodiac_sign: "",
        languages_spoken:"",
        ethnicity: "",
        more_info: "",
        height: "",
        weight: "",
        hair_color: "",
        eye_color: "g",
        phys_add_info: "",
        add_interests_info:"",
        score: "",
        ratings:"",
        movies: ""
    }
    newAccount.profile_id = JSON.stringify(Math.floor(Math.random()*100000000000000000))
    newAccount.persona_name = this.refs.cname.value
    newAccount.image = this.refs.cfile.value
    newAccount.age = this.refs.cage.value
    newAccount.add_personal_info = this.refs.ctext.value
    newAccount.gender = this.refs.cgender.value
    newAccount.relationship_status = this.refs.crelation.value
    newAccount.persona_type = this.refs.ctype.value
    newAccount.ethnicity = this.refs.cethnicity.value
    newAccount.add_interests_info = this.refs.chobbies.value
    newAccount.movies = this.refs.cmovies.value
    this.setState({
        //loading modal won't close, might be in the api 
        //showLoading: true
      })
    e.preventDefault()
    var net = new NetidAPI();
    net.account.createFirstUser(newAccount)
    if (this.isMounted()) { 
      net.account.ee.on('firstuser',err => {
        this.setState({
          //todo debug this 
          showLoading: false
        })
      }) 
    }       
  },
  render: function(){
    return (
    <div id="signUpModal" className="modal fade" tabIndex="-1" role="dialog" aria-labeledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;  </button>
              <h4 className="modal-title" id="myModalLabel">Create Your First Netid Persona!</h4>
            </div>
            <div className="modal-body">
              <form name="myform" ref="personaCreateForm">
                <fieldset className="form-group">
                  <input ref="cname" name="name" type="name" className="form-control" id="exampleName" placeholder="Persona Name"></input>
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="personaDescription">What is your Persona like?</label>
                  <textarea  ref="ctext" name="personaDescription" className="form-control" id="personaDescription" rows="3"></textarea>
                </fieldset>
                <fieldset className="form-group col-sm-6 personaAge">
                  <label>Age</label>
                  <input ref="cage" name="age" type="age" className="form-control" id="personaAge"></input>
                </fieldset>
                <fieldset className="form-group">
                  <label>Sex</label>
                    <select ref="cgender" name="gender" className="form-control">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                </fieldset>
                <fieldset className="form-group col-sm-6 relationshipField">
                  <label>Relationship Status</label>
                    <select ref="crelation" name="relationshipStatus" className="form-control">
                      <option value="Single">Single</option>
                      <option value="Engaged">Engaged</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Open">In an open relationship</option>
                    </select>
                </fieldset>
                <fieldset className="form-group ">
                  <label>Persona Type</label>
                    <select ref="ctype" name="personaType" className="form-control">
                      <option>Social</option>
                      <option>Professional</option>
                    </select>
                </fieldset>
                <fieldset className="form-group">
                  <label>What is your ethnicity?</label>
                  <select ref="cethnicity" name="ethnicity" multiple className="form-control" >
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
                  <textarea ref="chobbies" name="hobbies" className="form-control" id="personaHobbies" ></textarea>
                </fieldset> 
                <fieldset className="form-group">
                  <label htmlFor="personaMovies">List soome of your favorite Movies</label>
                  <p>Separated by commas</p>
                  <textarea ref="cmovies" name="movies" className="form-control" id="personaMovies"></textarea>
                </fieldset>         
                <fieldset className="form-group">
                 <label htmlFor="exampleInputFile">Upload an Image</label>
                 <input ref="cfile" name="file" type="file" className="form-control-file" id="exampleInputFile"></input>
                </fieldset> 
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={this.createNetidAccount} data-dismiss="modal">Create</button>
            </div>
          </div>
        </div>
        <LoadingModalComponent showLoading={this.state.showLoading}/>
      </div>
    );
  }
}); 
module.exports = SignUpModal; 
