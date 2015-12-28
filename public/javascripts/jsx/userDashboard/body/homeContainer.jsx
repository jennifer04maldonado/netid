var HomeContainer = React.createClass({
	getInitialState: function() {
		return {
			activePersona: this.props.activePersona,
			allPosts: [],
			personaPosts: [],
			postMessage: ''
		}	
	},
 	//this method decides to fetches data from IPFS or AJAX
  	componentWillReceiveProps: function(nextProps) {    
	    if (nextProps.activePersona !== this.props.activePersona) {
			var personaId = nextProps.activePersona.id;
			this.setState({activePersona: nextProps.activePersona});
	      	if (this.props.useIPFS) {         
	          	this.getPostsIPFS(personaId);
	      	} else {
	        	this.getPosts(personaId);
	      	}
	    }
  	},	
  	getPostsIPFS: function(personaId) {    
  		

  	},
  	getPosts: function(personaId) {    
  		var self = this;
	    $.get('.././json_files/data/netid-account/personas/wall.json', function(allPosts) {
	          console.log('personaId:' + personaId);

	          var thisPersonaPosts = [];
	          for (var i=0; i < allPosts.length; i++) {
	            if (personaId == allPosts[i].persona_id) {
	              	thisPersonaPosts.push(allPosts[i]);
	            }
	          }
	          self.setState({
	                personaPosts: thisPersonaPosts
	          });
	    });       
  	},  
  	postMessage: function(event) {    
  		
  		var post = {};
  		post.id =  JSON.stringify(Math.floor(Math.random()*100000000000000000));;
  		post.persona_id = this.state.activePersona.id;
  		post.pic = '/images/arnold.jpg';
  		post.posted_by = this.state.activePersona.persona_name;
  		post.message = this.state.postMessage;

  		var  today = Date();
  		post.date = today;
  		//console.log('today is: ' + today.toString());  	  		 		    
  		var allPosts = this.state.allPosts;
  		allPosts.push(post);
  		this.setState({allPosts: allPosts});

  		var personaPosts = this.state.personaPosts;
  		personaPosts.push(post);
  		this.setState({personaPosts: personaPosts});

  	},
  	postChange: function(event) {    
   		this.setState({postMessage: event.target.value});
  	},  	
	render: function(){

		var mapPosts = this.state.personaPosts.map(function(post, index){

			return (
				<div key={post.id}>
					<div className="media-left" >
						<a href="#">
							<img className="media-object" src={post.pic}/>
						</a>
					</div>
					<div className="media-body">
					    <h4 className="media-heading">{post.posted_by}</h4>
					    <span className="postContentText">{post.message}</span>
						<br></br>
						<span className="postTimeStamp">{post.date}</span>
						<form>
							<input type="text" className="form-control" placeholder="Your comment here" ></input>
						</form>
						<button className="btn">Comment</button>
					</div>
				</div>
				)
		});

		
		return(
			<div className="homeContent">
				<div className="col-sm-12 homeTitle">
					<h4><i className="fa fa-rss"></i>{this.props.activePersona ? this.props.activePersona.persona_name: ''}</h4>
				</div>
				<div className="col-sm-12 homeDetailFeed">
					<div className="col-sm-offset-2 col-sm-8 media homeDetailPostBody">
						<div className="well">	
							<form>
								<input onChange={this.postChange} type="text" className="form-control" placeholder="Post something here" ></input>
							</form>
							<button onClick={this.postMessage} className="btn">Post to your wall</button>
						</div>
						{mapPosts}
					</div>
				</div>
			</div>
		)
	}
});

module.exports = HomeContainer;
