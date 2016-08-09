##Template Template Engine
小白模板引擎，不喜勿喷呀。

###Principle
基于字符串的前端模板引擎，其原理主要为，将html转为抽象语法树(AST)，返回一个函数。
调用函数，并且传入数据model，实现模板数据的渲染，最后，获得节点，将返回字符串以innerHTML的方式嵌入到网页当中

###Usage

####import
```javascript
<script type="text/javascript" src="template.js"></script>
```
####HTML Structure
```javascript
<script id="tpl" type="text/plain">
	<h2>name: {user.name}</h2>
	<p>age: {user.age}</p>
	<p>content: {content}</p>
	<p>That s all</p>
</script>
```

####Data Model & Trigger
```javascript
<script type="text/javascript">
	var model = {
		user: {
			name: 'Nick',
			age: 29
		},
		content: 'I am so handsome'
	}

	var tpl = document.getElementById('tpl').innerHTML;
	var content = new Template(tpl);
	document.write(content.render(model));
</script>
```


