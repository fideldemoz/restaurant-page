import homePage from './homePage.js';
import aboutPage from './aboutPage.js';
import menuPage from './menuPage.js';
import data from './data.json';
function header () {
	const topNode = document.createElement("header");
	const navNode = document.createElement("nav");
	const navItem = (textContent) => {
		let node = document.createElement("div");
		node.textContent = textContent;	
		return node;
	}

	const homeTab = navItem ("Home"),
	menuTab = navItem ("Menu"),
	aboutTab = navItem ("About"),
	mainTitle = document.createElement("h2");
	mainTitle.style.textAlign = 'center';
	mainTitle.textContent = data.name;
	mainTitle.classList.add("crossPageTitle");
	homeTab.classList.add("active");
	navNode.appendChild(homeTab);
	navNode.appendChild(menuTab);
	navNode.appendChild(aboutTab);
	const headerItems = [{node: homeTab, page: homePage}, {node: menuTab, page: menuPage}, {node: aboutTab, page: aboutPage}];

	headerItems.forEach( function(obj, index) {
		let element = obj.node,
		page = obj.page();
		element.addEventListener("click", () => {
			headerItems.forEach( function(option, index) {
				option.node.classList.remove("active");
			});
			let main = document.querySelector("main"),
			footer = document.querySelector("footer");
			document.body.removeChild(main);
			document.body.insertBefore(page, footer);
			let title = document.querySelector(".title");
			element.classList.add("active");
		})
	});
	topNode.appendChild(navNode);
	topNode.appendChild(mainTitle);
	return topNode;
}
export default header;