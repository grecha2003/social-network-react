"use strict";(self.webpackChunkit_kamasutra_courses=self.webpackChunkit_kamasutra_courses||[]).push([[171],{3171:function(s,e,a){a.r(e),a.d(e,{default:function(){return _}});var n=a(5849),i=(a(1816),a(3147)),d={dialogs:"Messages_dialogs__OywV3",dialog:"Messages_dialog__UCONN",dialogs__items:"Messages_dialogs__items__qOUlc",message:"Messages_message__JsxH7",messages__send:"Messages_messages__send__-hb1w",btnSend:"Messages_btnSend__tEQza"},r=a(7808),t=function(s){var e=s.id,a=s.name;return(0,r.jsx)("div",{className:d.dialog,children:(0,r.jsx)(i.OL,{to:"/messages/"+e,children:a})})},g=function(s){var e=s.message;return(0,r.jsx)("div",{className:d.message,children:e})},c=a(1397),l=function(s){var e=s.sendMessage;return(0,r.jsx)(c.J9,{initialValues:{newMessageBody:""},onSubmit:function(s,a){var n=a.resetForm;!function(s){e(s)}(s.newMessageBody),n({values:""}),console.log(s)},children:(0,r.jsx)(c.l0,{children:(0,r.jsxs)("div",{className:d.messages__send,children:[(0,r.jsx)(c.gN,{as:"textarea",name:"newMessageBody",placeholder:"Enter your message"}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{type:"submit",className:d.btnSend,children:"^\u03c9^ Send ^\u03c9^"})})]})})})},o=function(s){var e=s.messagesPage,a=s.sendMessage,n=e,i=n.users.map((function(s){return(0,r.jsx)(t,{name:s.name,id:s.id},s.id)})),c=n.messages.map((function(s){return(0,r.jsx)(g,{id:s.id,message:s.message},s.id)}));return(0,r.jsxs)("div",{className:d.dialogs,children:[(0,r.jsx)("div",{className:d.dialogs__items,children:(0,r.jsx)("div",{className:d.dialog,children:i})}),(0,r.jsxs)("div",{className:d.messages,children:[(0,r.jsx)("div",{children:c}),(0,r.jsx)(l,{sendMessage:a})]})]})},u=a(3611),m=a(3279),_=(0,a(2563).qC)((0,u.$j)((function(s){return{messagesPage:s.messagesPage}}),(function(s){return{sendMessage:function(e){s((0,n.XE)(e))},updateNewMessageBody:function(e){s((0,n.oS)(e))}}})),m.I)(o)}}]);
//# sourceMappingURL=171.0f83fb5b.chunk.js.map