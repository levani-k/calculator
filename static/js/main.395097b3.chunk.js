(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),i=n(3),s=n.n(i),c=(n(12),n(4)),u=n(5),o=n(7),l=n(6),b=(n(13),n(0)),j=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).takeNumber=function(e){t.setState({finalCalculation:""}),t.state.operator?t.setState((function(t){return{secondNumber:t.secondNumber+e.target.value}})):"0"!==t.state.firstNumber&&t.setState((function(t){return{firstNumber:t.firstNumber+e.target.value}}))},t.takeOperator=function(e){t.setState({operator:e.target.value})},t.answer=function(){var e=t.state.operator,n=Number(t.state.firstNumber),r=Number(t.state.secondNumber);"*"===e?t.setState({finalCalculation:n*r,firstNumber:n*r}):"/"===e?t.setState({finalCalculation:n/r,firstNumber:n/r}):"+"===e?t.setState({finalCalculation:n+r,firstNumber:n+r}):"-"===e&&t.setState({finalCalculation:n-r,firstNumber:n-r})},t.dotButton=function(){var e=t.state,n=e.firstNumber,r=e.secondNumber;e.operator?r&&"."!==r[r.length-1]&&t.setState((function(t){return{secondNumber:t.secondNumber+"."}})):n&&"."!==n[n.length-1]&&t.setState((function(t){return{firstNumber:t.firstNumber+"."}}))},t.delbutton=function(){var e=t.state,n=e.firstNumber,r=e.secondNumber,a=e.operator;if(!n||r||a){if(n&&a&&!r)t.setState({operator:""});else if(n&&a&&r){var i=r.slice(0,r.length-1);t.setState({secondNumber:i})}}else{var s=n.slice(0,n.length-1);t.setState({firstNumber:s})}},t.clearButton=function(){t.setState({firstNumber:"",secondNumber:"",operator:"",finalCalculation:""})},t.sqrtButton=function(){t.setState({finalCalculation:Math.sqrt(t.state.firstNumber),firstNumber:Math.sqrt(t.state.firstNumber)})},t.squareButton=function(){t.setState({finalCalculation:Math.pow(t.state.firstNumber,2),firstNumber:Math.pow(t.state.firstNumber,2)})},t.state={firstNumber:"",secondNumber:"",operator:"",finalCalculation:""},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("div",{className:"displayCalculation tc",children:this.state.finalCalculation?Object(b.jsx)("p",{children:this.state.finalCalculation}):this.state.operator?Object(b.jsx)("p",{children:this.state.secondNumber}):Object(b.jsx)("p",{children:this.state.firstNumber})}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:this.clearButton,children:"Clear"}),Object(b.jsx)("button",{onClick:this.delbutton,children:"Del"}),Object(b.jsx)("button",{onClick:this.sqrtButton,children:"\u221a"}),Object(b.jsx)("button",{onClick:this.squareButton,children:"x\xb2"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{value:7,onClick:this.takeNumber,children:"7"}),Object(b.jsx)("button",{value:8,onClick:this.takeNumber,children:"8"}),Object(b.jsx)("button",{value:9,onClick:this.takeNumber,children:"9"}),Object(b.jsx)("button",{value:"/",onClick:this.takeOperator,children:"/"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{value:4,onClick:this.takeNumber,children:"4"}),Object(b.jsx)("button",{value:5,onClick:this.takeNumber,children:"5"}),Object(b.jsx)("button",{value:6,onClick:this.takeNumber,children:"6"}),Object(b.jsx)("button",{value:"*",onClick:this.takeOperator,children:"*"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{value:1,onClick:this.takeNumber,children:"1"}),Object(b.jsx)("button",{value:2,onClick:this.takeNumber,children:"2"}),Object(b.jsx)("button",{value:3,onClick:this.takeNumber,children:"3"}),Object(b.jsx)("button",{value:"+",onClick:this.takeOperator,children:"+"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:this.dotButton,children:"."}),Object(b.jsx)("button",{value:0,onClick:this.takeNumber,children:"0"}),Object(b.jsx)("button",{onClick:this.answer,children:"="}),Object(b.jsx)("button",{value:"-",onClick:this.takeOperator,children:"-"})]})]})}}]),n}(a.a.Component),h=(n(15),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),i(t),s(t)}))});s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.395097b3.chunk.js.map