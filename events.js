const p = document.querySelector('p');
const button = document.querySelector('button');

const changeText = () => {
	p.textContent = "Will I change?";
}

const change = () => {
	p.textContent('Will I alert?');
}

// Events can be overwritten
button.onclick = changeText;
button.onclick = alertText;
