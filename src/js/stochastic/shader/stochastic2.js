
module.exports = `
precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random(vec2 st){
    return fract(sin(dot(st.xy,vec2(12.98,78.23))) * 43758.54);
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st *= 10.0; //缩放10倍
    vec2 ipos = floor(st);
    vec2 fpos = fract(st);

    vec3 color = vec3(random(ipos));

    gl_FragColor = vec4(color,1.0);
}
`