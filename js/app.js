$(document).ready(function() {
	
	function chooseType() {

		function setIcons() {
			$('.aci').append('<img src="Logos for search project/aci.png">');
			$('.acm').append('<img src="Logos for search project/acm - fade copy 2.png">');
			$('.afe').append('<img src="Logos for search project/AFE - fade.png">');
		}

		function getType() {

			if ($('#programType').val() == "searchAll") {
				$('.scholarshipProgram, .loanProgram').css(testcss());
			}
			else if ($('#programType').val() == "scholarshipProgram") {
				$('.scholarshipProgram').css({"background-image": "url('Logos for search project/aci - color.png')"});	
			}
			else if ($('#programType').val() == "loanProgram") {
				$('.loanProgram').css({"background-image": "url('Logos for search project/aci - color.png')"});	
			}
		}

		function getLevel() {
			if ($('#educationLevel').val() == "searchAll") {
				$('.k12, .highSchool').css({"background-image": "url('Logos for search project/aci - color.png')"});
			}
			else if ($('#educationLevel').val() == "k-12") {
				$('.k12').css({"background-image": "url('Logos for search project/aci - color.png')"});
			}
			else if ($('#educationLevel').val() == "highSchool") {
				$('.highSchool').css({"background-image": "url('Logos for search project/aci - color.png')"});
			}
		}

		function testcss() {
			var test1 = {"background-image": "url('Logos for search project/aci - color.png')"};
			var test2 = {"background-image": "url('Logos for search project/acm - color.png')"};
			console.log(this);
			
		}

		
		$('#searchButton').click(function () {
			getType();
			getLevel();

		});
	}
	chooseType();
});

