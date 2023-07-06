import data from './data.json';
import riceUrl from './images/rice.jpg';
import hamburgerUrl from './images/hamburger.jpg';
import pastaUrl from './images/pasta.jpg';
function menuPage () {
	const main = document.createElement("main");
	const h1 = () => document.createElement("h1");
	const p = () => document.createElement("p");
	const div = () => document.createElement("div");
	const imgs = [riceUrl, pastaUrl, hamburgerUrl]
	data.menuPage.forEach((meal, index) => {
		const element = div(),
		element_left = div(),
		element_title = h1(),
		element_text = p(),
		element_img = new Image();
		element.classList.add("meal");

		element_title.textContent = meal.name;
		element_text.textContent = meal.cost;
		element_img.src = imgs[index];
		element_left.appendChild(element_title);
		element_left.appendChild(element_text);
		element.appendChild(element_left);
		element.appendChild(element_img);
		main.appendChild(element);
	})

	return main;
}

export default menuPage;