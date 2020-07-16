import * as THREE from 'three'

import vertexShader from '../shader/color1/vertexShader'
import noiseShader1 from '../noise/shader/noiseShader1'
import noiseShader2 from '../noise/shader/noiseShader2'
import noiseShader3 from '../noise/shader/noiseShader3'
import noiseShader4 from '../noise/shader/noiseShader4'
import noiseShader5 from '../noise/shader/noiseShader5'
import noiseShader6 from '../noise/shader/noiseShader6'
import noiseShader7 from '../noise/shader/noiseShader7'
import noiseShader8 from '../noise/shader/noiseShader8'
import noiseShader9 from '../noise/shader/noiseShader9'
import noiseShader10 from '../noise/shader/noiseShader10'
import noiseShader11 from '../noise/shader/noiseShader11'
import noiseShader12 from '../noise/shader/noiseShader12'
import noiseShader13 from '../noise/shader/noiseShader13'
import noiseShader14 from '../noise/shader/noiseShader14'
import noiseShader15 from '../noise/shader/noiseShader15'
import noiseShader16 from '../noise/shader/noiseShader16'
import noiseShader17 from '../noise/shader/noiseShader17'
import noiseShader18 from '../noise/shader/noiseShader18'
import noiseShader19 from '../noise/shader/noiseShader19'
import noiseShader20 from '../noise/shader/noiseShader20'
import noiseShader21 from '../noise/shader/noiseShader21'
import noiseShader22 from '../noise/shader/noiseShader22'








export default class Shape{
    constructor(world){
        let self = this;
        
        let geometry = new THREE.PlaneBufferGeometry(2, 2);
        let material = new THREE.ShaderMaterial({
            uniforms: world.uniforms,
            vertexShader: vertexShader,
            fragmentShader: noiseShader22
        });
        let mesh = new THREE.Mesh(geometry, material);
        
        world.scene.add(mesh);
    }
}