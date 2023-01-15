const a=document.getElementById("show-link"),p=document.getElementById("project-link"),w=document.getElementById("contact-link");a?.addEventListener("click",()=>{const o=a.getAttribute("data-show")=="true",r=document.getElementById("desc");a.setAttribute("data-show",o?"false":"true"),a.textContent=o?"Show more.":"Show less.",r.classList.add("hidden"),r.textContent=o?"Hi \u{1F44B} call me Robert.":"Hi \u{1F44B} I'm Andreas Robert Pitoy, call me Robert. I'm a software engineer and below are some of the things that I have build on my spare time.",setTimeout(()=>{r.classList.remove("hidden")},1)});p?.addEventListener("click",()=>{document.getElementById("project")?.scrollIntoView({behavior:"smooth"})});w?.addEventListener("click",()=>{document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})});const y=document.querySelectorAll(".stack-right"),x=document.querySelectorAll(".stack-left"),A=document.querySelectorAll(".expand-stack"),E=document.querySelectorAll(".collapse-stack");A.forEach(o=>{o.addEventListener("click",()=>{const r=o.getAttribute("data-order"),t=document.querySelector(`.m-stack[data-order="${r}"]`);document.querySelector(`.collapse-stack[data-order="${r}"]`).classList.remove("hidden"),o.classList.add("hidden"),t.classList.remove("hid"),t.classList.add("vis")})});E.forEach(o=>{o.addEventListener("click",()=>{const r=o.getAttribute("data-order"),t=document.querySelector(`.m-stack[data-order="${r}"]`);document.querySelector(`.expand-stack[data-order="${r}"]`).classList.remove("hidden"),o.classList.add("hidden"),t.classList.remove("vis"),t.classList.add("hid")})});const S=new IntersectionObserver(o=>{o.forEach(r=>{const t=r.target;r.isIntersecting?(t.style.opacity="1",t.style.transform="translateX(0)",t.style.transition="all 0.4s"):(t.style.opacity="0",t.style.transform="translateX(-50px)",t.style.transition="all 0.4s 1s")})},{rootMargin:"-200px 0px 0px 0px",threshold:1}),L=new IntersectionObserver(o=>{o.forEach(r=>{const t=r.target;r.isIntersecting?(t.style.opacity="1",t.style.transform="translateX(0)",t.style.transition="all 0.4s"):(t.style.opacity="0",t.style.transform="translateX(50px)",t.style.transition="all 0.4s 1s")})},{rootMargin:"-200px 0px 0px 0px",threshold:1});x.forEach(function(o){o.style.opacity="0",o.style.transform="translateX(-50px)",S.observe(o)});y.forEach(function(o){o.style.opacity="0",o.style.transform="translateX(50px)",L.observe(o)});var i=document.getElementById("canvas");i.width=window.innerWidth;i.height=window.innerHeight;var e=i.getContext("webgl");e||console.error("Unable to initialize WebGL.");var l=0,b=`
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
`;window.addEventListener("resize",I,!1);function I(){i.width=window.innerWidth,i.height=window.innerHeight,e.viewport(0,0,i.width,i.height),e.uniform1f(f,window.innerWidth),e.uniform1f(u,window.innerHeight)}function h(o,r){var t=e.createShader(r);if(e.shaderSource(t,o),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))throw"Shader compile failed with: "+e.getShaderInfoLog(t);return t}function B(o,r){var t=e.getAttribLocation(o,r);if(t===-1)throw"Cannot find attribute "+r+".";return t}function c(o,r){var t=e.getUniformLocation(o,r);if(t===-1)throw"Cannot find uniform "+r+".";return t}var R=h(b,e.VERTEX_SHADER),F=h(k,e.FRAGMENT_SHADER),n=e.createProgram();e.attachShader(n,R);e.attachShader(n,F);e.linkProgram(n);e.useProgram(n);var C=new Float32Array([-1,1,-1,-1,1,1,1,-1]),H=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,H);e.bufferData(e.ARRAY_BUFFER,C,e.STATIC_DRAW);var m=B(n,"position");e.enableVertexAttribArray(m);e.vertexAttribPointer(m,2,e.FLOAT,!1,2*4,0);var T=c(n,"time"),f=c(n,"width"),u=c(n,"height");e.uniform1f(f,window.innerWidth);e.uniform1f(u,window.innerHeight);var d=Date.now(),s;function v(){s=Date.now(),l+=(s-d)/770,d=s,e.uniform1f(T,l),e.drawArrays(e.TRIANGLE_STRIP,0,4),requestAnimationFrame(v)}v();
