var sliderText = [
					["Thank you so much for a wonderful ceremony! We feel so lucky to have found you.",
					 "Diane and Dan"],
					["Marge exemplifies love and caring.",
					 "Linda and Nathan"],
					["Marge is a gifted Justice of the Peace and provides couples with a very special service.",
					 "Tara and Seth"],
					["Her warmth and energy inspires creativity and commitment.",
					 "Caitlyn and Doug"],
					["She is a wonderful person, extremely conscientious, considerate, gentle and generous.",
					 "Veronica and Kevin"]
											];
var arrayPosition = 0;
var replacementString = "";

function changeText() {
	circleEmpty = '<div class="circle-empty"></div>';
	circleFilled = '<div class="circle-filled"></div>';
	circlesString = '';
	for (var i = 0; i < sliderText.length; i++) {
		if (i === arrayPosition) {
			circlesString += circleFilled;
		} else {
			circlesString += circleEmpty;
		}
	}
	replacementString = '<div class="text-container"><h2>Testimonials</h2><blockquote class="testimonial">'
							+ sliderText[arrayPosition][0] + '</blockquote><span class="source">' 
							+ sliderText[arrayPosition][1] + '</span>'
							+ '<div class="circles-wrapper">' + circlesString + '</div></div>';
	document.getElementById("testimonials").innerHTML = replacementString;
	arrayPosition++;
	if (arrayPosition === sliderText.length) {
		arrayPosition = 0;
	}
}

window.onload = function() {
	changeText();
	document.getElementById("email-address").innerHTML = '<a href="mailto:margeinspirationalcelebrations@gmail.com">margeinspirationalcelebrations@gmail.com</a>';
}

window.setInterval(changeText, 4000);
