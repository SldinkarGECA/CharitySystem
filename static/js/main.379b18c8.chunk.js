(this["webpackJsonpcharity-react"]=this["webpackJsonpcharity-react"]||[]).push([[0],{413:function(e,t){},416:function(e,t){},417:function(e,t){},422:function(e,t){},423:function(e,t){},446:function(e,t){},448:function(e,t){},462:function(e,t){},464:function(e,t){},478:function(e,t){},510:function(e,t){},511:function(e,t){},562:function(e,t){},564:function(e,t){},592:function(e,t){},594:function(e,t){},595:function(e,t){},600:function(e,t){},602:function(e,t){},608:function(e,t){},610:function(e,t){},629:function(e,t){},641:function(e,t){},644:function(e,t){},649:function(e,t){},672:function(e,t){},674:function(e,t){},680:function(e,t){},692:function(e,t){},695:function(e,t){},765:function(e,t){},793:function(e,t){},817:function(e,t){},899:function(e,t){},909:function(e,t){},917:function(e,t){},929:function(e,t){},932:function(e,t,n){},933:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(389),s=n.n(r),c=n(51),i=n(11),o=n(24),l=n(18),u=n(8),d=n.n(u),p=new(new(n(401))(new(n(789))("second license daughter nasty west life mandate laugh neutral mother assume case","wss://rinkeby.infura.io/ws/v3/51b2c9997e7a407a98ed41bd6ff16ba8")).eth.Contract)([{inputs:[],stateMutability:"nonpayable",type:"constructor",signature:"constructor"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"CooperativeStores",outputs:[{internalType:"string",name:"StoreName",type:"string"},{internalType:"address",name:"StoreAddress",type:"address"}],stateMutability:"view",type:"function",constant:!0,signature:"0x93fc66cf"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"Post_Project",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0xfe767687"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"Remove_Project",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0x635c987f"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"Send_Money_Beneficiary",outputs:[],stateMutability:"payable",type:"function",payable:!0,signature:"0xa6e0b44d"},{inputs:[{internalType:"string",name:"_productId",type:"string"},{internalType:"string",name:"_productName",type:"string"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"addProduct",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0xf28ea1c1"},{inputs:[{internalType:"string",name:"id",type:"string"},{internalType:"string",name:"product_name",type:"string"},{internalType:"uint256",name:"price",type:"uint256"}],name:"add_product",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0x100b593d"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"allProducts",outputs:[{internalType:"string",name:"productId",type:"string"},{internalType:"string",name:"productName",type:"string"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"bool",name:"ongoing",type:"bool"}],stateMutability:"view",type:"function",constant:!0,signature:"0xcfaaef56"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"approveRequest",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0xd7d1bbdb"},{inputs:[],name:"approversCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0,signature:"0x82fde093"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"beneficiaries",outputs:[{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"uint256",name:"maxContr",type:"uint256"},{internalType:"uint256",name:"collectedAmount",type:"uint256"},{internalType:"address payable",name:"store",type:"address"},{internalType:"bool",name:"complete",type:"bool"},{internalType:"uint256",name:"approvalCount",type:"uint256"},{internalType:"bool",name:"approved",type:"bool"},{internalType:"bool",name:"display",type:"bool"}],stateMutability:"view",type:"function",constant:!0,signature:"0xefeb5e58"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"charityOrgs",outputs:[{internalType:"string",name:"OrgName",type:"string"},{internalType:"address payable",name:"OrgAddress",type:"address"},{internalType:"string",name:"OrgDescription",type:"string"}],stateMutability:"view",type:"function",constant:!0,signature:"0x378405e4"},{inputs:[{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"uint256",name:"maxContr",type:"uint256"}],name:"createRequest",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0x23fe79b8"},{inputs:[{internalType:"string",name:"_donatorName",type:"string"},{internalType:"string",name:"_donatorMessage",type:"string"}],name:"create_donator",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function",signature:"0x7e86a148"},{inputs:[],name:"donateVote",outputs:[],stateMutability:"payable",type:"function",payable:!0,signature:"0xd41c8922"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"donators",outputs:[{internalType:"string",name:"donatorName",type:"string"},{internalType:"string",name:"donatorMessage",type:"string"},{internalType:"uint256",name:"amountDonated",type:"uint256"},{internalType:"uint256",name:"donationValue",type:"uint256"},{internalType:"address",name:"donatorAddress",type:"address"}],stateMutability:"view",type:"function",constant:!0,signature:"0xac62f566"},{inputs:[],name:"getAllProducts",outputs:[{components:[{internalType:"string",name:"productId",type:"string"},{internalType:"string",name:"productName",type:"string"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"bool",name:"ongoing",type:"bool"}],internalType:"struct CharitySystem.Product[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function",constant:!0,signature:"0x02ee3a52"},{inputs:[],name:"getBeneficiaries",outputs:[{components:[{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"uint256",name:"maxContr",type:"uint256"},{internalType:"uint256",name:"collectedAmount",type:"uint256"},{internalType:"address payable",name:"store",type:"address"},{internalType:"bool",name:"complete",type:"bool"},{internalType:"uint256",name:"approvalCount",type:"uint256"},{internalType:"bool",name:"approved",type:"bool"},{internalType:"bool",name:"display",type:"bool"}],internalType:"struct CharitySystem.Beneficiary[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function",constant:!0,signature:"0x913b722c"},{inputs:[],name:"getCharityOrgs",outputs:[{components:[{internalType:"string",name:"OrgName",type:"string"},{internalType:"address payable",name:"OrgAddress",type:"address"},{internalType:"string",name:"OrgDescription",type:"string"}],internalType:"struct CharitySystem.CharityOrg[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function",constant:!0,signature:"0xb8c2003b"},{inputs:[],name:"getCoOpStores",outputs:[{components:[{internalType:"string",name:"StoreName",type:"string"},{internalType:"address",name:"StoreAddress",type:"address"}],internalType:"struct CharitySystem.CoopStore[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function",constant:!0,signature:"0x4baab5ed"},{inputs:[],name:"getDonators",outputs:[{components:[{internalType:"string",name:"donatorName",type:"string"},{internalType:"string",name:"donatorMessage",type:"string"},{internalType:"uint256",name:"amountDonated",type:"uint256"},{internalType:"uint256",name:"donationValue",type:"uint256"},{internalType:"address",name:"donatorAddress",type:"address"}],internalType:"struct CharitySystem.Donator[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function",constant:!0,signature:"0xbf1482fa"},{inputs:[],name:"getPayments",outputs:[{components:[{internalType:"string",name:"description",type:"string"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"sender",type:"string"},{internalType:"string",name:"receiver",type:"string"},{internalType:"bool",name:"completed",type:"bool"}],internalType:"struct CharitySystem.Payment[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function",constant:!0,signature:"0xd56bd142"},{inputs:[],name:"getProducts",outputs:[{components:[{internalType:"string",name:"productId",type:"string"},{internalType:"string",name:"productName",type:"string"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"bool",name:"ongoing",type:"bool"}],internalType:"struct CharitySystem.Product[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function",constant:!0,signature:"0xc29b2f20"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"make_donations",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function",signature:"0x218d2f13"},{inputs:[],name:"manager",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0,signature:"0x481c6a75"},{inputs:[],name:"minContr",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0,signature:"0xb8b142de"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"payments",outputs:[{internalType:"string",name:"description",type:"string"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"sender",type:"string"},{internalType:"string",name:"receiver",type:"string"},{internalType:"bool",name:"completed",type:"bool"}],stateMutability:"view",type:"function",constant:!0,signature:"0x87d81789"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"transferToStore",outputs:[],stateMutability:"nonpayable",type:"function",signature:"0x170f62b6"}],"0x0F5dE9CB834c7cd88bB0C32189288400Ed78DD8b"),b=n(64),m=n(61),j=n(0);var y=function(e){var t=Object(a.useState)({}),n=Object(l.a)(t,2),r=n[0],s=n[1],c=function(){var t=Object(o.a)(d.a.mark((function t(n){var a,s,c,i,o,l,u;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,p.methods.manager().call();case 3:for(a=t.sent,s=0,c=Object.keys(r);s<c.length;s++)i=c[s],console.log(i," : ",r[i]);return console.log(r),console.log(e.amountRequested),o=parseInt(e.amountRequested),l=parseInt(r.amount),t.next=11,p.methods.make_donations(e.index,r.amount).send({from:a,gas:"6721975"},(function(e,t){console.log("err ",e),console.log("val ",t)}));case 11:u="",u=o>=l?"Amount Donated Successfully":"Amount is greater than requested amount",alert(u);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsxs)("form",{onSubmit:c,className:"col-sm-12 col-lg-10",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Enter Amount:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",className:"form-control",name:"amount",value:r.amount||"",onChange:function(e){var t=e.target.name,n=e.target.value;s((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(b.a)({},t,n))}))},placeholder:"Enter donation amount"}),Object(j.jsx)("br",{})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Donate"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})})};var x=function(e){return Object(j.jsx)("div",{className:"px-4 py-4 my-auto col-lg-4 col-sm-12",children:Object(j.jsx)("div",{className:"card  text-center bg-info ",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h3",{className:"card-title",children:e.title}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{className:"card-text",children:e.description}),Object(j.jsx)("br",{}),Object(j.jsxs)("h4",{className:"card-text",children:["Amount Requested: ",e.maxContr]}),Object(j.jsx)("br",{}),Object(j.jsxs)("h4",{className:"card-text",children:["Amount Collected: ",e.collectedAmount]}),Object(j.jsx)("br",{}),Object(j.jsx)(y,{index:e.index,amountRequested:e.maxContr})]})})})};var f=function(e){var t=Object(a.useState)({}),n=Object(l.a)(t,2),r=n[0],s=n[1],c=function(e){var t=e.target.name,n=e.target.value;s((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(b.a)({},t,n))}))},i=function(){var e=Object(o.a)(d.a.mark((function e(t){var n,a,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p.methods.manager().call();case 3:for(n=e.sent,a=0,s=Object.keys(r);a<s.length;a++)c=s[a],console.log(c," : ",r[c]);return console.log(r),e.next=8,p.methods.createRequest(r._donatorTitle,r._donatorMessage,r._donatorAmount).send({from:n,gas:"6721975"});case 8:alert("Added successfully");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsxs)("form",{onSubmit:i,className:"col-sm-12 col-lg-6",children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h3",{children:"Add your Request here:"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Title:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",className:"form-control",name:"_donatorTitle",value:r._donatorTitle||"",onChange:c,placeholder:"Enter your Title"}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"form-group",onSubmit:i,children:[Object(j.jsx)("label",{children:"Description:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",className:"form-control",name:"_donatorMessage",value:r._donatorMessage||"",onChange:c,placeholder:"Enter Description..."})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"form-group",onSubmit:i,children:[Object(j.jsx)("label",{children:"maxContr:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",className:"form-control",name:"_donatorAmount",value:r._donatorAmount||"",onChange:c,placeholder:"Enter Amount"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create Request"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})})};var O=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,p.methods.getBeneficiaries().call();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r,s]),Object(j.jsxs)("div",{className:"row text-center",children:[Object(j.jsx)(f,{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("h1",{className:"display 2",children:"Explore the Charity projects posted on our site!"}),Object(j.jsx)("br",{})]}),r.map((function(e,t){return Object(j.jsx)(x,{index:t,description:e.description,title:e.title,maxContr:e.maxContr,collectedAmount:e.collectedAmount},t)}))]})};var h=function(e){return Object(j.jsx)("div",{className:"px-4 py-4 my-auto col-lg-4 col-sm-12",children:Object(j.jsxs)("div",{className:"card  text-center bg-success ",children:[Object(j.jsxs)("div",{className:"card-header",children:["ProductID: ",e.productId]}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{className:"card-text",children:e.productName}),Object(j.jsxs)("p",{className:"card-text",children:["Price: ",e.price]}),Object(j.jsx)("div",{className:"card-footer bg-transparent border-success",children:Object(j.jsx)("div",{className:"d-grid d-md-flex justify-content-center",children:Object(j.jsx)("button",{type:"button",className:"btn btn-info btn-lg ",disabled:!0,children:"Buy Now!"})})})]})]})})};var g=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,p.methods.getProducts().call();case 3:e.t1=e.sent,(0,e.t0)(e.t1),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var t=setInterval((function(){e()}),2e4);return function(){return clearInterval(t)}}),[r]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:"Products available are:"}),r.map((function(e){return Object(j.jsx)(h,{productId:e.productId,productName:e.productName,price:e.price,seller:e.seller},e.productId)}))]})};n(932);var v=function(e){return Object(j.jsx)("div",{className:"px-4 py-4 my-auto col-lg-6 col-sm-12",children:Object(j.jsx)("div",{className:"card  text-left bg-light border border-dark rcorners",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("p",{className:"text-left text-success",children:e.title}),Object(j.jsx)("p",{className:"text-left",children:e.description}),Object(j.jsx)("div",{class:"d-grid d-sm-flex flex-row-reverse",children:Object(j.jsx)("button",{type:"button",className:"btn btn-secondary btn-sm border border-dark rcorners",onClick:e.onClick,children:e.button})})]})})})};var N=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],s=n[1];Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.methods.manager().call();case 2:t=e.sent,s(t),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var t=setInterval((function(){e()}),2e4);return function(){return clearInterval(t)}}),[r]);var c=Object(i.f)();return Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("br",{}),Object(j.jsx)("h1",{className:"display 2",children:"Welcome to Genuine Charity System !"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)(v,{description:"Know more about all the charity projects posted on our platform and join the great cause by donating them",title:"For all the donors",button:"Projects",onClick:function(){c("/CharityProjects")}})}),Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)(v,{description:"To shop and buy all the required necessities from the website itself in our very own co-operative stores",title:"For the Necessary Commodities",button:"Store",onClick:function(){c("/stores")}})}),Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)(v,{description:"To display the entire list of Beneficiaries who have registered on the website for help of any kind, needed on a daily basis",title:"For all Beneficiaries info",button:"Beneficiaries",onClick:function(){c("/donors")}})}),Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)(v,{description:"To display the entire list of payments recorded on the blockchain",title:"Recent Payments",button:"Payments",onClick:function(){c("/payments")}})}),Object(j.jsxs)("h6",{children:["Manager is ",r]}),Object(j.jsxs)("h6",{children:["Address is ",p.options.address]})]})};var T=function(e){return Object(j.jsx)("div",{className:"px-4 py-4 my-auto col-lg-4 col-sm-12",children:Object(j.jsx)("div",{className:"card  text-center bg-success ",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("h4",{className:"card-text",children:["Store Name:",Object(j.jsx)("br",{})," ",e.StoreName]}),Object(j.jsx)("br",{}),Object(j.jsxs)("p",{className:"card-text",children:["Our address is: ",e.StoreAddress]}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"card-footer bg-transparent border-dark",children:Object(j.jsx)("p",{className:"card-text",children:"Please select our address while buying any product!"})})]})})})};var w=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,p.methods.getCoOpStores().call();case 3:e.t1=e.sent,(0,e.t0)(e.t1),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var t=setInterval((function(){e()}),2e4);return function(){return clearInterval(t)}}),[r]),Object(j.jsxs)("div",{className:"row text-center",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("h1",{className:"display 2",children:"Explore the Stores selling products on our platform"}),Object(j.jsx)("br",{})]}),r.map((function(e){return Object(j.jsx)(T,{StoreName:e.StoreName,StoreAddress:e.StoreAddress},e.StoreName)}))]})};var C=function(e){var t=Object(a.useState)({}),n=Object(l.a)(t,2),r=n[0],s=n[1],c=function(e){var t=e.target.name,n=e.target.value;s((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(b.a)({},t,n))}))},i=function(){var e=Object(o.a)(d.a.mark((function e(t){var n,a,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p.methods.manager().call();case 3:for(n=e.sent,a=0,s=Object.keys(r);a<s.length;a++)c=s[a],console.log(c," : ",r[c]);return console.log(r),e.next=8,p.methods.create_donator(r._donatorName,r._donatorMessage).send({from:n,gas:"6721975"});case 8:alert("Added successfully");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsxs)("form",{onSubmit:i,className:"col-sm-12 col-lg-6",children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h3",{children:"Become A Donator on our platform!"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Name:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",className:"form-control",name:"_donatorName",value:r._donatorName||"",onChange:c,placeholder:"Enter your name"}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"form-group",onSubmit:i,children:[Object(j.jsx)("label",{children:"About Yourself:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",className:"form-control",name:"_donatorMessage",value:r._donatorMessage||"",onChange:c,placeholder:"Enter about yourselves.."})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Become Donator"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})})};var S=function(e){return Object(j.jsx)("div",{className:"px-4 py-4 my-auto col-lg-4 col-sm-12",children:Object(j.jsx)("div",{className:"card  text-center bg-success ",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("h4",{className:"card-text",children:["Donor Name: ",e.donatorName]}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{className:"card-text",children:e.donatorMessage}),Object(j.jsx)("br",{}),Object(j.jsxs)("p",{className:"card-text",children:["My address is: ",e.donatorAddress]}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"card-footer bg-transparent border-dark",children:Object(j.jsxs)("p",{className:"card-text",children:["Amount Donated : ",e.amountDonated]})})]})})})};var M=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,p.methods.getDonators().call();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r]),Object(j.jsxs)("div",{className:"row text-center",children:[Object(j.jsx)(C,{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("h1",{className:"display 2",children:"Meet donators of our platform!"}),Object(j.jsx)("br",{})]}),r.map((function(e){return Object(j.jsx)(S,{donatorName:e.donatorName,donatorMessage:e.donatorMessage,donatedValue:e.donatedValue,donatorAddress:e.donatorAddress,amountDonated:e.amountDonated},e.donatorName)}))]})};var A=function(e){return Object(j.jsx)("div",{className:"px-4 py-4 my-auto col-lg-12 col-sm-12 ",children:Object(j.jsxs)("div",{className:"card  text-center bg-success ",children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsx)("b",{children:Object(j.jsxs)("h4",{children:["Payment description: ",e.sender," donated ",e.amount," to"," ",e.description]})})}),Object(j.jsxs)("div",{className:"card-body row ",children:[Object(j.jsxs)("p",{className:"card-text col-lg-3",children:["Receiver: ",e.receiver]}),Object(j.jsxs)("p",{className:"card-text col-lg-3",children:["Sender: ",e.sender]}),Object(j.jsxs)("p",{className:"card-text col-lg-3",children:["Amount: ",e.amount]}),Object(j.jsx)("p",{className:"card-text col-lg-3 ",children:Object(j.jsx)("b",{children:"PAYMENT SUCCESSFUL"})})]})]})})};var k=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,p.methods.getPayments().call();case 3:e.t1=e.sent,(0,e.t0)(e.t1),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var t=setInterval((function(){e()}),2e4);return function(){return clearInterval(t)}}),[r]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:"Recent Payments:"}),r.map((function(e,t){return Object(j.jsx)(A,{description:e.description,amount:e.amount,sender:e.sender,receiver:e.receiver},t)}))]})};var _=function(e){return Object(j.jsxs)(c.a,{children:[Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(c.b,{className:"navbar-brand",to:"",children:"Genuine Charity"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse flex-row-reverse",id:"navbarNavDropdown",children:Object(j.jsx)("div",{className:"d-flex",children:Object(j.jsxs)("ul",{className:"navbar-nav",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(c.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(c.b,{className:"nav-link",to:"/CharityProjects",children:"Charity Projects"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(c.b,{className:"nav-link",to:"/donors",children:"Donors List"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(c.b,{className:"nav-link",to:"/stores",children:"Stores List"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(c.b,{className:"nav-link",to:"/products",children:"Products Available"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(c.b,{className:"nav-link",to:"/payments",children:"Recent Payments"})})]})})})]})}),e.children,Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"",element:Object(j.jsx)(N,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/CharityProjects",element:Object(j.jsx)(O,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/donors",element:Object(j.jsx)(M,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/products",element:Object(j.jsx)(g,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/stores",element:Object(j.jsx)(w,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/payments",element:Object(j.jsx)(k,{})}),Object(j.jsx)(i.a,{path:"*",element:Object(j.jsx)(N,{})})]})]})};var P=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("footer",{className:"bg-light text-secondary text-center text-lg-start",children:Object(j.jsxs)("div",{className:"text-right p-3 d-flex flex-row-reverse",children:["Copyright \xa9 2022 ",Object(j.jsx)("br",{})," Team Charity System"]})})]})};var D=function(){return Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(_,{}),Object(j.jsx)(P,{})]})};s.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(D,{}))}},[[933,1,2]]]);
//# sourceMappingURL=main.379b18c8.chunk.js.map