import data from './data.json';
function homePage () {
	const main = document.createElement("main");
	const h1 = () => document.createElement("h1");
	const p = () => document.createElement("p");

	const title1 = h1(),
	title1Text = p(),
	title2 = h1(),
	title2Text = p(),
	title3 = h1(),
	title3Text = p();

	title1.textContent = data.homePage.title1;
	title1Text.textContent = data.homePage.title1Text;
	title2.textContent = data.homePage.title2;
	title2Text.textContent = data.homePage.title2Text;
	title3.textContent = data.homePage.title3;
	title3Text.textContent = data.homePage.title3Text;
	main.appendChild(title1);
	main.appendChild(title1Text);
	main.appendChild(title2);
	main.appendChild(title2Text);
	main.appendChild(title3);
	main.appendChild(title3Text);

	return main;
}

export default homePage;