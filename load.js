if (getParam('d')) {
	let d = getParam('d');
	let script = document.createElement('script');
	script.src = 'data/' + d + '.js';
	document.head.appendChild(script);
}
else{
	window.location.href = '?d=Target-1900-6';
}

const cookies = document.cookie;
const array = cookies.split(';');

array.forEach(function(value) {
	const content = value.split('=');
	if (content[0]==' r_array'){
		r_array = parseInt(content[1].split(','));
	}
  })