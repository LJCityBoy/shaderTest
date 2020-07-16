import * as THREE from 'three'

import vertexShader from '../shader/color1/vertexShader'
import fsShader1 from '../stochastic/shader/stochastic1'
import fsShader2 from '../stochastic/shader/stochastic2'
import fsShader3 from '../stochastic/shader/stochastic3'







export default class Shape{
    constructor(world){
        let self = this;
        
        let geometry = new THREE.PlaneBufferGeometry(2, 2);
        let material = new THREE.ShaderMaterial({
            uniforms: world.uniforms,
            vertexShader: vertexShader,
            fragmentShader: fsShader3
        });
        let mesh = new THREE.Mesh(geometry, material);
        
        world.scene.add(mesh);
    }
}