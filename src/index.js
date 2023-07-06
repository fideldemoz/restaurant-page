import './styles.css';
import  header from './header.js'
import  footer from './footer.js'
import data from './data.json';
import homePage from './homePage.js';

document.body.appendChild(header());
document.body.appendChild(homePage());
document.body.appendChild(footer());
export default homePage;