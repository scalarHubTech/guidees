"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[8984],{18870:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"Quickstart guide/subscribe-a-customer","title":"Subscribe a Customer","description":"This documentation provides a comprehensive overview of subscribing a customer to a service or plan within ScalarHub. The method includes creating a new customer, provisioning the customer, and managing their subscription lifecycle.","source":"@site/guides/Quickstart guide/subscribe-a-customer.md","sourceDirName":"Quickstart guide","slug":"/Quickstart guide/subscribe-a-customer","permalink":"/guides/Quickstart guide/subscribe-a-customer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"subscribe-a-customer","title":"Subscribe a Customer","sidebar_position":4},"sidebar":"guidesSidebar","previous":{"title":"Configure your price","permalink":"/guides/Quickstart guide/configure-your-price"},"next":{"title":"Login and Authentication","permalink":"/guides/login-and-authentication"}}');var n=i(74848),r=i(28453);const a={id:"subscribe-a-customer",title:"Subscribe a Customer",sidebar_position:4},c=void 0,o={},u=[{value:"Creating a New Customer",id:"creating-a-new-customer",level:2},{value:"Provisioning the Customer",id:"provisioning-the-customer",level:2},{value:"Managing Customer Subscriptions",id:"managing-customer-subscriptions",level:2}];function d(e){const s={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"This documentation provides a comprehensive overview of subscribing a customer to a service or plan within ScalarHub. The method includes creating a new customer, provisioning the customer, and managing their subscription lifecycle."}),"\n",(0,n.jsx)(s.h2,{id:"creating-a-new-customer",children:"Creating a New Customer"}),"\n",(0,n.jsx)(s.p,{children:"The process begins with creating new customers and associating them with relevant contact and address information within ScalarHub. The application ensures a reliable customer creation process, guaranteeing that the customer record and associated external address and contact details are created through a seamless transaction process."}),"\n",(0,n.jsx)(s.p,{children:"During customer creation, all related records, such as addresses, contacts, and tax exemptions, are either successfully created together or rolled back in case of an error. ScalarHub also supports adding metadata, such as the entity ID and user details, for auditing purposes."}),"\n",(0,n.jsx)(s.p,{children:"ScalarHub's robust error management system ensures a reliable user experience. If an error occurs during the creation process, ScalarHub handles it gracefully by returning specific error messages, thereby ensuring robust error management."}),"\n",(0,n.jsx)(s.h2,{id:"provisioning-the-customer",children:"Provisioning the Customer"}),"\n",(0,n.jsx)(s.p,{children:"Provisioning involves updating or modifying customer details and their associated records within ScalarHub. The application allows updates to customer information, including address, contact, and tax exemption details, ensuring consistency and data integrity."}),"\n",(0,n.jsxs)(s.p,{children:["When updating tax exemption details, the system ensures transparency by modifying the existing record or creating a new one if necessary. The update process also includes auditing fields such as ",(0,n.jsx)(s.code,{children:"updated_by_id,"})," maintaining transparency, and tracking changes made."]}),"\n",(0,n.jsx)(s.p,{children:"For customer deletion, ScalarHub ensures that associated records like external addresses and contacts are decoupled before removing the customer, preventing orphaned records and ensuring data integrity. The transaction ensures that the entire process is executed reliably and consistently."}),"\n",(0,n.jsx)(s.h2,{id:"managing-customer-subscriptions",children:"Managing Customer Subscriptions"}),"\n",(0,n.jsx)(s.p,{children:"Once a customer is created in ScalarHub, they can be subscribed to a service plan. The subscription process ensures that all relevant details, such as start date, end date, due date, and audit information, are correctly populated for each customer."}),"\n",(0,n.jsx)(s.p,{children:"Key attributes of the subscription include:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Start Date"}),": The date the subscription begins, typically the current date."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"End Date"}),": Dynamically calculated based on the plan's billing cycle (e.g., annual or monthly)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Due Date"}),": Represents the payment due date, dynamically calculated to align with the plan's billing cycle."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Status"}),': Set to "ACTIVE" upon successful creation.']}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The subscription lifecycle is carefully managed by calculating the end and due dates based on the billing cycle. For annual billing cycles, the end and due dates are set a year from the start date. For other cycles, they are calculated monthly."}),"\n",(0,n.jsx)(s.p,{children:"ScalarHub will notify the user of the expired status if a subscription expires, ensuring that clear feedback is provided and enhancing the user experience."}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"When managing subscriptions, it's crucial to regularly check the subscription status and billing cycle. This practice is essential as it helps prevent expired subscriptions from causing service interruptions, thereby ensuring a seamless user experience."})})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);