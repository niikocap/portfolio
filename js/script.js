var container = document.querySelector('.container');
var rightPanel = document.querySelector('.rightPanel');
var leftPanel = document.querySelector('.leftPanel');
container.style.height = window.innerHeight + "px"
leftPanel.style.height = window.innerHeight + "px"
rightPanel.style.height = window.innerHeight + "px"

if (window.innerWidth < 900) {
	location.href = 'error.html'
}
