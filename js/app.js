$(document).ready(function() {
	
	function chooseType() {


		function getType() {

			if ($('#programType').val() == "scholarshipProgram") {
				$('.scholarshipProgram').addClass('inColor');
			}
			else if ($('#programType').val() == "loanProgram") {
				$('.loanProgram').find('.aciImg').replaceWith('<img src="Logos for search project/aci - color.png">');
			}
		}

		function getLevel() {
			if ($('#educationLevel').val() == "k-12") {
				$('.k12')
			}
			else if ($('#educationLevel').val() == "highSchool") {
				$('.highSchool')
			}
		}
	
		$('#searchButton').click(function () {
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

