import{i as d,e as $,f,g as u,h as T,t as S,j as M,k as N,l as m,c as w,S as V}from"./index-Boq8amp2.js";function B(){let t,e="",n=0;for(;n<arguments.length;)(t=arguments[n++])&&typeof t=="string"&&(e&&(e+=" "),e+=t);return e}const D="_container_wwff1_1",F="_video_wwff1_10",G="_chat_wwff1_17",H="_apeal_wwff1_1",s={container:D,video:F,chat:G,"anon-chat":"_anon-chat_wwff1_24","anon-chat__area":"_anon-chat__area_wwff1_37","--error":"_--error_wwff1_48","anon-chat__buttons":"_anon-chat__buttons_wwff1_55","anon-chat__button--submit":"_anon-chat__button--submit_wwff1_63","anon-chat__hint":"_anon-chat__hint_wwff1_82","anon-chat__hint--result":"_anon-chat__hint--result_wwff1_91",apeal:H,"anon-chat__hint--error":"_anon-chat__hint--error_wwff1_95"};function K(t){return new Promise(e=>setTimeout(e,t))}const Q="https://vvbj8nuap9.execute-api.ap-northeast-1.amazonaws.com/api";async function W(t){return await fetch(`${Q}/message`,{method:"post",body:JSON.stringify(t)})}const X=new Set(["udonkotarou"]),Y=t=>{switch(t.status){case void 0:return"現在サーバーはアクティブではありません。";case 400:switch(t.message){case"ChatCommandIncluded":return"チャットコマンドを送信することはできません。";case"CooldownRequired":return"発言が多すぎます。しばらく待ってから発言してください。";default:return"不正なリクエストです。"}case 409:return"短期間のうちに同一内容の発言を行うことはできません。";case 429:return"発言が多すぎます。しばらく待ってから発言してください。";case 503:return"発言に失敗しました。少し時間をおいてから再度発言してください。";default:return"サーバーへのアクセスが集中しています。"}};var P=S("<section><iframe height=100% width=100%>"),Z=S("<div><input><div><div></div><button>"),tt=S("<article>");const et=()=>{const[t,e]=m(void 0),n=()=>{e(5),r(4)},r=async i=>{if(i<=0){e(void 0);return}await K(1e3),e(i),r(i-1)};return[t,n]},nt=()=>{const t=M();return(()=>{var e=P(),n=e.firstChild;return f(r=>{var i=s.video,l=`https://player.twitch.tv/?channel=${t.id}&parent=${encodeURI(window.location.hostname)}`;return i!==r.e&&u(e,r.e=i),l!==r.t&&N(n,"src",r.t=l),r},{e:void 0,t:void 0}),e})()},at=()=>{const t=M(),e=X.has(t.id),[n,r]=m(""),[i,l]=m(!1),[g,p]=m(void 0),[b,U]=et(),q=w(()=>n().length>140),y=w(()=>!(i()||b()!==void 0||n().length>140||n().length==0)),z=w(()=>g()!==void 0?g():`${n().length} / 140`),A=w(()=>b()!==void 0?b()??"":"送信"),J=c=>{g()!==void 0&&p(void 0),r(c.target.value)},L=async()=>{y()&&(l(!0),await W({message:n()}).then(()=>{r(""),U()}).catch(c=>{p(Y(c))}),l(!1))};return(()=>{var c=P(),O=c.firstChild;return d(c,$(V,{when:e,get children(){var o=Z(),_=o.firstChild,h=_.nextSibling,C=h.firstChild,v=C.nextSibling;return _.$$input=J,d(C,z),v.$$click=L,d(v,A),f(a=>{var k=s["anon-chat"],E=s["anon-chat__area"],I=s["anon-chat__buttons"],x=B(s["anon-chat__hint"],q()&&s["anon-chat__hint--error"]),R=s["anon-chat__button--submit"],j=!y();return k!==a.e&&u(o,a.e=k),E!==a.t&&u(_,a.t=E),I!==a.a&&u(h,a.a=I),x!==a.o&&u(C,a.o=x),R!==a.i&&u(v,a.i=R),j!==a.n&&(v.disabled=a.n=j),a},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),f(()=>_.value=n()),o}}),null),f(o=>{var _=s.chat,h=`https://www.twitch.tv/embed/${t.id}/chat?parent=${encodeURI(window.location.hostname)}`;return _!==o.e&&u(c,o.e=_),h!==o.t&&N(O,"src",o.t=h),o},{e:void 0,t:void 0}),c})()},ot=()=>(()=>{var t=tt();return d(t,$(nt,{}),null),d(t,$(at,{}),null),f(()=>u(t,s.container)),t})();T(["input","click"]);export{ot as Id,ot as default};
