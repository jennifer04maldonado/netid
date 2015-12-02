


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
        <div className="accordion-heading friendsHeading accordionHeading">
          <h4 className="col-sm-12 panel-title">
              Connections
          </h4>    
        </div>
        <div id="collapse5" className="accordion-body contentPanel friendsPanel">
          <div className="accordion-inner">
           <div className="panel-body friendsBody">
             { this.state.data.map(function(friend)  {
               return  <p key={friend.id}>{friend.persona_name}<a href="#"><i className="fa fa-envelope-o"></i></a></p>
             })}
            </div>
          </div>
        </div>
      </div>
		)
	}
});
module.exports = YourFriends;