//Basic setup for ajax call to server to edit persona info. Server will send response as a
//large json object. Need to populate the fields of the modal with the stored values from the database

function edit_persona(id){
	$.ajax({
		url:'/json_files/soc_persona_info.json',
		dataType: 'JSON',
		method: 'GET',
		// data: {
		// 	"persona_id" : id
		// },
		success: function(response){
			//functions for required tab
			$('.persona_name').val(response.socialPersonas[id].persona_name);
			$("#persona_description").val(response.socialPersonas[id].description);

			//functions for basic tab
			//this value does not exist in the persona object
			// 'real_name': $('.real_name').val(),
			$('#showSex').val(response.socialPersonas[id].show_sex);
			$('#showAge').val(response.socialPersonas[id].show_age);
			$('#persona_number').val(response.socialPersonas[id].phone_number);
			$('#persona_hometown').val(response.socialPersonas[id].hometown);
			$('#persona_add_info').val(response.socialPersonas[id].add_personal_info);

			//functions for education
			$('#education').val(response.socialPersonas[id].education);
			$('#additional_school_info').val(response.socialPersonas[id].add_edu_info);
			$('#employment').val(response.socialPersonas[id].employment_history);
			$('#additional_job_info').val(response.socialPersonas[id].add_employ_info);
			
			//functions for personal tab
			$('#persona_politics').val(response.socialPersonas[id].political_affiliation);
			$('#persona_religion').val(response.socialPersonas[id].religion);
			$('#persona_rltnshp').val(response.socialPersonas[id].relationship_status);
			$('#persona_children').val(response.socialPersonas[id].number_children);
			$('#persona_gender').val(response.socialPersonas[id].gender);
			$('#persona_languages').val(response.socialPersonas[id].languages_spoken);
			$('#persona_ethnicity').val(response.socialPersonas[id].ethnicity);
			$('#persona_more_info').val(response.socialPersonas[id].more_info);

			//functions for physical tab
			$('#units').val(response.socialPersonas[id].units);
			$('#height').val(response.socialPersonas[id].height);
			$('#weight').val(response.socialPersonas[id].weight);
			$('#hair_color').val(response.socialPersonas[id].hair_color);
			$('#eye_color').val(response.socialPersonas[id].eye_color);
			$('#physical_add_info').val(response.socialPersonas[id].phys_add_info);

			// //functions for interests
			// $('#hobbies').val();
			// $('#fave_movies').val();
			// $('#fave_music').val();
			// $('#fave_tv_shows').val();
			// $('#fave_books').val();
			// $('#fave_sports').val();
			// $('#fave_add_info').val();
		}
	});
}