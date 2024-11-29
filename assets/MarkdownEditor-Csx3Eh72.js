const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editor-C7RkKN59.js","assets/vendor-C65ctaoV.js","assets/editor-Ch1M4OpB.css"])))=>i.map(i=>d[i]);
import{h as R,j as e,r as u,t as k,B as h,k as T,s as S,a4 as L,a5 as _,F as I,I as B}from"./vendor-C65ctaoV.js";import{s as x}from"./index-I0dD487A.js";import{D as F}from"./Delete-DyDZc2Gn.js";import{_ as $}from"./supabase-Cg6Q1mgr.js";const P=R(e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy"),O={"post-images":{maxSize:5242880,allowedTypes:["image/*"],maxDimensions:{width:2e3,height:2e3}},"interest-images":{maxSize:5242880,allowedTypes:["image/*"],maxDimensions:{width:2e3,height:2e3}},profile_logos:{maxSize:1048576,allowedTypes:["image/jpeg","image/png","image/gif"],maxDimensions:{width:500,height:500}}},H=(s,p,d)=>new Promise((i,w)=>{const a=new Image;a.src=URL.createObjectURL(s),a.onload=()=>{URL.revokeObjectURL(a.src);let n=a.width,c=a.height;if(n>p||c>d){const t=Math.min(p/n,d/c);n=Math.floor(n*t),c=Math.floor(c*t)}else{i(s);return}const m=document.createElement("canvas");m.width=n,m.height=c,m.getContext("2d").drawImage(a,0,0,n,c),m.toBlob(t=>{if(!t){w(new Error("Failed to resize image"));return}const f=new File([t],s.name,{type:s.type,lastModified:Date.now()});i(f)},s.type)},a.onerror=()=>{URL.revokeObjectURL(a.src),w(new Error("Failed to load image"))}});function J({onUpload:s,onRemove:p,existingImages:d=[],bucket:i="post-images",folder:w=null,showCopyOption:a=!0}){const[n,c]=u.useState(!1),[m,j]=u.useState(null),t=O[i],[f,M]=u.useState(!1),E=async()=>{try{const{data:r}=await x.storage.listBuckets();if(!r.some(l=>l.name===i))try{const{error:l}=await x.storage.createBucket(i,{public:!0,allowedMimeTypes:t.allowedTypes,fileSizeLimit:t.maxSize});if(l){console.error("Error creating bucket:",l);const{data:y}=await x.storage.listBuckets();return y.some(g=>g.name===i)}}catch(l){console.error("Error creating bucket:",l);const{data:y}=await x.storage.listBuckets();return y.some(g=>g.name===i)}return!0}catch(r){return console.error("Error checking/creating bucket:",r),!1}};u.useEffect(()=>{(async()=>{const o=await E();M(o)})()},[i]);const C=async r=>{if(!t)throw new Error("Invalid bucket configuration");if(!t.allowedTypes.some(o=>o==="image/*"?r.type.startsWith("image/"):o===r.type))throw new Error("Invalid file type");if(r.size>t.maxSize)throw new Error(`File size must be less than ${t.maxSize/1048576}MB`);return!0};async function D(r){try{if(!f&&!await E())throw new Error("Unable to initialize storage bucket");j(null),c(!0);const o=r.target.files[0];if(!o)return;await C(o);const l=await H(o,t.maxDimensions.width,t.maxDimensions.height),y=l.name.split(".").pop(),g=`${Math.random()}.${y}`,z=w?`${w}/${g}`:g,{error:v}=await x.storage.from(i).upload(z,l);if(v)throw v;const{data:b}=x.storage.from(i).getPublicUrl(z);b!=null&&b.publicUrl&&s([b.publicUrl])}catch(o){j(o.message),console.error("Error uploading image:",o)}finally{c(!1)}}const U=r=>{const o=`![image](${r})`;navigator.clipboard.writeText(o)};return t?e.jsxs(h,{children:[e.jsxs(h,{sx:{mb:2},children:[e.jsxs(T,{variant:"contained",component:"label",disabled:n||!f,children:[n?e.jsxs(h,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(S,{size:20,color:"inherit"}),e.jsx("span",{children:"Uploading..."})]}):f?"Upload Image":"Initializing...",e.jsx("input",{type:"file",accept:t.allowedTypes.join(","),onChange:D,hidden:!0})]}),e.jsxs(k,{variant:"caption",display:"block",sx:{mt:1,color:"text.secondary"},children:["Max dimensions: ",t.maxDimensions.width,"x",t.maxDimensions.height,"px"," | ","Max size: ",t.maxSize/1048576,"MB"]})]}),m&&e.jsx(k,{color:"error",sx:{mb:2},children:m}),(d==null?void 0:d.length)>0&&e.jsx(L,{sx:{width:"100%",maxHeight:400},cols:3,rowHeight:200,children:d.map((r,o)=>e.jsx(_,{sx:{position:"relative"},children:e.jsxs(h,{sx:{position:"relative",height:"100%","&:hover .image-actions":{opacity:1}},children:[e.jsx("img",{src:r,alt:`Image ${o+1}`,loading:"lazy",style:{height:"200px",objectFit:"cover"}}),e.jsxs(h,{className:"image-actions",sx:{position:"absolute",top:0,right:0,padding:1,display:"flex",gap:1,opacity:0,transition:"opacity 0.2s",bgcolor:"rgba(0, 0, 0, 0.5)",borderRadius:"0 0 0 8px"},children:[a&&e.jsx(I,{title:"Copy Markdown",children:e.jsx(B,{size:"small",onClick:()=>U(r),sx:{color:"white","&:hover":{bgcolor:"rgba(255, 255, 255, 0.2)"}},children:e.jsx(P,{})})}),e.jsx(I,{title:"Delete Image",children:e.jsx(B,{size:"small",onClick:()=>p(r),sx:{color:"white","&:hover":{bgcolor:"rgba(255, 255, 255, 0.2)"}},children:e.jsx(F,{})})})]})]})},r))})]}):e.jsx(k,{color:"error",children:"Invalid bucket configuration"})}const N=u.lazy(()=>$(()=>import("./editor-C7RkKN59.js"),__vite__mapDeps([0,1,2])));function Q({value:s,onChange:p}){return e.jsx(u.Suspense,{fallback:e.jsx(h,{sx:{display:"flex",justifyContent:"center",p:4},children:e.jsx(S,{})}),children:e.jsx(h,{sx:{"& .w-md-editor":{margin:0,boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.23)",borderRadius:1,height:"1000px"},"& .wmde-markdown":{padding:"16px"},"& .w-md-editor-toolbar":{padding:"8px",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"},"& .w-md-editor-content":{height:"calc(100% - 40px) !important"},"& .w-md-editor-input":{height:"100% !important"},"& .w-md-editor-text":{height:"100% !important"},"& .w-md-editor-text-input":{padding:"16px !important",height:"100% !important"},"& .w-md-editor-preview":{padding:"16px !important",height:"100% !important"}},children:e.jsx(N,{value:s,onChange:p,preview:"edit",highlightEnable:!1,enableScroll:!0})})})}export{J as I,Q as M};
//# sourceMappingURL=MarkdownEditor-Csx3Eh72.js.map
