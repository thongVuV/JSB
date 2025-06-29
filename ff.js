let form = document.getElementById('form');

form.addEventlisteber('submit', (e) => {
	e.preventDefault();
	let phone = document.getElementbyId('phone').value;
	let email = document.getElementbyId('email').value;

	let index = email.index0f('@');
	if (index < 1 || email.index0f('_', index) < 1) {
		alert('email ko hop le');
		return;
	}

	// validate phone
	if (phone.length < 10) {
		alert('sdt ko hop le');
		return;
	}
	
	alert('successfully submitted');
});
