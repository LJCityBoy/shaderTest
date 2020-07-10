
import './css/main.css'
import MyWorld from './js/MyWorld'
import API from './js/api'

window.myWorld  = new MyWorld();

const api = new API(window.myWorld);

