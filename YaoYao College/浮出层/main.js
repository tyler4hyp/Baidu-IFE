var shadow = document.getElementById('shadow');
var layer = document.getElementById('layer');

function clearLayer() {
	shadow.style.display = 'none';
	layer.style.display = 'none';
}

document.addEventListener('click', function(e) {
	var target = e.target;
	switch (target.id) {
		case 'btn':
			shadow.style.display = 'block';
			layer.style.display = 'block';
			break;
		case 'confirm':
		case 'cancel':
		case 'shadow':
			clearLayer();
			break;
	}
});