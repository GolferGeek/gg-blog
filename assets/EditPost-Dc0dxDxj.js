import{u as ht,q as xt,r as s,j as e,v as S,s as gt,D as J,P as O,t as o,J as l,B as d,L as w,y as F,S as p,G,k as C}from"./vendor-C65ctaoV.js";import{b as pt,s as u}from"./index-I0dD487A.js";import{M as mt,I as ft}from"./MarkdownEditor-Csx3Eh72.js";import{f as jt}from"./format-BzRktsyD.js";import"./supabase-Cg6Q1mgr.js";import"./Delete-DyDZc2Gn.js";function Tt(){const{id:c}=ht(),I=xt(),{user:i}=pt(),P="19334a99-3c60-4731-85b9-a8b30edad1af",[m,T]=s.useState(""),[f,E]=s.useState(""),[_,z]=s.useState(""),[B,H]=s.useState([]),[h,x]=s.useState(null),[A,k]=s.useState(!1),[n,g]=s.useState([]),[j,q]=s.useState(""),[D,K]=s.useState([]),[yt,L]=s.useState(!1),[y,v]=s.useState([]),[Y,M]=s.useState(!0),[Q,V]=s.useState(null),[b,X]=s.useState(null),[W,Z]=s.useState([]),[vt,tt]=s.useState(null),et=i&&i.id===Q;s.useEffect(()=>{rt(),U()},[c]);async function rt(){try{M(!0);const{data:t,error:r}=await u.from("posts").select("*").eq("id",c).single();if(r)throw r;t&&(T(t.title),E(t.content),z(t.excerpt||""),H(t.interests||[]),g(t.tags?JSON.parse(t.tags):[]),v(t.images||[]),V(t.user_id),tt(t.arc_id),t.parent_id&&st(t.parent_id),at(t.id))}catch(t){console.error("Error fetching post:",t),x("Error fetching post")}finally{M(!1)}}async function st(t){try{const{data:r,error:a}=await u.from("posts").select("id, title").eq("id",t).single();if(a)throw a;X(r)}catch(r){console.error("Error fetching parent post:",r)}}async function at(t){try{const{data:r,error:a}=await u.from("posts").select("id, title, created_at").eq("parent_id",t).order("created_at",{ascending:!0});if(a)throw a;const ut=r?Array.from(new Map(r.map(R=>[R.id,R])).values()):[];Z(ut)}catch(r){console.error("Error fetching child posts:",r)}}async function U(){try{L(!0);const{data:t,error:r}=await u.from("tags").select("name").or(`user_id.eq.${P},user_id.eq.${i==null?void 0:i.id}`).order("name");if(r)throw r;K(t.map(a=>a.name))}catch(t){console.error("Error fetching tags:",t)}finally{L(!1)}}const ot=t=>{q(t.target.value)},nt=async t=>{if(t.key==="Enter"){t.preventDefault();const r=t.target.value.trim().toLowerCase();if(r&&!n.includes(r))try{const{error:a}=await u.from("tags").insert([{name:r,user_id:(i==null?void 0:i.id)||P}]);if(a)throw a;g([...n,r]),t.target.value="",await U()}catch(a){console.error("Error adding tag:",a)}}},$=t=>{n.includes(t)||g([...n,t]),q("")},it=t=>{g(n.filter(r=>r!==t))},lt=t=>{v(r=>[...r,...t])},ct=t=>{v(r=>r.filter(a=>a!==t))};async function dt(t){if(t.preventDefault(),!i){x("You must be logged in to edit a post");return}try{x(null),k(!0);const{error:r}=await u.from("posts").update({title:m,content:f,excerpt:_,interests:B,tags:JSON.stringify(n),images:y,updated_at:new Date().toISOString()}).eq("id",c);if(r)throw r;I(`/post/${c}`)}catch(r){console.error("Error updating post:",r),x("Failed to update post")}finally{k(!1)}}const N=D.filter(t=>t.toLowerCase().includes(j.toLowerCase())&&!n.includes(t));return Y?e.jsx(S,{maxWidth:"md",sx:{mt:4,textAlign:"center"},children:e.jsx(gt,{})}):h?e.jsx(S,{maxWidth:"md",sx:{mt:4},children:e.jsx(J,{severity:"error",children:h})}):e.jsx(S,{maxWidth:"lg",sx:{mt:4,mb:4},children:e.jsxs(O,{sx:{p:4},children:[e.jsx(o,{variant:"h4",component:"h1",gutterBottom:!0,children:"Edit Post"}),h&&e.jsx(J,{severity:"error",sx:{mb:2},children:h}),e.jsx("form",{onSubmit:dt,children:e.jsxs(l,{container:!0,spacing:3,children:[b&&e.jsx(l,{item:!0,xs:12,children:e.jsx(d,{sx:{mb:2},children:e.jsxs(o,{variant:"body2",color:"text.secondary",children:["Part of thread: ",e.jsx(w,{to:`/post/${b.id}`,style:{color:"inherit",textDecoration:"underline"},children:b.title})]})})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(F,{label:"Title",value:m,onChange:t=>T(t.target.value),required:!0,fullWidth:!0})}),e.jsxs(l,{item:!0,xs:12,children:[e.jsx(o,{variant:"h6",gutterBottom:!0,children:"Content"}),e.jsx(mt,{value:f,onChange:t=>E(t)})]}),e.jsxs(l,{item:!0,xs:12,children:[e.jsx(o,{variant:"h6",gutterBottom:!0,children:"Tags"}),e.jsxs(d,{sx:{mb:2},children:[e.jsx(o,{variant:"subtitle2",color:"text.secondary",gutterBottom:!0,children:"Available Tags"}),e.jsx(p,{direction:"row",spacing:1,sx:{mb:2,flexWrap:"wrap",gap:1},children:D.filter(t=>!n.includes(t)).map(t=>e.jsx(G,{label:t,onClick:()=>$(t),color:"default",variant:"outlined",sx:{cursor:"pointer"}},t))})]}),e.jsxs(d,{sx:{mb:2},children:[e.jsx(o,{variant:"subtitle2",color:"text.secondary",gutterBottom:!0,children:"Selected Tags"}),e.jsx(p,{direction:"row",spacing:1,sx:{flexWrap:"wrap",gap:1},children:n.map((t,r)=>e.jsx(G,{label:t,onDelete:()=>it(t),color:"primary",variant:"outlined"},r))})]}),e.jsx(o,{variant:"subtitle2",color:"text.secondary",gutterBottom:!0,children:"Add New Tag"}),e.jsx(F,{fullWidth:!0,label:"New Tag",value:j,onChange:ot,onKeyDown:nt,placeholder:"Type a new tag and press Enter",helperText:"Press Enter to add a new tag",size:"small",margin:"normal"}),j&&N.length>0&&e.jsx(O,{sx:{mt:1,maxHeight:200,overflow:"auto"},children:e.jsx(p,{children:N.map(t=>e.jsx(d,{sx:{p:1,cursor:"pointer","&:hover":{bgcolor:"action.hover"}},onClick:()=>$(t),children:e.jsx(o,{variant:"body2",children:t})},t))})})]}),e.jsxs(l,{item:!0,xs:12,children:[e.jsx(o,{variant:"h6",gutterBottom:!0,children:"Images"}),e.jsx(ft,{onUpload:lt,onRemove:ct,existingImages:y})]}),W.length>0&&e.jsxs(l,{item:!0,xs:12,children:[e.jsx(o,{variant:"h6",gutterBottom:!0,children:"Continued in:"}),e.jsx(p,{spacing:2,children:W.map(t=>e.jsxs(d,{component:w,to:`/post/${t.id}`,sx:{textDecoration:"none",color:"inherit",display:"flex",justifyContent:"space-between",alignItems:"center",p:2,border:"1px solid",borderColor:"divider",borderRadius:1,"&:hover":{backgroundColor:"action.hover"}},children:[e.jsx(o,{variant:"subtitle1",children:t.title}),e.jsx(o,{variant:"body2",color:"text.secondary",children:jt(new Date(t.created_at),"MMMM d, yyyy")})]},t.id))})]}),e.jsx(l,{item:!0,xs:12,children:e.jsxs(d,{sx:{display:"flex",gap:2,justifyContent:"flex-end"},children:[et&&e.jsx(C,{variant:"contained",color:"primary",component:w,to:"/create",state:{parentPost:{id:parseInt(c),title:m,content:f,excerpt:_,interests:B,tags:n,images:y}},children:"Create Child Post"}),e.jsx(C,{variant:"outlined",onClick:()=>I(`/post/${c}`),children:"Cancel"}),e.jsx(C,{type:"submit",variant:"contained",disabled:A,children:A?"Saving...":"Save Changes"})]})})]})})]})})}export{Tt as default};
//# sourceMappingURL=EditPost-Dc0dxDxj.js.map
