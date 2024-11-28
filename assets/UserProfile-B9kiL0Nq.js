import{r as a,j as e,h as P,B as i,k as u,z as U,l as j}from"./vendor-CLzwre8y.js";import{E as B}from"./editor-CmZuVxSC.js";import{s as o}from"./index-BJ8jdmwE.js";import"./supabase-DTekwhgc.js";const W=()=>{const[p,h]=a.useState(""),[f,x]=a.useState(""),[c,w]=a.useState(""),[l,d]=a.useState(!1),[m,n]=a.useState("");a.useEffect(()=>{E()},[]);const E=async()=>{try{const{data:{user:r}}=await o.auth.getUser();if(!r)throw new Error("No user found");const{data:t,error:s}=await o.from("profiles").select("username, resume, logo").eq("id",r.id).single();if(s)throw s;t&&(h(t.username||""),x(t.resume||""),w(t.logo||""))}catch(r){console.error("Error fetching profile:",r.message),n("Error fetching profile")}},y=async r=>{try{d(!0);const t=r.target.files[0];if(!t)return;const g=`site-logo.${t.name.split(".").pop()}`;await o.storage.from("logos").remove([g]).catch(console.error);const{error:b}=await o.storage.from("logos").upload(g,t,{upsert:!0});if(b)throw b;const{data:{publicUrl:S}}=o.storage.from("logos").getPublicUrl(g);w(S),n("Logo uploaded successfully")}catch(t){console.error("Error uploading logo:",t.message),n("Error uploading logo")}finally{d(!1)}},v=async()=>{try{d(!0);const{data:{user:r}}=await o.auth.getUser();if(!r)throw new Error("No user found");const t={id:r.id,username:p,resume:f,logo:c,updated_at:new Date().toISOString()},{error:s}=await o.from("profiles").upsert(t);if(s)throw s;n("Profile updated successfully")}catch(r){console.error("Error updating profile:",r.message),n("Error updating profile")}finally{d(!1)}};return e.jsxs(P,{maxWidth:"md",children:[e.jsxs(i,{sx:{mt:4,mb:2},children:[e.jsx(u,{variant:"h4",component:"h1",gutterBottom:!0,children:"User Profile"}),m&&e.jsx(u,{color:m.includes("Error")?"error":"success",gutterBottom:!0,children:m})]}),e.jsxs(i,{component:"form",noValidate:!0,sx:{mt:1},children:[e.jsx(U,{margin:"normal",required:!0,fullWidth:!0,label:"Username",value:p,onChange:r=>h(r.target.value),disabled:l}),e.jsxs(i,{sx:{mt:2,mb:2},children:[e.jsx(u,{variant:"subtitle1",gutterBottom:!0,children:"Resume (Markdown)"}),e.jsx(i,{sx:{"& .w-md-editor":{margin:0,boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.23)",borderRadius:1,height:"1000px"},"& .wmde-markdown":{padding:"16px"},"& .w-md-editor-toolbar":{padding:"8px",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"},"& .w-md-editor-content":{height:"calc(100% - 40px) !important"},"& .w-md-editor-input":{height:"100% !important"},"& .w-md-editor-text":{height:"100% !important"},"& .w-md-editor-text-input":{padding:"16px !important",height:"100% !important"},"& .w-md-editor-preview":{padding:"16px !important",height:"100% !important"}},children:e.jsx(B,{value:f,onChange:x,preview:"edit",highlightEnable:!1})})]}),e.jsxs(i,{sx:{mt:2,mb:2},children:[e.jsx(u,{variant:"subtitle1",gutterBottom:!0,children:"Logo"}),c&&e.jsx(i,{sx:{mb:2},children:e.jsx("img",{src:c,alt:"Profile logo",style:{maxWidth:"200px"}})}),e.jsxs(j,{variant:"contained",component:"label",disabled:l,children:["Upload Logo",e.jsx("input",{type:"file",hidden:!0,accept:"image/*",onChange:y})]})]}),e.jsx(j,{fullWidth:!0,variant:"contained",onClick:v,disabled:l,sx:{mt:3,mb:2},children:l?"Saving...":"Save Profile"})]})]})};export{W as default};
//# sourceMappingURL=UserProfile-B9kiL0Nq.js.map