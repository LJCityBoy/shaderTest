module.exports = `
precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random(vec2 st){
   
    return fract(sin(dot(st.xy,vec2(12.988,78.23212)))*102456.00154);
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    float rnd = random(st);

    gl_FragColor = vec4(vec3(rnd),1.0);
}
`