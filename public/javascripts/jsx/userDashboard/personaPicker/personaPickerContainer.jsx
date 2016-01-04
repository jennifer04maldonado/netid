

var PersonaPicker = React.createClass({
    render: function(){
        
        var defaultAvatar = '../images/avatar.png';
        var style = {
            marginRight: '15px'
        };

        return (
            <div className="personaPicker">
                <div className="col-sm-6 col-sm-offset-4 personaPickerRight">
                    <div className="personaNavOptions">
                        <ul className='nav nav-pills'>
                            <li className="active">
                                <a href="#navHome" data-toggle="tab">
                                    Home
                                </a>
                            </li>
                            <li>                                
                                <a id='navCommunitiesTab' href="#navCommunities" data-toggle="tab">
                                    Communities
                                </a>
                            </li>
                            <li >   
                                <a href="#navMessages" data-toggle="tab">
                                    Messages
                                </a>
                            </li>
                            <li >    
                                <a href="#navInteractions" data-toggle="tab" >
                                    Interactions
                                </a>
                            </li>
                            <li>    
                                <a id="navProfileTab" href="#navProfile" data-toggle="tab">
                                    Profile
                                </a>
                            </li>
                            <li>    
                                <a href="/" className="logOutLink">
                                    Log Out
                                </a>
                            </li>
                            <li>                                
                                <a href="#navSettings" data-toggle="tab">
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

   
