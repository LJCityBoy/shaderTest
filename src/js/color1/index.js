
import * as THREE from 'three'
import vertexShader from '../shader/color1/vertexShader'
import fragmentShader from '../shader/color1/fragementShader'
import fragmentShader2 from "../shader/color1/linghtP"
import clampShader from '../shader/color1/clampShader'


export default class addMesh{
    constructor(world){
        let self = this;
        let geometry = new THREE.PlaneBufferGeometry(2, 2);
        let material = new THREE.ShaderMaterial({
            uniforms: world.uniforms,
            vertexShader: vertexShader,
            fragmentShader: clampShader
        });
        let mesh = new THREE.Mesh(geometry, material);
        
        world.scene.add(mesh);
    }
}