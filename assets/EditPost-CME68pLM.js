import{D as ht,u as xt,r as s,j as e,h as w,q as gt,y as H,P as O,k as o,H as l,B as c,L as S,z,S as p,E as F,l as C}from"./vendor-CLzwre8y.js";import{a as pt,s as u}from"./index-BJ8jdmwE.js";import{E as mt}from"./editor-CmZuVxSC.js";import{I as ft}from"./ImageUpload-BpAgjyel.js";import{f as jt}from"./format-BzRktsyD.js";import"./supabase-DTekwhgc.js";import"./Delete-BuOpn6KW.js";function Tt(){const{id:d}=ht(),E=xt(),{user:i}=pt(),I="19334a99-3c60-4731-85b9-a8b30edad1af",[m,P]=s.useState(""),[f,T]=s.useState(""),[_,J]=s.useState(""),[B,G]=s.useState([]),[h,x]=s.useState(null),[A,k]=s.useState(!1),[n,g]=s.useState([]),[j,q]=s.useState(""),[D,K]=s.useState([]),[yt,L]=s.useState(!1),[y,v]=s.useState([]),[Y,W]=s.useState(!0),[Q,V]=s.useState(null),[b,X]=s.useState(null),[U,Z]=s.useState([]),[vt,tt]=s.useState(null),et=i&&i.id===Q;s.useEffect(()=>{rt(),$()},[d]);async function rt(){try{W(!0);const{data:t,error:r}=await u.from("posts").select("*").eq("id",d).single();if(r)throw r;t&&(P(t.title),T(t.content),J(t.excerpt||""),G(t.interests||[]),g(t.tags?JSON.parse(t.tags):[]),v(t.images||[]),V(t.user_id),tt(t.arc_id),t.parent_id&&st(t.parent_id),at(t.id))}catch(t){console.error("Error fetching post:",t),x("Error fetching post")}finally{W(!1)}}async function st(t){try{const{data:r,error:a}=await u.from("posts").select("id, title").eq("id",t).single();if(a)throw a;X(r)}catch(r){console.error("Error fetching parent post:",r)}}async function at(t){try{const{data:r,error:a}=await u.from("posts").select("id, title, created_at").eq("parent_id",t).order("created_at",{ascending:!0});if(a)throw a;const ut=r?Array.from(new Map(r.map(N=>[N.id,N])).values()):[];Z(ut)}catch(r){console.error("Error fetching child posts:",r)}}async function $(){try{L(!0);const{data:t,error:r}=await u.from("tags").select("name").or(`user_id.eq.${I},user_id.eq.${i==null?void 0:i.id}`).order("name");if(r)throw r;K(t.map(a=>a.name))}catch(t){console.error("Error fetching tags:",t)}finally{L(!1)}}const ot=t=>{q(t.target.value)},nt=async t=>{if(t.key==="Enter"){t.preventDefault();const r=t.target.value.trim().toLowerCase();if(r&&!n.includes(r))try{const{error:a}=await u.from("tags").insert([{name:r,user_id:(i==null?void 0:i.id)||I}]);if(a)throw a;g([...n,r]),t.target.value="",await $()}catch(a){console.error("Error adding tag:",a)}}},M=t=>{n.includes(t)||g([...n,t]),q("")},it=t=>{g(n.filter(r=>r!==t))},lt=t=>{v(r=>[...r,...t])},ct=t=>{v(r=>r.filter(a=>a!==t))};async function dt(t){if(t.preventDefault(),!i){x("You must be logged in to edit a post");return}try{x(null),k(!0);const{error:r}=await u.from("posts").update({title:m,content:f,excerpt:_,interests:B,tags:JSON.stringify(n),images:y,updated_at:new Date().toISOString()}).eq("id",d);if(r)throw r;E(`/post/${d}`)}catch(r){console.error("Error updating post:",r),x("Failed to update post")}finally{k(!1)}}const R=D.filter(t=>t.toLowerCase().includes(j.toLowerCase())&&!n.includes(t));return Y?e.jsx(w,{maxWidth:"md",sx:{mt:4,textAlign:"center"},children:e.jsx(gt,{})}):h?e.jsx(w,{maxWidth:"md",sx:{mt:4},children:e.jsx(H,{severity:"error",children:h})}):e.jsx(w,{maxWidth:"lg",sx:{mt:4,mb:4},children:e.jsxs(O,{sx:{p:4},children:[e.jsx(o,{variant:"h4",component:"h1",gutterBottom:!0,children:"Edit Post"}),h&&e.jsx(H,{severity:"error",sx:{mb:2},children:h}),e.jsx("form",{onSubmit:dt,children:e.jsxs(l,{container:!0,spacing:3,children:[b&&e.jsx(l,{item:!0,xs:12,children:e.jsx(c,{sx:{mb:2},children:e.jsxs(o,{variant:"body2",color:"text.secondary",children:["Part of thread: ",e.jsx(S,{to:`/post/${b.id}`,style:{color:"inherit",textDecoration:"underline"},children:b.title})]})})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(z,{label:"Title",value:m,onChange:t=>P(t.target.value),required:!0,fullWidth:!0})}),e.jsxs(l,{item:!0,xs:12,children:[e.jsx(o,{variant:"h6",gutterBottom:!0,children:"Content"}),e.jsx(c,{sx:{"& .w-md-editor":{margin:0,boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.23)",borderRadius:1,minHeight:"400px"},"& .wmde-markdown":{padding:0},"& .w-md-editor-toolbar":{padding:"8px"},"& .w-md-editor-content":{height:"calc(400px - 40px) !important"}},children:e.jsx(mt,{value:f,onChange:T,preview:"edit",highlightEnable:!1})})]}),e.jsxs(l,{item:!0,xs:12,children:[e.jsx(o,{variant:"h6",gutterBottom:!0,children:"Tags"}),e.jsxs(c,{sx:{mb:2},children:[e.jsx(o,{variant:"subtitle2",color:"text.secondary",gutterBottom:!0,children:"Available Tags"}),e.jsx(p,{direction:"row",spacing:1,sx:{mb:2,flexWrap:"wrap",gap:1},children:D.filter(t=>!n.includes(t)).map(t=>e.jsx(F,{label:t,onClick:()=>M(t),color:"default",variant:"outlined",sx:{cursor:"pointer"}},t))})]}),e.jsxs(c,{sx:{mb:2},children:[e.jsx(o,{variant:"subtitle2",color:"text.secondary",gutterBottom:!0,children:"Selected Tags"}),e.jsx(p,{direction:"row",spacing:1,sx:{flexWrap:"wrap",gap:1},children:n.map((t,r)=>e.jsx(F,{label:t,onDelete:()=>it(t),color:"primary",variant:"outlined"},r))})]}),e.jsx(o,{variant:"subtitle2",color:"text.secondary",gutterBottom:!0,children:"Add New Tag"}),e.jsx(z,{fullWidth:!0,label:"New Tag",value:j,onChange:ot,onKeyDown:nt,placeholder:"Type a new tag and press Enter",helperText:"Press Enter to add a new tag",size:"small",margin:"normal"}),j&&R.length>0&&e.jsx(O,{sx:{mt:1,maxHeight:200,overflow:"auto"},children:e.jsx(p,{children:R.map(t=>e.jsx(c,{sx:{p:1,cursor:"pointer","&:hover":{bgcolor:"action.hover"}},onClick:()=>M(t),children:e.jsx(o,{variant:"body2",children:t})},t))})})]}),e.jsxs(l,{item:!0,xs:12,children:[e.jsx(o,{variant:"h6",gutterBottom:!0,children:"Images"}),e.jsx(ft,{onUpload:lt,onRemove:ct,existingImages:y})]}),U.length>0&&e.jsxs(l,{item:!0,xs:12,children:[e.jsx(o,{variant:"h6",gutterBottom:!0,children:"Continued in:"}),e.jsx(p,{spacing:2,children:U.map(t=>e.jsxs(c,{component:S,to:`/post/${t.id}`,sx:{textDecoration:"none",color:"inherit",display:"flex",justifyContent:"space-between",alignItems:"center",p:2,border:"1px solid",borderColor:"divider",borderRadius:1,"&:hover":{backgroundColor:"action.hover"}},children:[e.jsx(o,{variant:"subtitle1",children:t.title}),e.jsx(o,{variant:"body2",color:"text.secondary",children:jt(new Date(t.created_at),"MMMM d, yyyy")})]},t.id))})]}),e.jsx(l,{item:!0,xs:12,children:e.jsxs(c,{sx:{display:"flex",gap:2,justifyContent:"flex-end"},children:[et&&e.jsx(C,{variant:"contained",color:"primary",component:S,to:"/create",state:{parentPost:{id:parseInt(d),title:m,content:f,excerpt:_,interests:B,tags:n,images:y}},children:"Create Child Post"}),e.jsx(C,{variant:"outlined",onClick:()=>E(`/post/${d}`),children:"Cancel"}),e.jsx(C,{type:"submit",variant:"contained",disabled:A,children:A?"Saving...":"Save Changes"})]})})]})})]})})}export{Tt as default};
//# sourceMappingURL=EditPost-CME68pLM.js.map