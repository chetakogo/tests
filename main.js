(()=>{"use strict";var e={p:""};class s{constructor(){this.list=null}static get list(){return{"American Express":"34,37","Diners Club International":"30,36,38","Discover Card":"60",JCB:"31,35",MIR:"22",Mastercard:"51,52,53,54,55",Visa:"40,41,42,43,44,45,46,47,48,49"}}}const t=new class{constructor(){this.paySystem=document.querySelector(".pay_system"),this.message=document.querySelector(".message"),this.cardNumber=document.querySelector("[name=card_number]"),this.widget=document.querySelector(".widget"),this.form=document.querySelector(".check_form form")}drawUi(){this.cardNumber.value=""}drawCardImages(e){e.forEach((e=>{const s=document.createElement("img");s.src=`./assets/${e.toLowerCase().replaceAll(" ","")}.gif`,s.classList.add("opacity_img"),s.classList.add("head_img"),s.id=`${e.toLowerCase().replaceAll(" ","")}`,this.paySystem.appendChild(s)}))}getCardNumber(){return this.cardNumber.value.split(" ").join("")}showMessage(e){this.message.innerHTML=`${e}`}showPaySystem(e){const s=`${e.toLowerCase().replaceAll(" ","")}`;document.getElementById(s).classList.remove("opacity_img")}clear(){this.message.innerHTML="",this.message.className="message",[...this.paySystem.children].forEach(((e,s)=>{this.paySystem.children[s].classList.add("opacity_img")}))}},i=new class{constructor(e){this.gui=e,this.paySystemsList=null}init(){this.gui.drawUi(),this.fetchPaySystems(),this.gui.form.addEventListener("submit",(e=>{this.gui.clear(),this.checkNumber(e),this.identifyPaySystem(e)}))}checkNumber(e){e.preventDefault();const s=this.gui.getCardNumber().replaceAll(",","");if(`${s}`.length<8)return this.gui.showMessage("Minimum 8 digits"),void this.gui.message.classList.add("invalid");const t=function(e){const s=e.replace(/\D/g,"");let t=0,i=!1;for(let e=s.length-1;e>=0;e-=1){let a=parseInt(s[e],10);i&&(a*=2)>9&&(a-=9),i=!i,t+=a}return t%10}(s);let i;i=0===t?{message:"card is valid",class:"valid"}:{message:"card isnt valid",class:"invalid"},this.gui.message.classList.add(i.class),this.gui.showMessage(i.message)}identifyPaySystem(e){e.preventDefault();const t=this.gui.getCardNumber(),i=function(e,s){const t=s.replace(/\s/g,"");let i;for(const s in e)if(Object.hasOwnProperty.call(e,s)){const a=e[s].split(",");for(const e of a)t.slice(0,e.length)===e&&(i=s)}return i}(s.list,t);i&&this.gui.showPaySystem(i)}fetchPaySystems(){const e=function(e){const s=[];for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.push(t);return s}(s.list);this.gui.drawCardImages(e)}}(t);i.init();e.p,e.p,e.p,e.p,e.p,e.p,e.p})();