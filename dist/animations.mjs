function q(a,b,d){a=a.width/a.height;return a>b.width/b.height!==d?{width:b.height*a,height:b.height}:{width:b.width,height:b.width/a}}
function r(a,b,d){d=void 0===d?getComputedStyle(a).getPropertyValue("object-fit"):d;a={width:a.naturalWidth,height:a.naturalHeight};switch(d){case "cover":return q(a,b,!1);case "contain":return q(a,b,!0);case "fill":return b;case "none":return a;case "scale-down":return b=q(a,b,!0),{width:Math.min(a.width,b.width),height:Math.min(a.height,b.height)};case "":case null:return b;default:throw Error("object-fit: "+d+" not supported");}};function t(a,b){a=(a.match(new RegExp("-?\\s*\\d+"+b))||["0"])[0].replace(" ","");return parseFloat(a)}function u(a,b,d){var c=a||"50% 50%",e=0===c.lastIndexOf("calc",0)?c.indexOf(")")+1:c.indexOf(" ");a=c.slice(0,e)||"";c=c.slice(e)||"";e=t(a,"px");var f=t(c,"px");a=t(a,"%")/100;return{top:t(c,"%")/100*(b.height-d.height)+f,left:a*(b.width-d.width)+e}};function x(a,b,d,c,e){b=void 0===b?a.getBoundingClientRect():b;d=void 0===d?b:d;c=void 0===c?getComputedStyle(a).getPropertyValue("object-position"):c;e=void 0===e?r(a,b):e;b=u(c,b,e);c=document.createElement("div");var f=document.createElement("div"),h=document.createElement("div"),k=document.createElement("div"),g=document.createElement("div");a=a.cloneNode(!0);a.className="";a.style.cssText="";g.appendChild(a);k.appendChild(g);h.appendChild(k);f.appendChild(h);c.appendChild(f);Object.assign(f.style,
{overflow:"hidden",width:d.width+"px",height:d.height+"px"});Object.assign(g.style,{transform:"translate("+b.left+"px, "+b.top+"px)"});Object.assign(a.style,{display:"block",width:e.width+"px",height:e.height+"px"});return{G:c,o:f,i:h,v:k,w:g,j:a}};function y(a){if("static"!=getComputedStyle(a).position)return a;var b=a.offsetParent||a.parentElement;return b?y(b):a};function z(a){return"cubic-bezier("+a.x1+", "+a.y1+", "+a.x2+", "+a.y2+")"}function A(a,b,d){var c=d*d,e=c*d;return 3*(d-2*c+e)*a+3*(c-e)*b+e};function B(a,b){return{x:a.width/b.width,y:a.height/b.height}};function C(a){var b=a.i,d=a.curve,c=a.styles,e=a.a,f=a.b,h=e+"-crop";e+="-counterScale";var k=B(a.g,a.f),g={x:1,y:1},m=f?k:g;f=f?g:k;Object.assign(a.o.style,c,{willChange:"transform",transformOrigin:"top left",animationName:h,animationTimingFunction:"linear",animationFillMode:"forwards"});Object.assign(b.style,c,{willChange:"transform",transformOrigin:"top left",animationName:e,animationTimingFunction:"linear",animationFillMode:"forwards"});b=a="";for(c=0;20>=c;c++){k=.05*c;var l=A(d.y1,d.y2,k);k=
100*A(d.x1,d.x2,k);g=m.x;g+=l*(f.x-g);var n=m.y;l=n+l*(f.y-n);n=1/g;var p=1/l;a+=k+"% {\n      transform: scale("+g+", "+l+");\n    }";b+=k+"% {\n      transform: scale("+n+", "+p+");\n    }"}return"\n    @keyframes "+h+" {\n      "+a+"\n    }\n\n    @keyframes "+e+" {\n      "+b+"\n    }\n  "};function D(a){var b=a.f,d=a.A,c=a.g,e=a.D,f=a.b,h=a.a+"-crop-position";b={top:b.top-d.top,left:b.left-d.left};e={top:c.top-e.top,left:c.left-e.left};c=f?e:b;f=f?b:e;Object.assign(a.element.style,a.styles,{willChange:"transform",animationName:h,animationTimingFunction:z(a.curve),animationFillMode:"forwards"});return"\n    @keyframes "+h+" {\n      from {\n        transform: translate("+c.left+"px, "+c.top+"px);\n      }\n\n      to {\n        transform: translate("+f.left+"px, "+f.top+"px);\n      }\n    }\n  "}
;function E(a){var b=a.b,d=a.a+"-scale",c={x:1,y:1},e=B(a.s,a.l),f=b?e:c;b=b?c:e;Object.assign(a.element.style,a.styles,{willChange:"transform",transformOrigin:"top left",animationName:d,animationTimingFunction:z(a.curve),animationFillMode:"forwards"});return"\n    @keyframes "+d+" {\n      from {\n        transform: scale("+f.x+", "+f.y+");\n      }\n\n      to {\n        transform: scale("+b.x+", "+b.y+");\n      }\n    }\n  "};function F(a){var b=a.element,d=a.g,c=a.s,e=a.F,f=a.styles,h=a.b,k=z(a.curve),g=a.a+"-object-position";a=u(a.B,a.f,a.l);c=u(e,d,c);d=h?c:a;h=h?a:c;Object.assign(b.style,f,{willChange:"transform",animationName:g,animationTimingFunction:k,animationFillMode:"forwards"});return"\n    @keyframes "+g+" {\n      from {\n        transform: translate("+d.left+"px, "+d.top+"px);\n      }\n\n      to {\n        transform: translate("+h.left+"px, "+h.top+"px);\n      }\n    }\n  "};function G(a){var b=a.C,d=a.f,c=a.g,e=a.b,f=a.a+"-translation",h=e?c:d;d=e?d:c;c=h.left-d.left;h=h.top-d.top;Object.assign(a.element.style,a.styles,{position:"absolute",top:d.top-b.top+"px",left:d.left-b.left+"px",willChange:"transform",animationName:f,animationTimingFunction:z(a.curve),animationFillMode:"forwards"});return"\n    @keyframes "+f+" {\n      from {\n        transform: translate("+c+"px, "+h+"px);\n      }\n\n      to {\n        transform: translate(0, 0);\n      }\n    }\n  "};var H={x1:.42,y1:0,x2:.58,y2:1},I=0;function J(a){I+=1;return a+"-"+I+"-"}function K(a,b,d){var c=getComputedStyle(a),e=c.getPropertyValue("object-fit");c=c.getPropertyValue("object-position");return{H:e,m:c,rect:b,c:d,j:a,h:r(a,b,e),u:b.width*b.height}};export const prepareImageAnimation=function(a){var b=void 0===a.transitionContainer?document.body:a.transitionContainer,d=void 0===a.styleContainer?document.head:a.styleContainer,c=a.srcImg,e=a.targetImg,f=void 0===a.srcImgRect?c.getBoundingClientRect():a.srcImgRect,h=void 0===a.srcCropRect?f:a.srcCropRect,k=void 0===a.targetImgRect?e.getBoundingClientRect():a.targetImgRect,g=void 0===a.targetCropRect?k:a.targetCropRect,m=void 0===a.curve?H:a.curve,l=a.styles;a=void 0===a.keyframesNamespace?"img-transform":
a.keyframesNamespace;c=K(c,f,h);g=K(e,k,g);k=(e=g.u>c.u)?c:g;g=e?g:c;a=J(a);f=x(g.j,g.rect,g.c,g.m,g.h);var n=f.G,p=f.o,v=f.i;c=f.v;h=f.w;f=f.j;var L=y(b).getBoundingClientRect();p=C({o:p,i:v,f:g.c,g:k.c,curve:m,styles:l,a:a,b:e});v=G({element:n,C:L,f:g.c,g:k.c,curve:m,styles:l,a:a,b:e});h=F({element:h,f:g.rect,g:k.rect,l:g.h,s:k.h,B:g.m,F:k.m,curve:m,styles:l,a:a,b:e});c=D({element:c,f:g.rect,A:g.c,g:k.rect,D:k.c,curve:m,styles:l,a:a,b:e});m=E({element:f,l:g.h,s:k.h,curve:m,styles:l,a:a,b:e});var w=
document.createElement("style");w.textContent=p+v+h+c+m;return{applyAnimation:function(){d.appendChild(w);b.appendChild(n)},cleanupAnimation:function(){b.removeChild(n);d.removeChild(w)}}};
