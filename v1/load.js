if (getParam('d')) {
	let d = getParam('d');
	let script = document.createElement('script');
	script.src = '../data/' + d + '.js';
	document.head.appendChild(script);
}
else{
	window.location.href = '?d=Target-1900-6';
}