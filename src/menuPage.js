import data from './data.json';
function menuPage () {
	const main = document.createElement("main");
	const h1 = () => document.createElement("h1");
	const p = () => document.createElement("p");
	let title = h1();
	title.className = "title";
	title.textContent = "Menu";
	let title1 = h1();
	let title1Text = p();
	title1.textContent = data.home.title1;
	title1Text.textContent = data.home.title1Text;
	main.appendChild(title);
	main.appendChild(title1);
	main.appendChild(title1Text);
	main.className = "home";

	return main;
}

export default menuPage;