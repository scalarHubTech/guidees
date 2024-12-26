"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[1501],{34333:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>j,frontMatter:()=>f,metadata:()=>i,toc:()=>x});const i=JSON.parse('{"id":"Endpoints/users/fetch-user","title":"Fetch User","description":"This endpoint retrieves information about a specific user within the scalartax.","source":"@site/docs/Endpoints/users/fetch-user.api.mdx","sourceDirName":"Endpoints/users","slug":"/Endpoints/users/fetch-user","permalink":"/reference/Endpoints/users/fetch-user","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"fetch-user","title":"Fetch User","description":"This endpoint retrieves information about a specific user within the scalartax.","sidebar_label":"Fetch User","hide_title":true,"hide_table_of_contents":true,"api":"eJy1Vktv4zYQ/ivEXNoCqu2024tOTZFNkbbILuoEPRiBQVPjiKlEMuQoieHqvxdDPaxHdjdFsSfL5Ly/+WZ4BJL3AdIN3Ab0Ae4SyDAorx1payCFm1wHgSZzVhsSHslrfMIgtNlbX0qWEnJnKxJSBIdK77USVUAvnjXl2gjKUQQlC+lJviwgASe9LJHYW7o5gpElQgo6gwQ0e3SSckggqBxLCekR6OBYIpDX5h7qBDw+VtpjBin5Cus7PgnOmoCB5X9YrfhnnMeH3yEBZQ2hIb6VzhVaxfiXD4FFjgOX+CJLVyB/6uzkO4G99oG2bcz9aSFfOcRS6mJ4wFWZCnlb4LbAJxxJKo+SMNvuDtuBe/GPMFVRsCWXffa+05c08t9qjU8d+lKHoK3Z2t3DNOOai1Y6aQ7j/DpfddLBY3cPqIgNeuvQk27AYGNTCKc9dmv0Y4VCZ2hI7zV6sbc+Ng6XjH0My/5FawH9N0FEFRFV6hFCb9RnjV69xXKu2pAA0lbiE7bipZBZ5jEEtndqhTdG0yvU4555ozqriEalnrXXl2xcnXCx+x4W8Zxb0VoSxFOiA2vSnf/DfMSgNTf2Mezwz6DCmt+TLnHm9UaXGEiWTjznaAZuZeiyGubyVfwM02NncypOuSWzTLNhWXwcsWw2IifDL+qLUjrH3JVK2cqQuLoIgqw4uW1aJMxZP0+d2S93PCJ5Bk8dXssSOzRbS4lQ0ogdtnNjNMY3zfgfsHzI2KQnV8+CEQmmDT3twFG3jCCdlfwuAdLEWUXmnEFdc6TvVu/mG+Xakri0lckWt926E5RLEutuDV5dCNML/Zf1M4V9sI7Qe+shhfW22F7jSxXEKY4YbZ3AT68twCtDXLxCrNE/yUK8Z0OLCESJlFse+vcYa8ILOIVlv7WXXPewPOqs5sWM/qlb3pXnvZUTuXS5LKySRW4DpT+uVmetel7ttJ2x4g8WFY0l4AUeUFVe02HNNWh6+heUHv15xcH0JWFX3eOA/++iECTtx2VHyN/+uomp8TMlqreormNQN/Ll1UkZxPnHK3FhVVWioYgOJMDZNjJni9Vi1QIpVQSy3Yqst66csz622LAsLXgLZctlaERo+Dxojn4eiMWtir4MH/YMllb4urUos4yTwwYqpRkEdImkcsFJTTM9nvrwK7zuWpwIX2jpCqlNnKI+rqqmsTbQK7SUDpBAqjNmH7cPixyPOxnw1hd1zcePFfoDpJu7BJ6k183g2Rwh04G/M0j3sgjTMTTM9Ns/22nznfhUlO2hNAcGXRYV/4ME/sZD80Ct7+oEcpQZ+ui9uThXCh0NVGbc5gbvOfbre+7MfwGI+Pul","sidebar_class_name":"get api-method","info_path":"reference//Endpoints/Users/scalartax","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"List Users","permalink":"/reference/Endpoints/users/list-users"},"next":{"title":"Update User","permalink":"/reference/Endpoints/users/update-user"}}');var n=s(74848),r=s(28453),a=s(57742),o=s.n(a),d=s(78178),l=s.n(d),c=s(19624),p=s.n(c),u=s(96226),h=s.n(u),m=(s(77675),s(19365),s(51107));const f={id:"fetch-user",title:"Fetch User",description:"This endpoint retrieves information about a specific user within the scalartax.",sidebar_label:"Fetch User",hide_title:!0,hide_table_of_contents:!0,api:"eJy1Vktv4zYQ/ivEXNoCqu2024tOTZFNkbbILuoEPRiBQVPjiKlEMuQoieHqvxdDPaxHdjdFsSfL5Ly/+WZ4BJL3AdIN3Ab0Ae4SyDAorx1payCFm1wHgSZzVhsSHslrfMIgtNlbX0qWEnJnKxJSBIdK77USVUAvnjXl2gjKUQQlC+lJviwgASe9LJHYW7o5gpElQgo6gwQ0e3SSckggqBxLCekR6OBYIpDX5h7qBDw+VtpjBin5Cus7PgnOmoCB5X9YrfhnnMeH3yEBZQ2hIb6VzhVaxfiXD4FFjgOX+CJLVyB/6uzkO4G99oG2bcz9aSFfOcRS6mJ4wFWZCnlb4LbAJxxJKo+SMNvuDtuBe/GPMFVRsCWXffa+05c08t9qjU8d+lKHoK3Z2t3DNOOai1Y6aQ7j/DpfddLBY3cPqIgNeuvQk27AYGNTCKc9dmv0Y4VCZ2hI7zV6sbc+Ng6XjH0My/5FawH9N0FEFRFV6hFCb9RnjV69xXKu2pAA0lbiE7bipZBZ5jEEtndqhTdG0yvU4555ozqriEalnrXXl2xcnXCx+x4W8Zxb0VoSxFOiA2vSnf/DfMSgNTf2Mezwz6DCmt+TLnHm9UaXGEiWTjznaAZuZeiyGubyVfwM02NncypOuSWzTLNhWXwcsWw2IifDL+qLUjrH3JVK2cqQuLoIgqw4uW1aJMxZP0+d2S93PCJ5Bk8dXssSOzRbS4lQ0ogdtnNjNMY3zfgfsHzI2KQnV8+CEQmmDT3twFG3jCCdlfwuAdLEWUXmnEFdc6TvVu/mG+Xakri0lckWt926E5RLEutuDV5dCNML/Zf1M4V9sI7Qe+shhfW22F7jSxXEKY4YbZ3AT68twCtDXLxCrNE/yUK8Z0OLCESJlFse+vcYa8ILOIVlv7WXXPewPOqs5sWM/qlb3pXnvZUTuXS5LKySRW4DpT+uVmetel7ttJ2x4g8WFY0l4AUeUFVe02HNNWh6+heUHv15xcH0JWFX3eOA/++iECTtx2VHyN/+uomp8TMlqreormNQN/Ll1UkZxPnHK3FhVVWioYgOJMDZNjJni9Vi1QIpVQSy3Yqst66csz622LAsLXgLZctlaERo+Dxojn4eiMWtir4MH/YMllb4urUos4yTwwYqpRkEdImkcsFJTTM9nvrwK7zuWpwIX2jpCqlNnKI+rqqmsTbQK7SUDpBAqjNmH7cPixyPOxnw1hd1zcePFfoDpJu7BJ6k183g2Rwh04G/M0j3sgjTMTTM9Ns/22nznfhUlO2hNAcGXRYV/4ME/sZD80Ct7+oEcpQZ+ui9uThXCh0NVGbc5gbvOfbre+7MfwGI+Pul",sidebar_class_name:"get api-method",info_path:"reference//Endpoints/Users/scalartax",custom_edit_url:null},b=void 0,g={},x=[];function N(e){const t={p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Fetch User"}),"\n",(0,n.jsx)(o(),{method:"get",path:"/scalartax/users/{id}",context:"endpoint"}),"\n",(0,n.jsx)(t.p,{children:"This endpoint retrieves information about a specific user within the scalartax."}),"\n",(0,n.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(l(),{parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0}]}),"\n",(0,n.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,n.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{example:{id:"string",first_name:"string",last_name:"string",email:"string",username:"string",role_level:"string",created_by_id:"string | null",updated_by_id:"string | null",created_at:"string",updated_at:"string",permission_obj:{id:"string"},company_name:"string | null"},type:"object",properties:{id:{type:"string",description:"Unique identifier for the user"},first_name:{type:"string",description:"User's first name"},last_name:{type:"string",description:"User's last name"},email:{type:"string",format:"email",description:"User's email address"},username:{type:"string",description:"User's username"},role_level:{type:"string",description:"User's role level"},created_by_id:{type:"string",description:"Identifier of the user who created this user"},updated_by_id:{type:"string",description:"Identifier of the user who last updated this user"},created_at:{type:"string",format:"date-time",description:"Timestamp when the user was created"},updated_at:{type:"string",format:"date-time",description:"Timestamp when the user was last updated"},permission_obj:{type:"object",additionalProperties:{type:"string"},description:"Object mapping account IDs to permission levels"},company_name:{type:"string",nullable:!0,description:"Name of the company, can be null"}},required:["id","first_name","last_name","email","username","role_level","created_by_id","updated_by_id","created_at","updated_at","permission_obj"],title:"User1"}}}},404:{description:"Not Found.User with that Specific ID not Found.",content:{"application/json":{schema:{type:"object",example:{error:"S_l_Nexus Not Found."}}}}},500:{description:"Internal Serval Error."}}})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(N,{...e})}):N(e)}}}]);