const a=document.getElementById("show-link"),p=document.getElementById("project-link"),w=document.getElementById("contact-link");a?.addEventListener("click",()=>{const o=a.getAttribute("data-show")=="true",r=document.getElementById("desc");a.setAttribute("data-show",o?"false":"true"),a.textContent=o?"Show more.":"Show less.",r.classList.add("hidden"),r.textContent=o?"Hi \u{1F44B} call me Robert.":"Hi \u{1F44B} I'm Andreas Robert Pitoy, call me Robert. I'm a software engineer, and below are some of the things that i build throughout they years on my time off.",setTimeout(()=>{r.classList.remove("hidden")},1)});p?.addEventListener("click",()=>{document.getElementById("project")?.scrollIntoView({behavior:"smooth"})});w?.addEventListener("click",()=>{document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})});const y=document.querySelectorAll(".stack-right"),x=document.querySelectorAll(".stack-left"),A=document.querySelectorAll(".expand-stack"),E=document.querySelectorAll(".collapse-stack");A.forEach(o=>{o.addEventListener("click",()=>{const r=o.getAttribute("data-order"),e=document.querySelector(`.m-stack[data-order="${r}"]`);document.querySelector(`.collapse-stack[data-order="${r}"]`).classList.remove("hidden"),o.classList.add("hidden"),e.classList.remove("hid"),e.classList.add("vis")})});E.forEach(o=>{o.addEventListener("click",()=>{const r=o.getAttribute("data-order"),e=document.querySelector(`.m-stack[data-order="${r}"]`);document.querySelector(`.expand-stack[data-order="${r}"]`).classList.remove("hidden"),o.classList.add("hidden"),e.classList.remove("vis"),e.classList.add("hid")})});const S=new IntersectionObserver(o=>{o.forEach(r=>{const e=r.target;r.isIntersecting?(e.style.opacity="1",e.style.transform="translateX(0)",e.style.transition="all 0.4s"):(e.style.opacity="0",e.style.transform="translateX(-50px)",e.style.transition="all 0.4s 1s")})},{rootMargin:"-200px 0px 0px 0px",threshold:1}),L=new IntersectionObserver(o=>{o.forEach(r=>{const e=r.target;r.isIntersecting?(e.style.opacity="1",e.style.transform="translateX(0)",e.style.transition="all 0.4s"):(e.style.opacity="0",e.style.transform="translateX(50px)",e.style.transition="all 0.4s 1s")})},{rootMargin:"-200px 0px 0px 0px",threshold:1});x.forEach(function(o){o.style.opacity="0",o.style.transform="translateX(-50px)",S.observe(o)});y.forEach(function(o){o.style.opacity="0",o.style.transform="translateX(50px)",L.observe(o)});var i=document.getElementById("canvas");i.width=window.innerWidth;i.height=window.innerHeight;var t=i.getContext("webgl");t||console.error("Unable to initialize WebGL.");var l=0,b=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,k=`
precision highp float;

#define AA

uniform float width;
uniform float height;
vec2 resolution = vec2(width, height);

uniform float time;

void main(){

	float strength = 0.3;
	float t = time/10.0;

	vec3 col = vec3(0);
	vec2 fC = gl_FragCoord.xy;

	#ifdef AA
	for(int i = -1; i <= 1; i++) {
		for(int j = -1; j <= 1; j++) {

			fC = gl_FragCoord.xy+vec2(i,j)/3.0;

			#endif

			//Normalized pixel coordinates (from 0 to 1)
			vec2 pos = fC/resolution.xy;

			pos.y /= resolution.x/resolution.y;
			pos = 4.0*(vec2(0.5) - pos);

			for(float k = 1.0; k < 7.0; k+=1.0){ 
				pos.x += strength * sin(2.0*t+k*1.5 * pos.y)+t*0.5;
				pos.y += strength * cos(2.0*t+k*1.5 * pos.x);
			}

			//Time varying pixel colour
			col += vec3(0.3) * (0.6 + 0.5*cos(time+pos.xyx+vec3(0,2,4)));

			#ifdef AA
		}
	}

	col /= 9.0;
	#endif

  //Gamma
  col = pow(col, vec3(0.18));

	//Fragment colour
	gl_FragColor = vec4(col,1.0);
}
`;window.addEventListener("resize",B,!1);function B(){i.width=window.innerWidth,i.height=window.innerHeight,t.viewport(0,0,i.width,i.height),t.uniform1f(f,window.innerWidth),t.uniform1f(u,window.innerHeight)}function h(o,r){var e=t.createShader(r);if(t.shaderSource(e,o),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))throw"Shader compile failed with: "+t.getShaderInfoLog(e);return e}function I(o,r){var e=t.getAttribLocation(o,r);if(e===-1)throw"Cannot find attribute "+r+".";return e}function c(o,r){var e=t.getUniformLocation(o,r);if(e===-1)throw"Cannot find uniform "+r+".";return e}var R=h(b,t.VERTEX_SHADER),F=h(k,t.FRAGMENT_SHADER),n=t.createProgram();t.attachShader(n,R);t.attachShader(n,F);t.linkProgram(n);t.useProgram(n);var C=new Float32Array([-1,1,-1,-1,1,1,1,-1]),H=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,H);t.bufferData(t.ARRAY_BUFFER,C,t.STATIC_DRAW);var m=I(n,"position");t.enableVertexAttribArray(m);t.vertexAttribPointer(m,2,t.FLOAT,!1,2*4,0);var T=c(n,"time"),f=c(n,"width"),u=c(n,"height");t.uniform1f(f,window.innerWidth);t.uniform1f(u,window.innerHeight);var d=Date.now(),s;function v(){s=Date.now(),l+=(s-d)/770,d=s,t.uniform1f(T,l),t.drawArrays(t.TRIANGLE_STRIP,0,4),requestAnimationFrame(v)}v();
