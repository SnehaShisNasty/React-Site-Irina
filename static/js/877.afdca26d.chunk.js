"use strict";(self.webpackChunkreact_site=self.webpackChunkreact_site||[]).push([[877],{9087:function(e,r,s){s.r(r),s.d(r,{default:function(){return je}});var i=s(9439),c=s(2791),n="Hero_overlay__ojFeQ",a="Hero_hero__zvVCj",t="Hero_title__rL9MQ",l="Hero_subtitle__8Mcc5",o="Hero_btn__ipVZT",d=s(9321),_=s(4759),u=s(9230),p=s(184),m=function(){var e=(0,c.useState)(!1),r=(0,i.Z)(e,2),s=r[0],m=r[1],v=(0,u.$G)().t;return(0,p.jsx)("div",{className:n,id:"homePage",children:(0,p.jsxs)("div",{className:a,children:[(0,p.jsx)("h1",{className:t,children:v("hero.title")}),(0,p.jsx)("p",{className:l,children:v("hero.subtitle")}),(0,p.jsx)("button",{onClick:function(){return m(!0)},className:o,children:v("hero.getConsulting")}),(0,p.jsx)(d.u,{show:s,handleClose:function(){return m(!1)},children:(0,p.jsx)(_.l,{title:v("modal.title"),typeForm:"FreeConslt"})})]})})},v=function(e){var r=(0,c.useState)(!1),s=(0,i.Z)(r,2),n=s[0],a=s[1];return(0,c.useEffect)((function(){var r=function(){if(e.current){var r=e.current.getBoundingClientRect().top,s=window.innerHeight;a(r<s&&r>-e.current.clientHeight)}};return window.addEventListener("scroll",r),r(),function(){return window.removeEventListener("scroll",r)}}),[e]),n},h=s(5667),f=[{src:s.p+"static/media/acca-logo.a6d34ca76da0384150a9.jpg",alt:"acca-log",name:"Association of Chartered Certified Accountants"},{src:s.p+"static/media/att-logo.2f19cee02c1a6151d880.png",alt:"att-log",name:"Association of Accounting Technicians"},{src:s.p+"static/media/dext-logo.f1c78e28edc5d43184ab.jpg",alt:"dext-log",name:"Dext"},{src:s.p+"static/media/sage-logo.8e00bb335e11ddbb30a6.jpg",alt:"sage-log",name:"The Sage Group plc"},{src:s.p+"static/media/xero-logo.7084e0addb2e41ec76ee.png",alt:"xero-log",name:"Xero"},{src:s.p+"static/media/iab-logo.eb3e606d16e450870bf9.jpg",alt:"iab-log",name:"The Institute Of Accountants And Bookkeepers"}],g="features_container__DqWsx",x="features_visible__pXwQ1",b="features_title__sNtkU",j="features_list__WXime",N="features_showMore__mg54u",P="features_item__TpC5a",C="features_accreditation__AwGQz",T="features_accreditationText__-wgVh",w="features_btn__nGVm-",k="features_logoContainer__ouc1j",S="features_logo_item__mUeUc",G="features_logoImg__U8RfO",B=function(){var e=(0,u.$G)().t,r=(0,c.useRef)(null),s=v(r),n=(0,c.useState)(!1),a=(0,i.Z)(n,2),t=a[0],l=a[1];return(0,p.jsxs)("div",{id:"features-container",ref:r,className:"".concat(g," ").concat(s?x:""),children:[(0,p.jsx)("h1",{className:b,children:e("features.title")}),(0,p.jsx)("ul",{className:"".concat(j," ").concat(t?N:""),children:["reputation","packages","expertise","services","businessesType","belief","benefits"].map((function(r){return(0,p.jsx)("li",{className:P,children:e("features.".concat(r))},r)}))}),(0,p.jsx)("button",{className:w,onClick:function(){t&&h.OK.scrollTo("features-container",{duration:500,delay:0,smooth:"easeInOutQuart",offset:-100}),l((function(e){return!e}))},children:e(t?"features.showLess":"features.showMore")}),(0,p.jsx)("h2",{className:C,children:e("features.accreditationTitle")}),(0,p.jsx)("p",{className:T,children:e("features.accreditationText")}),(0,p.jsx)("div",{children:(0,p.jsx)("ul",{className:k,children:f.map((function(e,r){return(0,p.jsx)("li",{className:S,children:(0,p.jsx)("img",{src:e.src,alt:e.alt,className:G})},r)}))})})]})},R=s(5007);var H=s.p+"static/media/symbol-defs-services.23aee614bf85a9cb4208d4fe09e6d41e.svg",I="services_container__1uLm9",y="services_visible__il40Z",A="services_title__P7sCN",F="services_subTitle__L0NQ1",M="services_servicesFlex__6glUR",O="services_secondRow__wfHIe",L="services_card__Fld-4",V="services_cardTitle__xl9LK",Z="services_cardLink__XYO9-",E="services_iconSvg__2JZww",Q="services_icon__HlqJ8",U=s(7689),D=s(1087),$=function(){var e=(0,c.useRef)(null),r=v(e),s=(0,u.$G)().t,i=(0,U.TH)(),n=R.e.filter((function(e){return"corporate"===e.type})),a=R.e.filter((function(e){return"individual"===e.type}));(0,c.useEffect)((function(){if(i.hash){var e=document.querySelector(i.hash);e&&e.scrollIntoView({behavior:"smooth"})}}),[i]);var t=function(e){return(0,p.jsxs)("div",{className:L,children:[(0,p.jsx)("svg",{className:E,children:(0,p.jsx)("use",{xlinkHref:"".concat(H,"#").concat(e.icon),className:Q})}),(0,p.jsx)("h3",{className:V,children:s("services.".concat(e.name,".name"))}),(0,p.jsx)(D.OL,{to:"service/".concat(e.address),className:Z,children:s("services.learnMore")})]},e.id)};return(0,p.jsxs)("div",{ref:e,className:"".concat(I," ").concat(r?y:""),children:[(0,p.jsx)("h1",{className:A,children:s("services.title")}),(0,p.jsx)("p",{className:F,id:"corporate",children:s("header.navMenu.corporateServices")}),(0,p.jsx)("div",{className:M,children:n.slice(0,3).map(t)}),(0,p.jsx)("div",{className:"".concat(M," ").concat(O),children:n.slice(3).map(t)}),(0,p.jsx)("p",{className:F,id:"individual",children:s("header.navMenu.individualServices")}),(0,p.jsx)("div",{className:M,children:a.slice(0,3).map(t)}),(0,p.jsx)("div",{className:"".concat(M," ").concat(O),children:a.slice(3).map(t)})]})},z="trustBlobs_container__0ODIr",K="trustBlobs_visible__xThGi",X="trustBlobs_title__QN7Oa",q="trustBlobs_list__CO92I",J="trustBlobs_listItem__-COvp",W="trustBlobs_text__t2hKi",Y="trustBlobs_lastItem__CTdFv",ee=function(){var e=(0,u.$G)().t,r=(0,c.useRef)(null),s=v(r),i=e("trustBlobs.items",{returnObjects:!0});return(0,p.jsxs)("div",{ref:r,className:"".concat(z," ").concat(s?K:""),children:[(0,p.jsx)("h1",{className:X,children:e("trustBlobs.title")}),(0,p.jsx)("ul",{className:q,children:i.map((function(e,r){return(0,p.jsx)("li",{className:"".concat(J," ").concat(r===i.length-1?Y:""),children:(0,p.jsx)("p",{className:W,children:e})},r)}))})]})},re="PriceCard_price_card__nCSdk",se="PriceCard_card_title__jDltV",ie="PriceCard_card_description__9Uslz",ce="PriceCard_card_price__nb1XG",ne="PriceCard_card_turnover__pdHM2",ae="PriceCard_card_currencies__sdTx5",te="PriceCard_services_title__09lad",le="PriceCard_card_list__bvKz5",oe="PriceCard_list_item__wgiFl",de="PriceCard_sub_btn__5tEfJ",_e="PriceCard_ribbon__EK-Sa",ue="PriceCard_ribbon_text__VsMdd",pe=function(e){var r=e.title,s=e.description,i=e.price,c=e.turnover,n=e.multipleCurrencies,a=e.services,t=e.ribbonColor,l=e.ribbonText,o=(0,u.$G)().t;return(0,p.jsxs)("div",{className:re,children:[(0,p.jsx)("h2",{className:se,children:r}),(0,p.jsx)("p",{className:ie,children:s}),(0,p.jsxs)("p",{className:ce,children:[i,"\xa3/",o("pricingPlan.priceCard.mth")]}),(0,p.jsxs)("p",{className:ne,children:[o("pricingPlan.priceCard.turnover"),c]}),(0,p.jsxs)("p",{className:ae,children:[o("pricingPlan.priceCard.currencies"),n]}),(0,p.jsx)("h3",{className:te,children:o("pricingPlan.priceCard.services")}),(0,p.jsx)("ul",{className:le,children:a.map((function(e,r){return(0,p.jsx)("li",{className:oe,children:e},r)}))}),(0,p.jsx)("button",{className:de,children:o("pricingPlan.priceCard.subscribe")}),l&&(0,p.jsx)("div",{className:_e,style:{backgroundColor:t},children:(0,p.jsx)("span",{className:ue,children:l})})]})},me="pricingPlan_container__vGMZ1",ve="pricingPlan_visible__WEvwg",he="pricingPlan_title_container__mZ+Sm",fe="pricingPlan_title__Rp6wl",ge="pricingPlan_title_span__cYzIp",xe="pricingPlan_pricing_plan__0GCgU",be=function(){var e=(0,c.useRef)(null),r=v(e),s=(0,u.$G)().t,i=[{title:s("pricingPlan.planStandard"),description:s("pricingPlan.goodForSoleTraders"),price:"150.00",turnover:s("pricingPlan.upTo"),multipleCurrencies:s("pricingPlan.multipleCurrenciesNotIncluded"),services:[s("pricingPlan.services.payroll"),s("pricingPlan.services.pension"),s("pricingPlan.services.vat"),s("pricingPlan.services.confirmationStatement"),s("pricingPlan.services.annualAccounts"),s("pricingPlan.services.corporationTaxReturn"),s("pricingPlan.services.selfAssessmentTaxReturnsForDirector")],ribbonColor:"silver",ribbonText:s("pricingPlan.ribbonBestValue")},{title:s("pricingPlan.planPremium"),description:s("pricingPlan.goodForGrowingSmallBusinesses"),price:"250.00",turnover:"\xa385k - \xa3400k",multipleCurrencies:s("pricingPlan.multipleCurrenciesIncluded"),services:[s("pricingPlan.services.payroll"),s("pricingPlan.services.pension"),s("pricingPlan.services.vat"),s("pricingPlan.services.confirmationStatement"),s("pricingPlan.services.annualAccounts"),s("pricingPlan.services.corporationTaxReturn"),s("pricingPlan.services.selfAssessmentTaxReturnsForDirector")],ribbonColor:"gold",ribbonText:s("pricingPlan.ribbonMostPopular")}];return(0,p.jsxs)("div",{ref:e,className:"".concat(me," ").concat(r?ve:""),children:[(0,p.jsxs)("div",{className:he,children:[(0,p.jsx)("h1",{className:fe,children:s("pricingPlan.title")}),(0,p.jsx)("span",{className:ge,children:s("pricingPlan.subtitle")})]}),(0,p.jsx)("div",{className:xe,children:i.map((function(e,r){return(0,p.jsx)(pe,{title:e.title,description:e.description,turnover:e.turnover,multipleCurrencies:e.multipleCurrencies,price:e.price,services:e.services,ribbonColor:e.ribbonColor,ribbonText:e.ribbonText},r)}))})]})},je=function(){return(0,p.jsxs)("section",{children:[(0,p.jsx)(m,{}),(0,p.jsx)(B,{}),(0,p.jsx)($,{}),(0,p.jsx)(be,{}),(0,p.jsx)(ee,{})]})}}}]);
//# sourceMappingURL=877.afdca26d.chunk.js.map