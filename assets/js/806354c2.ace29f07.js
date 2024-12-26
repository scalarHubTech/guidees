"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[8022],{41502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>T,default:()=>Q,frontMatter:()=>m,metadata:()=>a,toc:()=>R});const a=JSON.parse('{"id":"Endpoints/transaction rules/delete-transaction-rule","title":"Delete Transaction Rule","description":"This endpoint is used to delete a specific Transaction Rule belonging to a tenant.","source":"@site/docs/Endpoints/transaction rules/delete-transaction-rule.api.mdx","sourceDirName":"Endpoints/transaction rules","slug":"/Endpoints/transaction rules/delete-transaction-rule","permalink":"/reference/Endpoints/transaction rules/delete-transaction-rule","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delete-transaction-rule","title":"Delete Transaction Rule","description":"This endpoint is used to delete a specific Transaction Rule belonging to a tenant.","sidebar_label":"Delete Transaction Rule","hide_title":true,"hide_table_of_contents":true,"api":"eJy1VE1v2zAM/SsCTxtgxOnWXXxah6RAh2Idmgw7FMHAyEytVpZUie4SGP7vA203bZNut/ngD/rpieR7YguMtwmKG1hGdAk1G+/UdWMJVhmUlHQ0QWJQwLIySZErgzeOlUmqSVQq9qokS0wKVQqkzcZodUim1mS9uzXuVvComBw6nkAGASPWxBQliRYc1gQFmBIyMLJpQK4gg6QrqhGKFngXBJE4GncLXQaRHhoTqYSCY0PdSiIpeJcoCf7DdCqP16Vc3U+Oc5z1ZZQqNVpTSpvG2p1scDo9PWb45lmd+8aVkyOe34YrxRWpxVM7LmbK7fGQgfaOybGwYgjWaJTV+V0S6va4WL++I82QAW2xDpbkF8XoIxRwjsa+kkF2XuJ2ELGTK4NPbzXhwjFFh1YtKD5SVPOeUeA1ceVLKGCg7GXiCgrIk0aLkXGb83PZv2JjKeWtKTuRqmcb5GyihQIq5lDkufUabeUTFx+n05ORqmrWxsOh1S4FqgYmEEkT6SYa3i2kNYOwXwgjxbNGEtt3SrZ6sot8r3sQZOPLuY81MhTw9eeyr9S4je+XG5a2wqJPaonbo5QOZU7j/ez7hZp53dTkuJcRMpD6h1Unk+lkOiqOuld8tLisWzQh+CjCvmrUqPJE+zpPA6QXv0YjqDH0+QVMbMoU63S1ETGNprfZekwu6OAT1+heJDTY/+hYHDaifXbv/5kIo5JMW86DReMk3b4/7WjDG9jbUPCHRoQMClPK/BKzCbxt15joR7RdJ+GHhuIOiptVBo8YDa5F+psWSpPkvYRigzbRPwp/dz0OnffqbxmPQXQ7MQTaRr4gg3vaDQOuW3UZVIQlxX734ceZ1hT4xZKjASHHYX9AZ/PL+XIOXfcHLOb/Hw==","sidebar_class_name":"delete api-method","info_path":"reference//Endpoints/Transaction Rules/scalartax","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Update Transaction Rule","permalink":"/reference/Endpoints/transaction rules/update-transaction-rule"},"next":{"title":"Custom-Tax-Codes","permalink":"/reference/Endpoints/custom tax codes/Custom-Tax-Codes"}}');var i=n(74848),s=n(28453),o=n(57742),r=n.n(o),l=n(78178),c=n.n(l),d=n(19624),u=n.n(d),p=n(96226),h=n.n(p),b=(n(77675),n(19365),n(51107));const m={id:"delete-transaction-rule",title:"Delete Transaction Rule",description:"This endpoint is used to delete a specific Transaction Rule belonging to a tenant.",sidebar_label:"Delete Transaction Rule",hide_title:!0,hide_table_of_contents:!0,api:"eJy1VE1v2zAM/SsCTxtgxOnWXXxah6RAh2Idmgw7FMHAyEytVpZUie4SGP7vA203bZNut/ngD/rpieR7YguMtwmKG1hGdAk1G+/UdWMJVhmUlHQ0QWJQwLIySZErgzeOlUmqSVQq9qokS0wKVQqkzcZodUim1mS9uzXuVvComBw6nkAGASPWxBQliRYc1gQFmBIyMLJpQK4gg6QrqhGKFngXBJE4GncLXQaRHhoTqYSCY0PdSiIpeJcoCf7DdCqP16Vc3U+Oc5z1ZZQqNVpTSpvG2p1scDo9PWb45lmd+8aVkyOe34YrxRWpxVM7LmbK7fGQgfaOybGwYgjWaJTV+V0S6va4WL++I82QAW2xDpbkF8XoIxRwjsa+kkF2XuJ2ELGTK4NPbzXhwjFFh1YtKD5SVPOeUeA1ceVLKGCg7GXiCgrIk0aLkXGb83PZv2JjKeWtKTuRqmcb5GyihQIq5lDkufUabeUTFx+n05ORqmrWxsOh1S4FqgYmEEkT6SYa3i2kNYOwXwgjxbNGEtt3SrZ6sot8r3sQZOPLuY81MhTw9eeyr9S4je+XG5a2wqJPaonbo5QOZU7j/ez7hZp53dTkuJcRMpD6h1Unk+lkOiqOuld8tLisWzQh+CjCvmrUqPJE+zpPA6QXv0YjqDH0+QVMbMoU63S1ETGNprfZekwu6OAT1+heJDTY/+hYHDaifXbv/5kIo5JMW86DReMk3b4/7WjDG9jbUPCHRoQMClPK/BKzCbxt15joR7RdJ+GHhuIOiptVBo8YDa5F+psWSpPkvYRigzbRPwp/dz0OnffqbxmPQXQ7MQTaRr4gg3vaDQOuW3UZVIQlxX734ceZ1hT4xZKjASHHYX9AZ/PL+XIOXfcHLOb/Hw==",sidebar_class_name:"delete api-method",info_path:"reference//Endpoints/Transaction Rules/scalartax",custom_edit_url:null},T=void 0,x={},R=[];function g(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Delete Transaction Rule"}),"\n",(0,i.jsx)(r(),{method:"delete",path:"/scalartax/transaction_rules/{id}",context:"endpoint"}),"\n",(0,i.jsx)(t.p,{children:"This endpoint is used to delete a specific Transaction Rule belonging to a tenant."}),"\n",(0,i.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(c(),{parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0}]}),"\n",(0,i.jsx)(u(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"Ok. Transaction Rule Deleted successfully"},404:{description:"Not Found.Transaction Rule with the Specific ID not Found.",content:{"application/json":{schema:{type:"object",example:{error:"Failed to delete the Tax Rule"}}}}},500:{description:"Internal Server Error"}}})]})}function Q(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}}}]);