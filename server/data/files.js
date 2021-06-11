const jsCode = `const timer = document.querySelector('#time span')

setInterval(() => {
	timer.innerText = new Date().toLocaleString()
}, 1000)`;

const cssCode = `body {
	padding: 10px;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
		Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	line-height: 1.6;
	font-size: 18px;
}`;

const htmlCode = `<!doctype HTML>
<html>
	<head>
		<title>Coding Pillow Editor</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="/style.css" />
	</head>
	<body>
		<h1>Welcome to Coding Pillow</h1>
		<p>Hey there! This is a HTML/CSS/JS playground!</p>
		<ul>
			<li>You can edit these files....!</li>
			<li>You can play with CSS/JS files</li>
			<li>You can create files and folders here</li>
			<li>Feel free to use it as your local development environment</li>
			<li>hello world</li>
		</ul>
		<div id="time">Time right now: <span></span></div>
		<script src="http://codingpilloweditor.herokuapp.com/"></script>
		<script src="/script.js"></script>
	</body>
</html>`;

const files = [
  {
    name: "script.js",
    language: "javascript",
    value: jsCode,
  },
  {
    name: "style.css",
    language: "css",
    value: cssCode,
  },
  {
    name: "index.html",
    language: "html",
    value: htmlCode,
  },
];

export default files;
