var React = require('react');

var PersonaPicker = React.createClass({

    setActiveBody: function(selectedValue, event){
        console.log('selected: ' + selectedValue);
        console.log('event: ' + event);
        this.props.setActiveBody(selectedValue);
    },

    render: function(){
        
        var defaultAvatar = '../images/avatar.png';
        var style = {
            marginRight: '15px'
        };

        return (
            <div className="col-sm-12 personaPicker">
                <div className="row col-sm-2 personaPickerLeft">
                    <div className="col-sm-1 personaActiveImage">
                            <div className="personaImage">
                                <img src={this.props.activePersona ? this.props.activePersona.image : defaultAvatar}/>
                            </div>
                    </div>
                    {/*<div>
                        <h3>
                            <span className='panel-title'> {this.props.activePersona ? this.props.activePersona.persona_name : 'name'} :</span>
                            <span className='panel-title'> {this.props.activePersona ? this.props.activePersona.description : 'description'} </span>
                        </h3>
                    </div> */}
                </div>
                <div className="row col-sm-6 col-sm-offset-2 personaPickerRight">
                    <div className="personaNavOptions">
                        <ul>
                            <a href="#" onClick={this.setActiveBody.bind(this, 'home')}>
                                <li>Home</li>
                            </a>
                            <a href="#" onClick={this.setActiveBody.bind(this, 'communities')}>
                                <li>Communities</li>
                            </a>
                            <a href="#" onClick={this.setActiveBody.bind(this, 'messages')}>
                                <li>Messages</li>
                            </a>
                            <a href="#" onClick={this.setActiveBody.bind(this, 'interactions')}>
                                <li className="active">Interactions</li>
                            </a>
                            <a href="#">
                                <li className="logOutLink">Log Out</li>
                            </a>
                            <input type="text" className="form-control" placeholder="Search"></input>
                        </ul>
                    </div>    
                </div>
                <div className="row col-sm-2 logoContainer">
                    <div className="col-sm-12 btn-group logoRatingButton">
                        <div className="btn dropdown-toggle ratingDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             <img src='../images/netIDLogo.png'></img>
                        </div>
                        <ul className="dropdown-menu">
                            <li><a href="#">Master <strong>67</strong></a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Social <strong>41</strong></a></li>
                            <li><a href="#">Professional <strong>58</strong></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = PersonaPicker;

   