
import * as THREE from 'three'

export default class MyWorld {
    constructor() {
        this.init()
    }
    init() {
        if (this.scene) return;
        let self = this;
        //初始化
        this.container = document.getElementById('container');
        if (!this.container) {
            console.error('获取容器失败！');
            return;
        }
        this.camera = new THREE.Camera();
        this.camera.position.z = 1;

        this.scene = new THREE.Scene();

        //  暴露uniform
        this.uniforms = {
            u_time: { type: "f", value: 1. },
            u_resolution: { type: "v2", value: new THREE.Vector2() },
            u_mouse: { type: "v2", value: new THREE.Vector2() }
        };

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(400, 400); //(window.innerWidth *, window.innerHeight
        this.uniforms.u_resolution.value.x = this.renderer.domElement.width;
        this.uniforms.u_resolution.value.y = this.renderer.domElement.height;


        this.container.appendChild(this.renderer.domElement);


        window.addEventListener('resize', (event) => {
            this.renderer.setSize(400,400); //window.innerWidth, window.innerHeight
            this.uniforms.u_resolution.value.x = this.renderer.domElement.width;
            this.uniforms.u_resolution.value.y = this.renderer.domElement.height;
        }, false);

        render()
        //循环渲染
        function render() {
            requestAnimationFrame(render);
            self.uniforms.u_time.value += .01;
            self.renderer.render(self.scene, self.camera);
        }
    }


}



