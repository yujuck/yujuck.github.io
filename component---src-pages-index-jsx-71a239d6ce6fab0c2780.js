(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3WF5":function(e,t,n){var a=n("eUgh"),l=n("ut/Y"),o=n("l9OW"),i=n("Z0cm");e.exports=function(e,t){return(i(e)?a:o)(e,l(t,3))}},Dtc0:function(e,t,n){"use strict";n.r(t);var a=n("xweI"),l=n.n(a),o=n("q1tI"),i=n.n(o),r=n("ntAx"),c=n("DGZL"),s=n("bSql"),m=n("PZY4"),d=n("3WF5"),p=n.n(d),u=n("vOnD"),g=n("Wbzz");const f=u.default.div.withConfig({displayName:"SideTagList__RelativeWrapper",componentId:"sc-11pn9fc-0"})(["position:relative;"]),h=u.default.aside.withConfig({displayName:"SideTagList__Wrapper",componentId:"sc-11pn9fc-1"})(["position:absolute;left:112%;top:0px;width:200px;height:100px;font-size:16px;@media (max-width:1300px){display:none;}"]),x=u.default.div.withConfig({displayName:"SideTagList__Title",componentId:"sc-11pn9fc-2"})(["margin-bottom:25px;font-weight:bold;color:",";"],e=>e.theme.colors.secondaryText),E=u.default.li.withConfig({displayName:"SideTagList__Tag",componentId:"sc-11pn9fc-3"})(["margin-bottom:16px;color:",";cursor:pointer;transition:color 0.3s;&:hover{color:",";}& > a{color:inherit;text-decoration:none;}"],e=>e.theme.colors.tertiaryText,e=>e.theme.colors.text);var w=e=>{let{tags:t,postCount:n}=e;return i.a.createElement(f,null,i.a.createElement(h,null,i.a.createElement(x,null,"TAG LIST"),i.a.createElement("ul",null,i.a.createElement(E,null,i.a.createElement(g.Link,{to:"/tags"},"all (",n,")")),p()(t,e=>i.a.createElement(E,null,i.a.createElement(g.Link,{to:"/tags?q="+e.fieldValue},e.fieldValue," (",e.totalCount,")"))))))},b=n("XUsr"),k=n("mpmw"),v=n("C4nX");t.default=e=>{let{data:t}=e;const n=t.allMarkdownRemark.nodes,a=l()(t.allMarkdownRemark.group,["totalCount"]).reverse();return 0===n.length?i.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'):i.a.createElement(r.a,null,i.a.createElement(c.a,{title:v.title,description:v.description,url:v.siteUrl}),i.a.createElement(k.a,{size:48}),i.a.createElement(s.a,null),i.a.createElement(b.a,null),i.a.createElement(w,{tags:a,postCount:n.length}),i.a.createElement(m.a,{postList:n}))}},GxtF:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("vOnD"),i=n("Wbzz");const r=o.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-s1uz5f-0"})(["margin-bottom:16px;word-break:break-all;"]),c=o.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-s1uz5f-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:8px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;&:hover{background-color:",";}"],e=>e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground,e=>e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText,e=>e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground),s=e=>e.replace(/\s+/g,"-");t.a=e=>{let{tagList:t,count:n,selected:a}=e;return t?n?l.a.createElement(r,null,t.map((e,t)=>l.a.createElement(i.Link,{key:JSON.stringify({tag:e,i:t}),to:a===e.fieldValue?"/tags":"/tags?q="+e.fieldValue},l.a.createElement(c,{selected:e.fieldValue===a},s(e.fieldValue)," (",e.totalCount,")")))):l.a.createElement(r,null,t.map((e,t)=>l.a.createElement(i.Link,{key:JSON.stringify({tag:e,i:t}),to:"/tags?q="+e},l.a.createElement(c,null,s(e))))):null}},PZY4:function(e,t,n){"use strict";var a=n("DzJC"),l=n.n(a),o=n("q1tI"),i=n.n(o),r=n("vOnD"),c=n("Wbzz"),s=n("PyCY"),m=n("XUsr"),d=n("GxtF");const p=r.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1oqnm6-0"})(["@media (max-width:768px){padding:0 10px;}"]),u=r.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1oqnm6-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),g=r.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-1oqnm6-2"})(["margin-bottom:16px;font-size:14.4px;color:",";"],e=>e.theme.colors.tertiaryText),f=r.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1oqnm6-3"})(["margin-bottom:32px;line-height:1.7;font-size:16px;color:",";word-break:break-all;"],e=>e.theme.colors.secondaryText);t.a=e=>{let{postList:t}=e;const{0:n,1:a}=Object(o.useState)(10),r=l()(()=>{document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&n<t.length&&setTimeout(()=>a(n+10),300)},250);return Object(o.useEffect)(()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}),[n,t]),Object(o.useEffect)(()=>{a(10)},[t]),i.a.createElement(p,null,t.slice(0,n).map((e,a)=>{const{title:l,date:o,tags:r}=e.frontmatter,{excerpt:p}=e,{slug:h}=e.fields;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,null,i.a.createElement(s.a,{size:"bg"},i.a.createElement(c.Link,{to:h},l)),i.a.createElement(g,null,o),i.a.createElement(f,null,p),i.a.createElement(d.a,{tagList:r})),n-1!==a&&t.length-1!==a&&i.a.createElement(m.a,{mt:"48px",mb:"32px"}))}))}},bSql:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("vOnD"),i=n("ma3e"),r=n("C4nX");const c=o.default.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-5v8ml6-0"})(["display:flex;align-items:center;@media (max-width:768px){padding:0 15px;}"]),s="undefined"!=typeof window&&"localhost:8000"===window.location.host?"http://localhost:8000":r.siteUrl,m=o.default.div.withConfig({displayName:"Bio__Profile",componentId:"sc-5v8ml6-1"})(["flex:0 0 auto;margin-right:16px;width:128px;height:128px;border-radius:999px;background-image:url(","/profile.jpg);background-size:cover;background-position:center;"],s),d=o.default.div.withConfig({displayName:"Bio__Author",componentId:"sc-5v8ml6-2"})(["margin-bottom:4.8px;font-size:24px;font-weight:700;color:",";"],e=>e.theme.colors.text),p=o.default.div.withConfig({displayName:"Bio__Description",componentId:"sc-5v8ml6-3"})(["margin-bottom:11.2px;line-height:1.5;font-size:16px;color:",";"],e=>e.theme.colors.secondaryText),u=o.default.div.withConfig({displayName:"Bio__LinksWrapper",componentId:"sc-5v8ml6-4"})(["& a{margin-right:9.6px;}& svg{width:25.6px;height:25.6px;cursor:pointer;}& svg path{fill:",";transition:fill 0.3s;}& a:hover svg path{fill:",";}"],e=>e.theme.colors.icon,e=>e.theme.colors.text),g=e=>{let{link:t,children:n}=e;return t?l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},n):null};t.a=()=>{const{github:e,kaggle:t,instagram:n,facebook:a,linkedIn:o,email:s,etc:f}=r.links;return l.a.createElement(c,{id:"bio"},l.a.createElement(m,null),l.a.createElement("div",null,l.a.createElement(d,null,"@",r.author),l.a.createElement(p,null,r.description),l.a.createElement(u,null,l.a.createElement(g,{link:e},l.a.createElement(i.c,null)),l.a.createElement(g,{link:t},l.a.createElement(i.e,null)),l.a.createElement(g,{link:n},l.a.createElement(i.d,null)),l.a.createElement(g,{link:a},l.a.createElement(i.b,null)),l.a.createElement(g,{link:o},l.a.createElement(i.g,null)),l.a.createElement(g,{link:s},l.a.createElement(i.a,null)),l.a.createElement(g,{link:f},l.a.createElement(i.f,null)))))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-71a239d6ce6fab0c2780.js.map