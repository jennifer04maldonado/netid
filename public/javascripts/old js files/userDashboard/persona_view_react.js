var your_posts = null;
$.ajax({
    url: '/json_files/soc_persona_posts.json',
    method: 'GET',
    dataType: 'JSON',
    success: function(response) {
        your_posts = response.your_posts;
        console.log(your_posts);
    } 
});

