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

module.exports = `

//旋转
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

//矩阵变换
mat2 rotate2d(float _angle){
    return mat2(
        cos(_angle),-sin(_angle),
        sin(_angle),cos(_angle)
        );
}

float box(in vec2 _st,in vec2 _size){
    _size = vec2(0.5) - _size * 0.5;
    vec2 uv = smoothstep(_size,_size + vec2(0.001),_st);
    uv *= smoothstep(_size,_size+vec2(0.001),vec2(1.0)-_st);
    return uv.x * uv.y;
}

float cross(in vec2 _st,float _size){
    return box(_st,vec2(_size,_size/4.0)) + box(_st,vec2(_size/4.0,_size));
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    //旋转之前先平移到中心点
    st -= vec2(0.5);

    st = rotate2d(sin(u_time)*PI) * st;

    st += vec2(0.5);

    color = vec3(st.x,st.y,0.0);

    color += vec3(cross(st,0.4));
    gl_FragColor = vec4(color,1.0);
}`