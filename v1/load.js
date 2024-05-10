if (getParam('d')) {
	let d = getParam('d');
	let script = document.createElement('script');
	script.src = '../data/' + d + '.js';
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
		const r_ = content[1].split(',');
		if(r_)r_.forEach(r => {
			r_array.push(parseInt(r))
		});
	}
  })