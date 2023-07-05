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
	const headerItems = [homeTab, menuTab, aboutTab];

	headerItems.forEach( function(element, index) {
		element.addEventListener("click", () => {
			let main = document.querySelector("main"),
			footer = document.querySelector("footer");
			document.body.removeChild(main);
			main = document.createElement("main");
			main.textContent = element.textContent;
			document.body.insertBefore(main, footer);
		})
	});
	topNode.appendChild(navNode);
	return topNode;
}
export default header;