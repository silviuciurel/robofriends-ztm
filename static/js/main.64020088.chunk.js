(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(8),s=n.n(a),i=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))}),o=(n(14),n(2)),h=n(3),l=n(4),b=n(6),u=n(5),d=n(0),j=function(e){var t=e.name,n=e.email;return Object(d.jsxs)("div",{className:"bg-light-blue ba br3 dib pa3 ma2 grow shadow-7",children:[Object(d.jsx)("img",{alt:"",src:"https://robohash.org/".concat(t,"?200x200")}),Object(d.jsx)("h1",{className:"tc",children:t}),Object(d.jsx)("p",{className:"tc",children:n})]})},f=function(e){var t=e.robots;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(j,{id:e.id,name:e.name,email:e.email},e.id)}))})},g=function(e){e.searchfield;var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--blue bg-light-green",type:"search",placeholder:"search robot friend",onChange:t})})},m=function(e){return Object(d.jsxs)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"600px"},children:[e.children,";"]})},O=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{className:"title",children:"Something's not right..."}):this.props.children}}]),n}(r.Component),p=(n(16),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).onSearchChange=function(e){r.setState({searchfield:e.target.value})},r.state={robots:[],searchfield:""},r.onSearchChange=r.onSearchChange.bind(Object(l.a)(r)),r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"title",children:"RoboFriends"}),Object(d.jsx)(g,{searchChange:this.onSearchChange}),Object(d.jsx)(m,{children:Object(d.jsx)(O,{children:Object(d.jsx)(f,{robots:r})})})]}):Object(d.jsx)("h1",{className:"title tc",children:" Loading friends"})}}]),n}(r.Component));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),i()}},[[17,1,2]]]);
//# sourceMappingURL=main.64020088.chunk.js.map