(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{26:function(e,t,a){e.exports=a(36)},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var o=a(9),r=a.n(o),n=a(0),c=a.n(n),i=a(3),s=a(1),l=a(5),f=a.n(l),u=a(8),h=a(16),m=a.n(h),p={sections:9,pages:8,zoom:75,paragraphs:[{offset:1,factor:1.75,header:"Audi",image:"./photo-1515036551567-bf1198cccc35.jpeg",aspect:1.51},{offset:2,factor:2,header:"Test",image:"./photo-1519608487953-e999c86e7455.jpeg",aspect:1.5,text:"The man who comes back through the Door in the Wall will never be quite the same as the man who went out. He will be wiser but less sure, happier but less self-satisfied, humbler in acknowledging his ignorance yet better equipped to understand the relationship of words to things, of systematic reasoning to the unfathomable mystery which it tries, forever vainly, to comprehend."},{offset:3,factor:2.25,header:"Test",image:"./ph1.jpg",aspect:1.5037,text:"The substance can take you to heaven but it can also take you to hell. Or else to both, together or alternately. Or else (if you're lucky, or if you've made yourself ready) beyond either of them. And then beyond the beyond, back to where you started from \u2014 back to here, back to New Rotham sted, back to business as usual. Only now, of course, business as usual is completely different."},{offset:4,factor:2,header:"Test",image:"./ph3.jpg",aspect:.665,text:"We\u2019ve found that the people whose EEG doesn\u2019t show any alpha-wave activity when they\u2019re relaxed aren\u2019t likely to respond significantly to the substance. That means that, for about fifteen percent of the population, we have to find other approaches to liberation."},{offset:5,factor:1.75,header:"Sector 8",image:"./photo-1533577116850-9cc66cad8a9b.jpeg",aspect:1.55,text:"By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won\u2019t be compelled by one\u2019s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing."},{offset:7,factor:1.05,header:"Test",image:"./photo-1548191265-cc70d3d45ba1.jpeg",aspect:1.77,text:"Education and enlightenment."}],stripes:[{offset:0,color:"#000",height:13},{offset:6.3,color:"#000",height:20}],diamonds:[{x:0,offset:.15,pos:new s.Vector3,scale:.6,factor:1.8},{x:2,offset:1.1,pos:new s.Vector3,scale:.8,factor:2.1},{x:-5,offset:2,pos:new s.Vector3,scale:.8,factor:2.5},{x:0,offset:3.2,pos:new s.Vector3,scale:.8,factor:1.75},{x:0,offset:4,pos:new s.Vector3,scale:.8,factor:2.5},{x:2,offset:5.5,pos:new s.Vector3,scale:1.25,factor:.85},{x:-5,offset:7,pos:new s.Vector3,scale:.8,factor:2},{x:0,offset:8,pos:new s.Vector3,scale:1.5,factor:6}],top:Object(n.createRef)()};function d(e){var t=e.children,a=e.size,o=void 0===a?1:a,r=e.left,l=e.right,h=e.top,d=e.bottom,g=e.color,v=void 0===g?"white":g,b=e.opacity,y=void 0===b?1:b,E=e.height,x=void 0===E?.01:E,w=(e.layers,e.font),j=void 0===w?"./MOONGET_Heavy.blob":w,O=Object(u.a)(e,["children","size","left","right","top","bottom","color","opacity","height","layers","font"]),k=Object(i.e)(s.FontLoader,j),z=m()((function(){return new Promise((function(e){return e(new s.TextBufferGeometry(t,{font:k,size:1,height:x,curveSegments:32}))}))}),[t]),_=Object(n.useCallback)((function(e){var t=new s.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x=r?0:l?-t.x:-t.x/2,e.position.y=h?0:d?-t.y:-t.y/2}),[r,l,h,d]),N=Object(n.useRef)(),T=p.top.current;return Object(i.d)((function(){N.current.shift=f()(N.current.shift,(p.top.current-T)/100,.1),T=p.top.current})),c.a.createElement("group",Object.assign({},O,{scale:[o,o,.1]}),c.a.createElement("mesh",{geometry:z,onUpdate:_,frustumCulled:!1},c.a.createElement("customMaterial",{ref:N,attach:"material",color:v,transparent:!0,opacity:y})))}var g=function(e){var t=e.text,a=e.size,o=void 0===a?1:a,r=e.lineHeight,n=void 0===r?1:r,i=e.position,s=void 0===i?[0,0,0]:i,l=Object(u.a)(e,["text","size","lineHeight","position"]);return t.split("\n").map((function(e,t){return c.a.createElement(d,Object.assign({key:t,size:o},l,{position:[s[0],s[1]-t*n,s[2]],children:e}))}))},v=a(7),b=a(25),y=a(13),E=a(10),x=a(11),w=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(E.a)(t).call(this,{vertexShader:"uniform float scale;\n      uniform float shift;\n      varying vec2 vUv;\n      void main() {\n        vec3 pos = position;\n        pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 1.5) * 0.125);\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n      }",fragmentShader:"uniform sampler2D texture;\n      uniform float hasTexture;\n      uniform float shift;\n      uniform float scale;\n      uniform vec3 color;\n      uniform float opacity;\n      varying vec2 vUv;\n      void main() {\n        float angle = 1.55;\n        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);\n        vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));\n        vec4 cr = texture2D(texture, p + offset);\n        vec4 cga = texture2D(texture, p);\n        vec4 cb = texture2D(texture, p - offset);\n        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n        else gl_FragColor = vec4(color, opacity);\n      }",uniforms:{texture:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new s.Color("white")}}}))}return Object(x.a)(t,e),Object(b.a)(t,[{key:"scale",set:function(e){this.uniforms.scale.value=e},get:function(){return this.uniforms.scale.value}},{key:"shift",set:function(e){this.uniforms.shift.value=e},get:function(){return this.uniforms.shift.value}},{key:"map",set:function(e){this.uniforms.hasTexture.value=!!e,this.uniforms.texture.value=e},get:function(){return this.uniforms.texture.value}},{key:"color",get:function(){return this.uniforms.color.value}},{key:"opacity",get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms&&(this.uniforms.opacity.value=e)}}]),t}(s.ShaderMaterial);Object(i.c)({CustomMaterial:w});var j=Object(n.createContext)(0);function O(e){var t=e.children,a=e.offset,o=e.factor,r=Object(u.a)(e,["children","offset","factor"]),s=k(),l=s.offset,h=s.sectionHeight,m=Object(n.useRef)();return a=void 0!==a?a:l,Object(i.d)((function(){var e=m.current.position.y,t=p.top.current;m.current.position.y=f()(e,t/p.zoom*o,.1)})),c.a.createElement(j.Provider,{value:a},c.a.createElement("group",Object.assign({},r,{position:[0,-h*a*o,0]}),c.a.createElement("group",{ref:m},t)))}function k(){var e=p.sections,t=p.pages,a=p.zoom,o=Object(i.f)(),r=o.size,c=o.viewport,s=Object(n.useContext)(j),l=c.width,f=c.height,u=l/a,h=f/a,m=r.width<700;return{viewport:c,offset:s,viewportWidth:l,viewportHeight:f,canvasWidth:u,canvasHeight:h,mobile:m,margin:u*(m?.2:.1),contentMaxWidth:u*(m?.8:.6),sectionHeight:h*((t-1)/(e-1)),offsetFactor:(s+1)/e}}var z=Object(n.forwardRef)((function(e,t){var a=e.color,o=void 0===a?"white":a,r=e.shift,s=void 0===r?1:r,l=e.opacity,h=void 0===l?1:l,m=e.args,d=e.map,g=Object(u.a)(e,["color","shift","opacity","args","map"]),v=k(),b=v.viewportHeight,y=v.offsetFactor,E=Object(n.useRef)(),x=p.top.current;return Object(i.d)((function(){var e=p.pages,t=p.top;E.current.scale=f()(E.current.scale,y-t.current/((e-1)*b),.1),E.current.shift=f()(E.current.shift,(t.current-x)/s,.1),x=t.current})),c.a.createElement("mesh",Object.assign({ref:t},g),c.a.createElement("planeBufferGeometry",{attach:"geometry",args:m}),c.a.createElement("customMaterial",{ref:E,attach:"material",color:o,map:d,transparent:!0,opacity:h}))}));a(35);function _(){var e=Object(n.useRef)();return Object(i.d)((function(){return e.current.material.opacity=f()(e.current.material.opacity,0,.025)})),c.a.createElement(z,{ref:e,color:"#0e0e0f",position:[0,0,200],scale:[100,100,1]})}function N(e){var t=e.image,a=e.index,o=e.offset,r=e.factor,n=e.header,s=e.aspect,l=e.text,f=k(),u=f.contentMaxWidth,h=f.canvasWidth,m=f.margin,g=f.mobile,v=s<1&&!g?.65:1,b=(h-u*v-m)/2,y=u*p.zoom*v,E=!(a%2),x=a%2?"#D40749":"#2FE8C3";return c.a.createElement(O,{factor:r,offset:o},c.a.createElement("group",{position:[E?-b:b,0,0]},c.a.createElement(z,{map:t,args:[1,1,32,32],shift:75,size:v,aspect:s,scale:[u*v,u*v/s,1],frustumCulled:!1}),c.a.createElement(i.b,{style:{width:y/(g?1:2),textAlign:E?"left":"right"},position:[E||g?-u*v/2:0,-u*v/2/s-.4,1]},c.a.createElement("div",{tabIndex:a},l)),c.a.createElement(d,{left:E,right:!E,size:.04*u,color:x,top:!0,position:[(E?-u:u)*v/2,u*v/s/2+.5,-1]},n),c.a.createElement(O,{factor:.2},c.a.createElement(d,{opacity:.5,size:.1*u,color:"#1A1E2A",position:[(E?u:-u)/2*v,u*v/s/1.5,-10]},"0"+(a+1)))))}function T(){var e=Object(i.e)(s.TextureLoader,p.paragraphs.map((function(e){return e.image})));Object(n.useMemo)((function(){return e.forEach((function(e){return e.minFilter=s.LinearFilter}))}),[e]);var t=k(),a=t.contentMaxWidth,o=t.canvasWidth,r=t.canvasHeight,l=t.mobile;return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{factor:1,offset:0},c.a.createElement(O,{factor:1.2},c.a.createElement(d,{left:!0,size:.08*a,position:[-a/3.2,.5,-1],color:"#d40749"},"NEERAJ")),c.a.createElement(O,{factor:1},c.a.createElement(i.b,{position:[-a/3.2,.08*-a+.25,-1]},"Product Designer and Researcher",l?c.a.createElement("br",null):" "))),c.a.createElement(O,{factor:1.2,offset:5.7},c.a.createElement(g,{top:!0,left:!0,size:.15*a,lineHeight:a/5,position:[-a/3.5,0,-1],color:"#2fe8c3",text:"four\nzero\nzero"})),p.paragraphs.map((function(t,a){return c.a.createElement(N,Object.assign({key:a,index:a},t,{image:e[a]}))})),p.stripes.map((function(e,t){var a=e.offset,o=e.color,r=e.height;return c.a.createElement(O,{key:t,factor:-1.5,offset:a},c.a.createElement(z,{args:[50,r,32,32],shift:-4,color:o,rotation:[0,0,Math.PI/8],position:[0,0,-10]}))})),c.a.createElement(O,{factor:1.25,offset:8},c.a.createElement(i.b,{className:"bottom-left",position:[-o/2,-r/2,0]},"Culture is not your friend.")))}r.a.render(c.a.createElement((function(){var e=Object(n.useRef)(),t=function(e){return p.top.current=e.target.scrollTop};return Object(n.useEffect)((function(){t({target:e.current})}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{className:"canvas",concurrent:!0,pixelRatio:1,orthographic:!0,camera:{zoom:p.zoom,position:[0,0,500]}},c.a.createElement(n.Suspense,{fallback:c.a.createElement(i.b,{center:!0,className:"loading",children:"Loading..."})},c.a.createElement(T,null),c.a.createElement(_,null))),c.a.createElement("div",{className:"scrollArea",ref:e,onScroll:t},new Array(p.sections).fill().map((function(e,t){return c.a.createElement("div",{key:t,id:"0"+t,style:{height:"".concat(p.pages/p.sections*100,"vh")}})}))),c.a.createElement("div",{className:"frame"},c.a.createElement("div",{className:"frame__links"}),c.a.createElement("div",{className:"frame__nav"},c.a.createElement("a",{className:"frame__link",href:"#00",children:"intro"}),c.a.createElement("a",{className:"frame__link",href:"#01",children:"01"}),c.a.createElement("a",{className:"frame__link",href:"#02",children:"02"}),c.a.createElement("a",{className:"frame__link",href:"#03",children:"03"}),c.a.createElement("a",{className:"frame__link",href:"#04",children:"04"}),c.a.createElement("a",{className:"frame__link",href:"#05",children:"05"}),c.a.createElement("a",{className:"frame__link",href:"#07",children:"06"}))))}),null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.7cc4e048.chunk.js.map