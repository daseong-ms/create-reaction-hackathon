(this["webpackJsonpteams-messaging-extension-action-bot"]=this["webpackJsonpteams-messaging-extension-action-bot"]||[]).push([[0],{240:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){},371:function(e,t,n){},380:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(37),a=n.n(i),o=(n(240),n(241),n(208)),s=n(145),r=n(20),l=n(118),u=n(116),d=n(462),j=n(459),m=n(117),h=(n(242),n(90)),f=n.n(h),g=n(460),b=function(e,t){f.a.post("https://www.l2b.ltd/v1/CustomEmoji",{emoji_id:Object(g.a)(),emoji_display_name:"test",emoji_author_userId:e,emoji_description:"test description",emoji_state:1,emoji_base64_content:t}).then((function(e){console.log("upload succeed")})).catch((function(e){console.log("upload failed: ".concat(e))}))},x=n(9),p=function(e){var t=e.userId,n=c.useRef(null),i=c.useRef(null),a=c.useRef(null);c.useEffect((function(){n.current&&O(n.current)}),[n]);return Object(x.jsxs)(d.a,{gap:"gap.large",className:"shootEmojiContainer",children:[Object(x.jsx)(j.a,{size:"large",children:Object(x.jsx)(j.a.Body,{fitted:!0,children:Object(x.jsxs)(d.a,{column:!0,gap:"gap.small",className:"cardContentFlex",children:[Object(x.jsx)("video",{onCanPlay:function(){console.log("can play")},ref:n,className:"videoContainer"}),Object(x.jsx)(m.a,{content:"Take photo",onClick:function(e){v(i.current,n.current,a),e.preventDefault()}})]})})}),Object(x.jsx)(j.a,{size:"large",children:Object(x.jsx)(j.a.Body,{fitted:!0,children:Object(x.jsxs)(d.a,{column:!0,gap:"gap.small",className:"cardContentFlex",children:[Object(x.jsx)("canvas",{ref:i,className:"canvasContainer"}),Object(x.jsxs)(d.a,{children:[Object(x.jsx)(m.a,{content:"Upload",onClick:function(){b(t,a.current)}}),Object(x.jsx)(m.a,{content:"Cancel",onClick:function(){w(i.current,a.current)}})]})]})})})]})},O=function(e){navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((function(t){e.srcObject=t,e.play()})).catch((function(e){console.log("An error occurred: "+e)}))},v=function(e,t,n){var c=e.getContext("2d");e.width=320,e.height=240,c.drawImage(t,0,0,320,240);var i=e.toDataURL("image/png");n.current=I(i),console.log("take photo")},I=function(e){var t=e.indexOf("base64,");return e.substring(t+7)},w=function(e,t){var n=e.getContext("2d");n.fillStyle="#AAA",n.fillRect(0,0,e.width,e.height),console.log("photo: ".concat(JSON.stringify(null)))},y=n(227),C=n(447),_=n(59),k=n(50),R=n(448),A=n(449),E=n(229),S=n(215),M=n(216),N=n.n(M),D=["WandaHoward","TimDeboer","RobinCounts","RobertTolbert","MonaKane","MiguelGarcia","MauricioAugust","LydiaBauer","KristinPatterson","KevinSturgis","KatriAthokas","KatLarsson","JohnieMcConnell","IsaacFielder","HenryBrill","ErikNason","ElviaAtkins"],B={width:"calc(100% - 10px)",height:"80%",margin:"10px 5px"},K=function(e){var t=e.style,n=e.userId,i=c.useRef(null),a=c.useCallback((function(){i&&i.current&&i.current.click()})),o=c.useCallback((function(e){if(e.target.files&&e.target.files[0]){var t=new FileReader;t.onload=function(e){var t=e.target.result,c=t.indexOf("base64,"),i=t.substring(c+7);b(n,i)},t.readAsDataURL(e.target.files[0])}}));return Object(x.jsxs)("div",{style:t,children:[Object(x.jsx)("input",{id:"fileButton",ref:i,onChange:o,type:"file",hidden:!0}),Object(x.jsxs)(m.a,{text:!0,styles:B,onClick:a,children:[Object(x.jsx)(C.a,{}),Object(x.jsx)(_.a,{weight:"semibold",content:"Upload Emoji"})]},"add_emoji")]})},U=function(e){var t=e.columnIndex,n=e.data,c=e.rowIndex,i=e.style,a=e.userId,o=c*n.columnCount+t,s=n.items&&n.items.length>o?n.items[o]:null;if(!s)return null;if("add-emoji"===s.id)return Object(x.jsx)(K,{style:i,userId:a});var r=function(e){!function(e,t,n,c,i){f.a.post("https://www.l2b.ltd/api/message-reactions",{emoji_id:e,user_id:t,message_id:n,chat_id:c,emoji_url:i}).then((function(){console.log("select image succeed")})).catch((function(e){console.log("select image failed: ".concat(e))}))}(e.id,n.userId,n.messageId,n.convId,e.src)};return Object(x.jsx)("div",{style:i,children:Object(x.jsx)(m.a,{styles:B,text:!0,title:s.name,onClick:function(){return r(s)},children:Object(x.jsx)(k.a,{style:{maxHeight:"100%",maxWidth:"100%"},src:s.src})},s.id)})},F=function(e){var t=e.messageId,n=e.userId,i=e.convId,a=c.useState([]),o=Object(l.a)(a,2),s=o[0],r=o[1];c.useEffect((function(){f.a.get("https://www.l2b.ltd/v1/CustomEmoji").then((function(e){return console.log("fetch images succeed: ".concat(e)),e.data.map((function(e){return{id:e.emoji_id,name:e.emoji_display_name,src:e.emoji_url}}))})).catch((function(e){console.log("fetch images failed: ".concat(e))})).then((function(e){r(e||N.a.map(D,(function(e){return{id:e,name:e,src:"https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/".concat(e,".jpg")}})))}))}),[]);var u=[{id:"add-emoji"}].concat(Object(y.a)(s)),d=Math.ceil(u.length/6),j=c.useMemo((function(){return{columnCount:6,items:u,messageId:t,userId:n,convId:i}})),m=Object(x.jsx)(S.a,{children:function(e){return function(e,t){var c=Math.floor(t/6);return Object(x.jsx)(E.a,{className:"FixedSizeGrid",columnCount:6,rowCount:d,width:t,height:e,columnWidth:c,rowHeight:150,initialScrollTop:0,itemData:j,style:{overflowX:"hidden"},userId:n,children:U})}(e.height,e.width)}});return Object(x.jsx)(R.a,{accessibility:A.a,content:m,style:{height:"100%",width:"100%"}})},L=(n(371),[{key:"custom_emojis",content:"Custom Emojis"},{key:"shoot_emoji",content:"Shoot emoji"}]),T=function(){var e=new URLSearchParams(Object(r.d)().search),t=e.get("messageId"),n=e.get("userId"),i=e.get("convId"),a=c.useState(0),o=Object(l.a)(a,2),s=o[0],d=o[1],j=c.useCallback((function(e,t){d(t.activeIndex)}));return Object(x.jsxs)("div",{id:"main-page",style:{height:"100%"},children:[Object(x.jsx)(u.a,{defaultActiveIndex:0,items:L,underlined:!0,primary:!0,onActiveIndexChange:j}),0===s&&Object(x.jsx)(F,{messageId:t,userId:n,convId:i}),1===s&&Object(x.jsx)(p,{userId:n})]})};var z=function(){return o?Object(x.jsx)(s.a,{children:Object(x.jsx)(T,{})}):Object(x.jsx)("h3",{children:"Microsoft Teams SDK not found."})},H=n(457),J=n(456);a.a.render(Object(x.jsx)(H.a,{theme:J.a,children:Object(x.jsx)(z,{})}),document.getElementById("root"))}},[[380,1,2]]]);
//# sourceMappingURL=main.bfabd9e4.chunk.js.map