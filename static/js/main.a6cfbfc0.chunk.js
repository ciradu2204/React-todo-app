(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(10),a=n.n(r),i=n(11),s=n(4),l=n(3),d=n(9),u=n.n(d),j=n(2),p=n(0),b=function(e){var t=Object(o.useState)(!1),n=Object(l.a)(t,2),c=n[0],r=n[1],a=e.todo,i=a.completed,s=a.id,d=a.title,b={},f={};return c?b.display="none":f.display="none",Object(p.jsxs)("li",{className:u.a.item,children:[Object(p.jsxs)("div",{style:b,children:[Object(p.jsx)("input",{type:"checkbox",checked:i,onChange:function(){return e.handleChangeProps(s)}}),Object(p.jsx)("button",{onClick:function(){r(!0)},children:Object(p.jsx)(j.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(p.jsx)("button",{onClick:function(){return e.deleteTodoProps(s)},children:Object(p.jsx)(j.c,{style:{color:"orangered",fontSize:"16px"}})}),Object(p.jsx)("span",{style:i?{fontStyle:"Italic",color:"#595959",opacity:.4,paddingLeft:15,textDecoration:"line-through"}:{paddingLeft:15},children:d})]}),Object(p.jsx)("input",{type:"text",style:f,className:u.a.textInput,value:d,onChange:function(t){e.setUpdate(t.target.value,s)},onKeyDown:function(e){"Enter"===e.key&&r(!1)}})]})},f=function(e){var t=Array.from(e.todos);return Object(p.jsx)("ul",{children:t.map((function(t){return Object(p.jsx)(b,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},x=function(){return Object(p.jsx)("header",{children:Object(p.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},m=n(7),O=function(e){var t=Object(o.useState)({title:""}),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c.title.trim()?(e.addTodoProps(c.title),r({title:""})):alert("Please write item")},className:"form-container",children:[Object(p.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo..",value:c.title,name:"title",onChange:function(e){r(Object(s.a)(Object(s.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))}}),Object(p.jsx)("button",{className:"input-submit",children:Object(p.jsx)(j.a,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})})},h=n(20),g=function(){var e=Object(o.useState)(function(){var e=localStorage.getItem("todos"),t=JSON.parse(e),n=[];for(var o in t)n.push(t[o]);return n||[]}()),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"inner",children:[Object(p.jsx)(x,{}),Object(p.jsx)(O,{addTodoProps:function(e){var t={id:Object(h.a)(),title:e,completed:!1};c([].concat(Object(i.a)(n),[t]))}}),Object(p.jsx)(f,{todos:n,handleChangeProps:function(e){c((function(t){return t.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)},setUpdate:function(e,t){c(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})};n(17);a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={item:"TodoItem_item__3oWJK",checkbox:"TodoItem_checkbox__3Iwm1",textInput:"TodoItem_textInput__3vdlx"}}},[[18,1,2]]]);
//# sourceMappingURL=main.a6cfbfc0.chunk.js.map