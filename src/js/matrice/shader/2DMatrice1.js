// module.exports = `
// #ifdef GL_ES
// precision mediump float;
// #endif

// uniform vec2 u_resolution;
// uniform float u_time;

// float box(in vec2 _st,in vec2 _size){
//     _size = vec2(0.5) - _size * 0.5;

//     vec2 uv = smoothstep(_size,_size + vec2(0.001),_st);
//     uv *= smoothstep(_size,_size + vec2(0.001),vec2(1.0)-_st);

//     return uv.x * uv.y;
// }

// float cross(in vec2 _st,float _size){
//     return box(_st,vec2(_size,_size/3.0)) + box(_st,vec2(_size/4.0,_size));

// }

// void main(){
//     vec2 st = gl_FragCoord.xy/u_resolution.xy;
//     vec3 color = vec3(0.0);

//     vec2 translate = vec2(cos(u_time),sin(u_time));
//     st += translate * 0.36;
//     color += vec3(cross(st,0.25));
//     gl_FragColor = vec4(color,1.0);
// }
// `

// module.exports = `

// //旋转
// #ifdef GL_ES
// precision mediump float;
// #endif

// #define PI 3.14159265359

// uniform vec2 u_resolution;
// uniform float u_time;

// //矩阵变换
// mat2 rotate2d(float _angle){
//     return mat2(
//         cos(_angle),-sin(_angle),
//         sin(_angle),cos(_angle)
//         );
// }

// float box(in vec2 _st,in vec2 _size){
//     _size = vec2(0.5) - _size * 0.5;
//     vec2 uv = smoothstep(_size,_size + vec2(0.001),_st);
//     uv *= smoothstep(_size,_size+vec2(0.001),vec2(1.0)-_st);
//     return uv.x * uv.y;
// }

// float cross(in vec2 _st,float _size){
//     return box(_st,vec2(_size,_size/4.0)) + box(_st,vec2(_size/4.0,_size));
// }

// void main(){
//     vec2 st = gl_FragCoord.xy/u_resolution.xy;
//     vec3 color = vec3(0.0);

//     //旋转之前先平移到中心点
//     st -= vec2(0.5);

//     st = rotate2d(sin(u_time)*PI) * st;

//     st += vec2(0.5);

//     // color = vec3(st.x,st.y,0.0);

//     color += vec3(cross(st,0.4));
//     gl_FragColor = vec4(color,1.0);
// }`


// 缩放
// module.exports = `
// #ifdef GL_ES
// precision mediump float;
// #endif

// #define PI 3.14159265359

// uniform vec2 u_resolution;
// uniform float u_time;

// mat2 scale(vec2 _scale){
//     return mat2(_scale.x,0.0,0.0,_scale.y);
// }

// float box(in vec2 _st,in vec2 _size){
//     _size = vec2(0.5) - _size * 0.5;
//     vec2 uv = smoothstep(_size,_size + vec2(0.001),_st);
//     uv *= smoothstep(_size,_size + vec2(0.001),vec2(1.0)-_st);

//     return uv.x * uv.y;
// }

// float cross(in vec2 _st,float _size){
//     return box(_st,vec2(_size,_size/4.0)) + box(_st,vec2(_size/4.0,_size));
// }

// void main(){
//     vec2 st = gl_FragCoord.xy/u_resolution;
//     vec3 color = vec3(0.0);

//     st -= vec2(0.5);
//     st = scale(vec2(sin(u_time)+1.0)) * st;
//     st += vec2(0.5);

//     // color += vec3(st.y,st.x,st.x);
//     color += mix(0.0,1.0,sin(st.x*u_time));
//     color += vec3(cross(st,0.2));

//     gl_FragColor = vec4(color,1.0);
// }
// `


//切换颜色
module.exports = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

mat3 yuv2rgb = mat3(
    1.0,0.0,1.13983,
    1.0,-0.39465,-0.58060,
    1.0,2.03211,0.0
);

mat3 rgb2yuv = mat3(
    0.2126,0.7152,0.0722,
    -0.09991,-0.33609,-0.43600,
    0.615,-0.5586,-0.05639
);

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);

    // st -= 0.5;
    st *= 8.0;
    st = fract(st);

    // color = rgb2yuv * vec3(sin(u_time),0.5,st.y);
    color = vec3(st,0.0);
    color = vec3()

    gl_FragColor = vec4(color,1.0);
}
`