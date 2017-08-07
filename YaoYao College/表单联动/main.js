function addLoadFunc(func) {
	var oldfunc = window.onload;
	if (typeof oldfunc != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldfunc();
			func();
		}
	}
}
addLoadFunc(init);

function chooseStatus(val) {
	var school = document.getElementById('school');
	var employ = document.getElementById('employ');
	if (val == 'Student') {
		school.style.display = 'block';
		employ.style.display = 'none';
	} else {
		employ.style.display = 'block';
		school.style.display = 'none';
	}
}

function init() {
	var status = document.getElementsByName('status');
	for (var i = 0; i < status.length; i++) {
		status[i].onclick = function() {
			chooseStatus(this.value);
		}
	}
}

document.getElementById('city').addEventListener('change', function(){
	var univ = document.getElementById('university');
	univ.options.length = 0;
	switch (this.value) {
		case 'BJ':
			univ.add(new Option('北京大学', 'PKU'));
			univ.add(new Option('清华大学', 'THU'));
			break;
		case 'SH':
			univ.add(new Option('复旦大学', 'FDU'));
			univ.add(new Option('上海交通大学', 'SJTU'));
			break;
	}
});
