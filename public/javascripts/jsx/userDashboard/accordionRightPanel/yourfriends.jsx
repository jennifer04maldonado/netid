
var React = require('react');

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
      console.log('grabbing your friends for persona:' + nextProps.activePersona.persona_name); 
      var personaId = nextProps.activePersona.id;
      $.get('.././json_files/friend.json', function(result) {
           if (this.isMounted()) {
              var thisPersonaFriends = [];
              for (var i=0; i < result.length; i++) {
                //console.log('iterating friends...' + result[i].persona_id);
                //console.log('personaId -->' + personaId);

                if (personaId == result[i].persona_id) {
                  //console.log('frind found: ' + result[i].persona_name);
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
    console.log

    return(
			<div className="col-sm-12 accordion-group contentPanel yourFriends accordionRightPanel">
        <div className="accordion-heading friendsHeading accordionHeading">
          <h4 className="col-sm-12 panel-title">
              <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse5">
                Friends Online
              </a>
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