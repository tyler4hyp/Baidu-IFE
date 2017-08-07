var currloca = [6, 6, 'up'];
var oldloca = [];

function init() {
	var show = document.getElementById('show');
	var table = document.createElement('table');
	for (var i = 0; i < 11; i++) {
		table.insertRow(i);
		for (var j = 0; j < 11; j++) {
			table.rows[i].insertCell(j);
		}
	}
	table.rows[0].cells[0].setAttribute('class', 'tdOrder');
	for (var i = 1; i < 11; i++) {
		table.rows[0].cells[i].appendChild(document.createTextNode(i));
		table.rows[0].cells[i].setAttribute('class', 'tdOrder');
		table.rows[i].cells[0].appendChild(document.createTextNode(i));
		table.rows[i].cells[0].setAttribute('class', 'tdOrder');
	}
	show.appendChild(table);
	draw();
}
window.onload = init;


function moveAction(d) {
	var table = document.getElementsByTagName('table')[0];
	var target = table.rows[currloca[0]].cells[currloca[1]];
	switch (d) {
		case 'up':
			if (currloca[0] == 1) {
				alert('到达上边界!');
			} else {
				currloca[0] = currloca[0] - 1;
			}
			break;
		case 'down':
			if (currloca[0] == 10) {
				alert('到达下边界!');
			} else {
				currloca[0] = currloca[0] + 1;
			}
			break;
		case 'left':
			if (currloca[1] == 1) {
				alert('到达左边界!');
			} else {
				currloca[1] = currloca[1] - 1;
			}
			break;
		case 'right':
			if (currloca[1] == 10) {
				alert('到达右边界!');
			} else {
				currloca[1] = currloca[1] + 1;
			}
			break;
	}
}

function move(d) {
	oldloca = currloca.concat();
	switch (d) {
		case 'GO':
			moveAction(currloca[2]);
			break;
		case 'TUN LEF':
			switch (currloca[2]) {
				case 'up':
					currloca[2] = 'left';
					break;
				case 'down':
					currloca[2] = 'right';
					break;
				case 'left':
					currloca[2] = 'down';
					break;
				case 'right':
					currloca[2] = 'up';
					break;
			}
			break;
		case 'TUN RIG':
			switch (currloca[2]) {
				case 'up':
					currloca[2] = 'right';
					break;
				case 'down':
					currloca[2] = 'left';
					break;
				case 'left':
					currloca[2] = 'up';
					break;
				case 'right':
					currloca[2] = 'down';
					break;
			}
			break;
		case 'TUN BAC':
			switch (currloca[2]) {
				case 'up':
					currloca[2] = 'down';
					break;
				case 'down':
					currloca[2] = 'up';
					break;
				case 'left':
					currloca[2] = 'right';
					break;
				case 'right':
					currloca[2] = 'left';
					break;
			}
			break;
		case 'TRA LEF':
			moveAction('left');
			break;
		case 'TRA TOP':
			moveAction('up');
			break;
		case 'TRA RIG':
			moveAction('right');
			break;
		case 'TRA BOT':
			moveAction('down');
			break;
		case 'MOV LEF':
			currloca[2] = 'left';
			moveAction('left');
			break;
		case 'MOV TOP':
			currloca[2] = 'up';
			moveAction('up');
			break;
		case 'MOV RIG':
			currloca[2] = 'right';
			moveAction('right');
			break;
		case 'MOV BOT':
			currloca[2] = 'down';
			moveAction('down');
			break;
	}
}

function draw() {
	var table = document.getElementsByTagName('table')[0];
	if (oldloca.length != 0) {
		var oldTarget = table.rows[oldloca[0]].cells[oldloca[1]];
		oldTarget.removeChild(oldTarget.firstChild);
	}
	var target = table.rows[currloca[0]].cells[currloca[1]];
	var blue = document.createElement('div');
	var red = document.createElement('div');
	red.setAttribute('class', 'redBlock')
	switch (currloca[2]) {
		case 'up':
			red.style.flexDirection = 'column';
			blue.setAttribute('class', 'blueHori');
			red.appendChild(blue);
			target.appendChild(red);
			break;
		case 'down':
			red.style.flexDirection = 'column-reverse';
			blue.setAttribute('class', 'blueHori');
			red.appendChild(blue);
			target.appendChild(red);
			break;
		case 'left':
			red.style.flexDirection = 'row';
			blue.setAttribute('class', 'blueVert');
			red.appendChild(blue);
			target.appendChild(red);
			break;
		case 'right':
			red.style.flexDirection = 'row-reverse';
			blue.setAttribute('class', 'blueVert');
			red.appendChild(blue);
			target.appendChild(red);
			break;
	}
}

document.getElementById('btn').addEventListener('click', function() {
	var input = document.getElementById('input').value;
	move(input);
	draw();
});