function Template(tpl) {
	var match,
		code = ["var html=[];"],
		reg = /\{\s*([a-zA-Z\.\_0-9()]+)\s*\}/m,

		// 将html代码以字符串形式加入到数组code当中
		rep = function(text) {
			var replacedText = text.replace(/\'/g, '\\\'').replace(/\n/g, '\\n').replace(/\r/g, '\\r');
			code.push('html.push(\'' + replacedText + '\');');
		};

	while (match = reg.exec(tpl)) {
		if (match.index > 0) {
			rep(tpl.slice(0, match.index));
			code.push('html.push(this.' + match[1] +  ');');
		}

		tpl = tpl.slice(match.index + match[0].length, tpl.length);
	}
	rep(tpl);
	code.push('return html.join(\'\');');

	var func = new Function(code.join('\n'));

	this.render = function(model) {
		return func.apply(model);
	}
}