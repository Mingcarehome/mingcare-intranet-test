(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1783],{676:(e,t,s)=>{"use strict";function a(e){let t="/mingcare-intranet-test".trim().replace(/\/+$/,"")||"",s=e.startsWith("/")?e:`/${e}`;return!t||s===t||s.startsWith(`${t}/`)?s:`${t}${s}`}s.d(t,{O:()=>a})},912:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var a=s(9650),r=s(3861),n=s(2394),i=s(9758),l=s(4664),o=s(5246),c=s(3556),m=s(8813);function d(){let e,[t,s]=(0,n.useState)(null),[d,u]=(0,n.useState)(!0),[x,p]=(0,n.useState)([]),[h,b]=(0,n.useState)([]),[g,f]=(0,n.useState)([]),[y,v]=(0,n.useState)(null),[_,j]=(0,n.useState)("all"),[N,w]=(0,n.useState)("all"),[$,q]=(0,n.useState)("all"),[C,S]=(0,n.useState)(!1),[k,E]=(0,n.useState)([]),[M,F]=(0,n.useState)(!1),[D,z]=(0,n.useState)([]),[A,L]=(0,n.useState)(null),I=(0,i.useRouter)(),O=(0,n.useRef)(!1),T=(0,n.useRef)(!1),R=(0,n.useRef)(0),P=!d&&!y&&null!==A,W=async()=>{if(!O.current||!T.current)return;let e=++R.current,t=!1,s=()=>!t&&O.current&&e===R.current;u(!0),L(null);try{v(null);let t=(e,t=500)=>{let a=!1;return(0,o.B)(async(t,r)=>{if(a||!s())return{data:[],error:null};let n=await e(t,r);return!n.error&&"number"==typeof n.count&&Number.isSafeInteger(n.count)&&n.count>=0&&t+(n.data?.length||0)>=n.count&&(a=!0),n},t)},[a,r,n,i]=await Promise.all([t(async(e,t)=>{let s=await l.supabase.from("commission_rate_introducer").select("*",{count:"exact"}).order("id").range(e,t);return s.error&&("PGRST116"===s.error.code||s.error.message?.includes("does not exist"))?{data:[],error:null}:s}),t((e,t)=>l.supabase.from("customer_personal_data").select("customer_id, customer_name, introducer, customer_type, voucher_number").eq("customer_type","社區券客戶").order("id").range(e,t)),t((e,t)=>l.supabase.from("customer_personal_data").select("introducer").not("introducer","is",null).order("id").range(e,t)),t((e,t)=>l.supabase.from("billing_salary_data").select("customer_id, customer_name, service_date, service_hours, service_fee, project_category").order("id").range(e,t),1e3)]);if(!s())return;let c=new Set;n.forEach(e=>{e.introducer&&c.add(e.introducer)});let m=i?.filter(e=>"MC街客"!==e.project_category&&"Steven140"!==e.project_category)||[],d=new Map;r.filter(e=>{let t=a?.some(t=>t.introducer===e.introducer),s=m.some(t=>t.customer_id===e.customer_id);return t&&s}).forEach(e=>{m.filter(t=>t.customer_id===e.customer_id).forEach(t=>{let s=new Date(t.service_date).toISOString().substring(0,7),a=`${e.customer_id}-${s}`;d.has(a)||d.set(a,{customer_id:e.customer_id,customer_name:e.customer_name,introducer:e.introducer,service_month:s,monthly_hours:0,monthly_fee:0,first_service_date:t.service_date,voucher_number:e.voucher_number||""});let r=d.get(a);r.monthly_hours=Math.round((r.monthly_hours+(Number(t.service_hours)||0))*100)/100,r.monthly_fee=Math.round((r.monthly_fee+(Number(t.service_fee)||0))*100)/100,t.service_date<r.first_service_date&&(r.first_service_date=t.service_date)})});let u=[],x=new Map;Array.from(d.values()).sort((e,t)=>e.service_month.localeCompare(t.service_month)).forEach(e=>{let t=e.monthly_fee>=6e3,s=0,r=0,n=e.customer_id,i=(x.get(n)||0)+1;x.set(n,i),r=i;let l=a?.find(t=>t.introducer===e.introducer);if(l){let e=1===i?l.first_month_commission:l.subsequent_month_commission;s=t?e:0}u.push({...e,is_qualified:t,month_sequence:r,commission_amount:s})});let h=new Map;u.forEach(e=>{h.has(e.introducer)||h.set(e.introducer,{introducer:e.introducer,total_commission:0,first_month_count:0,subsequent_month_count:0,customers:[]});let t=h.get(e.introducer);t.customers.push(e),t.total_commission=Math.round((t.total_commission+e.commission_amount)*100)/100,1===e.month_sequence?t.first_month_count++:e.month_sequence>1&&t.subsequent_month_count++}),b(a),z(Array.from(c).sort()),f(u),p(Array.from(h.values())),L(e)}catch(e){s()&&v(e.message||"獲取數據失敗")}finally{s()&&u(!1),t=!0}},H=e=>new Intl.NumberFormat("zh-HK",{style:"currency",currency:"HKD",minimumFractionDigits:0}).format(e),U=e=>{let[t,s]=e.split("-");return`${t}年${s}月`},B=(e=g,"all"!==_&&(e.length,e=e.filter(e=>e.introducer===_)),"all"!==N&&(e.length,e=e.filter(e=>e.service_month.startsWith(N))),"all"!==$&&(e.length,e=e.filter(e=>e.service_month.endsWith(`-${$.padStart(2,"0")}`))),e.reduce((e,t)=>e+t.commission_amount,0),"all"!==$&&e.length>0&&e.forEach((e,t)=>{}),e),V=Array.from(new Set(g.map(e=>e.service_month.split("-")[0]))).sort(),Q=new Map;B.forEach(e=>{Q.has(e.introducer)||Q.set(e.introducer,{introducer:e.introducer,total_commission:0,first_month_count:0,subsequent_month_count:0,customers:[]});let t=Q.get(e.introducer);t.customers.push(e),e.is_qualified&&(t.total_commission=Math.round((t.total_commission+e.commission_amount)*100)/100,1===e.month_sequence?t.first_month_count++:t.subsequent_month_count++)});let J=Array.from(Q.values()),G=B.reduce((e,t)=>e+t.commission_amount,0);return((0,n.useEffect)(()=>{O.current=!0,T.current=!1;let e=++R.current,t=()=>O.current&&e===R.current;return(async()=>{try{let{data:{user:e},error:a}=await l.supabase.auth.getUser();if(!t())return;if(a)throw a;e?(T.current=!0,s(e),await W()):(I.push("/"),u(!1))}catch(e){t()&&(v(e instanceof Error?e.message:"未能核實登入，請重新登入"),u(!1))}})(),()=>{O.current=!1,T.current=!1,R.current+=1}},[I]),d)?(0,a.jsx)(m.Ay,{message:"正在載入佣金數據..."}):y?(0,a.jsx)("div",{className:"min-h-screen bg-bg-primary flex items-center justify-center",children:(0,a.jsx)("div",{className:"text-center card-apple max-w-md mx-4",children:(0,a.jsxs)("div",{className:"card-apple-content",children:[(0,a.jsx)("h2",{className:"text-lg font-semibold text-red-600 mb-4",children:"載入數據時發生錯誤"}),(0,a.jsx)("p",{className:"text-text-secondary mb-4",children:y}),(0,a.jsx)("button",{onClick:t?W:()=>I.push("/"),className:"btn-apple-primary",children:t?"重新載入":"返回登入"})]})})}):(0,a.jsxs)("div",{className:"min-h-screen bg-bg-primary",children:[(0,a.jsx)("header",{className:"card-apple border-b border-border-light fade-in-apple sticky top-0 z-10",children:(0,a.jsx)("div",{className:"px-3 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"flex justify-between items-center py-3 sm:py-6 lg:py-8",children:[(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,a.jsx)("h1",{className:"text-base sm:text-xl lg:text-2xl font-bold text-text-primary mb-1 truncate",children:"佣金計算"}),(0,a.jsx)("p",{className:"text-xs sm:text-sm text-text-secondary hidden md:block",children:"計算業務佣金、獎金及績效獎勵"}),(0,a.jsx)("p",{className:"text-xs text-orange-600 mt-1",children:"達標：月費 ≥ $6,000"})]}),(0,a.jsxs)("div",{className:"flex gap-2 ml-2 sm:ml-3 flex-shrink-0",children:[(0,a.jsx)("button",{onClick:()=>I.push("/commissions/voucher-commission"),className:"btn-apple-primary text-xs px-2 sm:px-3 py-2 bg-purple-600 hover:bg-purple-700",children:"\uD83D\uDCCA 社區券佣金"}),(0,a.jsx)("button",{onClick:()=>I.push("/dashboard"),className:"btn-apple-secondary text-xs px-2 sm:px-3 py-2",children:"返回"})]})]})})}),(0,a.jsxs)("main",{className:"px-3 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8",children:[(0,a.jsx)("div",{className:"card-apple fade-in-apple mb-4 sm:mb-6",children:(0,a.jsx)("div",{className:"card-apple-content",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-xs sm:text-sm font-medium text-text-primary mb-1 sm:mb-2",children:"介紹人："}),(0,a.jsxs)("select",{value:_,onChange:e=>j(e.target.value),className:"form-input-apple w-full text-xs sm:text-sm",children:[(0,a.jsx)("option",{value:"all",children:"全部介紹人"}),Array.from(new Set(g.map(e=>e.introducer))).filter(c.f).map(e=>(0,a.jsx)("option",{value:e,children:e},e))]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-xs sm:text-sm font-medium text-text-primary mb-1 sm:mb-2",children:"年份："}),(0,a.jsxs)("select",{value:N,onChange:e=>w(e.target.value),className:"form-input-apple w-full text-xs sm:text-sm",children:[(0,a.jsx)("option",{value:"all",children:"全部年份"}),V.map(e=>(0,a.jsxs)("option",{value:e,children:[e,"年"]},e))]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-xs sm:text-sm font-medium text-text-primary mb-1 sm:mb-2",children:"月份："}),(0,a.jsxs)("select",{value:$,onChange:e=>q(e.target.value),className:"form-input-apple w-full text-xs sm:text-sm",children:[(0,a.jsx)("option",{value:"all",children:"全部月份"}),["01","02","03","04","05","06","07","08","09","10","11","12"].map(e=>(0,a.jsxs)("option",{value:e,children:[e,"月"]},e))]})]}),(0,a.jsxs)("div",{className:"sm:col-span-2 lg:col-span-2 grid grid-cols-2 sm:flex sm:items-end gap-2 sm:space-x-2",children:[(0,a.jsx)("button",{onClick:()=>{j("all"),w("all"),q("all")},className:"btn-apple-secondary text-xs sm:text-sm py-2 sm:py-3 sm:flex-1",children:"清除篩選"}),(0,a.jsx)("button",{onClick:W,className:"btn-apple-primary text-xs sm:text-sm py-2 sm:py-3 sm:flex-1",children:"重新載入"}),(0,a.jsx)("button",{onClick:()=>{if(!P||A!==R.current)return void alert("請先完成佣金數據載入，再匯出報表");try{let e=new Map;B.forEach(t=>{e.has(t.service_month)||e.set(t.service_month,[]),e.get(t.service_month).push(t)});let t=Array.from(e.keys()).sort(),s=0,a=0,n=0,i=0,l=0,o=new Set,m=t.map(t=>{let r=e.get(t),[c,m]=t.split("-"),d=new Map;r.forEach(e=>{e.commission_amount>0&&(d.has(e.introducer)||d.set(e.introducer,[]),d.get(e.introducer).push(e))});let u=r.reduce((e,t)=>e+t.monthly_fee,0),x=r.reduce((e,t)=>e+t.monthly_hours,0),p=r.filter(e=>e.is_qualified).length,b=r.filter(e=>!e.is_qualified&&e.commission_amount>0).length,g=r.reduce((e,t)=>e+(t.commission_amount||0),0);return s=Math.round((s+u)*100)/100,a=Math.round((a+x)*100)/100,n+=p,i+=b,l=Math.round((l+g)*100)/100,Array.from(d.keys()).forEach(e=>{o.add(e)}),d.forEach((e,t)=>{e.reduce((e,t)=>e+(t.commission_amount||0),0),e.filter(e=>e.is_qualified).length,e.filter(e=>!e.is_qualified).length,e.filter(e=>1===e.month_sequence).length,e.filter(e=>e.month_sequence>1).length,e.forEach(e=>{})}),{year:c,month:m,qualifiedCustomers:p,unqualifiedCustomers:b,totalHours:x,totalFee:u,totalCommission:g,commissions:Array.from(d.entries()).map(([e,t])=>{let s=t.filter(e=>e.commission_amount>0),a=s.filter(e=>e.is_qualified),r=s.filter(e=>!e.is_qualified),n=s.reduce((e,t)=>e+t.monthly_fee,0),i=s.reduce((e,t)=>e+t.commission_amount,0),l=h.find(t=>t.introducer===e)?.first_month_commission||0;return{introducerName:e,rate:l,qualifiedCustomers:a.length,unqualifiedCustomers:r.length,totalFee:n,amount:i,customerDetails:t.map(e=>({customerName:e.customer_name,customerId:e.customer_id,hours:e.monthly_hours,fee:e.monthly_fee,isQualified:e.is_qualified,commission:e.commission_amount}))}}),allCustomers:r.map(e=>({customerName:e.customer_name,customerId:e.customer_id,voucherNumber:e.voucher_number||"",introducer:e.introducer,hours:e.monthly_hours,fee:e.monthly_fee,isQualified:e.is_qualified,commission:e.commission_amount}))}}),d=new Map,u=new Map;B.forEach(e=>{let t=`${e.introducer}-${e.customer_id}`;u.has(t)||u.set(t,{introducer:e.introducer,customer_id:e.customer_id,customer_name:e.customer_name,total_fee:0,total_commission:0,is_qualified:e.is_qualified});let s=u.get(t);s.total_fee=Math.round((s.total_fee+e.monthly_fee)*100)/100,s.total_commission=Math.round((s.total_commission+e.commission_amount)*100)/100,s.is_qualified=s.is_qualified||e.is_qualified}),u.forEach(e=>{if(e.is_qualified&&e.total_commission>0){d.has(e.introducer)||d.set(e.introducer,{introducerName:e.introducer,qualifiedCustomers:0,unqualifiedCustomers:0,totalServiceFee:0,totalCommission:0});let t=d.get(e.introducer);e.is_qualified?t.qualifiedCustomers+=1:t.unqualifiedCustomers+=1,t.totalServiceFee=Math.round((t.totalServiceFee+e.total_fee)*100)/100,t.totalCommission=Math.round((t.totalCommission+e.total_commission)*100)/100}});let x=Array.from(d.values()).sort((e,t)=>e.introducerName.localeCompare(t.introducerName,"zh-TW")),p=`
        <!DOCTYPE html>
        <html lang="zh-TW">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>佣金計算報告</title>
          <style>
            body {
              font-family: 'Microsoft JhengHei', '微軟正黑體', Arial, sans-serif;
              margin: 20px;
              font-size: 12px;
              line-height: 1.4;
            }
            
            .header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 2px solid #428bca;
              padding-bottom: 15px;
              position: relative;
            }
            
            .header h1 {
              color: #428bca;
              margin: 0;
              font-size: 24px;
            }
            
            .save-pdf-btn {
              position: absolute;
              top: 10px;
              right: 10px;
              background-color: #428bca;
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-size: 14px;
              font-weight: bold;
            }
            
            .save-pdf-btn:hover {
              background-color: #357abd;
            }
            
            .date-range {
              color: #666;
              margin-top: 10px;
              font-size: 14px;
            }
            
            .filters {
              margin-top: 10px;
              font-size: 12px;
              color: #888;
            }
            
            .month-section {
              margin-bottom: 30px;
              page-break-inside: avoid;
            }
            
            .month-header {
              background-color: #f8f9fa;
              padding: 10px;
              border-left: 4px solid #428bca;
              margin-bottom: 15px;
            }
            
            .month-title {
              font-size: 16px;
              font-weight: bold;
              color: #428bca;
              margin: 0;
            }
            
            .month-summary {
              display: flex;
              justify-content: space-around;
              background-color: #e7f3ff;
              padding: 10px;
              border-radius: 5px;
              margin: 10px 0;
            }
            
            .summary-item {
              text-align: center;
            }
            
            .summary-label {
              font-weight: bold;
              color: #428bca;
              display: block;
              font-size: 11px;
            }
            
            .summary-value {
              font-size: 14px;
              font-weight: bold;
              color: #333;
            }
            
            .commissions-table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 10px;
            }
            
            .commissions-table th,
            .commissions-table td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            
            .commissions-table th {
              background-color: #428bca;
              color: white;
              font-weight: bold;
            }
            
            .commissions-table tr:nth-child(even) {
              background-color: #f9f9f9;
            }
            
            .customer-details {
              margin: 20px 0;
            }
            
            .customer-details h4 {
              color: #428bca;
              border-bottom: 1px solid #ddd;
              padding-bottom: 5px;
              margin-bottom: 10px;
            }
            
            .customer-table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
              font-size: 11px;
            }
            
            .customer-table th,
            .customer-table td {
              border: 1px solid #ddd;
              padding: 6px;
              text-align: left;
            }
            
            .customer-table th {
              background-color: #f5f5f5;
              font-weight: bold;
              color: #333;
            }
            
            .customer-table tr.qualified {
              background-color: #e8f5e8;
            }
            
            .customer-table tr.not-qualified {
              background-color: #ffe8e8;
            }
            
            .number {
              text-align: right;
            }
            
            .introducer-summary-table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            
            .introducer-summary-table th,
            .introducer-summary-table td {
              border: 1px solid #ddd;
              padding: 10px;
              text-align: left;
            }
            
            .introducer-summary-table th {
              background-color: #428bca;
              color: white;
              font-weight: bold;
            }
            
            .introducer-summary-table tr:nth-child(even) {
              background-color: #f9f9f9;
            }
            
            .overall-summary {
              margin-top: 40px;
              padding: 20px;
              border: 2px solid #428bca;
              background-color: #f8f9fa;
              page-break-inside: avoid;
            }
            
            .overall-summary h2 {
              text-align: center;
              color: #428bca;
              margin-bottom: 20px;
            }
            
            .total-stats {
              display: flex;
              justify-content: space-around;
              margin-top: 15px;
            }
            
            .total-stat {
              text-align: center;
            }
            
            .total-stat-label {
              font-weight: bold;
              color: #428bca;
              display: block;
              margin-bottom: 5px;
            }
            
            .total-stat-value {
              font-size: 18px;
              font-weight: bold;
              color: #333;
            }
            
            @media print {
              body { margin: 15px; }
              .month-section { page-break-inside: avoid; }
              .overall-summary { page-break-inside: avoid; }
              .save-pdf-btn { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <button class="save-pdf-btn" data-intranet-print>儲存為PDF</button>
            <h1>佣金計算報告</h1>
            <div class="date-range">
              生成日期: ${new Date().toLocaleDateString("zh-TW")}
            </div>
            <div class="filters">
              ${"all"!==_?`介紹人: ${_} | `:""}${"all"!==N?`年份: ${N} | `:""}${"all"!==$?`月份: ${$}`:""}
            </div>
          </div>
          
          ${m.map(e=>`
            <div class="month-section">
              <div class="month-header">
                <h3 class="month-title">${e.year}年${e.month}月 佣金統計</h3>
              </div>
              
              <div class="month-summary">
                <div class="summary-item">
                  <span class="summary-label">達標客戶</span>
                  <span class="summary-value">${e.qualifiedCustomers}</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">不達標客戶</span>
                  <span class="summary-value">${e.unqualifiedCustomers}</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">總服務時數</span>
                  <span class="summary-value">${e.totalHours.toFixed(1)}</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">總服務金額</span>
                  <span class="summary-value">$${e.totalFee.toLocaleString()}</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">總佣金</span>
                  <span class="summary-value">$${e.totalCommission.toLocaleString()}</span>
                </div>
              </div>
              
              <div class="customer-details">
                <h4>客戶明細</h4>
                <table class="customer-table">
                  <thead>
                    <tr>
                      <th>客戶編號</th>
                      <th>客戶姓名</th>
                      <th>CCSV 號碼</th>
                      <th>介紹人</th>
                      <th>服務時數</th>
                      <th>服務費用</th>
                      <th>達標狀態</th>
                      <th>佣金金額</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${e.allCustomers.map(e=>`
                      <tr class="${e.isQualified?"qualified":"not-qualified"}">
                        <td>${e.customerId}</td>
                        <td>${e.customerName}</td>
                        <td>${e.voucherNumber||"-"}</td>
                        <td>${(0,c.y)(e.introducer,"introducer")}</td>
                        <td class="number">${e.hours.toFixed(1)} 小時</td>
                        <td class="number">$${e.fee.toLocaleString()}</td>
                        <td style="text-align: center;">${e.isQualified?"✓ 達標":"✗ 不達標"}</td>
                        <td class="number">${e.commission>0?"$"+e.commission.toLocaleString():"$0"}</td>
                      </tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>
              
              ${e.commissions.length>0?`
                <div class="customer-details">
                  <h4>介紹人佣金匯總</h4>
                  <table class="commissions-table">
                    <thead>
                      <tr>
                        <th>介紹人</th>
                        <th>達標客戶</th>
                        <th>不達標客戶</th>
                        <th>總服務金額</th>
                        <th>佣金金額</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${e.commissions.map(e=>`
                        <tr>
                          <td>${(0,c.y)(e.introducerName,"introducer")}</td>
                          <td class="number">${e.qualifiedCustomers}</td>
                          <td class="number">${e.unqualifiedCustomers}</td>
                          <td class="number">$${e.totalFee.toLocaleString()}</td>
                          <td class="number">$${e.amount.toLocaleString()}</td>
                        </tr>
                      `).join("")}
                    </tbody>
                  </table>
                </div>
              `:'<p style="text-align: center; color: #666; font-style: italic;">本月無佣金記錄</p>'}
            </div>
          `).join("")}
          
          <div class="overall-summary">
            <h2>總結報告</h2>
            
            <h3 style="color: #428bca; margin-bottom: 15px;">各介紹人統計明細</h3>
            <table class="introducer-summary-table">
              <thead>
                <tr>
                  <th>介紹人</th>
                  <th>達標客戶數</th>
                  <th>不達標客戶數</th>
                  <th>總服務金額</th>
                  <th>總佣金金額</th>
                </tr>
              </thead>
              <tbody>
                ${x.map(e=>`
                  <tr>
                    <td>${(0,c.y)(e.introducerName,"introducer")}</td>
                    <td class="number">${e.qualifiedCustomers}</td>
                    <td class="number">${e.unqualifiedCustomers}</td>
                    <td class="number">$${e.totalServiceFee.toLocaleString()}</td>
                    <td class="number">$${e.totalCommission.toLocaleString()}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
            
            <h3 style="color: #428bca; margin: 30px 0 15px 0;">整體統計總計</h3>
            <div class="total-stats">
              <div class="total-stat">
                <span class="total-stat-label">介紹人總數</span>
                <span class="total-stat-value">${o.size}</span>
              </div>
              <div class="total-stat">
                <span class="total-stat-label">總達標客戶</span>
                <span class="total-stat-value">${n}</span>
              </div>
              <div class="total-stat">
                <span class="total-stat-label">總不達標客戶</span>
                <span class="total-stat-value">${i}</span>
              </div>
              <div class="total-stat">
                <span class="total-stat-label">總服務時數</span>
                <span class="total-stat-value">${a.toFixed(1)}</span>
              </div>
              <div class="total-stat">
                <span class="total-stat-label">總服務金額</span>
                <span class="total-stat-value">$${s.toLocaleString()}</span>
              </div>
              <div class="total-stat">
                <span class="total-stat-label">總佣金</span>
                <span class="total-stat-value">$${l.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,b=window.open("","_blank","width=1200,height=800,scrollbars=yes,resizable=yes");b?(b.document.write((0,r.q)(p)),b.document.close()):alert("請允許彈出視窗以顯示報告")}catch(e){alert("PDF導出失敗，請稍後再試")}},disabled:!P,className:"btn-apple-primary col-span-2 sm:col-span-1 sm:flex-1 bg-green-600 hover:bg-green-700 text-xs sm:text-sm py-2 sm:py-3",children:"\uD83D\uDCC4 導出PDF"}),(0,a.jsx)("button",{onClick:()=>{let e=new Map(h.map(e=>[e.introducer,e]));E(D.map(t=>e.get(t)||{introducer:t,first_month_commission:0,subsequent_month_commission:0,voucher_commission_percentage:null})),S(!0)},className:"btn-apple-secondary col-span-2 sm:col-span-1 sm:flex-1 text-xs sm:text-sm py-2 sm:py-3",children:"⚙️ 佣金設定"})]})]})})}),C&&(0,a.jsxs)("div",{className:"card-apple mb-6 fade-in-apple",children:[(0,a.jsxs)("div",{className:"bg-bg-secondary px-4 sm:px-6 py-4 border-b border-border-light rounded-t-apple flex justify-between items-center",children:[(0,a.jsx)("h2",{className:"text-lg font-semibold text-text-primary",children:"介紹人佣金費率設定"}),(0,a.jsx)("button",{onClick:()=>S(!1),className:"text-text-secondary hover:text-text-primary",children:"✕"})]}),(0,a.jsxs)("div",{className:"p-4 sm:p-6",children:[(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full text-sm",children:[(0,a.jsx)("thead",{className:"bg-bg-secondary",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"px-4 py-3 text-left font-medium text-text-secondary",children:"介紹人"}),(0,a.jsx)("th",{className:"px-4 py-3 text-center font-medium text-text-secondary",children:"首月佣金 ($)"}),(0,a.jsx)("th",{className:"px-4 py-3 text-center font-medium text-text-secondary",children:"後續月份佣金 ($)"}),(0,a.jsx)("th",{className:"px-4 py-3 text-center font-medium text-text-secondary",children:"社區券佣金 (%)"})]})}),(0,a.jsx)("tbody",{className:"divide-y divide-border-light",children:k.map((e,t)=>(0,a.jsxs)("tr",{className:"hover:bg-bg-secondary transition-colors",children:[(0,a.jsx)("td",{className:"px-4 py-3 font-medium text-text-primary",children:(0,c.y)(e.introducer,"introducer")}),(0,a.jsx)("td",{className:"px-4 py-3 text-center",children:(0,a.jsx)("input",{type:"number",value:e.first_month_commission||0,onChange:e=>{let s=[...k];s[t].first_month_commission=parseFloat(e.target.value)||0,E(s)},className:"form-input-apple w-24 text-center text-sm",min:"0"})}),(0,a.jsx)("td",{className:"px-4 py-3 text-center",children:(0,a.jsx)("input",{type:"number",value:e.subsequent_month_commission||0,onChange:e=>{let s=[...k];s[t].subsequent_month_commission=parseFloat(e.target.value)||0,E(s)},className:"form-input-apple w-24 text-center text-sm",min:"0"})}),(0,a.jsx)("td",{className:"px-4 py-3 text-center",children:(0,a.jsx)("input",{type:"number",value:e.voucher_commission_percentage??"",onChange:e=>{let s=[...k];s[t].voucher_commission_percentage=e.target.value?parseFloat(e.target.value):null,E(s)},className:"form-input-apple w-24 text-center text-sm",placeholder:"不設定",min:"0",max:"100",step:"0.5"})})]},e.introducer))})]})}),(0,a.jsxs)("div",{className:"mt-4 flex justify-end gap-3",children:[(0,a.jsx)("button",{onClick:()=>S(!1),className:"btn-apple-secondary text-sm py-2 px-4",disabled:M,children:"取消"}),(0,a.jsx)("button",{onClick:async()=>{F(!0);try{let{error:e}=await l.supabase.rpc("save_commission_rates",{p_rates:k});if(e)throw e;alert("佣金費率已保存！"),S(!1),await W()}catch(e){alert("保存失敗，請重試")}finally{F(!1)}},className:"btn-apple-primary text-sm py-2 px-4",disabled:M,children:M?"保存中...":"保存設定"})]}),(0,a.jsxs)("div",{className:"mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800",children:[(0,a.jsx)("p",{children:(0,a.jsx)("strong",{children:"說明："})}),(0,a.jsxs)("ul",{className:"list-disc list-inside mt-1 space-y-1",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"首月/後續月份佣金："}),"固定金額佣金（$800, $700 等）"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"社區券佣金 (%)："}),"按社區券費率計算的百分比佣金（例如 15% = 服務費 \xd7 15%）"]})]})]})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6",children:[(0,a.jsx)("div",{className:"card-apple fade-in-apple",style:{animationDelay:"0.1s"},children:(0,a.jsxs)("div",{className:"card-apple-content text-center py-3 sm:py-4",children:[(0,a.jsx)("h3",{className:"text-xs sm:text-sm font-medium text-text-secondary mb-1 sm:mb-2",children:"總佣金"}),(0,a.jsx)("p",{className:"text-sm sm:text-xl font-bold text-mingcare-green",children:H(G)})]})}),(0,a.jsx)("div",{className:"card-apple fade-in-apple",style:{animationDelay:"0.2s"},children:(0,a.jsxs)("div",{className:"card-apple-content text-center py-3 sm:py-4",children:[(0,a.jsx)("h3",{className:"text-xs sm:text-sm font-medium text-text-secondary mb-1 sm:mb-2",children:"介紹人數量"}),(0,a.jsx)("p",{className:"text-sm sm:text-xl font-bold text-primary",children:J.length})]})}),(0,a.jsx)("div",{className:"card-apple fade-in-apple",style:{animationDelay:"0.3s"},children:(0,a.jsxs)("div",{className:"card-apple-content text-center py-3 sm:py-4",children:[(0,a.jsx)("h3",{className:"text-xs sm:text-sm font-medium text-text-secondary mb-1 sm:mb-2",children:"首月佣金"}),(0,a.jsx)("p",{className:"text-sm sm:text-xl font-bold text-mingcare-purple",children:J.reduce((e,t)=>e+t.first_month_count,0)})]})}),(0,a.jsx)("div",{className:"card-apple fade-in-apple",style:{animationDelay:"0.4s"},children:(0,a.jsxs)("div",{className:"card-apple-content text-center py-3 sm:py-4",children:[(0,a.jsx)("h3",{className:"text-xs sm:text-sm font-medium text-text-secondary mb-1 sm:mb-2",children:"後續月份"}),(0,a.jsx)("p",{className:"text-sm sm:text-xl font-bold text-mingcare-orange",children:J.reduce((e,t)=>e+t.subsequent_month_count,0)})]})})]}),(0,a.jsx)("div",{className:"space-y-4 sm:space-y-6",children:J.map((e,t)=>{let s;return(0,a.jsxs)("div",{className:"card-apple fade-in-apple",style:{animationDelay:`${.1*(t+1)}s`},children:[(0,a.jsx)("div",{className:"bg-bg-secondary px-3 sm:px-6 py-3 sm:py-4 border-b border-border-light rounded-t-apple",children:(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-start",children:[(0,a.jsxs)("div",{className:"mb-2 sm:mb-0",children:[(0,a.jsxs)("h2",{className:"text-base sm:text-lg font-semibold text-text-primary mb-1",children:["介紹人：",(0,c.y)(e.introducer,"introducer")]}),(s=h.find(t=>t.introducer===e.introducer))?(0,a.jsxs)("div",{className:"text-xs sm:text-sm text-text-secondary",children:[(0,a.jsxs)("span",{className:"inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 text-xs",children:["首月: ",H(s.first_month_commission)]}),(0,a.jsxs)("span",{className:"inline-block bg-green-100 text-green-800 px-2 py-1 rounded",children:["後續: ",H(s.subsequent_month_commission)]})]}):(0,a.jsx)("div",{className:"text-sm text-red-600",children:"未設定佣金率"})]}),(0,a.jsxs)("div",{className:"text-right",children:[(0,a.jsxs)("p",{className:"text-lg font-bold text-mingcare-green",children:["總佣金：",H(e.customers.reduce((e,t)=>e+t.commission_amount,0))]}),(0,a.jsxs)("p",{className:"text-sm text-text-secondary",children:["首月：",e.first_month_count," | 後續：",e.subsequent_month_count]})]})]})}),(0,a.jsx)("div",{className:"hidden sm:block overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full text-sm",children:[(0,a.jsx)("thead",{className:"bg-bg-secondary",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"px-4 py-3 text-left font-medium text-text-secondary",children:"客戶編號"}),(0,a.jsx)("th",{className:"px-4 py-3 text-left font-medium text-text-secondary",children:"客戶姓名"}),(0,a.jsx)("th",{className:"px-4 py-3 text-left font-medium text-text-secondary",children:"服務月份"}),(0,a.jsx)("th",{className:"px-4 py-3 text-right font-medium text-text-secondary",children:"服務時數"}),(0,a.jsx)("th",{className:"px-4 py-3 text-right font-medium text-text-secondary",children:"服務費用"}),(0,a.jsx)("th",{className:"px-4 py-3 text-center font-medium text-text-secondary",children:"月份序號"}),(0,a.jsx)("th",{className:"px-4 py-3 text-right font-medium text-text-secondary",children:"佣金金額"})]})}),(0,a.jsx)("tbody",{className:"divide-y divide-border-light",children:e.customers.map((e,t)=>(0,a.jsxs)("tr",{className:"hover:bg-bg-secondary transition-colors",children:[(0,a.jsx)("td",{className:"px-4 py-3 text-text-primary",children:e.customer_id}),(0,a.jsx)("td",{className:"px-4 py-3 text-text-primary",children:e.customer_name}),(0,a.jsx)("td",{className:"px-4 py-3 text-text-secondary",children:U(e.service_month)}),(0,a.jsxs)("td",{className:"px-4 py-3 text-right text-text-secondary",children:[e.monthly_hours.toFixed(1),"h"]}),(0,a.jsx)("td",{className:"px-4 py-3 text-right text-text-secondary",children:H(e.monthly_fee)}),(0,a.jsx)("td",{className:"px-4 py-3 text-center",children:e.is_qualified?(0,a.jsx)("span",{className:`px-2 py-1 rounded-apple-sm text-xs font-medium ${1===e.month_sequence?"bg-blue-100 text-blue-800":"bg-green-100 text-green-800"}`,children:1===e.month_sequence?"首月":`第${e.month_sequence}月`}):(0,a.jsx)("span",{className:"px-2 py-1 rounded-apple-sm text-xs font-medium bg-red-100 text-red-800",children:"不達標"})}),(0,a.jsx)("td",{className:"px-4 py-3 text-right font-semibold",children:e.commission_amount>0?(0,a.jsx)("span",{className:"text-mingcare-green",children:H(e.commission_amount)}):(0,a.jsx)("span",{className:"text-text-secondary",children:"$0"})})]},`${e.customer_id}-${e.service_month}`))})]})}),(0,a.jsx)("div",{className:"sm:hidden space-y-3 p-3",children:e.customers.map((e,t)=>(0,a.jsxs)("div",{className:"bg-white border border-border-light rounded-xl p-3 space-y-2",children:[(0,a.jsxs)("div",{className:"flex justify-between items-start",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"font-medium text-text-primary text-sm",children:e.customer_name}),(0,a.jsx)("div",{className:"text-xs text-text-secondary",children:e.customer_id})]}),(0,a.jsx)("div",{className:"text-right",children:e.is_qualified?(0,a.jsx)("span",{className:`px-2 py-1 rounded text-xs font-medium ${1===e.month_sequence?"bg-blue-100 text-blue-800":"bg-green-100 text-green-800"}`,children:1===e.month_sequence?"首月":`第${e.month_sequence}月`}):(0,a.jsx)("span",{className:"px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800",children:"不達標"})})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-text-secondary",children:"服務月份："}),(0,a.jsx)("span",{className:"text-text-primary",children:U(e.service_month)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-text-secondary",children:"服務時數："}),(0,a.jsxs)("span",{className:"text-text-primary",children:[e.monthly_hours.toFixed(1),"h"]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-text-secondary",children:"服務費用："}),(0,a.jsx)("span",{className:"text-text-primary",children:H(e.monthly_fee)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-text-secondary",children:"佣金金額："}),e.commission_amount>0?(0,a.jsx)("span",{className:"font-semibold text-mingcare-green",children:H(e.commission_amount)}):(0,a.jsx)("span",{className:"text-text-secondary",children:"$0"})]})]})]},`${e.customer_id}-${e.service_month}`))})]},e.introducer)})}),0===J.length&&!d&&(0,a.jsx)("div",{className:"card-apple fade-in-apple",children:(0,a.jsxs)("div",{className:"card-apple-content text-center py-12",children:[(0,a.jsx)("div",{className:"mx-auto w-16 h-16 bg-bg-tertiary rounded-full flex items-center justify-center mb-4",children:(0,a.jsx)("svg",{className:"h-8 w-8 text-text-tertiary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})}),(0,a.jsx)("h3",{className:"text-lg font-semibold text-text-primary mb-2",children:"暫無符合條件的佣金數據"}),(0,a.jsx)("p",{className:"text-text-secondary",children:"請檢查是否有符合計算條件的客戶和服務記錄"})]})})]})]})}},3556:(e,t,s)=>{"use strict";function a(e){return"Joe Cheung"!==e}function r(e,t){return a(e)?e??"":"handler"===t?"已停用經手人":"introducer"===t?"已停用介紹人":"已停用負責人"}s.d(t,{f:()=>a,y:()=>r})},3861:(e,t,s)=>{"use strict";s.d(t,{q:()=>r});var a=s(4065);function r(e){let t=a.A.sanitize(e,{WHOLE_DOCUMENT:!0,RETURN_DOM:!0,USE_PROFILES:{html:!0},FORBID_TAGS:["base","embed","form","iframe","link","meta","object","script","template"],FORBID_ATTR:["href","srcset","target","formaction"]}),s=t.ownerDocument;if(1!==t.nodeType||!s)throw Error("Unable to prepare the print report");let r=t.querySelector("head"),n=t.querySelector("body");if(!r||!n)throw Error("Unable to prepare the print report");let i=Array.from(crypto.getRandomValues(new Uint8Array(16)),e=>e.toString(16).padStart(2,"0")).join(""),l=s.createElement("meta");l.httpEquiv="Content-Security-Policy",l.content=`default-src 'none'; script-src 'nonce-${i}'; style-src 'unsafe-inline'; img-src 'self' data:; base-uri 'none'; form-action 'none'`,r.prepend(l);let o=s.createElement("script");return o.setAttribute("nonce",i),o.textContent=`document.addEventListener('click', event => {
    if (event.target instanceof Element && event.target.closest('[data-intranet-print]')) window.print();
  });`,n.append(o),`<!doctype html>${t.outerHTML}`}},5246:(e,t,s)=>{"use strict";async function a(e,t=500){if(!Number.isInteger(t)||t<1)throw Error("無效的分頁大小");let s=[];for(;;){let{data:a,error:r}=await e(s.length,s.length+t-1);if(r)throw Error(r.message||"載入資料失敗");if(!a?.length)return s;s.push(...a)}}s.d(t,{B:()=>a})},5802:(e,t,s)=>{"use strict";s.d(t,{EV:()=>r,zg:()=>a});function a(){return!0}function r(){0;return"https://yyjhgruyieldrcpxauuu.supabase.co/functions/v1/intranet-web"}},7737:(e,t,s)=>{Promise.resolve().then(s.bind(s,912))},8813:(e,t,s)=>{"use strict";s.d(t,{Ay:()=>i});var a=s(9650);s(2394);var r=s(5277),n=s(676);function i({message:e="載入中...",showProgress:t=!0}){return(0,a.jsxs)("div",{className:"loading-screen",children:[(0,a.jsx)("div",{className:"loading-bg-glow loading-bg-glow-1"}),(0,a.jsx)("div",{className:"loading-bg-glow loading-bg-glow-2"}),(0,a.jsx)("div",{className:"loading-bg-glow loading-bg-glow-3"}),(0,a.jsxs)("div",{className:"loading-logo-container",children:[(0,a.jsx)("div",{className:"loading-ring loading-ring-outer"}),(0,a.jsx)("div",{className:"loading-ring loading-ring-middle"}),(0,a.jsx)("div",{className:"loading-ring loading-ring-inner"}),(0,a.jsx)("div",{className:"loading-logo",children:(0,a.jsx)(r.A,{src:(0,n.O)("images/mingcare-logo.png"),alt:"明家護理服務",width:120,height:120,className:"loading-logo-image",priority:!0})}),(0,a.jsx)("div",{className:"loading-pulse"})]}),(0,a.jsxs)("div",{className:"loading-text-container",children:[(0,a.jsx)("h2",{className:"loading-title",children:"明家護理服務"}),(0,a.jsx)("p",{className:"loading-subtitle",children:"MingCare Intranet"}),t&&(0,a.jsxs)("div",{className:"loading-progress",children:[(0,a.jsx)("div",{className:"loading-progress-bar",children:(0,a.jsx)("div",{className:"loading-progress-fill"})}),(0,a.jsx)("p",{className:"loading-message",children:e})]})]}),(0,a.jsxs)("div",{className:"loading-dots",children:[(0,a.jsx)("span",{className:"loading-dot",style:{animationDelay:"0s"}}),(0,a.jsx)("span",{className:"loading-dot",style:{animationDelay:"0.2s"}}),(0,a.jsx)("span",{className:"loading-dot",style:{animationDelay:"0.4s"}})]})]})}},8964:(e,t,s)=>{"use strict";s.d(t,{Jo:()=>n,L8:()=>l,Ll:()=>a,Mb:()=>r,fN:()=>c,xO:()=>o});let a=!1,r="preview@mingcare.local",n="MingcarePreview2026!",i="mingcare_local_preview_user";function l(e,t){return!!a&&e.trim().toLowerCase()===r&&t===n&&(sessionStorage.setItem(i,r),!0)}function o(){return a&&sessionStorage.getItem(i)===r?{id:"local-preview",email:r}:null}function c(){sessionStorage.removeItem(i)}}},e=>{e.O(0,[1466,4065,4664,6384,6756,7358],()=>e(e.s=7737)),_N_E=e.O()}]);