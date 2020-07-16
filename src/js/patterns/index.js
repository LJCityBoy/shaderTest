import * as THREE from 'three'

import vertexShader from '../shader/color1/vertexShader'
import grid1 from './shader/grid1'
import grid2 from './shader/grid2'
import grid3 from './shader/grid3'
import grid4 from './shader/grid4'
import grid5 from './shader/grid5'




export default class Shape{
    constructor(world){
        let self = this;
        
        let geometry = new THREE.PlaneBufferGeometry(2, 2);
        let material = new THREE.ShaderMaterial({
            uniforms: world.uniforms,
            vertexShader: vertexShader,
            fragmentShader: grid5
        });
        let mesh = new THREE.Mesh(geometry, material);
        
        world.scene.add(mesh);
    }
}