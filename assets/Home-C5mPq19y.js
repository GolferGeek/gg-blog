import{q as h,j as e,B as i,s as g,t as r,v as a,w as u,x as p}from"./vendor-C65ctaoV.js";import{u as j,a as f}from"./index-I0dD487A.js";import"./supabase-Cg6Q1mgr.js";function w(){const l=h(),{interests:x,loading:d}=j(),{profile:t,loading:c}=f(),m=s=>{try{return s.image_path||"/images/default.jpg"}catch{return"/images/default.jpg"}};if(d||c)return e.jsxs(i,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh",gap:2},children:[e.jsx(g,{}),e.jsx(r,{children:"Loading..."})]});const o=[...x||[]].sort((s,n)=>(s.sequence||0)-(n.sequence||0));return e.jsxs(i,{children:[e.jsx(i,{sx:{bgcolor:"background.default",color:"text.primary",py:8,mt:4},children:e.jsx(a,{maxWidth:"md",children:e.jsxs(i,{sx:{display:"flex",alignItems:"center",gap:4,flexDirection:{xs:"column",md:"row"}},children:[t!=null&&t.logo?e.jsx(i,{sx:{width:{xs:"200px",md:"300px"},height:"auto",display:"flex",justifyContent:"center",alignItems:"center","& img":{maxWidth:"100%",height:"auto",display:"block",margin:0,borderRadius:2,boxShadow:3}},children:e.jsx("img",{src:t.logo,alt:t.site_name||"Site Logo"})}):e.jsx(i,{sx:{width:{xs:"200px",md:"300px"},height:"auto",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("img",{src:"/images/gg-logo.jpg",alt:"Default Logo",style:{maxWidth:"100%",height:"auto",display:"block",margin:0,borderRadius:2,boxShadow:3}})}),e.jsxs(i,{sx:{textAlign:{xs:"center",md:"left"},flex:1},children:[e.jsx(r,{variant:"h2",component:"h1",gutterBottom:!0,sx:{color:"primary.main",fontWeight:"bold",fontSize:{xs:"2.5rem",md:"3.5rem"}},children:(t==null?void 0:t.site_name)||"Welcome"}),e.jsx(r,{variant:"h5",component:"h2",gutterBottom:!0,sx:{color:"text.secondary",fontWeight:"medium",lineHeight:1.4},children:(t==null?void 0:t.tagline)||"Exploring ideas and sharing experiences"})]})]})})}),e.jsx(a,{sx:{py:8},maxWidth:"lg",children:o.length===0?e.jsxs(i,{sx:{textAlign:"center",py:4},children:[e.jsx(r,{variant:"h6",gutterBottom:!0,children:"No interests found"}),e.jsx(r,{variant:"body1",color:"text.secondary",children:"Check back later for updates!"})]}):e.jsx(i,{sx:{display:"flex",flexDirection:"column",gap:4},children:o.map((s,n)=>e.jsxs(u,{sx:{display:"flex",flexDirection:{xs:"column",md:n%2===0?"row":"row-reverse"},overflow:"hidden",cursor:"pointer",transition:"transform 0.3s ease-in-out","&:hover":{transform:"scale(1.02)"}},onClick:()=>l(`/${s.name}`),children:[e.jsx(p,{component:"img",sx:{width:{xs:"100%",md:"40%"},height:{xs:200,md:300},objectFit:"cover"},image:m(s),alt:s.title}),e.jsxs(i,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:{xs:"100%",md:"60%"},p:4},children:[e.jsx(r,{variant:"h4",component:"h2",gutterBottom:!0,children:s.title}),e.jsx(r,{variant:"body1",color:"text.secondary",children:s.description})]})]},s.id))})})]})}export{w as default};
//# sourceMappingURL=Home-C5mPq19y.js.map
