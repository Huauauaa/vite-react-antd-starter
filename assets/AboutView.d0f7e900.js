import{h as e}from"./index.67f52cf1.js";import"./vendor.daa0b49b.js";function t(){const[t,a]=React.useState({});return React.useEffect((()=>{(async()=>{try{const t=await e.get("/me");a(t)}catch(t){console.error(t)}})()}),[]),React.createElement("p",null,"My name is ",t.name||"anonymity",", I am ",t.age||18,".")}console.log({BASE_URL:"/vite-react-antd-starter/",MODE:"production",DEV:!1,PROD:!0});export default t;