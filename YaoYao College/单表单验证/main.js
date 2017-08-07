function checkinput() {
	var input = document.getElementById('input').value;
	var feedback = document.getElementById('feedback');
	if (input == "") {
		feedback.innerHTML = "姓名不能为空";
		return false;
	}
	var chinese = input.replace(/[^\u4e00-\u9fa5]/gi, "");
	var num = input.length - chinese.length + chinese.length * 2;
	if (num < 4 || num > 16) {
		feedback.innerHTML = "名称格式错误";
		return false;
	}
	feedback.innerHTML = "名称格式正确";
	return false;
}