"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[6721],{70215:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>b,frontMatter:()=>C,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"Endpoints/custom tax codes/create-custom-tax-code","title":"Create Custom Tax Code","description":"This endpoint allows you to add a new Custom Tax Code.","source":"@site/docs/Endpoints/custom tax codes/create-custom-tax-code.api.mdx","sourceDirName":"Endpoints/custom tax codes","slug":"/Endpoints/custom tax codes/create-custom-tax-code","permalink":"/reference/Endpoints/custom tax codes/create-custom-tax-code","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"create-custom-tax-code","title":"Create Custom Tax Code","description":"This endpoint allows you to add a new Custom Tax Code.","sidebar_label":"Create Custom Tax Code","hide_title":true,"hide_table_of_contents":true,"api":"eJy9V0tvGkkQ/iutOiXSBLA3e5nT2o4jebWSI4N3DxZCRU/BdDIzPe6HASH+e1TdAx4GiJ3Hxhc3TT2/+qqqWYPDuYX0Aa68dboUI1yKK52RhXECGVlpVO2UriCFUa6soCqrtaqcwKLQCytW2gunBWaZQFHRQnTs9CABQ4+erLvU2QrSNUhdOaocH7GuCyWRHfQ/W/ayBitzKpFPtMSyLoiPDpcTqTOauFVNkIJ1RlVzSIAqp9xqorL2JUu2P+/n0VxvEmiM6elnkg4SqI2uyThF9ojPNXR9d+BZ1ST0TLichMOlYFXxhnrzXiJqozMvXSIsmScl6S17b4X+ku37Sj16EipjnZkiI2baBE/RiEBrtVToKBML5fK9INhXROSVbtqKewIv6X94/tRFAjabSARlKGO+7aPbRqOJdt/4OAGnHJOhYeoIl1fRbjfKLpXFrr7P/p3xFAKyta5srPf54Iz/fdvWlaGAsvVSkrUzXxSrEPH3c3qfs0eJfJL2r2J40i2IjMnsapJWvigSkDGnybTr3tfZ8S+2Guh2t+INy75zqqS3LdVTEi9238+1RTfTX9VurT6L9kIiPzgoXjMkXte4o5yEj0EHi9tw2UXQ/KWdvMeriZ5NItqTLQ7HzDPTcMrE59brursNByxE6zokgccq2eHrS7ncPJexScVbMmKRa9FYOkWZDv9/wlGB1onG3Clv7aY6dDXTpgzNtGuiw6KhI4FVJvhbscipOuZKLNBuE28n+TvctmE42Ahh9LfXQHdFHFkLXTJ0a7aH6l6upxbKGW+UTQLvB4PDbXCJmbiLrxmG7v35+aHMfVUbzbuB6S6uQz498S8WKgtLQZAx2lihpfTGUCYyH6ZjwIyDVbrqfc9K6c7R1oqJrhjcj6gKpp5uNlj3nQbjTcz7z2N531SODPfnkMwTGXHNdnuhgiW5XPNyqLUNUxxdDin0rcQCjcNlvzMdbB8SsMEOR7YGbwpIIXeuTvv9Qksscm1d+sdgcNZYyf1U6QPe/cOiIlqCzZiNSm+UWw0ZmrhFLgkNmQvPMe2QYlccQxCDFKZBCJLm8HFL+b//G4UUGfK75zfs9f/9LFXVTAfrDT+HAYQRLg90uo92cecLsuLi0434oKUvqXLY9AnDHZXOeoPeoCEYykCwCgMQrDf0da1NaJZ2XRpS9aQu+zaKBK6VqFiqufqrJRY2I5nS3s6GcaEdtxZk+izNDCqxagV0gqsHy2zXKz/+I6WpoKOl69cFqirMRoZg3XD6AXacZvQ6rIYEeKYwdVl0vZ6ipXtTbDZ8/ejJrCB9GCfwhEbFTfgw3iSQE2ZkQiN8oRXnHHN5N4pD7wkLz4EdzIBNstW4kJJq903ZcatRP90OR0z25udYGVlpcMEvZFxACpCADtiGHgp3ayiwmnucs2y0yX9fAY89+m0=","sidebar_class_name":"post api-method","info_path":"reference//Endpoints/Custom Tax Codes/scalartax","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Custom-Tax-Codes","permalink":"/reference/Endpoints/custom tax codes/Custom-Tax-Codes"},"next":{"title":"List Custom Tax Codes","permalink":"/reference/Endpoints/custom tax codes/list-custom-tax-codes"}}');var s=i(74848),a=i(28453),d=i(57742),r=i.n(d),c=i(78178),n=i.n(c),p=i(19624),u=i.n(p),l=i(96226),x=i.n(l),m=(i(77675),i(19365),i(51107));const C={id:"create-custom-tax-code",title:"Create Custom Tax Code",description:"This endpoint allows you to add a new Custom Tax Code.",sidebar_label:"Create Custom Tax Code",hide_title:!0,hide_table_of_contents:!0,api:"eJy9V0tvGkkQ/iutOiXSBLA3e5nT2o4jebWSI4N3DxZCRU/BdDIzPe6HASH+e1TdAx4GiJ3Hxhc3TT2/+qqqWYPDuYX0Aa68dboUI1yKK52RhXECGVlpVO2UriCFUa6soCqrtaqcwKLQCytW2gunBWaZQFHRQnTs9CABQ4+erLvU2QrSNUhdOaocH7GuCyWRHfQ/W/ayBitzKpFPtMSyLoiPDpcTqTOauFVNkIJ1RlVzSIAqp9xqorL2JUu2P+/n0VxvEmiM6elnkg4SqI2uyThF9ojPNXR9d+BZ1ST0TLichMOlYFXxhnrzXiJqozMvXSIsmScl6S17b4X+ku37Sj16EipjnZkiI2baBE/RiEBrtVToKBML5fK9INhXROSVbtqKewIv6X94/tRFAjabSARlKGO+7aPbRqOJdt/4OAGnHJOhYeoIl1fRbjfKLpXFrr7P/p3xFAKyta5srPf54Iz/fdvWlaGAsvVSkrUzXxSrEPH3c3qfs0eJfJL2r2J40i2IjMnsapJWvigSkDGnybTr3tfZ8S+2Guh2t+INy75zqqS3LdVTEi9238+1RTfTX9VurT6L9kIiPzgoXjMkXte4o5yEj0EHi9tw2UXQ/KWdvMeriZ5NItqTLQ7HzDPTcMrE59brursNByxE6zokgccq2eHrS7ncPJexScVbMmKRa9FYOkWZDv9/wlGB1onG3Clv7aY6dDXTpgzNtGuiw6KhI4FVJvhbscipOuZKLNBuE28n+TvctmE42Ahh9LfXQHdFHFkLXTJ0a7aH6l6upxbKGW+UTQLvB4PDbXCJmbiLrxmG7v35+aHMfVUbzbuB6S6uQz498S8WKgtLQZAx2lihpfTGUCYyH6ZjwIyDVbrqfc9K6c7R1oqJrhjcj6gKpp5uNlj3nQbjTcz7z2N531SODPfnkMwTGXHNdnuhgiW5XPNyqLUNUxxdDin0rcQCjcNlvzMdbB8SsMEOR7YGbwpIIXeuTvv9Qksscm1d+sdgcNZYyf1U6QPe/cOiIlqCzZiNSm+UWw0ZmrhFLgkNmQvPMe2QYlccQxCDFKZBCJLm8HFL+b//G4UUGfK75zfs9f/9LFXVTAfrDT+HAYQRLg90uo92cecLsuLi0434oKUvqXLY9AnDHZXOeoPeoCEYykCwCgMQrDf0da1NaJZ2XRpS9aQu+zaKBK6VqFiqufqrJRY2I5nS3s6GcaEdtxZk+izNDCqxagV0gqsHy2zXKz/+I6WpoKOl69cFqirMRoZg3XD6AXacZvQ6rIYEeKYwdVl0vZ6ipXtTbDZ8/ejJrCB9GCfwhEbFTfgw3iSQE2ZkQiN8oRXnHHN5N4pD7wkLz4EdzIBNstW4kJJq903ZcatRP90OR0z25udYGVlpcMEvZFxACpCADtiGHgp3ayiwmnucs2y0yX9fAY89+m0=",sidebar_class_name:"post api-method",info_path:"reference//Endpoints/Custom Tax Codes/scalartax",custom_edit_url:null},f=void 0,y={},h=[];function T(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Create Custom Tax Code"}),"\n",(0,s.jsx)(r(),{method:"post",path:"/scalartax/custom_tax_codes/",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"This endpoint allows you to add a new Custom Tax Code."}),"\n",(0,s.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(n(),{parameters:void 0}),"\n",(0,s.jsx)(u(),{title:"Body",body:{content:{"application/json":{schema:{example:{tax_code_type:"string",entity_id:"string",code:"string",description:"string"},type:"object",properties:{tax_code_type:{type:"string",description:"Type of the tax code (e.g., product, service)"},entity_id:{type:"string",description:"Unique identifier for the entity associated with the tax code"},code:{type:"string",description:"Unique tax code"},description:{type:"string",description:"Description of the tax code"}},required:["tax_code_type","entity_id","code","description"],title:"CustomTaxCode"}}},description:"Custom Tax Code object",required:!0}}),"\n",(0,s.jsx)(x(),{id:void 0,label:void 0,responses:{201:{description:"Custom Tax Code Created successfully",content:{"application/json":{schema:{example:{id:"string",entity_id:"string",tax_code_type:"string",code:"string",description:"string","Description of custom tax code":null,created_by_id:"string",updated_by_id:"string",created_at:"string (date-time)",updated_at:"string (date-time)"},type:"object",properties:{id:{type:"string",description:"Unique identifier for the custom tax code"},entity_id:{type:"string",description:"Unique identifier for the associated entity"},tax_code_type:{type:"string",description:"Type of tax code (e.g., product, service)"},code:{type:"string",description:"The unique code for the tax type"},description:{type:"string",description:"Description of the tax code"},Description_of_custom_tax_code:{type:"string",nullable:!0,description:"Optional description for a custom tax code"},created_by_id:{type:"string",description:"Identifier of the user who created the custom tax code"},updated_by_id:{type:"string",description:"Identifier of the user who last updated the custom tax code"},created_at:{type:"string",format:"date-time",description:"Date and time when the custom tax code was created"},updated_at:{type:"string",format:"date-time",description:"Date and time when the custom tax code was last updated"}},required:["id","entity_id","tax_code_type","code","description","created_by_id","updated_by_id","created_at","updated_at"],title:"CustomTaxCode1"}}}},400:{description:"Bad Request"},422:{description:"Unprocessable Entity. Validation errors occurred during the creation.",content:{"application/json":{schema:{type:"object",example:{errors:["Failed to Create Custom Tax Code"]}}}}},500:{description:"Internal Server Error."}}})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(T,{...e})}):T(e)}}}]);