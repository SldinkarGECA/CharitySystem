(this["webpackJsonpcharity-react"]=this["webpackJsonpcharity-react"]||[]).push([[0],{411:function(e,t){},414:function(e,t){},415:function(e,t){},420:function(e,t){},421:function(e,t){},444:function(e,t){},446:function(e,t){},460:function(e,t){},462:function(e,t){},476:function(e,t){},508:function(e,t){},509:function(e,t){},560:function(e,t){},562:function(e,t){},590:function(e,t){},592:function(e,t){},593:function(e,t){},598:function(e,t){},600:function(e,t){},606:function(e,t){},608:function(e,t){},627:function(e,t){},639:function(e,t){},642:function(e,t){},647:function(e,t){},670:function(e,t){},672:function(e,t){},678:function(e,t){},690:function(e,t){},693:function(e,t){},789:function(e,t){},813:function(e,t){},895:function(e,t){},905:function(e,t){},913:function(e,t){},925:function(e,t){},928:function(e,t,n){},929:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n(387),r=n.n(s),i=n(10),c=n(50),o=n(28),l=n(16),u=n.n(l),p=new(new(n(399))(new(n(785))("second license daughter nasty west life mandate laugh neutral mother assume case","wss://rinkeby.infura.io/ws/v3/51b2c9997e7a407a98ed41bd6ff16ba8")).eth.Contract)([{inputs:[],stateMutability:"nonpayable",type:"constructor",signature:"constructor"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"CooperativeStores",outputs:[{internalType:"string",name:"StoreName",type:"string"},{internalType:"address",name:"StoreAddress",type:"address"}],stateMutability:"view",type:"function",constant:!0,signature:"0x93fc66cf"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"Post_Project",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0xfe767687"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"Remove_Project",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0x635c987f"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"RequestMoneyAfterCompletion",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0x7d6e6ac8"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"Send_Money_Beneficiary",outputs:[],stateMutability:"payable",type:"function",payable:!0,signature:"0xa6e0b44d"},{inputs:[{internalType:"string",name:"_productId",type:"string"},{internalType:"string",name:"_productName",type:"string"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"addProduct",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0xf28ea1c1"},{inputs:[{internalType:"string",name:"id",type:"string"},{internalType:"string",name:"product_name",type:"string"},{internalType:"uint256",name:"price",type:"uint256"}],name:"add_product",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0x100b593d"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"allProducts",outputs:[{internalType:"string",name:"productId",type:"string"},{internalType:"string",name:"productName",type:"string"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"bool",name:"ongoing",type:"bool"}],stateMutability:"view",type:"function",constant:!0,signature:"0xcfaaef56"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"approveRequest",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0xd7d1bbdb"},{inputs:[],name:"approversCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0,signature:"0x82fde093"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"beneficiaries",outputs:[{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"uint256",name:"maxContr",type:"uint256"},{internalType:"address payable",name:"store",type:"address"},{internalType:"bool",name:"complete",type:"bool"},{internalType:"uint256",name:"approvalCount",type:"uint256"},{internalType:"bool",name:"approved",type:"bool"},{internalType:"bool",name:"display",type:"bool"}],stateMutability:"view",type:"function",constant:!0,signature:"0xefeb5e58"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"charityOrgs",outputs:[{internalType:"string",name:"OrgName",type:"string"},{internalType:"address payable",name:"OrgAddress",type:"address"},{internalType:"string",name:"OrgDescription",type:"string"}],stateMutability:"view",type:"function",constant:!0,signature:"0x378405e4"},{inputs:[{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"uint256",name:"maxContr",type:"uint256"}],name:"createRequest",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0x23fe79b8"},{inputs:[{internalType:"string",name:"_donatorName",type:"string"},{internalType:"string",name:"_donatorMessage",type:"string"}],name:"create_donator",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function",signature:"0x7e86a148"},{inputs:[],name:"donateVote",outputs:[],stateMutability:"payable",type:"function",payable:!0,signature:"0xd41c8922"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"donators",outputs:[{internalType:"string",name:"donatorName",type:"string"},{internalType:"string",name:"donatorMessage",type:"string"},{internalType:"uint256",name:"projectID",type:"uint256"},{internalType:"uint256",name:"donatedValue",type:"uint256"},{internalType:"address",name:"donatorAddress",type:"address"}],stateMutability:"view",type:"function",constant:!0,signature:"0xac62f566"},{inputs:[],name:"getAllProducts",outputs:[{components:[{internalType:"string",name:"productId",type:"string"},{internalType:"string",name:"productName",type:"string"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"bool",name:"ongoing",type:"bool"}],internalType:"struct CharitySystem.Product[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function",constant:!0,signature:"0x02ee3a52"},{inputs:[],name:"getBeneficiaries",outputs:[{components:[{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"uint256",name:"maxContr",type:"uint256"},{internalType:"address payable",name:"store",type:"address"},{internalType:"bool",name:"complete",type:"bool"},{internalType:"uint256",name:"approvalCount",type:"uint256"},{internalType:"bool",name:"approved",type:"bool"},{internalType:"bool",name:"display",type:"bool"}],internalType:"struct CharitySystem.Beneficiary[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function",constant:!0,signature:"0x913b722c"},{inputs:[],name:"getCharityOrgs",outputs:[{components:[{internalType:"string",name:"OrgName",type:"string"},{internalType:"address payable",name:"OrgAddress",type:"address"},{internalType:"string",name:"OrgDescription",type:"string"}],internalType:"struct CharitySystem.CharityOrg[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function",constant:!0,signature:"0xb8c2003b"},{inputs:[],name:"getCoOpStores",outputs:[{components:[{internalType:"string",name:"StoreName",type:"string"},{internalType:"address",name:"StoreAddress",type:"address"}],internalType:"struct CharitySystem.CoopStore[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function",constant:!0,signature:"0x4baab5ed"},{inputs:[],name:"getDonators",outputs:[{components:[{internalType:"string",name:"donatorName",type:"string"},{internalType:"string",name:"donatorMessage",type:"string"},{internalType:"uint256",name:"projectID",type:"uint256"},{internalType:"uint256",name:"donatedValue",type:"uint256"},{internalType:"address",name:"donatorAddress",type:"address"}],internalType:"struct CharitySystem.Donator[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function",constant:!0,signature:"0xbf1482fa"},{inputs:[],name:"getProducts",outputs:[{components:[{internalType:"string",name:"productId",type:"string"},{internalType:"string",name:"productName",type:"string"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"bool",name:"ongoing",type:"bool"}],internalType:"struct CharitySystem.Product[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function",constant:!0,signature:"0xc29b2f20"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"make_donations",outputs:[],stateMutability:"payable",type:"function",payable:!0,signature:"0xc9d6dadf"},{inputs:[],name:"manager",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0,signature:"0x481c6a75"},{inputs:[],name:"minContr",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0,signature:"0xb8b142de"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"payments",outputs:[{internalType:"string",name:"description",type:"string"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"address payable",name:"receiver",type:"address"},{internalType:"bool",name:"completed",type:"bool"}],stateMutability:"view",type:"function",constant:!0,signature:"0x87d81789"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"_projectId",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"}],name:"selectCharityProject",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0xf13dc92f"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"transferToStore",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0x170f62b6"}],"0x7920b47D79A1e7D0C95ef86D31ADd3BbE377D461"),d=n(1);var y=function(e){return Object(d.jsxs)("div",{className:"px-4 py-4 my-auto col-lg-4 col-sm-12",children:[Object(d.jsx)("div",{className:"card  text-center bg-info ",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h3",{className:"card-title",children:e.title}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{className:"card-text",children:e.description}),Object(d.jsx)("br",{}),Object(d.jsxs)("h4",{className:"card-text",children:["Amount Requested: ",e.maxContr]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"d-grid d-md-flex justify-content-center",children:Object(d.jsx)("button",{type:"button",className:"btn btn-success btn-lg",disabled:!0,children:"Donate Now!"})})]})}),Object(d.jsxs)("div",{className:"toast show",children:[Object(d.jsxs)("div",{className:"toast-header",children:[Object(d.jsx)("strong",{className:"me-auto",children:"Toast Header"}),Object(d.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"toast"})]}),Object(d.jsx)("div",{className:"toast-body",children:Object(d.jsx)("p",{children:"Some text inside the toast body"})})]})]})};var b=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(c.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,p.methods.getBeneficiaries().call();case 3:e.t1=e.sent,(0,e.t0)(e.t1),console.log(s);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=setInterval((function(){e()}),0);return function(){return clearInterval(t)}}),[s]),Object(d.jsx)("div",{className:"row",children:s.map((function(e){return Object(d.jsx)(y,{description:e.description,title:e.title,maxContr:e.maxContr},e.title)}))})};var m=function(e){return Object(d.jsx)("div",{className:"px-4 py-4 my-auto col-lg-4 col-sm-12",children:Object(d.jsxs)("div",{className:"card  text-center bg-success ",children:[Object(d.jsxs)("div",{className:"card-header",children:["ProductID: ",e.productId]}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{className:"card-text",children:e.productName}),Object(d.jsxs)("p",{className:"card-text",children:["Price: ",e.price]}),Object(d.jsx)("div",{className:"card-footer bg-transparent border-success",children:Object(d.jsx)("div",{className:"d-grid d-md-flex justify-content-center",children:Object(d.jsx)("button",{type:"button",className:"btn btn-info btn-lg ",children:"Buy Now!"})})})]})]})})};var j=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(c.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,p.methods.getProducts().call();case 3:e.t1=e.sent,(0,e.t0)(e.t1),console.log(s);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()})),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h2",{children:"Products available are:"}),s.map((function(e){return Object(d.jsx)(m,{productId:e.productId,productName:e.productName,price:e.price,seller:e.seller},e.productId)}))]})},x=n(51);var f=function(e){return Object(d.jsxs)(x.a,{children:[Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(x.b,{className:"navbar-brand",to:"",children:"Genuine Charity"}),Object(d.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{class:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse d-flex flex-row-reverse",id:"navbarNavDropdown",children:Object(d.jsxs)("ul",{className:"navbar-nav",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(x.b,{className:"nav-link","aria-current":"page",to:"",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(x.b,{className:"nav-link",to:"/CharityProjects",children:"Charity Projects"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(x.b,{className:"nav-link",to:"/stores",children:"Stores"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(x.b,{className:"nav-link",to:"/donors",children:"Donors List"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(x.b,{className:"nav-link",to:"/products",children:"Products Available"})})]})})]})}),e.children]})};n(928);var g=function(e){return Object(d.jsx)("div",{className:"px-4 py-4 my-auto col-lg-6 col-sm-12",children:Object(d.jsx)("div",{className:"card  text-left bg-light border border-dark rcorners",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("p",{className:"text-left text-success",children:e.title}),Object(d.jsx)("p",{className:"text-left",children:e.description}),Object(d.jsx)("div",{className:"d-grid d-sm-flex flex-row-reverse",children:Object(d.jsx)("button",{type:"button",className:"btn btn-light btn-sm border border-dark rcorners",onClick:e.onClick,children:e.button})})]})})})};var h=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),s=n[0],r=n[1];Object(a.useEffect)((function(){var e=function(){var e=Object(c.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.methods.manager().call();case 2:t=e.sent,r(t),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}));var l=Object(i.f)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"display 2",children:"Welcome !"}),Object(d.jsxs)("h1",{children:["Manager is ",s]}),Object(d.jsxs)("h2",{children:["Address is ",p.options.address]}),Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)(g,{description:"To show all the donors all the charity projects available and to let them choose and vote for the ones convincing and agreeging with them",title:"For all the donours",button:"Projects",onClick:function(){l("/CharityProjects")}})}),Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)(g,{description:"To shop and buy all the required necessities from the website itself in our very own co-operative stores",title:"For the Necessary Commodities",button:"Store",onClick:function(){l("/store")}})}),Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)(g,{description:"To display the entire list of Beneficiaries who have registered on the website for help of any kind, needed on a daily basis",title:"For all Beneficiaries info",button:"Beneficiaries",onClick:function(){l("/beneficiaries")}})})]})};var O=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("footer",{className:"bg-light text-secondary text-center text-lg-start",children:Object(d.jsxs)("div",{className:"text-right p-3 d-flex flex-row-reverse",children:["Copyright \xa9 2022 ",Object(d.jsx)("br",{})," Team Charity System"]})})})};var v=function(e){return Object(d.jsx)("div",{className:"px-4 py-4 my-auto col-lg-4 col-sm-12",children:Object(d.jsx)("div",{className:"card  text-center bg-success ",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h4",{className:"card-text",children:["Store Name: ",e.StoreName]}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{className:"card-text",children:["Our address is: ",e.StoreAddress]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"card-footer bg-transparent border-dark",children:Object(d.jsx)("p",{className:"card-text",children:"Please select our address while buying any product!"})})]})})})};var N=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(c.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,p.methods.getCoOpStores().call();case 3:e.t1=e.sent,(0,e.t0)(e.t1),console.log(s);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()})),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h2",{children:"Stores selling products on our platform are:"}),s.map((function(e){return Object(d.jsx)(v,{StoreName:e.StoreName,StoreAddress:e.StoreAddress},e.StoreName)}))]})};var T=function(e){return Object(d.jsx)("div",{className:"px-4 py-4 my-auto col-lg-4 col-sm-12",children:Object(d.jsx)("div",{className:"card  text-center bg-success ",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h4",{className:"card-text",children:["Donor Name: ",e.donatorName]}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{className:"card-text",children:e.donatorMessage}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{className:"card-text",children:["My address is: ",e.donatorAddress]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"card-footer bg-transparent border-dark",children:Object(d.jsxs)("p",{className:"card-text",children:["Amount Donated : ",e.donatedValue]})})]})})})};var w=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(c.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,p.methods.getDonators().call();case 3:e.t1=e.sent,(0,e.t0)(e.t1),console.log(s);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()})),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h2",{children:"Donors of our platform are:"}),s.map((function(e){return Object(d.jsx)(T,{donatorName:e.donatorName,donatorMessage:e.donatorMessage,donatedValue:e.donatedValue,donatorAddress:e.donatorAddress},e.donatorName)}))]})};var C=function(){return Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(f,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"",element:Object(d.jsx)(h,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/CharityProjects",element:Object(d.jsx)(b,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/donors",element:Object(d.jsx)(w,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/products",element:Object(d.jsx)(j,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/stores",element:Object(d.jsx)(N,{})}),Object(d.jsx)(i.a,{path:"*",element:Object(d.jsx)(h,{})})]})}),Object(d.jsx)(O,{})]})};r.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(C,{}))}},[[929,1,2]]]);
//# sourceMappingURL=main.35fda24d.chunk.js.map