const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DuVU0MPK.js","assets/vendor-BfW8ubqa.js","assets/editor-By8XcRZL.js","assets/editor-Ch1M4OpB.css","assets/supabase-CI9plm6Z.js","assets/Login-CwSI0l7k.js","assets/SignUp-DMX6rGO3.js","assets/ViewPost-Dqv98TVq.js","assets/ConfirmModal-DRDLS1sq.js","assets/Delete-BImv3mU7.js","assets/Edit-Dqkav3Zm.js","assets/CreatePost-DlcomC5y.js","assets/ImageUpload-CL7cCO2z.js","assets/EditPost-GPJh_Ean.js","assets/ManageInterests-BDfwjI7F.js","assets/Resume-BAH_Cf_B.js","assets/InterestPage-HzDFzR4c.js"])))=>i.map(i=>d[i]);
import{d as w,r,j as e,e as z,T as L,C as S,N as k,f as A,A as R,h as T,i as N,k as j,L as x,B as b,I as B,M as D,l as G,m as f,n as V,o as q,p as h}from"./vendor-BfW8ubqa.js";import{c as J,_ as p}from"./supabase-CI9plm6Z.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();var _,v=w;_=v.createRoot,v.hydrateRoot;const I="https://wwltthgziqcmyduqphbq.supabase.co",E="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3bHR0aGd6aXFjbXlkdXFwaGJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1OTY4NzQsImV4cCI6MjA0NzE3Mjg3NH0.qB01bs7MLXKeqEhixNWw1sOs5MjplPzjuIOOEGnjKqg";console.log(I,E);const m=J(I,E),C=r.createContext({});function F({children:d}){const[l,t]=r.useState(null),[u,o]=r.useState(!0);r.useEffect(()=>{m.auth.getSession().then(({data:{session:c}})=>{t((c==null?void 0:c.user)??null),o(!1)});const{data:{subscription:s}}=m.auth.onAuthStateChange((c,i)=>{t((i==null?void 0:i.user)??null)});return()=>s.unsubscribe()},[]);const n={signUp:s=>m.auth.signUp(s),signIn:s=>m.auth.signInWithPassword(s),signOut:()=>m.auth.signOut(),user:l};return e.jsx(C.Provider,{value:n,children:!u&&d})}const M=()=>r.useContext(C),O=r.createContext();function W(){return r.useContext(O)}function X({children:d}){const[l,t]=r.useState([]),[u,o]=r.useState(!0);r.useEffect(()=>{n()},[]);async function n(){try{const{data:i,error:g}=await m.from("interests").select("*").order("title");if(g)throw g;t(i||[]),o(!1)}catch{o(!1)}}async function s(i,g){try{const{error:a}=await m.from("posts").update({tags:g}).eq("id",i);if(a)throw a;return!0}catch(a){return console.error("Error updating post tags:",a),!1}}const c={interests:l,loading:u,updatePostTags:s};return e.jsx(O.Provider,{value:c,children:d})}const U=r.createContext({toggleColorMode:()=>{}});function H({children:d}){const l=window.matchMedia("(prefers-color-scheme: dark)").matches,[t,u]=r.useState(l?"dark":"light");r.useEffect(()=>{const s=window.matchMedia("(prefers-color-scheme: dark)"),c=i=>{u(i.matches?"dark":"light")};return s.addEventListener("change",c),()=>s.removeEventListener("change",c)},[]);const o=r.useMemo(()=>({toggleColorMode:()=>{u(s=>s==="light"?"dark":"light")}}),[]),n=r.useMemo(()=>z({palette:{mode:t,primary:{main:t==="light"?"#7c7157":"#a39778",dark:t==="light"?"#5c543f":"#887e60",light:t==="light"?"#9b8f6e":"#c4b99c"},secondary:{main:t==="light"?"#6b705c":"#8b917d"},background:{default:t==="light"?"#f8f7f4":"#2a2826",paper:t==="light"?"#ffffff":"#353230"},text:{primary:t==="light"?"#433f38":"#e6e2d9",secondary:t==="light"?"#6b6661":"#b5b0a8"},error:{main:t==="light"?"#b56b65":"#c88d88"},warning:{main:t==="light"?"#c4a256":"#d4b87c"},success:{main:t==="light"?"#7c9176":"#96aa90"},divider:t==="light"?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.06)"},components:{MuiAppBar:{styleOverrides:{root:{backgroundColor:t==="light"?"#ffffff":"#353230",color:t==="light"?"#433f38":"#e6e2d9",boxShadow:t==="light"?"0 1px 3px rgba(0,0,0,0.05)":"0 1px 3px rgba(0,0,0,0.2)"}}},MuiButton:{styleOverrides:{root:{textTransform:"none",boxShadow:"none",":hover":{boxShadow:"none"}},contained:{backgroundColor:t==="light"?"#7c7157":"#a39778","&:hover":{backgroundColor:t==="light"?"#5c543f":"#887e60"}}}},MuiCard:{styleOverrides:{root:{borderRadius:8,boxShadow:t==="light"?"0 1px 3px rgba(0,0,0,0.05)":"0 1px 3px rgba(0,0,0,0.2)",border:t==="light"?"1px solid rgba(0,0,0,0.05)":"1px solid rgba(255,255,255,0.05)"}}},MuiPaper:{styleOverrides:{root:{backgroundImage:"none"}}}},typography:{h1:{color:t==="light"?"#433f38":"#e6e2d9"},h2:{color:t==="light"?"#433f38":"#e6e2d9"},h3:{color:t==="light"?"#433f38":"#e6e2d9"},h4:{color:t==="light"?"#433f38":"#e6e2d9"},h5:{color:t==="light"?"#433f38":"#e6e2d9"},h6:{color:t==="light"?"#433f38":"#e6e2d9"},body1:{color:t==="light"?"#57534a":"#d5d0c8"},body2:{color:t==="light"?"#6b6661":"#b5b0a8"}}}),[t]);return e.jsx(U.Provider,{value:o,children:e.jsxs(L,{theme:n,children:[e.jsx(S,{}),d]})})}function y({children:d}){const{user:l}=M();return l?d:e.jsx(k,{to:"/login",replace:!0})}const K=A(e.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");function Q(){const[d,l]=r.useState(null),{user:t,signOut:u}=M(),{interests:o,loading:n}=W(),s=a=>{l(a.currentTarget)},c=()=>{l(null)},i={color:"white",textTransform:"none",fontSize:"1rem","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.1)"}};if(n)return null;!o||o.length;const g=[...o||[]].sort((a,P)=>(a.sequence||0)-(P.sequence||0)).map(a=>({...a}));return e.jsx(R,{position:"static",sx:{backgroundColor:"primary.main"},children:e.jsx(T,{maxWidth:"xl",children:e.jsxs(N,{disableGutters:!0,children:[e.jsx(j,{variant:"h6",noWrap:!0,component:x,to:"/",sx:{display:{xs:"none",md:"flex"},fontWeight:700,color:"white",textDecoration:"none",flexGrow:0},children:"GolferGeek"}),e.jsxs(b,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[e.jsx(B,{size:"large","aria-label":"menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:s,color:"inherit",children:e.jsx(K,{})}),e.jsx(D,{id:"menu-appbar",anchorEl:d,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:!!d,onClose:c,sx:{display:{xs:"block",md:"none"}},children:g.map(a=>e.jsx(G,{onClick:c,component:x,to:`/${a.name}`,sx:{color:"text.primary"},children:e.jsx(j,{textAlign:"center",children:a.title})},a.id))})]}),e.jsx(j,{variant:"h5",noWrap:!0,component:x,to:"/",sx:{display:{xs:"flex",md:"none"},flexGrow:1,fontWeight:700,color:"white",textDecoration:"none"},children:"GolferGeek"}),e.jsx(b,{sx:{flexGrow:1,display:{xs:"none",md:"flex"},justifyContent:"center",gap:2},children:g.map(a=>e.jsx(f,{component:x,to:`/${a.name}`,sx:i,children:a.title},a.id))}),e.jsxs(b,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(f,{component:x,to:"/resume",sx:i,children:"Resume"}),t?e.jsxs(e.Fragment,{children:[t.email==="golfergeek@gmail.com"&&e.jsxs(e.Fragment,{children:[e.jsx(f,{component:x,to:"/create",sx:i,children:"Create Post"}),e.jsx(f,{component:x,to:"/manage-interests",sx:i,children:"Manage"})]}),e.jsx(f,{onClick:u,sx:i,children:"Sign Out"})]}):e.jsx(f,{component:x,to:"/login",sx:i,children:"Sign In"})]})]})})})}const Y=r.lazy(()=>p(()=>import("./Home-DuVU0MPK.js"),__vite__mapDeps([0,1,2,3,4]))),Z=r.lazy(()=>p(()=>import("./Login-CwSI0l7k.js"),__vite__mapDeps([5,1,4]))),$=r.lazy(()=>p(()=>import("./SignUp-DMX6rGO3.js"),__vite__mapDeps([6,1,4]))),ee=r.lazy(()=>p(()=>import("./ViewPost-Dqv98TVq.js"),__vite__mapDeps([7,1,2,3,8,9,10,4]))),te=r.lazy(()=>p(()=>import("./CreatePost-DlcomC5y.js"),__vite__mapDeps([11,1,2,3,12,9,4]))),re=r.lazy(()=>p(()=>import("./EditPost-GPJh_Ean.js"),__vite__mapDeps([13,1,2,3,12,9,4]))),oe=r.lazy(()=>p(()=>import("./ManageInterests-BDfwjI7F.js"),__vite__mapDeps([14,1,2,3,10,9,4]))),ne=r.lazy(()=>p(()=>import("./Resume-BAH_Cf_B.js"),__vite__mapDeps([15,1,2,3]))),se=r.lazy(()=>p(()=>import("./InterestPage-HzDFzR4c.js"),__vite__mapDeps([16,1,2,3,8,4])));function ae(){return e.jsx(F,{children:e.jsx(X,{children:e.jsx(H,{children:e.jsxs(V,{children:[e.jsx(Q,{}),e.jsx("main",{className:"container",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(q,{children:[e.jsx(h,{path:"/",element:e.jsx(Y,{})}),e.jsx(h,{path:"/login",element:e.jsx(Z,{})}),e.jsx(h,{path:"/signup",element:e.jsx($,{})}),e.jsx(h,{path:"/:interest",element:e.jsx(se,{})}),e.jsx(h,{path:"/post/:id",element:e.jsx(ee,{})}),e.jsx(h,{path:"/create",element:e.jsx(y,{children:e.jsx(te,{})})}),e.jsx(h,{path:"/edit/:id",element:e.jsx(y,{children:e.jsx(re,{})})}),e.jsx(h,{path:"/manage-interests",element:e.jsx(y,{children:e.jsx(oe,{})})}),e.jsx(h,{path:"/resume",element:e.jsx(ne,{})})]})})})]})})})})}_(document.getElementById("root")).render(e.jsx(r.StrictMode,{children:e.jsx(ae,{})}));export{M as a,m as s,W as u};
//# sourceMappingURL=index-BwGAzuKD.js.map
