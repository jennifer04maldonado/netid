var ReactTestUtils = React.addons.TestUtils;
var AddFriendModal = require('.././common/addFriendModal');
var MessageModal = require('./../common/messageModal');
//INPUT: EVENTUALLY WILL BE DATA OBJECT W/ YOUR FRIENDS
//OUTPUT: DISPLAY FOR FRIENDS IN ACCORDION
var YourFriends = React.createClass({
  //set default to 'Friends Online'
  getInitialState: function() {
    return {
      data: [],
      allFriends: [],
      activeMemberPersona: null,
      sendTo: ''
    }
  },
  getYourFriends: function(personaId, done) {    
    $.get('.././json_files/data/netid-account/personas/friend.json', function(allFriends) {
      if (this.isMounted()) {          
          var thisPersonaFriends = [];
          for (var i=0; i < allFriends.length; i++) {
            if (personaId == allFriends[i].persona_id) {
              thisPersonaFriends.push(allFriends[i]);
            }
          }
          done(thisPersonaFriends,allFriends);  
      }
    }.bind(this));       
  },  
  setSendTo: function(event){
      var sendTo = event.target.dataset.sendTo;      
      this.setState({sendTo: sendTo});
  },   
  componentDidMount : function(){

  },
  setMemberPersonaId: function(event){

    //this call clicks the 'profile in main nav'
    $('#navProfileTab').tab('show');

    var memberPersonaId = event.target.dataset.memberPersonaId;        
    this.props.setMemberPersonaId(memberPersonaId);
  },
  getYourFriendsIPFS: function(personaId, done) {
    var net = this.props.api
    var fr = net.account.getFriends();
    if (this.isMounted()) { 
      net.account.ee.on('frand',err => {
        //console.log('Freind Object Received '+ net.account.friendsList.length+' friends')
        var allFriends = net.account.friendsList;
        var thisPersonaFriends = [];
        for (var i=0; i < net.account.friendsList.length; i++) {
          if (personaId == net.account.friendsList[i].persona_id) {
              thisPersonaFriends.push(net.account.friendsList[i]);
          }
        }
        done(thisPersonaFriends, allFriends);
      }) 
    } 
  },
  //this method decides to fetches data from IPFS or AJAX
  componentWillReceiveProps: function(nextProps) {    
    if (nextProps.activePersona !== this.props.activePersona) {
      var personaId = nextProps.activePersona.id;
      var self = this;
      if (this.props.useIPFS) {         
          this.getYourFriendsIPFS(personaId, function (friendsArray, allFriends)  {
              self.setState({
                      data: friendsArray,
                      allFriends: allFriends
              });
          });
      } else {
        this.getYourFriends(personaId, function(friendsArray,allFriends) {
            self.setState({
              data: friendsArray,
              allFriends: allFriends
            });
        });
      }
    }
  },

	render: function(){   
    var self = this;
    return(
			<div className="col-sm-12 accordion-group contentPanel yourFriends accordionRightPanel">
        <div className="col-sm-12 friendsTitleCntnr">
          <h5>Connections
              <a href="#addFriendModal" data-toggle="modal" data-target="#addFriendModal"><i className="fa fa-pencil-square-o"></i></a> 
          </h5> 
          
        </div>
        <div className="col-sm-12 friendsSearchCntnr">
          <input type="text" className="form-control" placeholder="Search"></input> 
        </div>
        <div id="collapse5" className="accordion-body contentPanel friendsPanel">
          <div className="accordion-inner test">
            <div className="panel-body friendsBody">
              { this.state.data.map(function(friend)  {                                                                                  
               return  <p key={friend.id}><a data-member-persona-id={friend.friend_id} onClick={self.setMemberPersonaId} href="#">{friend.persona_name}</a><a onClick={self.setSendTo} data-toggle="modal" data-target='#messageModal' href="#"><i data-send-to={friend.persona_name} className="fa fa-envelope-o"></i></a></p>
              })}
            </div>
          </div>
        </div>

        <MessageModal sendTo={this.state.sendTo} />        
        <AddFriendModal useIPFS={this.props.useIPFS}  />
      </div>
		)
	}
});
module.exports = YourFriends;