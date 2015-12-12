

var PersonaPicker = React.createClass({

    setActiveBody: function(selectedValue, event){
        //console.log('selected: ' + selectedValue);
        //console.log('event: ' + event);
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
                </div>
                <div className="row col-sm-6 col-sm-offset-2 personaPickerRight">
                    <div className="personaNavOptions">
                        <ul className='nav nav-pills'>
                            <li className={this.props.headerSelection == 'home' ? 'active' : ''}>
                                <a href="#home" onClick={this.setActiveBody.bind(this, 'home')}>
                                    Home
                                </a>
                            </li>
                            <li className={this.props.headerSelection == 'communities' ? 'active' : ''}>                                
                                <a href="#communities" onClick={this.setActiveBody.bind(this, 'communities')}>
                                    Communities
                                </a>
                            </li>
                            <li className={this.props.headerSelection == 'messages' ? 'active' : ''}>   
                                <a href="#messages" onClick={this.setActiveBody.bind(this, 'messages')}>
                                    Messages
                                </a>
                            </li>
                            <li className={this.props.headerSelection == 'interactions' ? 'active' : ''}>    
                                <a href="#interactions" onClick={this.setActiveBody.bind(this, 'interactions')}>
                                    Interactions
                                </a>
                            </li>
                            <li>    
                                <a href="#settings" onClick={this.setActiveBody.bind(this, 'settings')}>
                                    Profile
                                </a>
                            </li>
                            <li>    
                                <a href="/" className="logOutLink">
                                    Log Out
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-cog"></i>
                                </a>
                            </li>
                            <li>    
                                <input type="text" className="form-control" placeholder="Search"></input>
                            </li>    
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

   
