import{p as b,aO as f,j as t,as as P,aT as g,ae as L,aU as w,r as m,n as B,aV as k,au as T,aW as _,a0 as A,aQ as C,at as S,aR as W,aq as D,ah as H,aS as E}from"./sanity-8db416c4.js";const G=b.hr`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`;function O(c){const{childItemId:n,items:a,isActive:o,layout:d,showIcons:i,title:r}=c,{collapsed:l}=L(),u=w(a==null?void 0:a.filter(e=>e.type!=="divider")),x=m.useCallback(e=>{var s;return((s=a==null?void 0:a.find((p,v)=>v===e))==null?void 0:s.type)==="divider"},[a]),h=m.useCallback(e=>{var s;const p=(s=e.displayOptions)==null?void 0:s.showIcon;return typeof p<"u"?p!==!1:i!==!1},[i]),I=m.useCallback((e,s)=>{const{virtualIndex:p}=s;if(e.type==="divider")return t.jsx(B,{marginBottom:1,children:t.jsx(G,{})},`divider-${p}`);const v=!o&&n===e.id,y=o&&n===e.id,j=e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0;return t.jsx(k,{icon:h(e)?e.icon:!1,id:e.id,layout:d,marginBottom:1,pressed:v,schemaType:e.schemaType,selected:y,title:u(e).title,value:j},e.id)},[n,u,o,d,h]);return t.jsx(T,{overflow:l?"hidden":"auto",children:a&&a.length>0&&t.jsx(_,{activeItemDataAttr:"data-hovered",ariaLabel:r,canReceiveFocus:!0,getItemDisabled:x,itemHeight:51,items:a,onlyShowSelectionWhenActive:!0,paddingBottom:1,paddingX:3,renderItem:I,wrapAround:!1})})}const R=({index:c,menuItems:n,menuItemGroups:a,title:o})=>{const{features:d}=A(),{collapsed:i,isLast:r}=C(),l=r&&!i?-1:0;return t.jsx(S,{actions:t.jsx(W,{menuItems:n,menuItemGroups:a}),backButton:d.backButton&&c>0&&t.jsx(D,{as:H,"data-as":"a",icon:E,mode:"bleed",tooltipProps:{content:"Back"}}),tabIndex:l,title:o})};function U(c){const{childItemId:n,index:a,isActive:o,isSelected:d,pane:i,paneKey:r}=c,{defaultLayout:l,displayOptions:u,items:x,menuItems:h,menuItemGroups:I}=i,e=(u==null?void 0:u.showIcons)!==!1,{title:s}=f(i);return t.jsxs(P,{currentMaxWidth:350,"data-testid":"structure-tool-list-pane","data-ui":"ListPane",id:r,maxWidth:640,minWidth:320,selected:d,children:[g,t.jsx(R,{index:a,menuItems:h,menuItemGroups:I,title:s}),t.jsx(O,{childItemId:n,isActive:o,items:x,layout:l,showIcons:e,title:s},r)]})}export{U as default};
