module.exports = `
#ifdef GL_SE
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    float pct = 0.0;
    
    // pct = distance(st,vec2(0.5));
    // pct = distance(st,vec2(0.4)) * distance(st,vec2(0.6));
    // pct = min(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
    pct = max(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
    pct = pow(distance(st,vec2(0.4)),distance(st,vec2(0.6)));


    gl_FragColor = vec4(vec3(pct),1.0);
}

`