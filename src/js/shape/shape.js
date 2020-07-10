import * as THREE from 'three'

import vertexShader from '../shader/color1/vertexShader'
import shaperShader1 from '../shader/shape/shapeShader1'


export default class Shape{
    constructor(world){
        let self = this;
        let geometry = new THREE.PlaneBufferGeometry(2, 2);
        let material = new THREE.ShaderMaterial({
            uniforms: world.uniforms,
            vertexShader: vertexShader,
            fragmentShader: shaperShader1
        });
        let mesh = new THREE.Mesh(geometry, material);
        
        world.scene.add(mesh);
    }
}