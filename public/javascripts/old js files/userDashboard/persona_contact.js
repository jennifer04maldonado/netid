/*
makes ajax call to fill in information of contact from your persona page. Conditional checks to see if they're a friend,
(currently using friend variable, will change as needed), if they are shows releveant information, if they're not, provides messages,
nectConnect button and shows email button to contact them.
*/
var friend = false;
$(document).ready(function(){
	$.ajax({
		 url : "personas2.json",
         type : "GET",
         dataType : "json",
         success: function(response){
            var name = response.profile[0].socialPersonas[1].name;
            console.log(name);
            var image = $('<img>').attr('src', response.profile[0].socialPersonas[0].image);
            console.log(image);
            $('.imageContainer').append(image);
         	$('.persona_rating').html(response.profile[0].socialScore);
            $('.contact_name').html(name);
            var description = $('<p>').html(response.profile[0].socialPersonas[0].description).addClass('contact_description');
            $('.postContainer').append(description);
            if(friend){
               $('.master_rating').html(response.profile[0].masterScore);

               var your_posts = response.profile[0].socialPersonas[0].your_posts;
               //This loops through the posts and creates the <li> elements for them
               for(var i = 0; i < your_posts.length; i++){
                  var post = your_posts[i].post;
                  var time_stamp = your_posts[i].post_time;
                  var li = $('<li>').text(post).addClass('post_item').css(
                     {
                        'margin-top': '2%',
                        'font-size': '0.9em',
                        'font-weight': 700,
                     }
                  );
          
                  var time_li = $('<li>').text('About ' + time_stamp + ' ago').addClass('time_stamp').css(
                     {
                        'border-bottom':'1px dashed grey',
                        'padding-bottom': '3%',
                        'font-size': '0.8em',
                        'color': 'grey'
                     }
                  );
                  $('#contact_posts').append(li, time_li);
               }
               //This loops through the bio_info object and displays their basic information
               var basic_info = response.profile[0].socialPersonas[0].bio_info;
               for (key in basic_info){
                  var keyword = $('<div>').addClass('col-md-6 info_key basic_info').text(key + ':');                 
                  var key_info = response.profile[0].socialPersonas[0].bio_info[key];
                  var info = $('<div>').addClass('col-md-6 info basic_info').text(key_info);

                  $('#contact_bio').append(keyword, info);
               }
            } else {
               $('.master_rating').html('Connect'); 
               $('.contact_email_btn').css('visibility', 'visible');
               $('#contact_bio > p').html('This person is not in your network. To connect with them please click on the NetConnect or Email button.');
               $('#contact_posts').remove();
               $('#home').append($('<p>').html("To see this person's posts you need to be in their network. Please click on the NetConnect or Email button to make a request."));
            }
         }
	});
});