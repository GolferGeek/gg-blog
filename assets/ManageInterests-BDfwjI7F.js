import{f as B,j as e,u as M,r as c,h as O,B as N,k as a,m as j,V as G,P as f,W as R,X as q,Y as b,Z as n,$ as J,I as w,a0 as z,a1 as F,a2 as H,G as i,z as y,a3 as V}from"./vendor-BfW8ubqa.js";import{a as U,s as d}from"./index-BwGAzuKD.js";import{E}from"./editor-By8XcRZL.js";import{E as X}from"./Edit-Dqkav3Zm.js";import{D as Y}from"./Delete-BImv3mU7.js";import"./supabase-CI9plm6Z.js";const Z=B(e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");function re(){const{user:p}=U(),v=M(),[D,T]=c.useState([]),[W,I]=c.useState(!1),[h,u]=c.useState(null),[s,l]=c.useState({title:"",description:"",image_path:"",route_path:"",content:""}),k=[{name:"coder",title:"Coder",description:"Exploring the world of programming and software development",image_path:"/images/coder.jpg",route_path:"/coder"},{name:"golfer",title:"Golfer",description:"Sharing golf experiences, tips, and achievements",image_path:"/images/golfer.jpg",route_path:"/golfer"},{name:"mentor",title:"Mentor",description:"Guiding and supporting others in their journey",image_path:"/images/mentor.jpg",route_path:"/mentor"},{name:"older",title:"Older",description:"Insights and reflections on the aging process",image_path:"/images/older.jpg",route_path:"/older"}];c.useEffect(()=>{if(!p||p.email!=="golfergeek@gmail.com"){v("/");return}(async()=>{try{for(const r of k){const{error:o}=await d.from("interests").update({image_path:r.image_path}).eq("name",r.name);o&&console.error("Error updating interest:",o)}console.log("Interest paths updated")}catch(r){console.error("Error in updateInterestPaths:",r)}})(),m()},[p,v]);const m=async()=>{try{const{data:t,error:r}=await d.from("interests").select("*").order("title");if(r)throw r;T(t)}catch(t){console.error("Error fetching interests:",t)}},_=(t=null)=>{t?(u(t),l({title:t.title,description:typeof t.description=="object"?JSON.stringify(t.description,null,2):t.description||"",image_path:t.image_path,route_path:t.route_path,content:t.content||""})):(u(null),l({title:"",description:"",image_path:"",route_path:"",content:""})),I(!0)},g=()=>{I(!1),u(null),l({title:"",description:"",image_path:"",route_path:"",content:""})},x=t=>{const{name:r,value:o}=t.target;l(A=>({...A,[r]:o}))},C=t=>r=>{l(o=>({...o,[t]:r||""}))},S=async()=>{try{const t={...s,description:s.description};if(h){const{error:r}=await d.from("interests").update(t).eq("id",h.id);if(r)throw r}else{const{error:r}=await d.from("interests").insert([t]);if(r)throw r}g(),m()}catch(t){console.error("Error saving interest:",t)}},P=async t=>{if(window.confirm("Are you sure you want to delete this interest?"))try{const{error:r}=await d.from("interests").delete().eq("id",t);if(r)throw r;m()}catch(r){console.error("Error deleting interest:",r)}};return e.jsxs(O,{maxWidth:"lg",sx:{mt:4},children:[e.jsxs(N,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:3},children:[e.jsx(a,{variant:"h4",component:"h1",children:"Manage Interests"}),e.jsx(j,{variant:"contained",color:"primary",startIcon:e.jsx(Z,{}),onClick:()=>_(),children:"Add Interest"})]}),e.jsx(G,{component:f,children:e.jsxs(R,{children:[e.jsx(q,{children:e.jsxs(b,{children:[e.jsx(n,{children:"Title"}),e.jsx(n,{children:"Description"}),e.jsx(n,{children:"Route Path"}),e.jsx(n,{children:"Content Preview"}),e.jsx(n,{children:"Actions"})]})}),e.jsx(J,{children:D.map(t=>e.jsxs(b,{children:[e.jsx(n,{children:t.title}),e.jsx(n,{children:e.jsxs(a,{noWrap:!0,sx:{maxWidth:200},children:[typeof t.description=="object"?JSON.stringify(t.description).substring(0,100):(t.description||"").substring(0,100),(typeof t.description=="object"?JSON.stringify(t.description).length>100:(t.description||"").length>100)?"...":""]})}),e.jsx(n,{children:t.route_path}),e.jsx(n,{children:t.content?e.jsxs(a,{noWrap:!0,sx:{maxWidth:200},children:[t.content.substring(0,100),t.content.length>100?"...":""]}):e.jsx(a,{variant:"body2",color:"text.secondary",children:"No content"})}),e.jsxs(n,{children:[e.jsx(w,{onClick:()=>_(t),color:"primary",children:e.jsx(X,{})}),e.jsx(w,{onClick:()=>P(t.id),color:"error",children:e.jsx(Y,{})})]})]},t.id))})]})}),e.jsxs(z,{open:W,onClose:g,maxWidth:"lg",fullWidth:!0,children:[e.jsx(F,{children:h?"Edit Interest":"Add Interest"}),e.jsx(H,{children:e.jsxs(i,{container:!0,spacing:2,sx:{mt:1},children:[e.jsx(i,{item:!0,xs:12,children:e.jsx(y,{name:"title",label:"Title",value:s.title,onChange:x,fullWidth:!0})}),e.jsx(i,{item:!0,xs:12,md:6,children:e.jsx(y,{name:"image_path",label:"Image Path",value:s.image_path,onChange:x,fullWidth:!0})}),e.jsx(i,{item:!0,xs:12,md:6,children:e.jsx(y,{name:"route_path",label:"Route Path",value:s.route_path,onChange:x,fullWidth:!0})}),e.jsxs(i,{item:!0,xs:12,children:[e.jsx(a,{variant:"subtitle1",gutterBottom:!0,children:"Description (Markdown)"}),e.jsx(f,{sx:{p:2},children:e.jsx(E,{value:s.description,onChange:C("description"),preview:"edit",height:200})})]}),e.jsxs(i,{item:!0,xs:12,children:[e.jsx(a,{variant:"subtitle1",gutterBottom:!0,children:"Content (Markdown)"}),e.jsx(f,{sx:{p:2},children:e.jsx(E,{value:s.content,onChange:C("content"),preview:"edit",height:400})})]})]})}),e.jsxs(V,{children:[e.jsx(j,{onClick:g,children:"Cancel"}),e.jsx(j,{onClick:S,variant:"contained",color:"primary",children:h?"Update":"Create"})]})]})]})}export{re as default};
//# sourceMappingURL=ManageInterests-BDfwjI7F.js.map
