var MembersListModal = React.createClass({		
	getDefaultProps: function() {
		return {
			//src: 'images/loading1.gif'
		}
	},

    render: function(){
        return (		   
		<div id="membersListModal" className="modal fade" role="dialog">
			<div className="modal-dialog">
			    <div className="modal-content">
				    <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h4 className="modal-title"> {this.props.activeCommunity ? this.props.activeCommunity.name : ''} </h4>
				    </div>
				    <div className="modal-body">
				        <table className="table">
							<thead>
								<tr>
									<th>Image</th>
									<th>Username</th>
									<th>Type</th>
									<th>Add</th>
									<th>Message</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><img src={"/images/starwars.jpg"}></img></td>
									<td><a href="#">NatetheGreat</a></td>
									<td>Social</td>
									<td><a href="#"><i className="fa fa-plus"></i></a></td>
									<td><a href="#"><i className="fa fa-envelope-o"></i></a></td>
								</tr>
								<tr>
									<td><img src={"/images/arnold.jpg"}></img></td>
									<td><a href="#">JennyFury</a></td>
									<td>Social</td>
									<td><a href="#"><i className="fa fa-plus"></i></a></td>
									<td><a href="#"><i className="fa fa-envelope-o"></i></a></td>
								</tr>
								<tr>
									<td><img src={"/images/carrottop.jpg"}></img></td>
									<td><a href="#">JoshtheBoss</a></td>
									<td>Professional</td>
									<td><a href="#"><i className="fa fa-plus"></i></a></td>
									<td><a href="#"><i className="fa fa-envelope-o"></i></a></td>
								</tr>
								<tr>
									<td><img src={"/images/dolph.png"}></img></td>
									<td><a href="#">AsianScott</a></td>
									<td>Social</td>
									<td><a href="#"><i className="fa fa-plus"></i></a></td>
									<td><a href="#"><i className="fa fa-envelope-o"></i></a></td>
								</tr>
								<tr>
									<td><img src={"/images/girl.jpg"}></img></td>
									<td><a href="#">NewGuyGage</a></td>
									<td>Social</td>
									<td><a href="#"><i className="fa fa-plus"></i></a></td>
									<td><a href="#"><i className="fa fa-envelope-o"></i></a></td>
								</tr>
								<tr>
									<td><img src={"/images/girl3.jpg"}></img></td>
									<td><a href="#">ScottDotCom</a></td>
									<td>Professional</td>
									<td><a href="#"><i className="fa fa-plus"></i></a></td>
									<td><a href="#"><i className="fa fa-envelope-o"></i></a></td>
								</tr>
								<tr>
									<td><img src={"/images/hip.jpg"}></img></td>
									<td><a href="#">CoolPersona</a></td>
									<td>Social</td>
									<td><a href="#"><i className="fa fa-plus"></i></a></td>
									<td><a href="#"><i className="fa fa-envelope-o"></i></a></td>
								</tr>
								<tr>
									<td><img src={"/images/kim.jpg"}></img></td>
									<td><a href="#">WeirdPersona</a></td>
									<td>Social</td>
									<td><a href="#"><i className="fa fa-plus"></i></a></td>
									<td><a href="#"><i className="fa fa-envelope-o"></i></a></td>
								</tr>	
							</tbody>
						</table>
				    </div>
			    </div>
			</div>
		</div>        	
        );
    }
});

module.exports = MembersListModal;
