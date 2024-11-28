import{u as P,r as i,j as e,P as M,y as R,B as o,k as d,L as E,S as I,E as k,l as g,D as W,q as _,h as D,z as q,a5 as F}from"./vendor-CLzwre8y.js";import{a as z,s as w}from"./index-BJ8jdmwE.js";import{C as T}from"./ConfirmModal-_vBj_HC4.js";import{f as B}from"./format-BzRktsyD.js";import{E as L}from"./editor-CmZuVxSC.js";import{S as N}from"./Search-DOwX2sJC.js";import"./supabase-DTekwhgc.js";function $({post:r,onDelete:m,showInterest:x=!0}){const{user:l}=z(),a=P(),v="19334a99-3c60-4731-85b9-a8b30edad1af",[p,h]=i.useState(!1),[c,C]=i.useState(null),[f,u]=i.useState(null),j=(l==null?void 0:l.id)===v,y=n=>{if(!n)return null;const t=/!\[.*?\]\((.*?)\)/,s=n.match(t);return s?s[1]:null};i.useEffect(()=>{const n=y(r.content);n&&C(n)},[r.content]);async function b(){try{u(null);const{error:n}=await w.from("images").delete().eq("post_id",r.id);n&&console.error("Error deleting images:",n);const{error:t}=await w.from("posts").delete().eq("id",r.id);if(t)throw t;m&&m(r.id),h(!1)}catch(n){console.error("Error deleting post:",n),u("Failed to delete post. Please try again.")}}const S=()=>{var t,s;switch((s=(t=r.interests)==null?void 0:t[0])==null?void 0:s.toLowerCase()){case"coder":return"/images/coder.jpg";case"golfer":return"/images/golfer.jpg";case"mentor":return"/images/mentor.jpg";case"aging":return"/images/aging.jpg";default:return"/images/default.jpg"}};return e.jsxs(e.Fragment,{children:[e.jsxs(M,{elevation:3,sx:{p:2,width:"100%"},children:[f&&e.jsx(R,{severity:"error",sx:{mb:2},children:f}),e.jsxs(o,{sx:{display:"flex",gap:3},children:[e.jsx(o,{component:"img",src:c||S(),alt:r.title,sx:{width:150,height:150,objectFit:"cover",borderRadius:1,flexShrink:0},onError:n=>{n.target.src="/images/default.jpg"}}),e.jsxs(o,{sx:{flex:1,display:"flex",flexDirection:"column"},children:[e.jsxs(o,{sx:{mb:1},children:[e.jsx(d,{variant:"h6",component:E,to:`/post/${r.id}`,sx:{textDecoration:"none",color:"inherit","&:hover":{color:"primary.main"}},children:r.title}),e.jsxs(o,{sx:{display:"flex",gap:2,alignItems:"center",mt:.5},children:[x&&r.interests&&e.jsx(I,{direction:"row",spacing:1,children:r.interests.map(n=>e.jsx(k,{label:n,size:"small",color:"primary",variant:"outlined",component:E,to:`/${n}`,clickable:!0},n))}),e.jsx(d,{variant:"body2",color:"text.secondary",children:B(new Date(r.created_at),"MMMM d, yyyy")})]})]}),Array.isArray(r.tags)&&r.tags.length>0&&e.jsx(I,{direction:"row",spacing:1,sx:{mt:1,mb:2,flexWrap:"wrap",gap:1},children:r.tags.map((n,t)=>e.jsx(k,{label:n,size:"small",color:"secondary",variant:"outlined",sx:{borderRadius:"4px","&:hover":{backgroundColor:"secondary.light",color:"white"}}},t))}),e.jsx(d,{variant:"body2",color:"text.secondary",sx:{mb:2,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:r.excerpt||"No excerpt available"}),e.jsxs(o,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mt:"auto"},children:[e.jsx(g,{component:E,to:`/post/${r.id}`,variant:"contained",color:"primary",size:"small",children:"Read More"}),j&&e.jsxs(I,{direction:"row",spacing:1,children:[e.jsx(g,{onClick:()=>a(`/edit/${r.id}`),variant:"outlined",color:"primary",size:"small",children:"Edit"}),e.jsx(g,{onClick:()=>h(!0),variant:"outlined",color:"error",size:"small",children:"Delete"})]})]})]})]})]}),e.jsx(T,{open:p,onClose:()=>h(!1),onConfirm:b,title:"Delete Post",content:"Are you sure you want to delete this post? This action cannot be undone."})]})}function V(){const r=P(),{interest:m}=W(),{user:x}=z(),l="19334a99-3c60-4731-85b9-a8b30edad1af",[a,v]=i.useState(null),[p,h]=i.useState([]),[c,C]=i.useState(""),[f,u]=i.useState(!0),[j,y]=i.useState(null),b=(x==null?void 0:x.id)===l;i.useEffect(()=>{S()},[m]),i.useEffect(()=>{a&&n()},[a,c]);async function S(){try{const{data:t,error:s}=await w.from("interests").select("*").eq("name",m).eq("user_id",l).single();if(s){y("Interest not found"),u(!1);return}v(t)}catch(t){console.error("Error fetching interest:",t),y("Error fetching interest")}finally{u(!1)}}async function n(){try{let t=w.from("posts").select("*").contains("interests",[a.name]).eq("user_id",l).is("parent_id",null).order("created_at",{ascending:!1});c&&(t=t.textSearch("title",c));const{data:s,error:A}=await t;if(A)return;h(s)}catch{}}return f?e.jsxs(o,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh",gap:2},children:[e.jsx(_,{}),e.jsx(d,{children:"Loading interest..."})]}):j?e.jsxs(D,{maxWidth:"lg",sx:{mt:4},children:[e.jsx(R,{severity:"error",sx:{mb:2},children:j}),e.jsx(g,{variant:"contained",onClick:()=>r("/"),children:"Return to Home"})]}):e.jsxs(D,{maxWidth:"lg",children:[e.jsxs(o,{sx:{mt:4,mb:6,textAlign:"center"},children:[e.jsx(d,{variant:"h3",component:"h1",gutterBottom:!0,sx:{fontWeight:"bold",color:"primary.main",textTransform:"capitalize"},children:a.name}),a.image_path&&e.jsx(o,{component:"img",src:a.image_path,alt:a.name,sx:{maxWidth:"100%",height:"auto",maxHeight:"400px",borderRadius:2,boxShadow:3,mb:4}})]}),a.content&&e.jsx(o,{sx:{mt:2,"& .w-md-editor":{margin:0,boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.23)",borderRadius:1,height:"1000px"},"& .wmde-markdown":{padding:"16px"},"& .w-md-editor-toolbar":{padding:"8px",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"},"& .w-md-editor-content":{height:"calc(100% - 40px) !important"},"& .w-md-editor-input":{height:"100% !important"},"& .w-md-editor-text":{height:"100% !important"},"& .w-md-editor-text-input":{padding:"16px !important",height:"100% !important"},"& .w-md-editor-preview":{padding:"16px !important",height:"100% !important"}},children:e.jsx(L.Markdown,{source:a.content,highlightEnable:!1})}),b&&e.jsx(o,{sx:{mb:4,display:"flex",justifyContent:"center"},children:e.jsx(g,{variant:"contained",size:"large",onClick:()=>r("/create",{state:{interest:a}}),sx:{px:4,py:1.5,borderRadius:2,textTransform:"none",fontSize:"1.1rem"},children:"Create New Post"})}),e.jsx(M,{elevation:1,sx:{p:3,mb:4,backgroundColor:"background.paper"},children:e.jsx(q,{fullWidth:!0,label:"Search Posts",variant:"outlined",value:c,onChange:t=>C(t.target.value),InputProps:{endAdornment:e.jsx(F,{position:"end",children:e.jsx(N,{})})},sx:{"& .MuiOutlinedInput-root":{borderRadius:2,"&:hover fieldset":{borderColor:"primary.main"}}}})}),e.jsxs(o,{sx:{display:"flex",flexDirection:"column",gap:4},children:[p.map(t=>e.jsx($,{post:t,showInterest:!1,onEdit:b?()=>r(`/edit/${t.id}`):void 0,onDelete:()=>n(),level:0},t.id)),p.length===0&&e.jsx(d,{variant:"h6",align:"center",sx:{mt:4,color:"text.secondary",fontStyle:"italic"},children:"No posts found"})]})]})}export{V as default};
//# sourceMappingURL=InterestPage-m4JX5Og2.js.map
