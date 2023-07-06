import data from './data.json';
function aboutPage () {
	const main = document.createElement("main");
	const h1 = () => document.createElement("h1");
	const p = () => document.createElement("p");
	const div = () => document.createElement("div");

	const about = div(),
	aTitle = h1(),
	aText = p();

	aTitle.textContent = data.aboutPage.about;
	aText.textContent = data.aboutPage.aText;
	about.appendChild(aTitle);
	about.appendChild(aText);

	const location = div(),
	lTitle = h1();
	lTitle.textContent = data.aboutPage.location;
	location.appendChild(lTitle);

	data.aboutPage.address.forEach( function(element, index) {
		const line = p();
		line.textContent = element;
		location.appendChild(line);
	});

	main.appendChild(about);
	main.appendChild(location);

	return main;
}

export default aboutPage;