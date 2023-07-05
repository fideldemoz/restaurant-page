import homePage from './homePage.js';
import aboutPage from './aboutPage.js';
import menuPage from './menuPage.js';
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
	aboutTab = navItem ("About");
	navNode.appendChild(homeTab);
	navNode.appendChild(menuTab);
	navNode.appendChild(aboutTab);
	const headerItems = [{node: homeTab, page: homePage}, {node: menuTab, page: menuPage}, {node: aboutTab, page: aboutPage}];

	headerItems.forEach( function(obj, index) {
		let element = obj.node,
		page = obj.page();
		element.addEventListener("click", () => {
			let main = document.querySelector("main"),
			footer = document.querySelector("footer");
			document.body.removeChild(main);
			document.body.insertBefore(page, footer);
			let title = document.querySelector(".title");
			headerItems.forEach( function(obj, index) {
				let element = obj.node;
				if (element.textContent === title.textContent) {
					element.classList.add("active");
				} else {
					element.classList.remove("active");
				}
			});

		})
	});
	topNode.appendChild(navNode);
	return topNode;
}
export default header;