$(document).ready(function() {
	
	function chooseType() {
		var programType = {
			searchAll: {
				scholarshipProgram: $('.icon1, .icon3, .icon4, .icon7, .icon10, .icon16'),
				loanProgram: $('.icon2, .icon5, .icon6, .icon9, .icon11, .icon15'),
			}
		}

		var educationLevel = {
			searchAll: {
				k12: $('.icon8, .icon12, .icon13, .icon6, .icon10, .icon1, .icon16'),
				highSchool: $('.icon2, .icon3, .icon4, .icon5, .icon7, .icon9, .icon11, .icon14, #icon15'),
			}
		}

		function getType() {
			if ($('#programType').val() == "searchAll") {
				$(programType.searchAll.scholarshipProgram).hide();
				imageSwap();
				$(programType.searchAll.loanProgram).hide();
				imageSwap();
			}
			else if ($('#programType').val() == "scholarshipProgram") {
				$(programType.searchAll.scholarshipProgram).hide();
				imageSwap();
			}
			else if ($('#programType').val() == "loanProgram") {
				$(programType.searchAll.loanProgram).hide();
				imageSwap();
			}
		}

		function getLevel() {
			if ($('#educationLevel').val() == "searchAll") {
				$(educationLevel.searchAll.k12).hide();
				imageSwap();
				$(educationLevel.searchAll.highSchool).hide();
				imageSwap();
			}
			else if ($('#educationLevel').val() == "k-12") {
				$(educationLevel.searchAll.k12).hide();
				imageSwap();
			}
			else if ($('#educationLevel').val() == "highSchool") {
				$(educationLevel.searchAll.highSchool).hide();
				imageSwap();
			}
		}

		function imageSwap() {
		    var aciColor = '<img id="icon1" src="Logos for search project/aci - color.png">';
			var acmColor = '<img id="icon1" src="Logos for search project/acm - color.png">';
			var afeColor = '<img id="icon1" src="Logos for search project/AFE coco.png">';
			if ($('img').attr('class') == 'aci') {
				console.log(this);
			}
		}
		
		$('#searchButton').click(function () {
			getType();
			getLevel();

		});
	}
	chooseType();
});

