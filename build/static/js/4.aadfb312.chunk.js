(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{44:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__2S85e"}},45:function(e,t,c){e.exports={comments:"Comments_comments__31D1R"}},46:function(e,t,c){e.exports={form:"NewCommentForm_form__2fTXi",loading:"NewCommentForm_loading__3wHt0",control:"NewCommentForm_control__2RNCc",actions:"NewCommentForm_actions__2DNC1"}},47:function(e,t,c){e.exports={item:"CommentItem_item__1KtyS"}},48:function(e,t,c){e.exports={comments:"CommentsList_comments__3C0LY"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),o=c(2),r=c(8),a=c(44),m=c.n(a),j=c(1),i=function(e){return Object(j.jsxs)("figure",{className:m.a.quote,children:[Object(j.jsx)("p",{children:e.text}),Object(j.jsx)("figcaption",{children:e.author})]})},d=c(37),l=c(45),u=c.n(l),b=c(35),x=c(36),O=c(46),h=c.n(O),f=c(14),p=function(e){var t=Object(n.useRef)(),c=Object(b.a)(x.a),s=c.sendRequest,o=c.status,r=c.error,a=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||r||a()}),[o,r,a]);var m=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(j.jsxs)("form",{className:h.a.form,onSubmit:m,children:["pending"===o&&Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(f.a,{})}),Object(j.jsxs)("div",{className:h.a.control,onSubmit:m,children:[Object(j.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(j.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(j.jsx)("div",{className:h.a.actions,children:Object(j.jsx)("button",{className:"btn",children:"Add Comment"})})]})},_=c(47),N=c.n(_),C=function(e){return Object(j.jsx)("li",{className:N.a.item,children:Object(j.jsx)("p",{children:e.text})})},g=c(48),v=c.n(g),q=function(e){return Object(j.jsx)("ul",{className:v.a.comments,children:e.comments.map((function(e){return Object(j.jsx)(C,{text:e.text},e.id)}))})},w=function(){var e=Object(o.j)().quoteId,t=Object(n.useState)(!1),c=Object(d.a)(t,2),s=c[0],r=c[1],a=Object(b.a)(x.c,!0),m=a.sendRequest,i=a.status,l=a.data;a.error;Object(n.useEffect)((function(){m(e)}),[e,m]);var O,h=Object(n.useCallback)((function(){m(e)}),[m,e]);return"pending"===i&&(O=Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(f.a,{})})),"completed"===i&&(l||l.length>0)&&(O=Object(j.jsx)(q,{comments:l})),"completed"!==i||l&&0!==l.length||(O=Object(j.jsx)("p",{className:"centered",children:"There are currently no comments!"})),Object(j.jsxs)("section",{className:u.a.comments,children:[Object(j.jsx)("h2",{children:"User Comments"}),!s&&Object(j.jsx)("button",{className:"btn",onClick:function(){r(!0)},children:"Add a Comment"}),s&&Object(j.jsx)(p,{quoteId:e,onAddedComment:h}),O]})};t.default=function(){var e=Object(o.k)(),t=Object(b.a)(x.e,!0),c=t.sendRequest,a=t.status,m=t.data,d=t.error,l=Object(o.j)().quoteId;return Object(n.useEffect)((function(){c(l)}),[c,l]),console.log(m),"pending"===a?Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(f.a,{})}):d?Object(j.jsx)("p",{className:"centered focused",children:d}):m.text?Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)("h1",{children:"This is the single quote page"}),Object(j.jsx)(i,{text:m.text,author:m.author}),Object(j.jsx)(o.c,{path:e.path,exact:!0,children:Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(r.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(j.jsx)(o.c,{path:"".concat(e.path,"/comments"),children:Object(j.jsx)(w,{})})]}):Object(j.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=4.aadfb312.chunk.js.map