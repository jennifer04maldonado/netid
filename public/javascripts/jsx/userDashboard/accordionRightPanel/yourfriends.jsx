


//INPUT: EVENTUALLY WILL BE DATA OBJECT W/ YOUR FRIENDS
//OUTPUT: DISPLAY FOR FRIENDS IN ACCORDION
var YourFriends = React.createClass({
    //set default to 'Friends Online'
  getInitialState: function() {
    return {
      data: []
    }
  },

  componentWillReceiveProps: function(nextProps) {

    if (nextProps.activePersona !== this.props.activePersona) {
      var personaId = nextProps.activePersona.id;
      $.get('.././json_files/friend.json', function(result) {
           if (this.isMounted()) {
              var thisPersonaFriends = [];
              for (var i=0; i < result.length; i++) {
                if (personaId == result[i].persona_id) {
                  thisPersonaFriends.push(result[i]);
                }
              }  

              this.setState({
                data: thisPersonaFriends
              });

          }
        }.bind(this));   
    }
  },

	render: function(){   

    return(
			<div className="col-sm-12 accordion-group contentPanel yourFriends accordionRightPanel">
        <div className="col-sm-12 friendsTitleCntnr">
          <h5>Connections</h5> 
        </div>
        <div className="col-sm-12 friendsSearchCntnr">
          <input type="text" className="form-control" placeholder="Search"></input> 
        </div>
        <div id="collapse5" className="accordion-body contentPanel friendsPanel">
          <div className="accordion-inner test">
            <div className="panel-body friendsBody">
              { this.state.data.map(function(friend)  {
               return  <p key={friend.id}><a href="#">{friend.persona_name}</a><a href="#"><i className="fa fa-envelope-o"></i></a></p>
              })}
            </div>
          </div>
        </div>
      </div>
		)
	}
});
module.exports = YourFriends;