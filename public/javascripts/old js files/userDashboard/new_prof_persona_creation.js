//Basic setup for ajax call to server to save new persona info. URL needed to know where the data
//is being sent to. Also, key names might change.
//This function could also be loaded into the jquery.bootstrap.wizard.js file instead

$('.finish').click(function(){
	$.ajax({
		url:,
		dataType: 'JSON',
		method: 'POST',
		data:{ 
			//functions for required tab
			'persona_name': $('#new_prof_name').val(),
			'description': $('#persona_description').val(),

			//functions for basic tab
			//this value does not exist in the persona object
			'real_name': $('#new_prof_real_name').val(),
			'show_sex': $('#new_prof_showSex').val(),
			'show_age': $('#new_prof_showAge').val(),
			'phone_number': $('#new_prof_number').val(),
			'hometown': $('#new_prof_hometown').val(),
			'add_personal_info': $('#new_prof_add_info').val(),

			//functions for education
			'education': $('#new_prof_edu').val(),
			'add_edu_info': $('#new_prof_add_school_info').val(),
			'employment_history': $('#new_prof_employ').val(),
			'add_employ_info': $('#new_prof_add_job_info').val(),

			//functions for personal tab
			'political_affiliation': $('#new_prof_politics').val(),
			'religion': $('#new_prof_religion').val(),
			'relationship_status': $('#new_prof_rltnshp').val(),
			'number_children': $('#new_prof_children').val(),
			'gender': $('#new_prof_gender').val(),
			'languages_spoken': $('#new_prof_languages').val(),
			'ethnicity': $('#new_prof_ethnicity').val(),
			'more_info': $('#new_prof_more_info').val(),

			//functions for physical tab
			'units': $('#new_prof_units').val(),
			'height': $('#new_prof_height').val(),
			'weight': $('#new_prof_weight').val(),
			'hair_color': $('#new_prof_hair_color').val(),
			'eye_color': $('#new_prof_eye_color').val(),
			'phys_add_info': $('#new_prof_phys_add_info').val(),

			//functions for interests
			$('#new_prof_hobbies').val();
			$('#new_prof_movies').val();
			$('#new_prof_music').val();
			$('#new_prof_tv_shows').val();
			$('#new_prof_books').val();
			$('#new_prof_sports').val();
			$('#new_prof_fave_add_info').val();
			);
		},
		success: function(){
			//success function will repopulate the dashboard with the additional persona in it using the
			//list_personas function from the dashmain.js
			list_personas();
		}
	});
});