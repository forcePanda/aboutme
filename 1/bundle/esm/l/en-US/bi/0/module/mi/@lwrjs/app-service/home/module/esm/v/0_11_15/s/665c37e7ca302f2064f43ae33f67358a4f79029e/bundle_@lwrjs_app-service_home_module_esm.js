import{init as F,load as I}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2FesmLoader%2Fv%2F0_11_15/s/c077f42ad39e8aeb3596db3d63d436f4bef9ca37/bundle_lwr_esmLoader.js";import"/1/bundle/esm/l/en-US/bi/0/module/mi/%40lwc%2Fsynthetic-shadow%2Fv%2F5_3_0/s/7c2f3106c4a377b0f496f9346c30b52685455732/bundle_@lwc_synthetic-shadow.js";import{logOperationStart as s,logOperationEnd as a}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2Fprofiler%2Fv%2F0_11_15/s/1f843100d983ed9b3d5c420f1ed2c364bd664155/bundle_lwr_profiler.js";import{hydrateComponent as T,createElement as E}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F5_3_0/s/ec58c8cccb310e40e4cf8092c22953402ae68ebe/bundle_lwc.js";const L=globalThis.LWR;globalThis.LWR.define?globalThis.LWR=Object.freeze({define:globalThis.LWR.define}):delete globalThis.LWR;function v(){return L}const R="lwr.bootstrap.",_=`${R}end`,h="lwr.bootstrap.init",l="lwr.bootstrap.init.module";function S(e,t,o){T(e,t,o)}function w(e,t){return E(e,{is:t})}function g(e){return e.replace(/\/v\/[a-zA-Z0-9-_.]+$/,"").replace("/","-").replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const x=/-([a-z])/g;function A(e){return e.replace(x,t=>t[1].toUpperCase())}function O(e,t={}){if(typeof customElements=="undefined"||typeof document=="undefined"){s({id:_});return}s({id:h});let o=0;for(const[i,p]of e){const c=g(i);if(!document.body.querySelector(c)){s({id:l,specifier:i,specifierIndex:++o});const n=w(c,p),r=document.querySelector("[lwr-root]");r?r.appendChild(n):document.body.appendChild(n),a({id:l,specifier:i,specifierIndex:o,metadata:{renderMode:"spa"}});continue}const y=document.querySelectorAll(c);for(const n of y){s({id:l,specifier:i,specifierIndex:++o});const r=n.dataset.lwrPropsId;if(r){S(n,p,t[r]||{}),a({id:l,specifier:i,specifierIndex:o,metadata:{renderMode:"ssr"}});continue}const d=w(c,p);for(const{name:f,value:u}of n.attributes){d.setAttribute(f,u);const b=A(f);b in d&&(d[b]=u)}for(;n.childNodes.length>0;)d.appendChild(n.childNodes[0]);const m=n.parentElement;m&&m.replaceChild(d,n),a({id:l,specifier:i,specifierIndex:o,metadata:{renderMode:"csr"}})}}a({id:h}),s({id:_})}const C=v(),{imports:N,index:P,importMappings:j,endpoints:M}=C;F({imports:N,index:P,importMappings:j,endpoints:M});const{rootComponents:U,serverData:W}=C;Promise.all(U.map(async e=>{const t=g(e);return I(e,"@lwrjs/app-service/home/module/esm/v/0_11_15").then(({default:o})=>{O([[t,o]],W)})}));
