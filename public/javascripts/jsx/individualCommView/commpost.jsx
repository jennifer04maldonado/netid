var React = require('react');

//INPUT: DATA OBJECT FOM INDIVIDUALCOMMVIEW.JSX
//OUTPUT: POSTS WILL BE CREATED THROUGH MAPPING OVER ARRAY OF POSTS AND CREATING THEM FROM EACH POST OBJECT
let CommPost = React.createClass({
	render: function(){
		return(
			<div className="row">
				<div className="col-sm-12 commPost">
					<div className=" col-sm-12 commName">
						<div className="col-sm-2 commProfileImage">
							<a href="#"><img src="images/man2.jpg"></img></a>
						</div>
						<div className="col-sm-9 commPersonaPost">
							<a href="#">Persona1234</a> <span>posted</span> Bangkok coconut curry bowls. I have to try making this for dinner tonight....
							<br></br>
							<a href="http://pinchofyum.com/bangkok-coconut-curry-noodle-bowls" target="blank"></a>
						</div>
						<div className="col-sm-1 col-sm-offset-1 commPostDate">
							2 min ago
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 commPostControls">
						<a href="#"><i className=" col-sm-1 col-sm-offset-1 fa fa-star"></i></a>
						<div className="verticalLine"></div>
						<div className="col-sm-2 commCommentBtn">
							<div className="btn commentBtn">Comment</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = CommPost;