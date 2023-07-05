import './styles.css';
import  header from './header.js'
import  footer from './footer.js'
import data from './data.json';
function createHome () {
	const main = document.createElement("main");
	const h1 = () => document.createElement("h1");
	const p = () => document.createElement("p");

	let title1 = h1();
	let title1Text = p();
	title1.textContent = data.home.title1;
	title1Text.textContent = data.home.title1Text;
	main.appendChild(title1);
	main.appendChild(title1Text);

	return main;
}

document.body.appendChild(header());
document.body.appendChild(createHome());
document.body.appendChild(footer());