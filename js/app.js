$(document).ready(function() {
	
	function chooseType() {
		var programType = {
			searchAll: {
				scholarshipProgram: $('#icon1 #icon3 #icon4 #icon7 #icon10 #icon16'),
				loanProgram: $('#icon2 #icon5 #icon6 #icon9 #icon11 #icon15'),
			}
		}

		var educationLevel = {
			searchAll: {
				k12: $('#icon8 #icon12 #icon13 #icon6 #icon10 #icon1 #icon16'),
				highSchool: $('#icon2 #icon3 #icon4 #icon5 #icon7 #icon9 #icon11 #icon14 #icon15'),
			}
		}
		console.log(programType);
		console.log(educationLevel);



		$('#searchButton').click(function () {
			


		});
	}
	chooseType();
});