function changecolor(fb, input, chosenColor) {
	fb.style.color = chosenColor;
	input.style.borderColor = chosenColor;
}

function checkname() {
	var input = document.getElementById('name');
	var val = input.value;
	var feedback = document.getElementsByClassName('feedback')[0];
	var chinese = val.replace(/[^\u4e00-\u9fa5]/gi, "");
	var num = val.length - chinese.length + chinese.length * 2;
	if (val == "") {
		feedback.innerHTML = "姓名不能为空";
		changecolor(feedback, input, 'red');
		return false;
	} else {
		if (num < 4 || num > 16) {
			feedback.innerHTML = "名称格式错误";
			changecolor(feedback, input, 'red');
			return false;
		} else {
			feedback.innerHTML = "名称格式正确";
			changecolor(feedback, input, 'green');
			return true;
		}
	}
}

document.getElementById('name').addEventListener('focus', function(){
	var feedback = document.getElementsByClassName('feedback')[0];
	feedback.innerHTML = "必填,长度为4-16个字符";
	changecolor(feedback, this, 'grey');
});

document.getElementById('name').onblur = checkname;

function checkpw() {
	var input = document.getElementById('pw');
	var val = input.value;
	var feedback = document.getElementsByClassName('feedback')[1];
	var chinese = val.replace(/[^\u4e00-\u9fa5]/gi, "");
	var num = val.length - chinese.length + chinese.length * 2;
	if (val == "") {
		feedback.innerHTML = "密码不能为空";
		changecolor(feedback, input, 'red');
		return false;
	} else {
		if (num < 4 || num > 16) {
			feedback.innerHTML = "密码格式错误";
			changecolor(feedback, input, 'red');
			return false;
		} else {
			feedback.innerHTML = "密码可用";
			changecolor(feedback, input, 'green');
			return true;
		}
	}
}

document.getElementById('pw').addEventListener('focus', function(){
	var feedback = document.getElementsByClassName('feedback')[1];
	feedback.innerHTML = "必填,长度为4-16个字符";
	changecolor(feedback, this, 'grey');
});

document.getElementById('pw').onblur = checkpw;


function checkpwconfirm() {
	var pw = document.getElementById('pw').value;
	var input = document.getElementById('pwconfirm');
	var pwconfirm = input.value;
	var feedback = document.getElementsByClassName('feedback')[2];
	if (pw == pwconfirm) {
		feedback.innerHTML = "密码输入一致";
		changecolor(feedback, input, 'green');
		return true;
	} else {
		feedback.innerHTML = "密码输入不一致";
		changecolor(feedback, input, 'red');
		return false;
	}
}

document.getElementById('pwconfirm').addEventListener('focus', function(){
	var feedback = document.getElementsByClassName('feedback')[2];
	feedback.innerHTML = "再次输入相同密码";
	changecolor(feedback, this, 'grey');
});

document.getElementById('pwconfirm').onblur = checkpwconfirm;



function checkemail() {
	var input = document.getElementById('email');
	var val = input.value;
	var feedback = document.getElementsByClassName('feedback')[3];
	var pattern = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
	if (val == "") {
		feedback.innerHTML = "email不能为空";
		changecolor(feedback, input, 'red');
		return false;
	} else {
		if (pattern.test(val)) {
			feedback.innerHTML = "email可用";
			changecolor(feedback, input, 'green');
			return true;
		} else {
			feedback.innerHTML = "email格式错误";
			changecolor(feedback, input, 'red');
			return false;
		}
	}
}

document.getElementById('email').addEventListener('focus', function(){
	var feedback = document.getElementsByClassName('feedback')[3];
	feedback.innerHTML = "请输入email";
	changecolor(feedback, this, 'grey');
});

document.getElementById('email').onblur = checkemail;



function checkphone() {
	var input = document.getElementById('phone');
	var val = input.value;
	var feedback = document.getElementsByClassName('feedback')[4];
	var pattern = /^1\d{10}$/;
	if (val == "") {
		feedback.innerHTML = "手机号不能为空";
		changecolor(feedback, input, 'red');
		return false;
	} else {
		if (pattern.test(val)) {
			feedback.innerHTML = "手机号可用";
			changecolor(feedback, input, 'green');
			return true;
		} else {
			feedback.innerHTML = "手机号格式错误";
			changecolor(feedback, input, 'red');
			return false;
		}
	}
}

document.getElementById('phone').addEventListener('focus', function(){
	var feedback = document.getElementsByClassName('feedback')[4];
	feedback.innerHTML = "请输入手机号";
	changecolor(feedback, this, 'grey');
});

document.getElementById('phone').onblur = checkphone;

function checkinput() {
	var name = checkname();
	var pw = checkpw();
	var pwconfirm = checkpwconfirm();
	var email = checkemail();
	var phone = checkphone();
	if (name && pw && pwconfirm && email && phone) {
		alert("提交成功");
		return true;
	} else {
		alert("提交失败")
		return false;
	}
}