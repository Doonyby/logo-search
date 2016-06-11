$(document).ready(function() {
	
	function chooseType() {

		function setIcons() {
			$('.aci').append('<img class="aciImg" src="Logos for search project/aci.png">');
			$('.acm').append('<img class="acmImg" src="Logos for search project/acm - fade copy 2.png">');
			$('.afe').append('<img class="afeImg" src="Logos for search project/AFE - fade.png">');
		}

		// function changeIcons() {
		// 	$('.aciImg').hide()
		// 	$('.acmImg').hide()
		// 	$('.afeImg').hide()

			// $('#aciImg').append('<img src="Logos for search project/aci - color.png">');
			// $('#acmImg').append('<img src="Logos for search project/acm - color.png">');
			// $('#afeImg').append('<img src="Logos for search project/AFE color.png">');

		//}

		function getType() {

			if ($('#programType').val() == "scholarshipProgram") {
				$('.scholarshipProgram')
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
		setIcons();
	}
	chooseType();
});

