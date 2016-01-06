var CommentContainer = React.createClass({		
	getDefaultProps: function() {
		return {
			//src: 'images/loading1.gif'
		}
	},
	getInitialState: function() {
		return {
			comments: []
		}	
	},
 	//this method decides to fetches data from IPFS or AJAX
  	componentWillReceiveProps: function(nextProps) {    
	    if (nextProps.comments !== this.props.comments) {
			this.setState({comments: nextProps.comments});
	    }
  	},	

    render: function(){
		var commentsNode =	this.state.comments.map(function (comment,index2) {									
										return (

											<div key={comment.id} className="postBody">
												<div className="media-left" >
													<a href="#">
														<img className="media-object" src={comment.pic}/>
													</a>
												</div>
												<div className="media-body">
												    <h4 className="media-heading">{comment.posted_by}</h4>
												    <span className="postContentText">{comment.message}</span>
													<br></br>													
													<span className="postTimeStamp">{comment.date}</span>
												</div>
											</div>

											)
									})

        return (		   
		<div className="commentContainer">
			{commentsNode}
		</div>        	
        );
    }
});

module.exports = CommentContainer;
