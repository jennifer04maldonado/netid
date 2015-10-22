//Basic setup for ajax call to server to save new persona info. URL needed to know where the data
//is being sent to. Also, key names might change.
//This function could also be loaded into the jquery.bootstrap.wizard.js file instead

$('.finish').click(function(){
	$.ajax({
		url:'',
		dataType: 'JSON',
		method: 'POST',
		data:{ 
			//functions for required tab
			'persona_name': $('#new_soc__name').val(),
			'description': $('#new_soc_description').val(),

			//functions for basic tab
			//this value does not exist in the persona object
			'real_name': $('#new_soc_name').val(),
			'show_sex': $('#new_soc_showSex').val(),
			'show_age': $('#new_soc_showAge').val(),
			'phone_number': $('#new_soc_number').val(),
			'hometown': $('#new_soc_hometown').val(),
			'add_personal_info': $('#new_soc_add_info').val(),

			//functions for education
			'education': $('#new_soc_pers_edu').val(),
			'add_edu_info': $('#new_soc_add_edu_info').val(),
			'employment_history': $('#new_soc_employ').val(),
			'add_employ_info': $('#new_soc_add_job_info').val(),

			//functions for personal tab
			'political_affiliation': $('#new_soc_politics').val(),
			'religion': $('#new_soc_religion').val(),
			'relationship_status': $('#new_soc_persona_rltnshp').val(),
			'number_children': $('#new_soc_children').val(),
			'gender': $('#new_soc_gender').val(),
			'languages_spoken': $('#new_soc_languages').val(),
			'ethnicity': $('#new_soc_ethnicity').val(),
			'more_info': $('#new_soc_more_info').val(),

			//functions for physical tab
			'units': $('#new_soc_units').val(),
			'height': $('#new_soc_height').val(),
			'weight': $('#new_soc_weight').val(),
			'hair_color': $('#new_soc_hair_color').val(),
			'eye_color': $('#new_soc_eye_color').val(),
			'phys_add_info': $('#new_soc_phys_add_info').val(),

			//functions for interests
			// $('#new_soc_hobbies').val(),
			// $('#new_soc_movies').val(),
			// $('#new_soc_music').val(),
			// $('#new_soc_tv_shows').val(),
			// $('#new_soc_books').val(),
			// $('#new_soc_sports').val(),
			// $('#new_soc_fave_add_info').val()
		},
		success: function(){
			//success function will repopulate the dashboard with the additional persona in it using the
			//list_personas function from the dashmain.js
			list_personas();
		}
	});
});