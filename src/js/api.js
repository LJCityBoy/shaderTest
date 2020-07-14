
import  Color1 from './color1/index'
import Shape from './shape/shape'
import Matrice from './matrice/index'


export default class API {
    constructor(world){
        //测试color1
        // let color1 = new Color1(world);
        // let shap = new Shape(world);
        new Matrice(world);
    }
}