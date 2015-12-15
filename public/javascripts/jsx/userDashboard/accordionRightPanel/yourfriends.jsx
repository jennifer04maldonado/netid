//var ipfs = window.ipfsAPI();
var MessageModal = require('./../common/messageModal');
//INPUT: EVENTUALLY WILL BE DATA OBJECT W/ YOUR FRIENDS
//OUTPUT: DISPLAY FOR FRIENDS IN ACCORDION
var YourFriends = React.createClass({
  //set default to 'Friends Online'
  getInitialState: function() {
    return {
      data: [],
      sendTo: ''
    }
  },
  getYourFriends: function(personaId, done) {
    $.get('.././json_files/friend.json', function(result) {
      if (this.isMounted()) {
          var thisPersonaFriends = [];
          for (var i=0; i < result.length; i++) {
            if (personaId == result[i].persona_id) {
              thisPersonaFriends.push(result[i]);
            }
          }
          done(thisPersonaFriends);  
      }
    }.bind(this));   
  },  
  setSendTo: function(event){
      var sendTo = event.target.dataset.sendTo;      
      this.setState({sendTo: sendTo});
  },   
  getYourFriendsIPFS: function(personaId, done) {
    var net = this.props.api
    console.log('Friend Component received '+net.account.schemaObject)
    var hash = this.props.peerIdHash + '/friend.json';   
    var fr = net.account.getFriends();
    if(!this.isMounted()) return
      var ee = net.account.getEventEmitter()
      ee.on('frand',err => {
        console.log('Freind Object Received '+ net.account.friendsList)
      })  
/*    ipfs.cat(hash, function (err, res) {
      if (err || !res) return console.log('error:' + err);      
      //readable stream
      if (res.readable) {
          res.pipe('readable stream: ' + process.stdout);
          //string          
      } else {
        var thisPersonaFriends = [];
        var friendsArray = JSON.parse(res);
        for (var i=0; i < friendsArray.length; i++) {
            if (personaId == friendsArray[i].persona_id) {
                thisPersonaFriends.push(friendsArray[i]);
            }
        }
        done(thisPersonaFriends);  
      }
    });*/
  },
  //this method decides to fetches data from IPFS or AJAX
  componentWillReceiveProps: function(nextProps) {    
    if (nextProps.activePersona !== this.props.activePersona) {
      var personaId = nextProps.activePersona.id;
      var self = this;
      if (this.props.useIPFS) {         
          this.getYourFriendsIPFS(personaId, function (friendsArray)  {
              self.setState({
                      data: friendsArray
              });
          });
      } else {
        this.getYourFriends(personaId, function(friendsArray) {
            self.setState({
              data: friendsArray
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
          <h5>Connections</h5> 
        </div>
        <div className="col-sm-12 friendsSearchCntnr">
          <input type="text" className="form-control" placeholder="Search"></input> 
        </div>
        <div id="collapse5" className="accordion-body contentPanel friendsPanel">
          <div className="accordion-inner test">
            <div className="panel-body friendsBody">
              { this.state.data.map(function(friend)  {                                                                                  
               return  <p key={friend.id}><a href="#">{friend.persona_name}</a><a onClick={self.setSendTo} data-toggle="modal" data-target='#messageModal' href="#"><i data-send-to={friend.persona_name} className="fa fa-envelope-o"></i></a></p>
              })}
            </div>
          </div>
        </div>
        <MessageModal sendTo={this.state.sendTo} />
      </div>
		)
	}
});
module.exports = YourFriends;