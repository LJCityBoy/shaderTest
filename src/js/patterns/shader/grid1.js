module.exports = `
precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


// 画圆圈
float circle(in vec2 _st,in float _radius){
    vec2 _l = _st - vec2(0.5);
    return 1.0-smoothstep(_radius-(_radius*0.01),_radius+(_radius*0.01),dot(_l,_l)*4.);
}


void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    
    st *= 3.0;
    st = fract(st);

    color = vec3(st,0.0);
    color = vec3(circle(st,0.618));

    gl_FragColor = vec4(color,1.0);
}

`
