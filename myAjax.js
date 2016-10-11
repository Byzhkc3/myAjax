// ajax 方法封装 需要配合jQuery使用
// URL 链接地址
// data 提交的数据
// method 提交的方法
// fun1 成功后执行的方法
// fun2 失败后执行的方法

function myAjax (url, data, method, func1, func2) {
	
	var handle_error = function (jqXHR, textStatus) {
		// ajax 调用出错处理
		if(jqXHR.state() == "resolved"){
			console.log ('error');
			func2();
			return ;
	    }
	    func2();
	};
	$.ajax ({
		url: url,
		data: data,
		method: method,
		success: func1,
		error: handle_error,
		dataType: 'json',
	});
}
