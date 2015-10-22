//This function will call the social personas from the master account object and create DOM elements on the
    //dashboard.html
    //input: json object
    //output: divs appended to socialMainContent in dashboard.html
    function list_personas(){
        $.ajax({
        url: "/json_files/dashboard_summ.json",    
        dataType: "JSON",
        success: function (x) {
            var accountNameDisplayed = (x.masterID);
             $('#accountName').html(accountNameDisplayed);
             //This is the beginning of the social personas creation on the DOM
             var social_personas = x.socialPersonas;
             if (social_personas == []) {
                 var h3 = $('<h3>').text('Add a new persona!');
                 $('.socialMainContent').append(h3);
             } 
            else {
             for (var i = 0; i < social_personas.length; i++) { 
             var persona_container = $('<div>').addClass('personaContainer col-sm-10 col-sm-offset-1').attr('data-id', i);
             var image_container = $('<div>').addClass('col-sm-3 socialPersonaImage');
             var image = $('<img>').attr('src', social_personas[i].image).css({
             'height': '100%',
             'width': '100%',
             'border-radius': '100%'
             });
             var name_description_container = $('<div>').addClass('col-sm-9');
             //var name is going to need a click function to access the personaPersonalView.html and load up that personas info
             var name = $('<p>').addClass('social1name personaName').text(social_personas[i].persona_name).css('cursor', 'pointer').attr('data-id', i);
             var persona_view_link = $('<a>').attr('href', 'personaPersonalView').attr('data-id', i);
             var description = $('<p>').addClass('social1description personaDescription').text(social_personas[i].description);
             var line_break_container = $('<div>').addClass('col-sm-12 persona_lb');
             var line_break = $('<hr>');
             //creating the line break
             line_break_container.append(line_break);
             persona_view_link.append(name);
             //appending the name and description container
             name_description_container.append(persona_view_link, description);
             //appending the image to the image container
             image_container.append(image);


             //creating the bottom protion of the container, needs to be appended to persona_container
             var bottom_row = $('<div>').addClass('row');
             var btn_container = $('<div>').addClass('col-sm-4 taskBarLeft');
             var email_btn = $('<button>').addClass('btn dashboard_notification_buttons').attr('type', 'button');
             var email_glyph = $('<span>').addClass('glyphicon glyphicon-envelope dash_env').attr('aria-hidden', 'true');
             var user_btn = $('<button>').addClass('btn dashboard_notification_buttons').attr('type', 'button');
             var user_glyph = $('<span>').addClass('glyphicon glyphicon-user dash_user').attr('aria-hidden', 'true');
             email_btn.append(email_glyph);
             user_btn.append(user_glyph);
             btn_container.append(email_btn, user_btn);

             //creating settings glyph area
             var settings_container = $('<div>').addClass('col-sm-2');
             //settings_glyph will need a click function to allow it to access the settings of its persona_container
             var settings_glyph = $('<span>').addClass('dash_cog glyphicon glyphicon-cog col-sm-3').attr('aria-hidden', 'true').attr('data-id', i).css('cursor', 'pointer');
             (function(){
                var count = i;
                settings_glyph.click(function(){
                    edit_persona(count);
                    $('#edit_soc_persona').modal('show');
                });
             })();
             //var edit_modal_link = $('<a>').attr('href', 'edit_social_persona_modal.html').attr('data-toggle', 'modal').attr('data-target', '#edit_social_persona');
             //edit_modal_link.append(settings_glyph);
             settings_container.append(settings_glyph);

             var score = social_personas[i].score;
             var score_container = $('<div>').addClass('col-sm-3 col-sm-offset-3');
             var score_text = $('<p>').addClass('persona_score').text(score);
             score_container.append(score_text);
             bottom_row.append(btn_container, settings_container, score_container);
             persona_container.append(image_container, name_description_container, line_break_container, bottom_row);
             $('.social_personas_container').append(persona_container);
             }
            }

        var prof_personas = x.profPersonas;
         if (prof_personas == []) {
             var h3 = $('<h3>').text('Add a new persona!');
             $('.profMainContent').append(h3);
         } 
            else {
             for (var i = 0; i < prof_personas.length; i++) {
             var persona_container = $('<div>').addClass('personaContainer col-sm-10 col-sm-offset-1').attr('data-id', i);
             var image_container = $('<div>').addClass('col-sm-3 profPersonaImage');
             var image = $('<img>').attr('src', prof_personas[i].image).css({
                 'height': '100%',
                 'width': '100%',
                 'border-radius': '100%'
             });
             var name_description_container = $('<div>').addClass('col-sm-9');
             var persona_view_link = $('<a>').attr('href', 'personaProfView').attr('data-id', i);
             //var name is going to need a click function to access the personaPersonalView.html and load up that personas info
             var name = $('<p>').addClass('prof1name personaName').css('cursor', 'pointer').text(prof_personas[i].persona_name);
             var description = $('<p>').addClass('prof1description personaDescription').text(prof_personas[i].description);
             var line_break_container = $('<div>').addClass('col-sm-12 persona_lb');
             var line_break = $('<hr>');
             //creating the line break
             line_break_container.append(line_break);
             //appending the name and description container
             persona_view_link.append(name);
             name_description_container.append(persona_view_link, description);
             //appending the image to the image container
             image_container.append(image);
             //creating the bottom protion of the container, needs to be appended to persona_container
             var btn_container = $('<div>').addClass('col-sm-4 taskBarLeft');
             var email_btn = $('<button>').addClass('btn greennotificationButtons').attr('type', 'button');
             var email_glyph = $('<span>').addClass('glyphicon glyphicon-envelope').attr('aria-hidden', 'true');
             var user_btn = $('<button>').addClass('btn greennotificationButtons').attr('type', 'button');
             var user_glyph = $('<span>').addClass('glyphicon glyphicon-user').attr('aria-hidden', 'true');
             email_btn.append(email_glyph);
             user_btn.append(user_glyph);
             btn_container.append(email_btn, user_btn);

             //creating settings glyph area
             var settings_container = $('<div>').addClass('col-sm-2');
             
             //settings_glyph will need a click function to allow it to access the settings of its persona_container
             var settings_glyph = $('<span>').addClass('dash_cog glyphicon glyphicon-cog col-sm-3').attr('aria-hidden', 'true').attr('data-id', i).css('cursor', 'pointer');
             (function(){
                var count = i;
                settings_glyph.click(function(){
                    //edit_persona(count);
                    $('#edit_prof_persona').modal('show');
                });
             })();
             //var edit_modal_link = $('<a>').attr('href', 'edit_prof_persona_modal.html').attr('data-toggle', 'modal').attr('data-target', '#edit_prof_persona');
             //edit_modal_link.append(settings_glyph);
             settings_container.append(settings_glyph);

             var score = social_personas[i].score;
             var score_container = $('<div>').addClass('col-sm-3 col-sm-offset-3');
             var score_text = $('<p>').addClass('persona_score').text(score);
             score_container.append(score_text);

             var bottom_row = $('<div>').addClass('row');
             bottom_row.append(btn_container, settings_container, score_container)


             persona_container.append(image_container, name_description_container, line_break_container, bottom_row);
             $('.prof_personas_container').append(persona_container);
             }
            }

         // var tbl = $("<table/>").attr("id", "mytable");
         // $("#chatFriends").append(tbl);
         // for (var i = 0; i < friends.length; i++) {
         //     var tr = "<tr>";
         //     var td1 = "<td>" + friends[i]["name"] + "</td>";

         //     $("#mytable").append(tr + td1);
         // }
         }
        });
    };
    setInterval(function() {
        $('.feedMainContent p').fadeOut(500, function() {
            var $this = $(this);
            $this.text($this.text() == 'You posted a new picture.' ? 'You have a NetConnect Request.' : 'You posted a new picture.');
            $this.toggleClass('first second');
            $this.fadeIn(500);
        });
    }, 3000);
