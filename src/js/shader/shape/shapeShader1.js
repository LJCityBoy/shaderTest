// module.exports = `
// #ifdef GL_ES
// precision mediump float;
// #endif

// uniform vec2 u_resolution;

// void main(){
//     vec2 st = gl_FragCoord.xy/u_resolution;

//     vec3 color = vec3(1.0); //初始化
//     float left = step(0.1,st.x);
//     float bottom = step(0.1,st.y);

//     color = vec3(left * bottom,1.0,0.0);

//     gl_FragColor = vec4(color,1.0);
// }
// `

module.exports = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);

    // vec2 b1 = step(vec2(0.2),st);
    vec2 b1 = vec2(0.0);
    b1.x = smoothstep(0.0,1.0,st.x);
    b1.y = smoothstep(0.0,1.0,st.y);
    float pct = b1.x * b1.y;

    // vec2 tr = step(vec2(0.2),1.0-st);
    vec2 tr = vec2(1.0);
    tr.x = smoothstep(0.0,1.0,st.x);
    tr.y = smoothstep(0.0,1.0,st.y);
    pct *= tr.x * tr.y;

    color = vec3(pct);

    gl_FragColor = vec4(color,1.0);
}`