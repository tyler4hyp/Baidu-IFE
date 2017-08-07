function registerEvent() {
	var thead = document.getElementsByTagName('thead')[0];
	for (var i = 1; i < thead.rows[0].cells.length; i++) {
		(function() {
			var k = i;
			thead.rows[0].cells[k].onclick = function(e) {
				var ele = e.target;
				var data = getData(k);
				var sortData;
				switch (ele.className) {
					case 'ao':
						sortData = ascend(data);
						break;
					case 'do':
						sortData = descend(data);
						break;
				}
				renderTable(sortData);
			}
		})();
	}
}
window.onload = registerEvent;

function getData(i) {
	var tbody = document.getElementsByTagName('tbody')[0];
	var data = [];
	for (var j = 0; j < tbody.rows.length; j++) {
		data.push([j, tbody.rows[j].cells[i].innerHTML]);
	}
	return data;
}

function ascend(data) {
	var sortData = data.sort(function(a, b) {
		return a[1] - b[1];
	});
	return sortData;
}

function descend(data) {
	var sortData = data.sort(function(a, b) {
		return b[1] - a[1];
	});
	return sortData;
}

function renderTable(data) {
	var table = document.getElementsByTagName('table')[0];
	var tbody = document.getElementsByTagName('tbody')[0];
	var newtb = document.createElement('tbody');
	for (var i = 0; i < data.length; i++) {
		var k = data[i][0];
		var temp = tbody.children[k].cloneNode(true);
		newtb.appendChild(temp);
	}
	table.removeChild(tbody);
	table.appendChild(newtb);
}