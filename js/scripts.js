// Empty JS for your own code to be here
const levelInput = document.querySelector('#levelInput');

levelInput.addEventListener('change', updateValue);

function updateValue(e) {
	if (e.target.value < 1)
		e.target.value = 1;
	else if (e.target.value > 120)
		e.target.value = 120;
	else
		e.target.value = Math.round(e.target.value);
}