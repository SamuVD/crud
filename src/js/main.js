// Import our custom CSS
import "../scss/styles.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { coders } from "../../public/data/database.js";
import {listWithInnerHtml} from './operations.js';


const tbody = document.querySelector("tbody");
listWithInnerHtml(coders,tbody);