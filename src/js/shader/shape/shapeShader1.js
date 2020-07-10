module.exports = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 color = vec3(1.0); //初始化
    float left = step(0.1,st.x);
    float bottom = step(0.1,st.y);

    color = vec3(left * bottom,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}
`