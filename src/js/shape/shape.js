import * as THREE from 'three'

import vertexShader from '../shader/color1/vertexShader'
import shaperShader1 from '../shader/shape/shapeShader1'
import shaperShader2 from '../shader/shape/shaperShader2'
import circle from '../shader/shape/circle'
import tangel from '../shader/shape/tangel'


export default class Shape{
    constructor(world){
        let self = this;
        let geometry = new THREE.PlaneBufferGeometry(2, 2);
        let material = new THREE.ShaderMaterial({
            uniforms: world.uniforms,
            vertexShader: vertexShader,
            fragmentShader: tangel
        });
        let mesh = new THREE.Mesh(geometry, material);
        
        world.scene.add(mesh);
    }
}