function load_ratings(){
    $.ajax({
        url:'/json_files/soc_ratings.json',
        method:'GET',
        dataType: 'JSON',
        success: function(x){
            console.log(x);
            var masterScoreDisplayed = (x.master_rating);
            $('.masterScore').html(masterScoreDisplayed);
            var socialScoreDisplayed = (x.ratings.social_rating);
            $('.socialScore').html(socialScoreDisplayed);
            var profScoreDisplayed = (x.ratings.prof_rating);
            $('.profScore').html(profScoreDisplayed);
        }
    });
}
