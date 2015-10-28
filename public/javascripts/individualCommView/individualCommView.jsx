var IndCommView = React.createClass({
	render: function(){
		return (
			<div>
				<div className="row" id="commContainer">
					<div className="col-sm-6 commControlBarLeft">
						<div className=" col-sm-12 commProfileInfo">
							<div className="col-sm-2 commImage">
								<img src="images/cooking.jpg"></img>
							</div>
							<div className="col-sm-6 commName"><a href="#">For the Love of Cooking</a></div>
							<div className="col-sm-3 commStatus">
								<div className="btn btn-success">Request</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 commControlBarRight">
						<div className="col-sm-12">
							<div className="col-sm-7 col-sm-offset-2 commNavItems">
								<ul>
									<li className="pull-left"><a href="#">Calendar</a></li>
									<li className="pull-right"><a href="#">Members</a></li>
								</ul>
							</div>
							<div className="col-sm-3 commIconElements">
								<a href="#"><i className="fa fa-star"></i></a>
								<i className="fa fa-search"></i>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 commTextField">
						<div className="col-sm-12 commPostField">
							<form action="">
								<textarea placeholder="Post to all of your Communities" rows="6"></textarea>
							</form>
						</div>
						<div className="col-sm-12 commPostBtn">
							<div className="col-sm-12 btn">Post</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 commFirstPost">
						<div className=" col-sm-12 commFirstName">
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
				<div className="row">
					<div className="col-sm-12 commFirstPost">
						<div className=" col-sm-12 commFirstName">
							<div className="col-sm-2 commProfileImage">
								<a href="#"><img src="images/arnold.jpg"></img></a>
							</div>
							<div className="col-sm-9 commPersonaPost">
								<a href="#">Persona1987</a> <span>posted</span> Breakfast for pizza? I think yes!
								<br></br>
								<a href="http://pinchofyum.com/breakfast-pizza-with-kale-pesto-and-sun-dried-tomatoes" target="blank"></a>
							</div>
							<div className="col-sm-1 col-sm-offset-1 commPostDate">
								6 days ago
							</div>
						</div>
					</div>
					<div className="row col-sm-12">
						<div className="commPostImage">
							<a href="http://pinchofyum.com/breakfast-pizza-with-kale-pesto-and-sun-dried-tomatoes" className="col-sm-12" target="blank">
								<img className="col-sm-12" src="images/breakfast-pizza.jpg"></img>
							</a>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 commPostControls">
							<a href="#"><i className=" col-sm-1 fa fa-star"></i></a>
							<div className="verticalLine"></div>
							<div className="col-sm-11 commCommentBtnOpen">
								<div className="col-sm-12 commAccordion">
					                <div className="col-sm-12 commAccordionHeading">
					                    <h4 className="col-sm-12">1 Comment</h4>
					                </div>
					                <div className="commAccordionBody">
					                    <div className="commentBodyOpen">
											<div className="col-sm-12 commentContainer">
												<div className="col-sm-2 commentImage">
													<a href="#"><img src="images/man2.jpg"></img></a>
												</div>
											<div className="col-sm-10 commPersonaPost">
												<a href="#">Persona1234</a> <span>said</span> Wow, that pizza looks amazing. I know of a place in Manhattan that makes pizza just like that!
												<br></br>
												<div className="col-sm-12 commentControls">
													<a className="commentButtonOne" href="#">Reply</a>
													<a href="#">Report</a>
												</div>
											</div>
											<div className="commPostDate">5 days ago</div>
											</div>

										</div>
									</div>
					            </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});
ReactDOM.render(
	<IndCommView />, 
	document.getElementById('viewPort')
);