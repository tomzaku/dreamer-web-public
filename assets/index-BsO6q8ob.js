import{j as h}from"./mdxeditor-DMR2kFUM.js";import{N as c,I as p,P as y,A as g,E as l,z as u}from"./index-UcUX1Uh6.js";import"./apexcharts-BAPkfwW1.js";function o(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(i[a[n]]=e[a[n]])}return i}const f={buildHeadingOneElements:(e,t)=>({id:p(),type:"heading-one",children:[{text:(t==null?void 0:t.text)||""}]}),insertHeadingOne:(e,t={})=>{const{at:i,focus:a,text:n}=t,d=f.buildHeadingOneElements(e,{text:n}),r=u({value:[d],type:"HeadingOne"});l.insertBlock(e,r.type,{at:i,focus:a,blockData:r})},deleteHeadingOne:(e,t)=>{l.deleteBlock(e,{blockId:t})}},b={buildHeadingTwoElements:(e,t)=>({id:p(),type:"heading-two",children:[{text:(t==null?void 0:t.text)||""}]}),insertHeadingTwo:(e,t={})=>{const{at:i,focus:a,text:n}=t,d=b.buildHeadingTwoElements(e,{text:n}),r=u({value:[d],type:"HeadingTwo"});l.insertBlock(e,r.type,{at:i,focus:a,blockData:r})},deleteHeadingTwo:(e,t)=>{l.deleteBlock(e,{blockId:t})}},x={buildHeadingThreeElements:(e,t)=>({id:p(),type:"heading-three",children:[{text:(t==null?void 0:t.text)||""}]}),insertHeadingThree:(e,t={})=>{const{at:i,focus:a,text:n}=t,d=x.buildHeadingThreeElements(e,{text:n}),r=u({value:[d],type:"HeadingThree"});l.insertBlock(e,r.type,{at:i,focus:a,blockData:r})},deleteHeadingThree:(e,t)=>{l.deleteBlock(e,{blockId:t})}},H=e=>{var{extendRender:t}=e,i=o(e,["extendRender"]);const{element:a,HTMLAttributes:n={},attributes:d,children:r}=i,{className:s=""}=n,m=o(n,["className"]);return t?t(i):h.jsx("h2",Object.assign({id:a.id,draggable:!1,className:`yoopta-heading-two ${s}`},m,d,{children:r}))};H.displayName="HeadingTwo";const T=new c({type:"HeadingTwo",elements:{"heading-two":{render:H,props:{nodeType:"block"}}},commands:b,options:{display:{title:"Heading 2",description:"Medium section heading"},shortcuts:["h2","##"]},parsers:{html:{deserialize:{nodeNames:["H2"]},serialize:(e,t,i)=>{const{depth:a=0,align:n="left"}=i||{};return`<h2 data-meta-align="${n}" data-meta-depth="${a}" style="margin-left: ${20*a}px; text-align: ${n}">${g(e.children)}</h2>`}},markdown:{serialize:(e,t)=>`## ${y(e.children)}
`},email:{serialize:(e,t,i)=>{const{depth:a=0,align:n="left"}=i||{};return`<table style="width:100%;">
        <tbody style="width:100%;">
          <tr>
            <td>
              ${`<h2 data-meta-align="${n}" data-meta-depth="${a}" style="
                font-size: 1.875rem;
                font-weight: 600;
                line-height: 2.25rem;
                letter-spacing: -.025em;
                margin-bottom: .5rem;
                scroll-margin: 5rem;
                margin-top: 1rem;
                margin-left: ${20*a}px; text-align: ${n}">
                ${t}
              </h2>`}
            </td>
          </tr>
        </tbody>
      </table>`}}}}),$=e=>{var{extendRender:t}=e,i=o(e,["extendRender"]);const{element:a,HTMLAttributes:n={},attributes:d,children:r}=i,{className:s=""}=n,m=o(n,["className"]);return t?t(i):h.jsx("h1",Object.assign({id:a.id,draggable:!1,className:`yoopta-heading-one ${s}`},m,d,{children:r}))};$.displayName="HeadingOne";const O=new c({type:"HeadingOne",elements:{"heading-one":{render:$,props:{nodeType:"block"}}},commands:f,options:{display:{title:"Heading 1",description:"Big section heading"},shortcuts:["h1","#"]},parsers:{html:{deserialize:{nodeNames:["H1"]},serialize:(e,t,i)=>{const{depth:a=0,align:n="left"}=i||{};return`<h1 data-meta-align="${n}" data-meta-depth="${a}" style="margin-left: ${20*a}px; text-align: ${n}">${g(e.children)}</h1>`}},markdown:{serialize:(e,t)=>`# ${y(e.children)}
`},email:{serialize:(e,t,i)=>{const{depth:a=0,align:n="left"}=i||{};return`<table style="width:100%;">
        <tbody style="width:100%;">
          <tr>
            <td>
              ${`<h1 data-meta-align="${n}" data-meta-depth="${a}" style="
                margin-bottom: .5rem;
                scroll-margin: 5rem; font-size: 2.25rem;
                font-weight: 700;
                line-height: 2.5rem;
                margin-top: 1.5rem; margin-left: ${20*a}px; text-align: ${n}">
                ${t}
              </h1>`}
            </td>
          </tr>
        </tbody>
      </table>`}}}}),w=e=>{var{extendRender:t}=e,i=o(e,["extendRender"]);const{element:a,HTMLAttributes:n={},attributes:d,children:r}=i,{className:s=""}=n,m=o(n,["className"]);return t?t(i):h.jsx("h3",Object.assign({id:a.id,draggable:!1,className:`yoopta-heading-three ${s}`},m,d,{children:r}))};w.displayName="HeadingThree";const z=new c({type:"HeadingThree",elements:{"heading-three":{render:w,props:{nodeType:"block"}}},commands:x,options:{display:{title:"Heading 3",description:"Small section heading"},shortcuts:["h3","###"]},parsers:{html:{deserialize:{nodeNames:["H3"]},serialize:(e,t,i)=>{const{depth:a=0,align:n="left"}=i||{};return`<h3 data-meta-align="${n}" data-meta-depth="${a}" style="margin-left: ${20*a}px; text-align: ${n}">${g(e.children)}</h3>`}},markdown:{serialize:(e,t)=>`### ${y(e.children)}
`},email:{serialize:(e,t,i)=>{const{depth:a=0,align:n="left"}=i||{};return`<table style="width:100%;">
        <tbody style="width:100%;">
          <tr>
            <td>
              <h3 data-meta-align="${n}" data-meta-depth="${a}" style="margin-left: ${20*a}px; text-align: ${n}; 
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: -.025em;
        line-height: 2rem;
        margin-bottom: .25rem;
        margin-top: .5rem;
        scroll-margin: 5rem;">
                ${g(e.children)}
              </h3>
            </td>
          </tr>
        </tbody>
      </table>`}}}});(function(e,t){t===void 0&&(t={});var i=t.insertAt;if(typeof document<"u"){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",i==="top"&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}})(".yoopta-heading-one{font-size:2.25rem;font-weight:700;line-height:2.5rem;margin-top:1.5rem}.yoopta-heading-one,.yoopta-heading-two{letter-spacing:-.025em;margin-bottom:.5rem;scroll-margin:5rem}.yoopta-heading-two{font-size:1.875rem;font-weight:600;line-height:2.25rem;margin-top:1rem}.yoopta-heading-three{font-size:1.5rem;font-weight:600;letter-spacing:-.025em;line-height:2rem;margin-bottom:.25rem;margin-top:.5rem;scroll-margin:5rem}");const E={HeadingOne:O,HeadingTwo:T,HeadingThree:z};export{O as HeadingOne,f as HeadingOneCommands,z as HeadingThree,x as HeadingThreeCommands,T as HeadingTwo,b as HeadingTwoCommands,E as default};
