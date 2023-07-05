import data from './data.json';
export default function footer () {
	const topNode = document.createElement("footer");
	const div = () => {
		return document.createElement("div");
	}
	const about = div();
	about.innerHTML = `<h1>About</h1>
	${data.about}`;
	topNode.appendChild(about);

	return topNode;

}