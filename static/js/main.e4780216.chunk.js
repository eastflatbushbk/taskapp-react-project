(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(36)},27:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(27),a(13)),u=a(7),s=a(1);a(28);var i=function(e){var t=e.tasks,a=e.onTaskClick,c=Object(n.useState)(!0),l=Object(u.a)(c,2),o=l[0],s=l[1];return r.a.createElement("li",{className:"card"},r.a.createElement("h4",null,t.marked),r.a.createElement("p",null,t.task),r.a.createElement("div",null,r.a.createElement("button",{className:"primary",onClick:function(){s(function(e){return!e})}},o?"Click when complete":"completed"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){fetch("http://localhost:4001/tasks/".concat(t.id),{method:"DELETE"}).then(function(e){return e.json()}).then(function(){return a(t)})}},"X"))))};var m=function(e){var t=e.tasks,a=e.onRemoveTask;console.log("line 6",t);var n=t.map(function(e){return r.a.createElement(i,{key:e.id,tasks:e,onTaskClick:a})});return r.a.createElement("div",null,r.a.createElement("strong",null,"Click X to delete task forever"),r.a.createElement("ul",{className:"cards"},n))},d=a(6),k={display:"inline-block",width:"200px",padding:"12px",margin:"0 6px 2px",background:"grey",textDecoration:"none",color:"white"};var E=function(){return r.a.createElement("div",null,r.a.createElement(d.b,{to:"/",exact:!0,style:k,activeStyle:{background:"red"}},"Tasks"),r.a.createElement(d.b,{to:"/add",exact:!0,style:k,activeStyle:{background:"red"}},"Add tasks"),r.a.createElement(d.b,{to:"/done",exact:!0,style:k,activeStyle:{background:"red"}},"Delete page"))};var f=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Task app"))};var v=function(e){var t=e.tasks,a=e.onMoveTask,n=t.map(function(e){return r.a.createElement(i,{tasks:e,key:e.id,onTaskClick:a})});return r.a.createElement("div",null,r.a.createElement("ul",{className:"cards"},n))};var p=function(e){var t=e.tasks,a=e.onMoveTask;return r.a.createElement("main",null,r.a.createElement("strong",null,"Click X to add task to Delete page"),r.a.createElement(v,{tasks:t,onMoveTask:a}))},h=a(10),b=a(17),T={task:"",marked:""};var g=function(e){var t=e.onAddTask,a=Object(n.useState)(T),c=Object(u.a)(a,2),l=c[0],o=c[1];function s(e){o(Object(b.a)({},l,Object(h.a)({},e.target.name,e.target.value)))}return r.a.createElement("div",{className:"new-plant-form"},r.a.createElement("h2",null,"New Task"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={task:l.task,marked:l.marked};fetch("http://localhost:4001/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){return t(e)}),o(T)}},r.a.createElement("input",{type:"text",name:"task",placeholder:"Task ...",onChange:s,value:l.task}),r.a.createElement("select",{name:"marked",onChange:s,value:l.marked},r.a.createElement("option",{value:"default",hidden:!0},"Task marked as"),r.a.createElement("option",{name:"marked",value:"least important"},"least important"),r.a.createElement("option",{name:"marked",value:"IMPORTANT"},"IMPORTANT"),r.a.createElement("option",{name:"marked",value:"URGENT!!"},"URGENT")),r.a.createElement("button",{type:"submit"},"Add Task")))};var j=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(u.a)(l,2),d=i[0],k=i[1];return Object(n.useEffect)(function(){fetch(" http://localhost:4001/tasks").then(function(e){return e.json()}).then(function(e){return c(e)})},[]),r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(E,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(p,{tasks:a,onMoveTask:function(e){console.log("line 29",e),d.find(function(t){return t.id===e.id})||k([].concat(Object(o.a)(d),[e])),console.log("line 34",d)}})),r.a.createElement(s.a,{exact:!0,path:"/add"},r.a.createElement(g,{onAddTask:function(e){c([].concat(Object(o.a)(a),[e]))}})),r.a.createElement(s.a,{exact:!0,path:"/done"},r.a.createElement(m,{tasks:d,onRemoveTask:function(e){var t=a.filter(function(t){return t.id!==e.id});c(t);var n=d.filter(function(t){return t.id!==e.id});k(n)}}))))},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(d.a,null,r.a.createElement(j,null))),y()}},[[18,1,2]]]);
//# sourceMappingURL=main.e4780216.chunk.js.map