// module.exports = `
// #ifdef GL_ES
// precision mediump float;
// #endif

// uniform vec2 u_resolution;
// uniform vec2 u_mouse;
// uniform float u_time;

// float circle(in vec2 _st,in float _radius){
//     vec2 dist = _st - vec2(0.5);
//     return 1.0 - smoothstep(_radius-(_radius * 0.01),_radius+(_radius*0.01), dot(dist,dist)*4.0);
// }

// void main(){
//     vec2 st = gl_FragCoord.xy/u_resolution.xy;
//     vec3 color = vec3(circle(st,0.3));
//     gl_FragColor = vec4(color,1.0);
// }
// `

// module.exports = `
// #ifdef GL_EL
// precision mediump float;
// #endif

// uniform vec2 u_resolution;
// uniform vec2 u_mouse;
// uniform float u_time;

// void main(){
//     vec2 st = gl_FragCoord.xy/u_resolution;
//     st.x *= u_resolution.x/u_resolution.y;
//     vec3 color = vec3(0.0);
//     float d = 0.0;
//     st = st * 2.0-1.0;
//     // d = length(abs(st)-0.3);
//     // d = length(min(abs(st)-0.3,0.0));
//     d = length(max(abs(st) - 0.3,0.0));

//     // gl_FragColor = vec4(vec3(fract(d * 10.0)),1.0);

//     // gl_FragColor = vec4(vec3(step(0.3,d)*step(d,0.4)),1.0);

//     gl_FragColor = vec4(vec3(smoothstep(0.3,0.4,d)*smoothstep(0.6,0.5,d)),1.0);

// }`

module.exports = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
    vec2 pos = vec2(0.5) - st;

    float r = length(pos) * 2.0;
    float a = atan(pos.y,pos.x) ;

    float f = cos(a*3.);

    color = vec3(1. - smoothstep(f,f+0.02,r));

    gl_FragColor = vec4(color,1.0);
}`