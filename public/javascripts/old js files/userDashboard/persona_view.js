//global variable used to store the posts objects for now
var your_posts = null;

//this takes the your_posts array and creates DOM elements from them
//input: your_posts array
//output: DOM elements
function postList() {
    for (var i = your_posts.length - 1; i >= 0; i--) {
        var post = your_posts[i].post;
        var date = new Date(your_posts[i].post_time);
        var humanDate = date.toDateString();
        var li = $('<li>').text(post).addClass('post_item').css({
            'margin-top': '2%',
            'font-size': '0.9em',
            'font-weight': 400,
        });

        var time_li = $('<li>').text(humanDate).addClass('time_stamp').css({
            'border-bottom': '1px dashed grey',
            'padding-bottom': '3%',
            'font-size': '0.8em',
            'color': 'grey'
        });
        $('#recent_posts').append(li, time_li);
    }
}

//This is the ajax call to the posts JSON object. It then runs the postList() immediately in the success
//input: JSON object
//output: array stored in your_posts global array
function loadPosts() {
    $.ajax({
        url: '/json_files/soc_persona_posts.json',
        method: 'GET',
        dataType: 'JSON',
        success: function(response) {
            your_posts = response.your_posts;
            postList();

        }
    });
}

//This is the function for the input to add to the post. It will send the information to the db and then reload the posts
//input: input value from the post area
//output: clears the recent post html and runs postList() again to repopulate
//NOTE: Does not send anything to the back end
function newPost() {
    var newPost = $('.post_input').val();
    var postTime = Date.now();         
    var postObj = {
        post: newPost,
        post_time: postTime
    };
    your_posts.push(postObj);
    $('#recent_posts').html('');
    postList();
    //ajax call will be necessary when back end is implemented
    // $.ajax({
    //     url: ,
    //     dataType: :"text",
    //     data: {
    //         newPost: newPost
    //     },
    //     success: function(response){
    //         $('#recent_posts').html('');
    //         loadPosts();
    //     }
    // });
}

$(document).ready(function() {
    //loads general info and creates buttons on persona page 
    $.ajax({
        url: "/json_files/soc_persona_info.json",
        type: "GET",
        dataType: "JSON",
        crossDomain: true,
        success: function(response) {
            var persona_name = response.socialPersonas[0].persona_name;
            var name = $('<p>').addClass('social1name personaName').text(persona_name);
            var name_description_container = $('<div>').addClass('col-sm-3');
            name_description_container.append(name);

            var image = $('<img>').attr('src', response.socialPersonas[0].image).css({
                'height': '100%',
                'width': '100%',
                'border-radius': '100%'
            });
            $('.imageContainer').append(image);
            // $('.persona_rating').html(response.profile[0].socialScore);
            // $('.master_rating').html(response.profile[0].masterScore);

            var btn_container = $('<div>').addClass('col-sm-9 persona_buttons');
            var email_btn = $('<button>').addClass('btn notificationButtons').attr('type', 'button');
            var email_glyph = $('<span>').addClass('glyphicon glyphicon-envelope').attr('aria-hidden', 'true');
            var edit_btn = $('<button>').addClass('btn notificationButtons').attr('type', 'button');
            var edit_glyph = $('<span>').addClass('glyphicon glyphicon-edit').attr('aria-hidden', 'true');
            var user_btn = $('<button>').addClass('btn notificationButtons').attr('type', 'button');
            var user_glyph = $('<span>').addClass('glyphicon glyphicon-user').attr('aria-hidden', 'true');
            var setting_btn = $('<button>').addClass('btn notificationButtons').attr('type', 'button');
            var settings_glyph = $('<span>').addClass('glyphicon glyphicon-cog').attr('aria-hidden', 'true');
            email_btn.append(email_glyph);
            edit_btn.append(edit_glyph);
            user_btn.append(user_glyph);
            setting_btn.append(settings_glyph);
            btn_container.append(setting_btn, user_btn, edit_btn, email_btn);
            $('.orangeBar').append(name_description_container, btn_container);
        }
    });
    //loads the ratings for the persona
    $.ajax({
        url: '/json_files/soc_ratings.json',
        method: 'GET',
        dataType: 'JSON',
        success: function(response) {
            var persona_ratings_brkdwn = response.ratings_brkdwn;
            for (key in persona_ratings_brkdwn) {
                if (key == "Honesty") {
                    var rating_name = $('<div>').addClass('col-md-10 rating_name').css({
                        'padding': '0',
                        'margin-top': '5.5%'
                    }).html(key);
                    var rating = $('<div>').addClass('col-md-1 rating_num').css({
                        'padding': '0',
                        'margin-top': '5.5%'
                    }).html(persona_ratings_brkdwn[key]);
                } else {
                    var rating_name = $('<div>').addClass('col-md-10 rating_name').css('padding', '0').html(key);
                    var rating = $('<div>').addClass('col-md-1 rating_num').css('padding', '0').html(persona_ratings_brkdwn[key]);
                }

                $('.persona_ratings_breakdown_container').append(rating_name, rating);
            };

            var master_ratings_brkdwn = response.ratings;
            for (key in master_ratings_brkdwn) {
                if (key == "social_rating") {
                    var rating_name = $('<div>').addClass('col-md-11 rating_name').css({
                        'padding': '0',
                        'margin-top': '5.5%'
                    }).html('Social Rating');
                    var rating = $('<div>').addClass('col-md-1 rating_num').css({
                        'padding': '0',
                        'margin-top': '5.5%'
                    }).html(master_ratings_brkdwn[key]);
                } else {
                    var rating_name = $('<div>').addClass('col-md-11 rating_name').css('padding', '0').html('Professional Rating');
                    var rating = $('<div>').addClass('col-md-1 rating_num').css('padding', '0').html(master_ratings_brkdwn[key]);
                }

                $('.master_ratings_breakdown_container').append(rating_name, rating);
            }
        }
    });
    //loads the description of the persona
    $.ajax({
        url: '/json_files/soc_persona_info.json',
        method: 'GET',
        dataType: 'JSON',
        success: function(response) {
            var about_me = response.socialPersonas[0].description;
            var h3 = $('<h3>').text(about_me);
            $('#about_you').append(h3);
        }
    });

    //loads friends of persona
    $.ajax({
        url: '/json_files/soc_friends.json',
        method: 'GET',
        dataType: 'JSON',
        success: function(response) {
            //This function takes your friends and adds them to your network tab on the persona view
            var your_friends = response.friends;
            for (var i = 0; i < your_friends.length; i++) {
                var row = $('<div>').addClass('row network_row');
                var col_div = $('<div>').addClass('col-md-10 col-md-offset-1 network_div');
                var img_container = $('<div>').addClass('friend_img_container col-md-2');
                var image = $('<img>').attr('src', your_friends[i].image);
                var name = your_friends[i].name;
                var name_div = $('<div>').addClass('col-md-7 friend_name').html(name);
                var remove_block_div = $('<div>').addClass('col-md-3 friend_remove');
                var remove_link = $('<a>').text('Remove').click(function() {
                    console.log("You have removed ", this.name);
                });
                var block_link = $('<a>').text('Block').click(function() {
                    cosole.log('YOu have blocked ', this.name);
                });
                img_container.append(image);
                remove_block_div.append(remove_link, '/', block_link);
                col_div.append(img_container, name_div, remove_block_div);
                row.append(col_div);
                $('#your_network').append(row);

            }
        }
    });
});
