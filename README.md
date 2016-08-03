##Template Template Engine
小白模板引擎，不喜勿喷呀，可以实现基本的变量替换

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
	<p>That\'s all</p>
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


