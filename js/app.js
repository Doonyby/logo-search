$(document).ready(function() {
	
	function chooseType() {


		function getType() {
			if ($('#programType').val() == "searchAll") {
				$('.scholarshipProgram, .loanProgram').addClass('inColor');
			}
			else if ($('#programType').val() == "scholarshipProgram") {
				$('.scholarshipProgram').addClass('inColor');
			}
			else if ($('#programType').val() == "loanProgram") {
				$('.loanProgram').addClass('inColor');
			}
		}

		function getLevel() {
			if ($('#educationLevel').val() == "searchAll") {
				$('.k12, .highSchool').addClass('inColor');
			}
			else if ($('#educationLevel').val() == "k-12") {
				$('.k12').addClass('inColor');
			}
			else if ($('#educationLevel').val() == "highSchool") {
				$('.highSchool').addClass('inColor');
			}
		}
	
		$('#searchButton').click(function () {
			$('.k12, .highSchool, .scholarshipProgram, .loanProgram').removeClass('inColor');
			getType();
			getLevel();

		});

// get submit event
// remove class inColor from icon
// check value of program type
// select class
// set class inColor for 


	}
	chooseType();
});

