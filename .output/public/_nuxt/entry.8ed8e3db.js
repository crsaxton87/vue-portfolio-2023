function su(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function da(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Oe(r)?Mw(r):da(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Oe(t))return t;if(Ae(t))return t}}const Pw=/;(?![^(]*\))/g,xw=/:([^]+)/,Lw=/\/\*.*?\*\//gs;function Mw(t){const e={};return t.replace(Lw,"").split(Pw).forEach(n=>{if(n){const r=n.split(xw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function pa(t){let e="";if(Oe(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=pa(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function GD(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Oe(e)&&(t.class=pa(e)),n&&(t.style=da(n)),t}const Fw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uw=su(Fw);function Dp(t){return!!t||t===""}const QD=t=>Oe(t)?t:t==null?"":Z(t)||Ae(t)&&(t.toString===Lp||!ie(t.toString))?JSON.stringify(t,Pp,2):String(t),Pp=(t,e)=>e&&e.__v_isRef?Pp(t,e.value):Br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:xp(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!Z(e)&&!Mp(e)?String(e):e,Ie={},Vr=[],Mt=()=>{},$w=()=>!1,Vw=/^on[^a-z]/,bi=t=>Vw.test(t),iu=t=>t.startsWith("onUpdate:"),Qe=Object.assign,ou=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bw=Object.prototype.hasOwnProperty,ge=(t,e)=>Bw.call(t,e),Z=Array.isArray,Br=t=>Ti(t)==="[object Map]",xp=t=>Ti(t)==="[object Set]",jw=t=>Ti(t)==="[object RegExp]",ie=t=>typeof t=="function",Oe=t=>typeof t=="string",au=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",cu=t=>Ae(t)&&ie(t.then)&&ie(t.catch),Lp=Object.prototype.toString,Ti=t=>Lp.call(t),Hw=t=>Ti(t).slice(8,-1),Mp=t=>Ti(t)==="[object Object]",lu=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$s=su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qw=/-(\w)/g,Yt=ga(t=>t.replace(qw,(e,n)=>n?n.toUpperCase():"")),Kw=/\B([A-Z])/g,br=ga(t=>t.replace(Kw,"-$1").toLowerCase()),ma=ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),fc=ga(t=>t?`on${ma(t)}`:""),Zs=(t,e)=>!Object.is(t,e),jr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Oo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Qc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Fp=t=>{const e=Oe(t)?Number(t):NaN;return isNaN(e)?t:e};let Yh;const zw=()=>Yh||(Yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Et;class Up{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function $p(t){return new Up(t)}function Ww(t,e=Et){e&&e.active&&e.effects.push(t)}function Vp(){return Et}function Gw(t){Et&&Et.cleanups.push(t)}const uu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Bp=t=>(t.w&jn)>0,jp=t=>(t.n&jn)>0,Qw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=jn},Jw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Bp(s)&&!jp(s)?s.delete(t):e[n++]=s,s.w&=~jn,s.n&=~jn}e.length=n}},Do=new WeakMap;let Os=0,jn=1;const Jc=30;let Pt;const lr=Symbol(""),Yc=Symbol("");class hu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ww(this,r)}run(){if(!this.active)return this.fn();let e=Pt,n=xn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Pt,Pt=this,xn=!0,jn=1<<++Os,Os<=Jc?Qw(this):Xh(this),this.fn()}finally{Os<=Jc&&Jw(this),jn=1<<--Os,Pt=this.parent,xn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pt===this?this.deferStop=!0:this.active&&(Xh(this),this.onStop&&this.onStop(),this.active=!1)}}function Xh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let xn=!0;const Hp=[];function ps(){Hp.push(xn),xn=!1}function gs(){const t=Hp.pop();xn=t===void 0?!0:t}function mt(t,e,n){if(xn&&Pt){let r=Do.get(t);r||Do.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=uu()),qp(s)}}function qp(t,e){let n=!1;Os<=Jc?jp(t)||(t.n|=jn,n=!Bp(t)):n=!t.has(Pt),n&&(t.add(Pt),Pt.deps.push(t))}function un(t,e,n,r,s,i){const o=Do.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?lu(n)&&a.push(o.get("length")):(a.push(o.get(lr)),Br(t)&&a.push(o.get(Yc)));break;case"delete":Z(t)||(a.push(o.get(lr)),Br(t)&&a.push(o.get(Yc)));break;case"set":Br(t)&&a.push(o.get(lr));break}if(a.length===1)a[0]&&Xc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Xc(uu(c))}}function Xc(t,e){const n=Z(t)?t:[...t];for(const r of n)r.computed&&Zh(r);for(const r of n)r.computed||Zh(r)}function Zh(t,e){(t!==Pt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Yw(t,e){var n;return(n=Do.get(t))===null||n===void 0?void 0:n.get(e)}const Xw=su("__proto__,__v_isRef,__isVue"),Kp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(au)),Zw=fu(),e_=fu(!1,!0),t_=fu(!0),ef=n_();function n_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=he(this);for(let i=0,o=this.length;i<o;i++)mt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(he)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ps();const r=he(this)[e].apply(this,n);return gs(),r}}),t}function r_(t){const e=he(this);return mt(e,"has",t),e.hasOwnProperty(t)}function fu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?w_:Jp:e?Qp:Gp).get(r))return r;const o=Z(r);if(!t){if(o&&ge(ef,s))return Reflect.get(ef,s,i);if(s==="hasOwnProperty")return r_}const a=Reflect.get(r,s,i);return(au(s)?Kp.has(s):Xw(s))||(t||mt(r,"get",s),e)?a:Ne(a)?o&&lu(s)?a:a.value:Ae(a)?t?Yp(a):Ut(a):a}}const s_=zp(),i_=zp(!0);function zp(t=!1){return function(n,r,s,i){let o=n[r];if(pr(o)&&Ne(o)&&!Ne(s))return!1;if(!t&&(!Po(s)&&!pr(s)&&(o=he(o),s=he(s)),!Z(n)&&Ne(o)&&!Ne(s)))return o.value=s,!0;const a=Z(n)&&lu(r)?Number(r)<n.length:ge(n,r),c=Reflect.set(n,r,s,i);return n===he(i)&&(a?Zs(s,o)&&un(n,"set",r,s):un(n,"add",r,s)),c}}function o_(t,e){const n=ge(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&un(t,"delete",e,void 0),r}function a_(t,e){const n=Reflect.has(t,e);return(!au(e)||!Kp.has(e))&&mt(t,"has",e),n}function c_(t){return mt(t,"iterate",Z(t)?"length":lr),Reflect.ownKeys(t)}const Wp={get:Zw,set:s_,deleteProperty:o_,has:a_,ownKeys:c_},l_={get:t_,set(t,e){return!0},deleteProperty(t,e){return!0}},u_=Qe({},Wp,{get:e_,set:i_}),du=t=>t,ya=t=>Reflect.getPrototypeOf(t);function Xi(t,e,n=!1,r=!1){t=t.__v_raw;const s=he(t),i=he(e);n||(e!==i&&mt(s,"get",e),mt(s,"get",i));const{has:o}=ya(s),a=r?du:n?mu:ei;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Zi(t,e=!1){const n=this.__v_raw,r=he(n),s=he(t);return e||(t!==s&&mt(r,"has",t),mt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function eo(t,e=!1){return t=t.__v_raw,!e&&mt(he(t),"iterate",lr),Reflect.get(t,"size",t)}function tf(t){t=he(t);const e=he(this);return ya(e).has.call(e,t)||(e.add(t),un(e,"add",t,t)),this}function nf(t,e){e=he(e);const n=he(this),{has:r,get:s}=ya(n);let i=r.call(n,t);i||(t=he(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Zs(e,o)&&un(n,"set",t,e):un(n,"add",t,e),this}function rf(t){const e=he(this),{has:n,get:r}=ya(e);let s=n.call(e,t);s||(t=he(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&un(e,"delete",t,void 0),i}function sf(){const t=he(this),e=t.size!==0,n=t.clear();return e&&un(t,"clear",void 0,void 0),n}function to(t,e){return function(r,s){const i=this,o=i.__v_raw,a=he(o),c=e?du:t?mu:ei;return!t&&mt(a,"iterate",lr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function no(t,e,n){return function(...r){const s=this.__v_raw,i=he(s),o=Br(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?du:e?mu:ei;return!e&&mt(i,"iterate",c?Yc:lr),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function _n(t){return function(...e){return t==="delete"?!1:this}}function h_(){const t={get(i){return Xi(this,i)},get size(){return eo(this)},has:Zi,add:tf,set:nf,delete:rf,clear:sf,forEach:to(!1,!1)},e={get(i){return Xi(this,i,!1,!0)},get size(){return eo(this)},has:Zi,add:tf,set:nf,delete:rf,clear:sf,forEach:to(!1,!0)},n={get(i){return Xi(this,i,!0)},get size(){return eo(this,!0)},has(i){return Zi.call(this,i,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:to(!0,!1)},r={get(i){return Xi(this,i,!0,!0)},get size(){return eo(this,!0)},has(i){return Zi.call(this,i,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:to(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=no(i,!1,!1),n[i]=no(i,!0,!1),e[i]=no(i,!1,!0),r[i]=no(i,!0,!0)}),[t,n,e,r]}const[f_,d_,p_,g_]=h_();function pu(t,e){const n=e?t?g_:p_:t?d_:f_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ge(n,s)&&s in r?n:r,s,i)}const m_={get:pu(!1,!1)},y_={get:pu(!1,!0)},v_={get:pu(!0,!1)},Gp=new WeakMap,Qp=new WeakMap,Jp=new WeakMap,w_=new WeakMap;function __(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function E_(t){return t.__v_skip||!Object.isExtensible(t)?0:__(Hw(t))}function Ut(t){return pr(t)?t:gu(t,!1,Wp,m_,Gp)}function b_(t){return gu(t,!1,u_,y_,Qp)}function Yp(t){return gu(t,!0,l_,v_,Jp)}function gu(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=E_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function cn(t){return pr(t)?cn(t.__v_raw):!!(t&&t.__v_isReactive)}function pr(t){return!!(t&&t.__v_isReadonly)}function Po(t){return!!(t&&t.__v_isShallow)}function Xp(t){return cn(t)||pr(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function Yr(t){return Oo(t,"__v_skip",!0),t}const ei=t=>Ae(t)?Ut(t):t,mu=t=>Ae(t)?Yp(t):t;function Zp(t){xn&&Pt&&(t=he(t),qp(t.dep||(t.dep=uu())))}function eg(t,e){t=he(t);const n=t.dep;n&&Xc(n)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function bt(t){return tg(t,!1)}function Zc(t){return tg(t,!0)}function tg(t,e){return Ne(t)?t:new T_(t,e)}class T_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:ei(e)}get value(){return Zp(this),this._value}set value(e){const n=this.__v_isShallow||Po(e)||pr(e);e=n?e:he(e),Zs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ei(e),eg(this))}}function $e(t){return Ne(t)?t.value:t}const I_={get:(t,e,n)=>$e(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ne(s)&&!Ne(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ng(t){return cn(t)?t:new Proxy(t,I_)}function C_(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=va(t,n);return e}class S_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Yw(he(this._object),this._key)}}function va(t,e,n){const r=t[e];return Ne(r)?r:new S_(t,e,n)}var rg;class A_{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[rg]=!1,this._dirty=!0,this.effect=new hu(e,()=>{this._dirty||(this._dirty=!0,eg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=he(this);return Zp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}rg="__v_isReadonly";function k_(t,e,n=!1){let r,s;const i=ie(t);return i?(r=t,s=Mt):(r=t.get,s=t.set),new A_(r,s,i||!s,n)}function Ln(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ms(i,e,n)}return s}function kt(t,e,n,r){if(ie(t)){const i=Ln(t,e,n,r);return i&&cu(i)&&i.catch(o=>{ms(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(kt(t[i],e,n,r));return s}function ms(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ln(c,null,10,[t,o,a]);return}}R_(t,n,s,r)}function R_(t,e,n,r=!0){console.error(t)}let ti=!1,el=!1;const tt=[];let qt=0;const Hr=[];let tn=null,rr=0;const sg=Promise.resolve();let yu=null;function Tr(t){const e=yu||sg;return t?e.then(this?t.bind(this):t):e}function N_(t){let e=qt+1,n=tt.length;for(;e<n;){const r=e+n>>>1;ni(tt[r])<t?e=r+1:n=r}return e}function wa(t){(!tt.length||!tt.includes(t,ti&&t.allowRecurse?qt+1:qt))&&(t.id==null?tt.push(t):tt.splice(N_(t.id),0,t),ig())}function ig(){!ti&&!el&&(el=!0,yu=sg.then(ag))}function O_(t){const e=tt.indexOf(t);e>qt&&tt.splice(e,1)}function og(t){Z(t)?Hr.push(...t):(!tn||!tn.includes(t,t.allowRecurse?rr+1:rr))&&Hr.push(t),ig()}function of(t,e=ti?qt+1:0){for(;e<tt.length;e++){const n=tt[e];n&&n.pre&&(tt.splice(e,1),e--,n())}}function xo(t){if(Hr.length){const e=[...new Set(Hr)];if(Hr.length=0,tn){tn.push(...e);return}for(tn=e,tn.sort((n,r)=>ni(n)-ni(r)),rr=0;rr<tn.length;rr++)tn[rr]();tn=null,rr=0}}const ni=t=>t.id==null?1/0:t.id,D_=(t,e)=>{const n=ni(t)-ni(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ag(t){el=!1,ti=!0,tt.sort(D_);const e=Mt;try{for(qt=0;qt<tt.length;qt++){const n=tt[qt];n&&n.active!==!1&&Ln(n,null,14)}}finally{qt=0,tt.length=0,xo(),ti=!1,yu=null,(tt.length||Hr.length)&&ag()}}function P_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Ie;f&&(s=n.map(g=>Oe(g)?g.trim():g)),h&&(s=n.map(Qc))}let a,c=r[a=fc(e)]||r[a=fc(Yt(e))];!c&&i&&(c=r[a=fc(br(e))]),c&&kt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(l,t,6,s)}}function cg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ie(t)){const c=l=>{const u=cg(l,e,!0);u&&(a=!0,Qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ae(t)&&r.set(t,null),null):(Z(i)?i.forEach(c=>o[c]=null):Qe(o,i),Ae(t)&&r.set(t,o),o)}function _a(t,e){return!t||!bi(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,br(e))||ge(t,e))}let We=null,Ea=null;function Lo(t){const e=We;return We=t,Ea=t&&t.type.__scopeId||null,e}function JD(t){Ea=t}function YD(){Ea=null}function vu(t,e=We,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&yf(-1);const i=Lo(e);let o;try{o=t(...s)}finally{Lo(i),r._d&&yf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:m,inheritAttrs:w}=t;let E,v;const p=Lo(t);try{if(n.shapeFlag&4){const I=s||r;E=Ct(u.call(I,I,h,i,g,f,m)),v=c}else{const I=e;E=Ct(I.length>1?I(i,{attrs:c,slots:a,emit:l}):I(i,null)),v=e.props?c:L_(c)}}catch(I){js.length=0,ms(I,t,1),E=Pe(ht)}let _=E;if(v&&w!==!1){const I=Object.keys(v),{shapeFlag:S}=_;I.length&&S&7&&(o&&I.some(iu)&&(v=M_(v,o)),_=hn(_,v))}return n.dirs&&(_=hn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),E=_,Lo(p),E}function x_(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(es(r)){if(r.type!==ht||r.children==="v-if"){if(e)return;e=r}}else return}return e}const L_=t=>{let e;for(const n in t)(n==="class"||n==="style"||bi(n))&&((e||(e={}))[n]=t[n]);return e},M_=(t,e)=>{const n={};for(const r in t)(!iu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function F_(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?af(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!_a(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?af(r,o,l):!0:!!o;return!1}function af(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_a(n,i))return!0}return!1}function wu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const lg=t=>t.__isSuspense,U_={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?$_(e,n,r,s,i,o,a,c,l):V_(t,e,n,r,s,o,a,c,l)},hydrate:B_,create:_u,normalize:j_},ug=U_;function ri(t,e){const n=t.props&&t.props[e];ie(n)&&n()}function $_(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=_u(t,s,r,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,r,f,i,o),f.deps>0?(ri(t,"onPending"),ri(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),qr(f,t.ssFallback)):f.resolve()}function V_(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,g=e.ssFallback,{activeBranch:m,pendingBranch:w,isInFallback:E,isHydrating:v}=h;if(w)h.pendingBranch=f,xt(f,w)?(c(w,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():E&&(c(m,g,n,r,s,null,i,o,a),qr(h,g))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=w):l(w,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),E?(c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(c(m,g,n,r,s,null,i,o,a),qr(h,g))):m&&xt(f,m)?(c(m,f,n,r,s,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(m&&xt(f,m))c(m,f,n,r,s,h,i,o,a),qr(h,f);else if(ri(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:p,pendingId:_}=h;p>0?setTimeout(()=>{h.pendingId===_&&h.fallback(g)},p):p===0&&h.fallback(g)}}function _u(t,e,n,r,s,i,o,a,c,l,u=!1){const{p:h,m:f,um:g,n:m,o:{parentNode:w,remove:E}}=l,v=t.props?Fp(t.props.timeout):void 0,p={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(_=!1){const{vnode:I,activeBranch:S,pendingBranch:P,pendingId:N,effects:b,parentComponent:F,container:H}=p;if(p.isHydrating)p.isHydrating=!1;else if(!_){const re=S&&P.transition&&P.transition.mode==="out-in";re&&(S.transition.afterLeave=()=>{N===p.pendingId&&f(P,H,B,0)});let{anchor:B}=p;S&&(B=m(S),g(S,F,p,!0)),re||f(P,H,B,0)}qr(p,P),p.pendingBranch=null,p.isInFallback=!1;let G=p.parent,$=!1;for(;G;){if(G.pendingBranch){G.effects.push(...b),$=!0;break}G=G.parent}$||og(b),p.effects=[],ri(I,"onResolve")},fallback(_){if(!p.pendingBranch)return;const{vnode:I,activeBranch:S,parentComponent:P,container:N,isSVG:b}=p;ri(I,"onFallback");const F=m(S),H=()=>{p.isInFallback&&(h(null,_,N,F,P,null,b,a,c),qr(p,_))},G=_.transition&&_.transition.mode==="out-in";G&&(S.transition.afterLeave=H),p.isInFallback=!0,g(S,P,null,!0),G||H()},move(_,I,S){p.activeBranch&&f(p.activeBranch,_,I,S),p.container=_},next(){return p.activeBranch&&m(p.activeBranch)},registerDep(_,I){const S=!!p.pendingBranch;S&&p.deps++;const P=_.vnode.el;_.asyncDep.catch(N=>{ms(N,_,0)}).then(N=>{if(_.isUnmounted||p.isUnmounted||p.pendingId!==_.suspenseId)return;_.asyncResolved=!0;const{vnode:b}=_;ol(_,N,!1),P&&(b.el=P);const F=!P&&_.subTree.el;I(_,b,w(P||_.subTree.el),P?null:m(_.subTree),p,o,c),F&&E(F),wu(_,b.el),S&&--p.deps===0&&p.resolve()})},unmount(_,I){p.isUnmounted=!0,p.activeBranch&&g(p.activeBranch,n,_,I),p.pendingBranch&&g(p.pendingBranch,n,_,I)}};return p}function B_(t,e,n,r,s,i,o,a,c){const l=e.suspense=_u(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),u}function j_(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=cf(r?n.default:n),t.ssFallback=r?cf(n.fallback):Pe(ht)}function cf(t){let e;if(ie(t)){const n=Zr&&t._c;n&&(t._d=!1,rn()),t=t(),n&&(t._d=!0,e=At,Pg())}return Z(t)&&(t=x_(t)),t=Ct(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function hg(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):og(t)}function qr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,wu(r,s))}function Kr(t,e){if(De){let n=De.provides;const r=De.parent&&De.parent.provides;r===n&&(n=De.provides=Object.create(r)),n[t]=e}}function pt(t,e,n=!1){const r=De||We;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r.proxy):e}}function H_(t,e){return ba(t,null,e)}function q_(t,e){return ba(t,null,{flush:"post"})}const ro={};function Mn(t,e,n){return ba(t,e,n)}function ba(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ie){const a=Vp()===(De==null?void 0:De.scope)?De:null;let c,l=!1,u=!1;if(Ne(t)?(c=()=>t.value,l=Po(t)):cn(t)?(c=()=>t,r=!0):Z(t)?(u=!0,l=t.some(_=>cn(_)||Po(_)),c=()=>t.map(_=>{if(Ne(_))return _.value;if(cn(_))return ir(_);if(ie(_))return Ln(_,a,2)})):ie(t)?e?c=()=>Ln(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),kt(t,a,3,[f])}:c=Mt,e&&r){const _=c;c=()=>ir(_())}let h,f=_=>{h=v.onStop=()=>{Ln(_,a,4)}},g;if(ts)if(f=Mt,e?n&&kt(e,a,3,[c(),u?[]:void 0,f]):c(),s==="sync"){const _=xE();g=_.__watcherHandles||(_.__watcherHandles=[])}else return Mt;let m=u?new Array(t.length).fill(ro):ro;const w=()=>{if(v.active)if(e){const _=v.run();(r||l||(u?_.some((I,S)=>Zs(I,m[S])):Zs(_,m)))&&(h&&h(),kt(e,a,3,[_,m===ro?void 0:u&&m[0]===ro?[]:m,f]),m=_)}else v.run()};w.allowRecurse=!!e;let E;s==="sync"?E=w:s==="post"?E=()=>Ke(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),E=()=>wa(w));const v=new hu(c,E);e?n?w():m=v.run():s==="post"?Ke(v.run.bind(v),a&&a.suspense):v.run();const p=()=>{v.stop(),a&&a.scope&&ou(a.scope.effects,v)};return g&&g.push(p),p}function K_(t,e,n){const r=this.proxy,s=Oe(t)?t.includes(".")?fg(r,t):()=>r[t]:t.bind(r,r);let i;ie(e)?i=e:(i=e.handler,n=e);const o=De;Hn(this);const a=ba(s,i.bind(r),n);return o?Hn(o):Fn(),a}function fg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ir(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ne(t))ir(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)ir(t[n],e);else if(xp(t)||Br(t))t.forEach(n=>{ir(n,e)});else if(Mp(t))for(const n in t)ir(t[n],e);return t}function z_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ia(()=>{t.isMounted=!0}),Ca(()=>{t.isUnmounting=!0}),t}const It=[Function,Array],W_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},setup(t,{slots:e}){const n=vn(),r=z_();let s;return()=>{const i=e.default&&gg(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const w of i)if(w.type!==ht){o=w;break}}const a=he(t),{mode:c}=a;if(r.isLeaving)return pc(o);const l=lf(o);if(!l)return pc(o);const u=tl(l,a,r,n);Mo(l,u);const h=n.subTree,f=h&&lf(h);let g=!1;const{getTransitionKey:m}=l.type;if(m){const w=m();s===void 0?s=w:w!==s&&(s=w,g=!0)}if(f&&f.type!==ht&&(!xt(l,f)||g)){const w=tl(f,a,r,n);if(Mo(f,w),c==="out-in")return r.isLeaving=!0,w.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},pc(o);c==="in-out"&&l.type!==ht&&(w.delayLeave=(E,v,p)=>{const _=pg(r,f);_[String(f.key)]=f,E._leaveCb=()=>{v(),E._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=p})}return o}}},dg=W_;function pg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function tl(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:w,onAppear:E,onAfterAppear:v,onAppearCancelled:p}=e,_=String(t.key),I=pg(n,t),S=(b,F)=>{b&&kt(b,r,9,F)},P=(b,F)=>{const H=F[1];S(b,F),Z(b)?b.every(G=>G.length<=1)&&H():b.length<=1&&H()},N={mode:i,persisted:o,beforeEnter(b){let F=a;if(!n.isMounted)if(s)F=w||a;else return;b._leaveCb&&b._leaveCb(!0);const H=I[_];H&&xt(t,H)&&H.el._leaveCb&&H.el._leaveCb(),S(F,[b])},enter(b){let F=c,H=l,G=u;if(!n.isMounted)if(s)F=E||c,H=v||l,G=p||u;else return;let $=!1;const re=b._enterCb=B=>{$||($=!0,B?S(G,[b]):S(H,[b]),N.delayedLeave&&N.delayedLeave(),b._enterCb=void 0)};F?P(F,[b,re]):re()},leave(b,F){const H=String(t.key);if(b._enterCb&&b._enterCb(!0),n.isUnmounting)return F();S(h,[b]);let G=!1;const $=b._leaveCb=re=>{G||(G=!0,F(),re?S(m,[b]):S(g,[b]),b._leaveCb=void 0,I[H]===t&&delete I[H])};I[H]=t,f?P(f,[b,$]):$()},clone(b){return tl(b,e,n,r)}};return N}function pc(t){if(Ii(t))return t=hn(t),t.children=null,t}function lf(t){return Ii(t)?t.children?t.children[0]:void 0:t}function Mo(t,e){t.shapeFlag&6&&t.component?Mo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function gg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===lt?(o.patchFlag&128&&s++,r=r.concat(gg(o.children,e,a))):(e||o.type!==ht)&&r.push(a!=null?hn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Wn(t){return ie(t)?{setup:t,name:t.name}:t}const ur=t=>!!t.type.__asyncLoader;function G_(t){ie(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const h=()=>(u++,c=null,f()),f=()=>{let g;return c||(g=c=e().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),a)return new Promise((w,E)=>{a(m,()=>w(h()),()=>E(m),u+1)});throw m}).then(m=>g!==c&&c?c:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),l=m,m)))};return Wn({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return l},setup(){const g=De;if(l)return()=>gc(l,g);const m=p=>{c=null,ms(p,g,13,!r)};if(o&&g.suspense||ts)return f().then(p=>()=>gc(p,g)).catch(p=>(m(p),()=>r?Pe(r,{error:p}):null));const w=bt(!1),E=bt(),v=bt(!!s);return s&&setTimeout(()=>{v.value=!1},s),i!=null&&setTimeout(()=>{if(!w.value&&!E.value){const p=new Error(`Async component timed out after ${i}ms.`);m(p),E.value=p}},i),f().then(()=>{w.value=!0,g.parent&&Ii(g.parent.vnode)&&wa(g.parent.update)}).catch(p=>{m(p),E.value=p}),()=>{if(w.value&&l)return gc(l,g);if(E.value&&r)return Pe(r,{error:E.value});if(n&&!v.value)return Pe(n)}}})}function gc(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Pe(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Ii=t=>t.type.__isKeepAlive,Q_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=vn(),r=n.ctx;if(!r.renderer)return()=>{const p=e.default&&e.default();return p&&p.length===1?p[0]:p};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:h}}}=r,f=h("div");r.activate=(p,_,I,S,P)=>{const N=p.component;l(p,_,I,0,a),c(N.vnode,p,_,I,N,a,S,p.slotScopeIds,P),Ke(()=>{N.isDeactivated=!1,N.a&&jr(N.a);const b=p.props&&p.props.onVnodeMounted;b&&dt(b,N.parent,p)},a)},r.deactivate=p=>{const _=p.component;l(p,f,null,1,a),Ke(()=>{_.da&&jr(_.da);const I=p.props&&p.props.onVnodeUnmounted;I&&dt(I,_.parent,p),_.isDeactivated=!0},a)};function g(p){mc(p),u(p,n,a,!0)}function m(p){s.forEach((_,I)=>{const S=al(_.type);S&&(!p||!p(S))&&w(I)})}function w(p){const _=s.get(p);!o||!xt(_,o)?g(_):o&&mc(o),s.delete(p),i.delete(p)}Mn(()=>[t.include,t.exclude],([p,_])=>{p&&m(I=>Ds(p,I)),_&&m(I=>!Ds(_,I))},{flush:"post",deep:!0});let E=null;const v=()=>{E!=null&&s.set(E,yc(n.subTree))};return Ia(v),wg(v),Ca(()=>{s.forEach(p=>{const{subTree:_,suspense:I}=n,S=yc(_);if(p.type===S.type&&p.key===S.key){mc(S);const P=S.component.da;P&&Ke(P,I);return}g(p)})}),()=>{if(E=null,!e.default)return null;const p=e.default(),_=p[0];if(p.length>1)return o=null,p;if(!es(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let I=yc(_);const S=I.type,P=al(ur(I)?I.type.__asyncResolved||{}:S),{include:N,exclude:b,max:F}=t;if(N&&(!P||!Ds(N,P))||b&&P&&Ds(b,P))return o=I,_;const H=I.key==null?S:I.key,G=s.get(H);return I.el&&(I=hn(I),_.shapeFlag&128&&(_.ssContent=I)),E=H,G?(I.el=G.el,I.component=G.component,I.transition&&Mo(I,I.transition),I.shapeFlag|=512,i.delete(H),i.add(H)):(i.add(H),F&&i.size>parseInt(F,10)&&w(i.values().next().value)),I.shapeFlag|=256,o=I,lg(_.type)?_:I}}},J_=Q_;function Ds(t,e){return Z(t)?t.some(n=>Ds(n,e)):Oe(t)?t.split(",").includes(e):jw(t)?t.test(e):!1}function mg(t,e){vg(t,"a",e)}function yg(t,e){vg(t,"da",e)}function vg(t,e,n=De){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ta(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ii(s.parent.vnode)&&Y_(r,e,n,s),s=s.parent}}function Y_(t,e,n,r){const s=Ta(e,t,r,!0);Eu(()=>{ou(r[e],s)},n)}function mc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function yc(t){return t.shapeFlag&128?t.ssContent:t}function Ta(t,e,n=De,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ps(),Hn(n);const a=kt(e,n,t,o);return Fn(),gs(),a});return r?s.unshift(i):s.push(i),i}}const yn=t=>(e,n=De)=>(!ts||t==="sp")&&Ta(t,(...r)=>e(...r),n),X_=yn("bm"),Ia=yn("m"),Z_=yn("bu"),wg=yn("u"),Ca=yn("bum"),Eu=yn("um"),eE=yn("sp"),tE=yn("rtg"),nE=yn("rtc");function _g(t,e=De){Ta("ec",t,e)}function XD(t,e){const n=We;if(n===null)return t;const r=Aa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ie]=e[i];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&ir(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ht(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ps(),kt(c,n,8,[t.el,a,t,e]),gs())}}const bu="components";function ZD(t,e){return bg(bu,t,!0,e)||t}const Eg=Symbol();function rE(t){return Oe(t)?bg(bu,t,!1)||t:t||Eg}function bg(t,e,n=!0,r=!1){const s=We||De;if(s){const i=s.type;if(t===bu){const a=al(i,!1);if(a&&(a===e||a===Yt(e)||a===ma(Yt(e))))return i}const o=uf(s[t]||i[t],e)||uf(s.appContext[t],e);return!o&&r?i:o}}function uf(t,e){return t&&(t[e]||t[Yt(e)]||t[ma(Yt(e))])}function e1(t,e,n,r){let s;const i=n&&n[r];if(Z(t)||Oe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function t1(t,e,n={},r,s){if(We.isCE||We.parent&&ur(We.parent)&&We.parent.isCE)return e!=="default"&&(n.name=e),Pe("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),rn();const o=i&&Tg(i(n)),a=Rn(lt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Tg(t){return t.some(e=>es(e)?!(e.type===ht||e.type===lt&&!Tg(e.children)):!0)?t:null}const nl=t=>t?Ug(t)?Aa(t)||t.proxy:nl(t.parent):null,Vs=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nl(t.parent),$root:t=>nl(t.root),$emit:t=>t.emit,$options:t=>Tu(t),$forceUpdate:t=>t.f||(t.f=()=>wa(t.update)),$nextTick:t=>t.n||(t.n=Tr.bind(t.proxy)),$watch:t=>K_.bind(t)}),vc=(t,e)=>t!==Ie&&!t.__isScriptSetup&&ge(t,e),sE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(vc(r,e))return o[e]=1,r[e];if(s!==Ie&&ge(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ge(l,e))return o[e]=3,i[e];if(n!==Ie&&ge(n,e))return o[e]=4,n[e];rl&&(o[e]=0)}}const u=Vs[e];let h,f;if(u)return e==="$attrs"&&mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&ge(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ge(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return vc(s,e)?(s[e]=n,!0):r!==Ie&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&ge(t,o)||vc(e,o)||(a=i[0])&&ge(a,o)||ge(r,o)||ge(Vs,o)||ge(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let rl=!0;function iE(t){const e=Tu(t),n=t.proxy,r=t.ctx;rl=!1,e.beforeCreate&&hf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:m,activated:w,deactivated:E,beforeDestroy:v,beforeUnmount:p,destroyed:_,unmounted:I,render:S,renderTracked:P,renderTriggered:N,errorCaptured:b,serverPrefetch:F,expose:H,inheritAttrs:G,components:$,directives:re,filters:B}=e;if(l&&oE(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const _e=o[be];ie(_e)&&(r[be]=_e.bind(n))}if(s){const be=s.call(n,n);Ae(be)&&(t.data=Ut(be))}if(rl=!0,i)for(const be in i){const _e=i[be],Rt=ie(_e)?_e.bind(n,n):ie(_e.get)?_e.get.bind(n,n):Mt,Yn=!ie(_e)&&ie(_e.set)?_e.set.bind(n):Mt,Nt=nt({get:Rt,set:Yn});Object.defineProperty(r,be,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:ft=>Nt.value=ft})}if(a)for(const be in a)Ig(a[be],r,n,be);if(c){const be=ie(c)?c.call(n):c;Reflect.ownKeys(be).forEach(_e=>{Kr(_e,be[_e])})}u&&hf(u,t,"c");function de(be,_e){Z(_e)?_e.forEach(Rt=>be(Rt.bind(n))):_e&&be(_e.bind(n))}if(de(X_,h),de(Ia,f),de(Z_,g),de(wg,m),de(mg,w),de(yg,E),de(_g,b),de(nE,P),de(tE,N),de(Ca,p),de(Eu,I),de(eE,F),Z(H))if(H.length){const be=t.exposed||(t.exposed={});H.forEach(_e=>{Object.defineProperty(be,_e,{get:()=>n[_e],set:Rt=>n[_e]=Rt})})}else t.exposed||(t.exposed={});S&&t.render===Mt&&(t.render=S),G!=null&&(t.inheritAttrs=G),$&&(t.components=$),re&&(t.directives=re)}function oE(t,e,n=Mt,r=!1){Z(t)&&(t=sl(t));for(const s in t){const i=t[s];let o;Ae(i)?"default"in i?o=pt(i.from||s,i.default,!0):o=pt(i.from||s):o=pt(i),Ne(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function hf(t,e,n){kt(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ig(t,e,n,r){const s=r.includes(".")?fg(n,r):()=>n[r];if(Oe(t)){const i=e[t];ie(i)&&Mn(s,i)}else if(ie(t))Mn(s,t.bind(n));else if(Ae(t))if(Z(t))t.forEach(i=>Ig(i,e,n,r));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&Mn(s,i,t)}}function Tu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Fo(c,l,o,!0)),Fo(c,e,o)),Ae(e)&&i.set(e,c),c}function Fo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Fo(t,i,n,!0),s&&s.forEach(o=>Fo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=aE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const aE={data:ff,props:tr,emits:tr,methods:tr,computed:tr,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:tr,directives:tr,watch:lE,provide:ff,inject:cE};function ff(t,e){return e?t?function(){return Qe(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function cE(t,e){return tr(sl(t),sl(e))}function sl(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ct(t,e){return t?[...new Set([].concat(t,e))]:e}function tr(t,e){return t?Qe(Qe(Object.create(null),t),e):e}function lE(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const r in e)n[r]=ct(t[r],e[r]);return n}function uE(t,e,n,r=!1){const s={},i={};Oo(i,Sa,1),t.propsDefaults=Object.create(null),Cg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:b_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function hE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=he(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(_a(t.emitsOptions,f))continue;const g=e[f];if(c)if(ge(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const m=Yt(f);s[m]=il(c,a,m,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Cg(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ge(e,h)&&((u=br(h))===h||!ge(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=il(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ge(e,h))&&(delete i[h],l=!0)}l&&un(t,"set","$attrs")}function Cg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if($s(c))continue;const l=e[c];let u;s&&ge(s,u=Yt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:_a(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=he(n),l=a||Ie;for(let u=0;u<i.length;u++){const h=i[u];n[h]=il(s,c,h,l[h],t,!ge(l,h))}}return o}function il(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ie(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Hn(s),r=l[n]=c.call(null,e),Fn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===br(n))&&(r=!0))}return r}function Sg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ie(t)){const u=h=>{c=!0;const[f,g]=Sg(h,e,!0);Qe(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ae(t)&&r.set(t,Vr),Vr;if(Z(i))for(let u=0;u<i.length;u++){const h=Yt(i[u]);df(h)&&(o[h]=Ie)}else if(i)for(const u in i){const h=Yt(u);if(df(h)){const f=i[u],g=o[h]=Z(f)||ie(f)?{type:f}:Object.assign({},f);if(g){const m=mf(Boolean,g.type),w=mf(String,g.type);g[0]=m>-1,g[1]=w<0||m<w,(m>-1||ge(g,"default"))&&a.push(h)}}}const l=[o,a];return Ae(t)&&r.set(t,l),l}function df(t){return t[0]!=="$"}function pf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function gf(t,e){return pf(t)===pf(e)}function mf(t,e){return Z(e)?e.findIndex(n=>gf(n,t)):ie(e)&&gf(e,t)?0:-1}const Ag=t=>t[0]==="_"||t==="$stable",Iu=t=>Z(t)?t.map(Ct):[Ct(t)],fE=(t,e,n)=>{if(e._n)return e;const r=vu((...s)=>Iu(e(...s)),n);return r._c=!1,r},kg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ag(s))continue;const i=t[s];if(ie(i))e[s]=fE(s,i,r);else if(i!=null){const o=Iu(i);e[s]=()=>o}}},Rg=(t,e)=>{const n=Iu(e);t.slots.default=()=>n},dE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),Oo(e,"_",n)):kg(e,t.slots={})}else t.slots={},e&&Rg(t,e);Oo(t.slots,Sa,1)},pE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Qe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,kg(e,s)),o=e}else e&&(Rg(t,e),o={default:1});if(i)for(const a in s)!Ag(a)&&!(a in o)&&delete s[a]};function Ng(){return{app:null,config:{isNativeTag:$w,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gE=0;function mE(t,e){return function(r,s=null){ie(r)||(r=Object.assign({},r)),s!=null&&!Ae(s)&&(s=null);const i=Ng(),o=new Set;let a=!1;const c=i.app={_uid:gE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Vg,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ie(l.install)?(o.add(l),l.install(c,...u)):ie(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Pe(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Aa(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Uo(t,e,n,r,s=!1){if(Z(t)){t.forEach((f,g)=>Uo(f,e&&(Z(e)?e[g]:e),n,r,s));return}if(ur(r)&&!s)return;const i=r.shapeFlag&4?Aa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Oe(l)?(u[l]=null,ge(h,l)&&(h[l]=null)):Ne(l)&&(l.value=null)),ie(c))Ln(c,a,12,[o,u]);else{const f=Oe(c),g=Ne(c);if(f||g){const m=()=>{if(t.f){const w=f?ge(h,c)?h[c]:u[c]:c.value;s?Z(w)&&ou(w,i):Z(w)?w.includes(i)||w.push(i):f?(u[c]=[i],ge(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ge(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ke(m,n)):m()}}}let En=!1;const so=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",io=t=>t.nodeType===8;function yE(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=t,u=(v,p)=>{if(!p.hasChildNodes()){n(null,v,p),xo(),p._vnode=v;return}En=!1,h(p.firstChild,v,null,null,null),xo(),p._vnode=v,En&&console.error("Hydration completed but contains mismatches.")},h=(v,p,_,I,S,P=!1)=>{const N=io(v)&&v.data==="[",b=()=>w(v,p,_,I,S,N),{type:F,ref:H,shapeFlag:G,patchFlag:$}=p;let re=v.nodeType;p.el=v,$===-2&&(P=!1,p.dynamicChildren=null);let B=null;switch(F){case Xr:re!==3?p.children===""?(c(p.el=s(""),o(v),v),B=v):B=b():(v.data!==p.children&&(En=!0,v.data=p.children),B=i(v));break;case ht:re!==8||N?B=b():B=i(v);break;case Bs:if(N&&(v=i(v),re=v.nodeType),re===1||re===3){B=v;const ve=!p.children.length;for(let de=0;de<p.staticCount;de++)ve&&(p.children+=B.nodeType===1?B.outerHTML:B.data),de===p.staticCount-1&&(p.anchor=B),B=i(B);return N?i(B):B}else b();break;case lt:N?B=m(v,p,_,I,S,P):B=b();break;default:if(G&1)re!==1||p.type.toLowerCase()!==v.tagName.toLowerCase()?B=b():B=f(v,p,_,I,S,P);else if(G&6){p.slotScopeIds=S;const ve=o(v);if(e(p,ve,null,_,I,so(ve),P),B=N?E(v):i(v),B&&io(B)&&B.data==="teleport end"&&(B=i(B)),ur(p)){let de;N?(de=Pe(lt),de.anchor=B?B.previousSibling:ve.lastChild):de=v.nodeType===3?Fg(""):Pe("div"),de.el=v,p.component.subTree=de}}else G&64?re!==8?B=b():B=p.type.hydrate(v,p,_,I,S,P,t,g):G&128&&(B=p.type.hydrate(v,p,_,I,so(o(v)),S,P,t,h))}return H!=null&&Uo(H,null,I,p),B},f=(v,p,_,I,S,P)=>{P=P||!!p.dynamicChildren;const{type:N,props:b,patchFlag:F,shapeFlag:H,dirs:G}=p,$=N==="input"&&G||N==="option";if($||F!==-1){if(G&&Ht(p,null,_,"created"),b)if($||!P||F&48)for(const B in b)($&&B.endsWith("value")||bi(B)&&!$s(B))&&r(v,B,null,b[B],!1,void 0,_);else b.onClick&&r(v,"onClick",null,b.onClick,!1,void 0,_);let re;if((re=b&&b.onVnodeBeforeMount)&&dt(re,_,p),G&&Ht(p,null,_,"beforeMount"),((re=b&&b.onVnodeMounted)||G)&&hg(()=>{re&&dt(re,_,p),G&&Ht(p,null,_,"mounted")},I),H&16&&!(b&&(b.innerHTML||b.textContent))){let B=g(v.firstChild,p,v,_,I,S,P);for(;B;){En=!0;const ve=B;B=B.nextSibling,a(ve)}}else H&8&&v.textContent!==p.children&&(En=!0,v.textContent=p.children)}return v.nextSibling},g=(v,p,_,I,S,P,N)=>{N=N||!!p.dynamicChildren;const b=p.children,F=b.length;for(let H=0;H<F;H++){const G=N?b[H]:b[H]=Ct(b[H]);if(v)v=h(v,G,I,S,P,N);else{if(G.type===Xr&&!G.children)continue;En=!0,n(null,G,_,null,I,S,so(_),P)}}return v},m=(v,p,_,I,S,P)=>{const{slotScopeIds:N}=p;N&&(S=S?S.concat(N):N);const b=o(v),F=g(i(v),p,b,_,I,S,P);return F&&io(F)&&F.data==="]"?i(p.anchor=F):(En=!0,c(p.anchor=l("]"),b,F),F)},w=(v,p,_,I,S,P)=>{if(En=!0,p.el=null,P){const F=E(v);for(;;){const H=i(v);if(H&&H!==F)a(H);else break}}const N=i(v),b=o(v);return a(v),n(null,p,b,N,_,I,so(b),S),N},E=v=>{let p=0;for(;v;)if(v=i(v),v&&io(v)&&(v.data==="["&&p++,v.data==="]")){if(p===0)return i(v);p--}return v};return[u,h]}const Ke=hg;function vE(t){return Og(t)}function wE(t){return Og(t,yE)}function Og(t,e){const n=zw();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Mt,insertStaticContent:m}=t,w=(d,y,T,C=null,R=null,L=null,V=!1,x=null,M=!!y.dynamicChildren)=>{if(d===y)return;d&&!xt(d,y)&&(C=U(d),ft(d,R,L,!0),d=null),y.patchFlag===-2&&(M=!1,y.dynamicChildren=null);const{type:O,ref:Y,shapeFlag:K}=y;switch(O){case Xr:E(d,y,T,C);break;case ht:v(d,y,T,C);break;case Bs:d==null&&p(y,T,C,V);break;case lt:$(d,y,T,C,R,L,V,x,M);break;default:K&1?S(d,y,T,C,R,L,V,x,M):K&6?re(d,y,T,C,R,L,V,x,M):(K&64||K&128)&&O.process(d,y,T,C,R,L,V,x,M,pe)}Y!=null&&R&&Uo(Y,d&&d.ref,L,y||d,!y)},E=(d,y,T,C)=>{if(d==null)r(y.el=a(y.children),T,C);else{const R=y.el=d.el;y.children!==d.children&&l(R,y.children)}},v=(d,y,T,C)=>{d==null?r(y.el=c(y.children||""),T,C):y.el=d.el},p=(d,y,T,C)=>{[d.el,d.anchor]=m(d.children,y,T,C,d.el,d.anchor)},_=({el:d,anchor:y},T,C)=>{let R;for(;d&&d!==y;)R=f(d),r(d,T,C),d=R;r(y,T,C)},I=({el:d,anchor:y})=>{let T;for(;d&&d!==y;)T=f(d),s(d),d=T;s(y)},S=(d,y,T,C,R,L,V,x,M)=>{V=V||y.type==="svg",d==null?P(y,T,C,R,L,V,x,M):F(d,y,R,L,V,x,M)},P=(d,y,T,C,R,L,V,x)=>{let M,O;const{type:Y,props:K,shapeFlag:X,transition:se,dirs:le}=d;if(M=d.el=o(d.type,L,K&&K.is,K),X&8?u(M,d.children):X&16&&b(d.children,M,null,C,R,L&&Y!=="foreignObject",V,x),le&&Ht(d,null,C,"created"),N(M,d,d.scopeId,V,C),K){for(const Ee in K)Ee!=="value"&&!$s(Ee)&&i(M,Ee,null,K[Ee],L,d.children,C,R,j);"value"in K&&i(M,"value",null,K.value),(O=K.onVnodeBeforeMount)&&dt(O,C,d)}le&&Ht(d,null,C,"beforeMount");const Te=(!R||R&&!R.pendingBranch)&&se&&!se.persisted;Te&&se.beforeEnter(M),r(M,y,T),((O=K&&K.onVnodeMounted)||Te||le)&&Ke(()=>{O&&dt(O,C,d),Te&&se.enter(M),le&&Ht(d,null,C,"mounted")},R)},N=(d,y,T,C,R)=>{if(T&&g(d,T),C)for(let L=0;L<C.length;L++)g(d,C[L]);if(R){let L=R.subTree;if(y===L){const V=R.vnode;N(d,V,V.scopeId,V.slotScopeIds,R.parent)}}},b=(d,y,T,C,R,L,V,x,M=0)=>{for(let O=M;O<d.length;O++){const Y=d[O]=x?An(d[O]):Ct(d[O]);w(null,Y,y,T,C,R,L,V,x)}},F=(d,y,T,C,R,L,V)=>{const x=y.el=d.el;let{patchFlag:M,dynamicChildren:O,dirs:Y}=y;M|=d.patchFlag&16;const K=d.props||Ie,X=y.props||Ie;let se;T&&Xn(T,!1),(se=X.onVnodeBeforeUpdate)&&dt(se,T,y,d),Y&&Ht(y,d,T,"beforeUpdate"),T&&Xn(T,!0);const le=R&&y.type!=="foreignObject";if(O?H(d.dynamicChildren,O,x,T,C,le,L):V||_e(d,y,x,null,T,C,le,L,!1),M>0){if(M&16)G(x,y,K,X,T,C,R);else if(M&2&&K.class!==X.class&&i(x,"class",null,X.class,R),M&4&&i(x,"style",K.style,X.style,R),M&8){const Te=y.dynamicProps;for(let Ee=0;Ee<Te.length;Ee++){const Le=Te[Ee],Ot=K[Le],Rr=X[Le];(Rr!==Ot||Le==="value")&&i(x,Le,Ot,Rr,R,d.children,T,C,j)}}M&1&&d.children!==y.children&&u(x,y.children)}else!V&&O==null&&G(x,y,K,X,T,C,R);((se=X.onVnodeUpdated)||Y)&&Ke(()=>{se&&dt(se,T,y,d),Y&&Ht(y,d,T,"updated")},C)},H=(d,y,T,C,R,L,V)=>{for(let x=0;x<y.length;x++){const M=d[x],O=y[x],Y=M.el&&(M.type===lt||!xt(M,O)||M.shapeFlag&70)?h(M.el):T;w(M,O,Y,null,C,R,L,V,!0)}},G=(d,y,T,C,R,L,V)=>{if(T!==C){if(T!==Ie)for(const x in T)!$s(x)&&!(x in C)&&i(d,x,T[x],null,V,y.children,R,L,j);for(const x in C){if($s(x))continue;const M=C[x],O=T[x];M!==O&&x!=="value"&&i(d,x,O,M,V,y.children,R,L,j)}"value"in C&&i(d,"value",T.value,C.value)}},$=(d,y,T,C,R,L,V,x,M)=>{const O=y.el=d?d.el:a(""),Y=y.anchor=d?d.anchor:a("");let{patchFlag:K,dynamicChildren:X,slotScopeIds:se}=y;se&&(x=x?x.concat(se):se),d==null?(r(O,T,C),r(Y,T,C),b(y.children,T,Y,R,L,V,x,M)):K>0&&K&64&&X&&d.dynamicChildren?(H(d.dynamicChildren,X,T,R,L,V,x),(y.key!=null||R&&y===R.subTree)&&Dg(d,y,!0)):_e(d,y,T,Y,R,L,V,x,M)},re=(d,y,T,C,R,L,V,x,M)=>{y.slotScopeIds=x,d==null?y.shapeFlag&512?R.ctx.activate(y,T,C,V,M):B(y,T,C,R,L,V,M):ve(d,y,M)},B=(d,y,T,C,R,L,V)=>{const x=d.component=AE(d,C,R);if(Ii(d)&&(x.ctx.renderer=pe),kE(x),x.asyncDep){if(R&&R.registerDep(x,de),!d.el){const M=x.subTree=Pe(ht);v(null,M,y,T)}return}de(x,d,y,T,R,L,V)},ve=(d,y,T)=>{const C=y.component=d.component;if(F_(d,y,T))if(C.asyncDep&&!C.asyncResolved){be(C,y,T);return}else C.next=y,O_(C.update),C.update();else y.el=d.el,C.vnode=y},de=(d,y,T,C,R,L,V)=>{const x=()=>{if(d.isMounted){let{next:Y,bu:K,u:X,parent:se,vnode:le}=d,Te=Y,Ee;Xn(d,!1),Y?(Y.el=le.el,be(d,Y,V)):Y=le,K&&jr(K),(Ee=Y.props&&Y.props.onVnodeBeforeUpdate)&&dt(Ee,se,Y,le),Xn(d,!0);const Le=dc(d),Ot=d.subTree;d.subTree=Le,w(Ot,Le,h(Ot.el),U(Ot),d,R,L),Y.el=Le.el,Te===null&&wu(d,Le.el),X&&Ke(X,R),(Ee=Y.props&&Y.props.onVnodeUpdated)&&Ke(()=>dt(Ee,se,Y,le),R)}else{let Y;const{el:K,props:X}=y,{bm:se,m:le,parent:Te}=d,Ee=ur(y);if(Xn(d,!1),se&&jr(se),!Ee&&(Y=X&&X.onVnodeBeforeMount)&&dt(Y,Te,y),Xn(d,!0),K&&ce){const Le=()=>{d.subTree=dc(d),ce(K,d.subTree,d,R,null)};Ee?y.type.__asyncLoader().then(()=>!d.isUnmounted&&Le()):Le()}else{const Le=d.subTree=dc(d);w(null,Le,T,C,d,R,L),y.el=Le.el}if(le&&Ke(le,R),!Ee&&(Y=X&&X.onVnodeMounted)){const Le=y;Ke(()=>dt(Y,Te,Le),R)}(y.shapeFlag&256||Te&&ur(Te.vnode)&&Te.vnode.shapeFlag&256)&&d.a&&Ke(d.a,R),d.isMounted=!0,y=T=C=null}},M=d.effect=new hu(x,()=>wa(O),d.scope),O=d.update=()=>M.run();O.id=d.uid,Xn(d,!0),O()},be=(d,y,T)=>{y.component=d;const C=d.vnode.props;d.vnode=y,d.next=null,hE(d,y.props,C,T),pE(d,y.children,T),ps(),of(),gs()},_e=(d,y,T,C,R,L,V,x,M=!1)=>{const O=d&&d.children,Y=d?d.shapeFlag:0,K=y.children,{patchFlag:X,shapeFlag:se}=y;if(X>0){if(X&128){Yn(O,K,T,C,R,L,V,x,M);return}else if(X&256){Rt(O,K,T,C,R,L,V,x,M);return}}se&8?(Y&16&&j(O,R,L),K!==O&&u(T,K)):Y&16?se&16?Yn(O,K,T,C,R,L,V,x,M):j(O,R,L,!0):(Y&8&&u(T,""),se&16&&b(K,T,C,R,L,V,x,M))},Rt=(d,y,T,C,R,L,V,x,M)=>{d=d||Vr,y=y||Vr;const O=d.length,Y=y.length,K=Math.min(O,Y);let X;for(X=0;X<K;X++){const se=y[X]=M?An(y[X]):Ct(y[X]);w(d[X],se,T,null,R,L,V,x,M)}O>Y?j(d,R,L,!0,!1,K):b(y,T,C,R,L,V,x,M,K)},Yn=(d,y,T,C,R,L,V,x,M)=>{let O=0;const Y=y.length;let K=d.length-1,X=Y-1;for(;O<=K&&O<=X;){const se=d[O],le=y[O]=M?An(y[O]):Ct(y[O]);if(xt(se,le))w(se,le,T,null,R,L,V,x,M);else break;O++}for(;O<=K&&O<=X;){const se=d[K],le=y[X]=M?An(y[X]):Ct(y[X]);if(xt(se,le))w(se,le,T,null,R,L,V,x,M);else break;K--,X--}if(O>K){if(O<=X){const se=X+1,le=se<Y?y[se].el:C;for(;O<=X;)w(null,y[O]=M?An(y[O]):Ct(y[O]),T,le,R,L,V,x,M),O++}}else if(O>X)for(;O<=K;)ft(d[O],R,L,!0),O++;else{const se=O,le=O,Te=new Map;for(O=le;O<=X;O++){const vt=y[O]=M?An(y[O]):Ct(y[O]);vt.key!=null&&Te.set(vt.key,O)}let Ee,Le=0;const Ot=X-le+1;let Rr=!1,Gh=0;const Ss=new Array(Ot);for(O=0;O<Ot;O++)Ss[O]=0;for(O=se;O<=K;O++){const vt=d[O];if(Le>=Ot){ft(vt,R,L,!0);continue}let jt;if(vt.key!=null)jt=Te.get(vt.key);else for(Ee=le;Ee<=X;Ee++)if(Ss[Ee-le]===0&&xt(vt,y[Ee])){jt=Ee;break}jt===void 0?ft(vt,R,L,!0):(Ss[jt-le]=O+1,jt>=Gh?Gh=jt:Rr=!0,w(vt,y[jt],T,null,R,L,V,x,M),Le++)}const Qh=Rr?_E(Ss):Vr;for(Ee=Qh.length-1,O=Ot-1;O>=0;O--){const vt=le+O,jt=y[vt],Jh=vt+1<Y?y[vt+1].el:C;Ss[O]===0?w(null,jt,T,Jh,R,L,V,x,M):Rr&&(Ee<0||O!==Qh[Ee]?Nt(jt,T,Jh,2):Ee--)}}},Nt=(d,y,T,C,R=null)=>{const{el:L,type:V,transition:x,children:M,shapeFlag:O}=d;if(O&6){Nt(d.component.subTree,y,T,C);return}if(O&128){d.suspense.move(y,T,C);return}if(O&64){V.move(d,y,T,pe);return}if(V===lt){r(L,y,T);for(let K=0;K<M.length;K++)Nt(M[K],y,T,C);r(d.anchor,y,T);return}if(V===Bs){_(d,y,T);return}if(C!==2&&O&1&&x)if(C===0)x.beforeEnter(L),r(L,y,T),Ke(()=>x.enter(L),R);else{const{leave:K,delayLeave:X,afterLeave:se}=x,le=()=>r(L,y,T),Te=()=>{K(L,()=>{le(),se&&se()})};X?X(L,le,Te):Te()}else r(L,y,T)},ft=(d,y,T,C=!1,R=!1)=>{const{type:L,props:V,ref:x,children:M,dynamicChildren:O,shapeFlag:Y,patchFlag:K,dirs:X}=d;if(x!=null&&Uo(x,null,T,d,!0),Y&256){y.ctx.deactivate(d);return}const se=Y&1&&X,le=!ur(d);let Te;if(le&&(Te=V&&V.onVnodeBeforeUnmount)&&dt(Te,y,d),Y&6)k(d.component,T,C);else{if(Y&128){d.suspense.unmount(T,C);return}se&&Ht(d,null,y,"beforeUnmount"),Y&64?d.type.remove(d,y,T,R,pe,C):O&&(L!==lt||K>0&&K&64)?j(O,y,T,!1,!0):(L===lt&&K&384||!R&&Y&16)&&j(M,y,T),C&&kr(d)}(le&&(Te=V&&V.onVnodeUnmounted)||se)&&Ke(()=>{Te&&dt(Te,y,d),se&&Ht(d,null,y,"unmounted")},T)},kr=d=>{const{type:y,el:T,anchor:C,transition:R}=d;if(y===lt){Yi(T,C);return}if(y===Bs){I(d);return}const L=()=>{s(T),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(d.shapeFlag&1&&R&&!R.persisted){const{leave:V,delayLeave:x}=R,M=()=>V(T,L);x?x(d.el,L,M):M()}else L()},Yi=(d,y)=>{let T;for(;d!==y;)T=f(d),s(d),d=T;s(y)},k=(d,y,T)=>{const{bum:C,scope:R,update:L,subTree:V,um:x}=d;C&&jr(C),R.stop(),L&&(L.active=!1,ft(V,d,y,T)),x&&Ke(x,y),Ke(()=>{d.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},j=(d,y,T,C=!1,R=!1,L=0)=>{for(let V=L;V<d.length;V++)ft(d[V],y,T,C,R)},U=d=>d.shapeFlag&6?U(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Q=(d,y,T)=>{d==null?y._vnode&&ft(y._vnode,null,null,!0):w(y._vnode||null,d,y,null,null,null,T),of(),xo(),y._vnode=d},pe={p:w,um:ft,m:Nt,r:kr,mt:B,mc:b,pc:_e,pbc:H,n:U,o:t};let Re,ce;return e&&([Re,ce]=e(pe)),{render:Q,hydrate:Re,createApp:mE(Q,Re)}}function Xn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Dg(t,e,n=!1){const r=t.children,s=e.children;if(Z(r)&&Z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=An(s[i]),a.el=o.el),n||Dg(o,a)),a.type===Xr&&(a.el=o.el)}}function _E(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const EE=t=>t.__isTeleport,lt=Symbol(void 0),Xr=Symbol(void 0),ht=Symbol(void 0),Bs=Symbol(void 0),js=[];let At=null;function rn(t=!1){js.push(At=t?null:[])}function Pg(){js.pop(),At=js[js.length-1]||null}let Zr=1;function yf(t){Zr+=t}function xg(t){return t.dynamicChildren=Zr>0?At||Vr:null,Pg(),Zr>0&&At&&At.push(t),t}function n1(t,e,n,r,s,i){return xg(Mg(t,e,n,r,s,i,!0))}function Rn(t,e,n,r,s){return xg(Pe(t,e,n,r,s,!0))}function es(t){return t?t.__v_isVNode===!0:!1}function xt(t,e){return t.type===e.type&&t.key===e.key}const Sa="__vInternal",Lg=({key:t})=>t??null,_o=({ref:t,ref_key:e,ref_for:n})=>t!=null?Oe(t)||Ne(t)||ie(t)?{i:We,r:t,k:e,f:!!n}:t:null;function Mg(t,e=null,n=null,r=0,s=null,i=t===lt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lg(e),ref:e&&_o(e),scopeId:Ea,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:We};return a?(Cu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Oe(n)?8:16),Zr>0&&!o&&At&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&At.push(c),c}const Pe=bE;function bE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Eg)&&(t=ht),es(t)){const a=hn(t,e,!0);return n&&Cu(a,n),Zr>0&&!i&&At&&(a.shapeFlag&6?At[At.indexOf(t)]=a:At.push(a)),a.patchFlag|=-2,a}if(DE(t)&&(t=t.__vccOpts),e){e=TE(e);let{class:a,style:c}=e;a&&!Oe(a)&&(e.class=pa(a)),Ae(c)&&(Xp(c)&&!Z(c)&&(c=Qe({},c)),e.style=da(c))}const o=Oe(t)?1:lg(t)?128:EE(t)?64:Ae(t)?4:ie(t)?2:0;return Mg(t,e,n,r,s,o,i,!0)}function TE(t){return t?Xp(t)||Sa in t?Qe({},t):t:null}function hn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?IE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Lg(a),ref:e&&e.ref?n&&s?Z(s)?s.concat(_o(e)):[s,_o(e)]:_o(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hn(t.ssContent),ssFallback:t.ssFallback&&hn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Fg(t=" ",e=0){return Pe(Xr,null,t,e)}function r1(t="",e=!1){return e?(rn(),Rn(ht,null,t)):Pe(ht,null,t)}function Ct(t){return t==null||typeof t=="boolean"?Pe(ht):Z(t)?Pe(lt,null,t.slice()):typeof t=="object"?An(t):Pe(Xr,null,String(t))}function An(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hn(t)}function Cu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Cu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Sa in e)?e._ctx=We:s===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:We},n=32):(e=String(e),r&64?(n=16,e=[Fg(e)]):n=8);t.children=e,t.shapeFlag|=n}function IE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=pa([e.class,r.class]));else if(s==="style")e.style=da([e.style,r.style]);else if(bi(s)){const i=e[s],o=r[s];o&&i!==o&&!(Z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function dt(t,e,n,r=null){kt(t,e,7,[n,r])}const CE=Ng();let SE=0;function AE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||CE,i={uid:SE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Up(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sg(r,s),emitsOptions:cg(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=P_.bind(null,i),t.ce&&t.ce(i),i}let De=null;const vn=()=>De||We,Hn=t=>{De=t,t.scope.on()},Fn=()=>{De&&De.scope.off(),De=null};function Ug(t){return t.vnode.shapeFlag&4}let ts=!1;function kE(t,e=!1){ts=e;const{props:n,children:r}=t.vnode,s=Ug(t);uE(t,n,s,e),dE(t,r);const i=s?RE(t,e):void 0;return ts=!1,i}function RE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Yr(new Proxy(t.ctx,sE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?OE(t):null;Hn(t),ps();const i=Ln(r,t,0,[t.props,s]);if(gs(),Fn(),cu(i)){if(i.then(Fn,Fn),e)return i.then(o=>{ol(t,o,e)}).catch(o=>{ms(o,t,0)});t.asyncDep=i}else ol(t,i,e)}else $g(t,e)}function ol(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=ng(e)),$g(t,n)}let vf;function $g(t,e,n){const r=t.type;if(!t.render){if(!e&&vf&&!r.render){const s=r.template||Tu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Qe(Qe({isCustomElement:i,delimiters:a},o),c);r.render=vf(s,l)}}t.render=r.render||Mt}Hn(t),ps(),iE(t),gs(),Fn()}function NE(t){return new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}})}function OE(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=NE(t))},slots:t.slots,emit:t.emit,expose:e}}function Aa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ng(Yr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vs)return Vs[n](t)},has(e,n){return n in e||n in Vs}}))}function al(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function DE(t){return ie(t)&&"__vccOpts"in t}const nt=(t,e)=>k_(t,e,ts);function s1(t){const e=vn();let n=t();return Fn(),cu(n)&&(n=n.catch(r=>{throw Hn(e),r})),[n,()=>Hn(e)]}function Ft(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!Z(e)?es(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&es(n)&&(n=[n]),Pe(t,e,n))}const PE=Symbol(""),xE=()=>pt(PE),Vg="3.2.47",LE="http://www.w3.org/2000/svg",sr=typeof document<"u"?document:null,wf=sr&&sr.createElement("template"),ME={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?sr.createElementNS(LE,t):sr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{wf.innerHTML=r?`<svg>${t}</svg>`:t;const a=wf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function FE(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function UE(t,e,n){const r=t.style,s=Oe(n);if(n&&!s){if(e&&!Oe(e))for(const i in e)n[i]==null&&cl(r,i,"");for(const i in n)cl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const _f=/\s*!important$/;function cl(t,e,n){if(Z(n))n.forEach(r=>cl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=$E(t,e);_f.test(n)?t.setProperty(br(r),n.replace(_f,""),"important"):t[r]=n}}const Ef=["Webkit","Moz","ms"],wc={};function $E(t,e){const n=wc[e];if(n)return n;let r=Yt(e);if(r!=="filter"&&r in t)return wc[e]=r;r=ma(r);for(let s=0;s<Ef.length;s++){const i=Ef[s]+r;if(i in t)return wc[e]=i}return e}const bf="http://www.w3.org/1999/xlink";function VE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bf,e.slice(6,e.length)):t.setAttributeNS(bf,e,n);else{const i=Uw(e);n==null||i&&!Dp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function BE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Dp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Dr(t,e,n,r){t.addEventListener(e,n,r)}function jE(t,e,n,r){t.removeEventListener(e,n,r)}function HE(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=qE(e);if(r){const l=i[e]=WE(r,s);Dr(t,a,l,c)}else o&&(jE(t,a,o,c),i[e]=void 0)}}const Tf=/(?:Once|Passive|Capture)$/;function qE(t){let e;if(Tf.test(t)){e={};let r;for(;r=t.match(Tf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):br(t.slice(2)),e]}let _c=0;const KE=Promise.resolve(),zE=()=>_c||(KE.then(()=>_c=0),_c=Date.now());function WE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;kt(GE(r,n.value),e,5,[r])};return n.value=t,n.attached=zE(),n}function GE(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const If=/^on[a-z]/,QE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?FE(t,r,s):e==="style"?UE(t,n,r):bi(e)?iu(e)||HE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JE(t,e,r,s))?BE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),VE(t,e,r,s))};function JE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&If.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||If.test(e)&&Oe(n)?!1:e in t}function i1(t){const e=vn();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>ul(i,s))},r=()=>{const s=t(e.proxy);ll(e.subTree,s),n(s)};q_(r),Ia(()=>{const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),Eu(()=>s.disconnect())})}function ll(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ll(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)ul(t.el,e);else if(t.type===lt)t.children.forEach(n=>ll(n,e));else if(t.type===Bs){let{el:n,anchor:r}=t;for(;n&&(ul(n,e),n!==r);)n=n.nextSibling}}function ul(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const bn="transition",As="animation",ka=(t,{slots:e})=>Ft(dg,YE(t),e);ka.displayName="Transition";const Bg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ka.props=Qe({},dg.props,Bg);const Zn=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},Cf=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function YE(t){const e={};for(const $ in t)$ in Bg||(e[$]=t[$]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,m=XE(s),w=m&&m[0],E=m&&m[1],{onBeforeEnter:v,onEnter:p,onEnterCancelled:_,onLeave:I,onLeaveCancelled:S,onBeforeAppear:P=v,onAppear:N=p,onAppearCancelled:b=_}=e,F=($,re,B)=>{er($,re?u:a),er($,re?l:o),B&&B()},H=($,re)=>{$._isLeaving=!1,er($,h),er($,g),er($,f),re&&re()},G=$=>(re,B)=>{const ve=$?N:p,de=()=>F(re,$,B);Zn(ve,[re,de]),Sf(()=>{er(re,$?c:i),Tn(re,$?u:a),Cf(ve)||Af(re,r,w,de)})};return Qe(e,{onBeforeEnter($){Zn(v,[$]),Tn($,i),Tn($,o)},onBeforeAppear($){Zn(P,[$]),Tn($,c),Tn($,l)},onEnter:G(!1),onAppear:G(!0),onLeave($,re){$._isLeaving=!0;const B=()=>H($,re);Tn($,h),t0(),Tn($,f),Sf(()=>{$._isLeaving&&(er($,h),Tn($,g),Cf(I)||Af($,r,E,B))}),Zn(I,[$,B])},onEnterCancelled($){F($,!1),Zn(_,[$])},onAppearCancelled($){F($,!0),Zn(b,[$])},onLeaveCancelled($){H($),Zn(S,[$])}})}function XE(t){if(t==null)return null;if(Ae(t))return[Ec(t.enter),Ec(t.leave)];{const e=Ec(t);return[e,e]}}function Ec(t){return Fp(t)}function Tn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function er(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Sf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ZE=0;function Af(t,e,n,r){const s=t._endId=++ZE,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=e0(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=g=>{g.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function e0(t,e){const n=window.getComputedStyle(t),r=m=>(n[m]||"").split(", "),s=r(`${bn}Delay`),i=r(`${bn}Duration`),o=kf(s,i),a=r(`${As}Delay`),c=r(`${As}Duration`),l=kf(a,c);let u=null,h=0,f=0;e===bn?o>0&&(u=bn,h=o,f=i.length):e===As?l>0&&(u=As,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?bn:As:null,f=u?u===bn?i.length:c.length:0);const g=u===bn&&/\b(transform|all)(,|$)/.test(r(`${bn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:g}}function kf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Rf(n)+Rf(t[r])))}function Rf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function t0(){return document.body.offsetHeight}const Nf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>jr(e,n):e};function n0(t){t.target.composing=!0}function Of(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const o1={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Nf(s);const i=r||s.props&&s.props.type==="number";Dr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Qc(a)),t._assign(a)}),n&&Dr(t,"change",()=>{t.value=t.value.trim()}),e||(Dr(t,"compositionstart",n0),Dr(t,"compositionend",Of),Dr(t,"change",Of))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Nf(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Qc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},r0=["ctrl","shift","alt","meta"],s0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>r0.some(n=>t[`${n}Key`]&&!e.includes(n))},a1=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=s0[e[s]];if(i&&i(n,e))return}return t(n,...r)},i0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},c1=(t,e)=>n=>{if(!("key"in n))return;const r=br(n.key);if(e.some(s=>s===r||i0[s]===r))return t(n)},jg=Qe({patchProp:QE},ME);let Hs,Df=!1;function o0(){return Hs||(Hs=vE(jg))}function a0(){return Hs=Df?Hs:wE(jg),Df=!0,Hs}const c0=(...t)=>{const e=o0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Hg(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},l0=(...t)=>{const e=a0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Hg(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function Hg(t){return Oe(t)?document.querySelector(t):t}const u0=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,h0=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,f0=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function d0(t,e){if(t!=="__proto__"&&!(t==="constructor"&&e&&typeof e=="object"&&"prototype"in e))return e}function qg(t,e={}){if(typeof t!="string")return t;const n=t.toLowerCase().trim();if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(n==="nan")return Number.NaN;if(n==="infinity")return Number.POSITIVE_INFINITY;if(n!=="undefined"){if(!f0.test(t)){if(e.strict)throw new SyntaxError("Invalid JSON");return t}try{return u0.test(t)||h0.test(t)?JSON.parse(t,d0):JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}}const p0=/#/g,g0=/&/g,m0=/=/g,Kg=/\+/g,y0=/%5e/gi,v0=/%60/gi,w0=/%7c/gi,_0=/%20/gi;function E0(t){return encodeURI(""+t).replace(w0,"|")}function hl(t){return E0(typeof t=="string"?t:JSON.stringify(t)).replace(Kg,"%2B").replace(_0,"+").replace(p0,"%23").replace(g0,"%26").replace(v0,"`").replace(y0,"^")}function bc(t){return hl(t).replace(m0,"%3D")}function zg(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function b0(t){return zg(t.replace(Kg," "))}function T0(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=zg(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=b0(r[2]||"");typeof e[s]<"u"?Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]:e[s]=i}return e}function I0(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${bc(t)}=${hl(n)}`).join("&"):`${bc(t)}=${hl(e)}`:bc(t)}function C0(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>I0(e,t[e])).join("&")}const S0=/^\w{2,}:([/\\]{1,2})/,A0=/^\w{2,}:([/\\]{2})?/,k0=/^([/\\]\s*){2,}[^/\\]/;function Ra(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?S0.test(t):A0.test(t)||(e.acceptRelative?k0.test(t):!1)}const R0=/\/$|\/\?/;function fl(t="",e=!1){return e?R0.test(t):t.endsWith("/")}function Wg(t="",e=!1){if(!e)return(fl(t)?t.slice(0,-1):t)||"/";if(!fl(t,!0))return t||"/";const[n,...r]=t.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function N0(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(fl(t,!0))return t||"/";const[n,...r]=t.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}function O0(t=""){return t.startsWith("/")}function D0(t=""){return(O0(t)?t.slice(1):t)||"/"}function P0(t,e){if(Gg(e)||Ra(t))return t;const n=Wg(e);return t.startsWith(n)?t:Na(n,t)}function Pf(t,e){if(Gg(e))return t;const n=Wg(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function x0(t,e){const n=Su(t),r={...T0(n.search),...e};return n.search=C0(r),M0(n)}function Gg(t){return!t||t==="/"}function L0(t){return t&&t!=="/"}function Na(t,...e){let n=t||"";for(const r of e.filter(s=>L0(s)))n=n?N0(n)+D0(r):r;return n}function Su(t="",e){if(!Ra(t,{acceptRelative:!0}))return e?Su(e+t):xf(t);const[n="",r,s=""]=(t.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[i="",o=""]=(s.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:c,hash:l}=xf(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:i,pathname:a,search:c,hash:l}}function xf(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function M0(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class F0 extends Error{constructor(){super(...arguments),this.name="FetchError"}}function U0(t,e,n){let r="";e&&(r=e.message),t&&n?r=`${r} (${n.status} ${n.statusText} (${t.toString()}))`:t&&(r=`${r} (${t.toString()})`);const s=new F0(r);return Object.defineProperty(s,"request",{get(){return t}}),Object.defineProperty(s,"response",{get(){return n}}),Object.defineProperty(s,"data",{get(){return n&&n._data}}),Object.defineProperty(s,"status",{get(){return n&&n.status}}),Object.defineProperty(s,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(s,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(s,"statusMessage",{get(){return n&&n.statusText}}),s}const $0=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Lf(t="GET"){return $0.has(t.toUpperCase())}function V0(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const B0=new Set(["image/svg","application/xml","application/xhtml","application/html"]),j0=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function H0(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return j0.test(e)?"json":B0.has(e)||e.startsWith("text/")?"text":"blob"}const q0=new Set([408,409,425,429,500,502,503,504]);function Qg(t){const{fetch:e,Headers:n}=t;function r(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){let l;typeof o.options.retry=="number"?l=o.options.retry:l=Lf(o.options.method)?0:1;const u=o.response&&o.response.status||500;if(l>0&&q0.has(u))return s(o.request,{...o.options,retry:l-1})}const c=U0(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(a,c={}){const l={request:a,options:{...t.defaults,...c},response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=P0(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=x0(l.request,{...l.options.params,...l.options.query})),l.options.body&&Lf(l.options.method)&&V0(l.options.body)&&(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json"))),l.response=await e(l.request,l.options).catch(async h=>(l.error=h,l.options.onRequestError&&await l.options.onRequestError(l),r(l)));const u=(l.options.parseResponse?"json":l.options.responseType)||H0(l.response.headers.get("content-type")||"");if(u==="json"){const h=await l.response.text(),f=l.options.parseResponse||qg;l.response._data=f(h)}else u==="stream"?l.response._data=l.response.body:l.response._data=await l.response[u]();return l.options.onResponse&&await l.options.onResponse(l),l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),r(l)):l.response},i=function(a,c){return s(a,c).then(l=>l._data)};return i.raw=s,i.native=e,i.create=(o={})=>Qg({...t,defaults:{...t.defaults,...o}}),i}const Jg=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),K0=Jg.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),z0=Jg.Headers,W0=Qg({fetch:K0,Headers:z0}),G0=W0,Q0=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},$o=Q0().app,J0=()=>$o.baseURL,Y0=()=>$o.buildAssetsDir,X0=(...t)=>Na(Yg(),Y0(),...t),Yg=(...t)=>{const e=$o.cdnURL||$o.baseURL;return t.length?Na(e,...t):e};globalThis.__buildAssetsURL=X0,globalThis.__publicAssetsURL=Yg;function dl(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?dl(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const Z0={run:t=>t()},eb=()=>Z0,Xg=typeof console.createTask<"u"?console.createTask:eb;function tb(t,e){const n=e.shift(),r=Xg(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function nb(t,e){const n=e.shift(),r=Xg(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Tc(t,e){for(const n of[...t])n(e)}class rb{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=dl(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=dl(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(tb,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(nb,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Tc(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Tc(this._after,s)}):(this._after&&s&&Tc(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Zg(){return new rb}function sb(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},l=()=>e===o?c:void 0;pl.add(l);try{const u=s?s.run(o,a):a();return n||(e=void 0),await u}finally{pl.delete(l)}}}}function ib(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=sb({...t,...r})),e[n],e[n]}}}const Vo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Mf="__unctx__",ob=Vo[Mf]||(Vo[Mf]=ib()),ab=(t,e={})=>ob.get(t,e),Ff="__unctx_async_handlers__",pl=Vo[Ff]||(Vo[Ff]=new Set);function si(t){const e=[];for(const s of pl){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const em=ab("nuxt-app"),cb="__nuxt_plugin";function lb(t){let e=0;const n={provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.4.2"},get vue(){return n.vueApp.version}},payload:Ut({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=Zg(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;oo(n,a,o),oo(n.vueApp.config.globalProperties,a,o)},oo(n.vueApp,"$nuxt",n),oo(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",o=>{n.callHook("app:chunkError",{error:o.payload})});const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=Ut(n.payload.config),s=new Proxy(r,{get(i,o){return o in i?i[o]:i.public[o]},set(i,o,a){return o==="public"||o==="app"?!1:(i[o]=a,i.public[o]=a,!0)}});return n.provide("config",s),n}async function ub(t,e){if(typeof e!="function")return;const{provide:n}=await nn(t,e,[t])||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}async function hb(t,e){for(const n of e)await ub(t,n)}function fb(t){const e=[];for(const n of t){if(typeof n!="function")continue;let r=n;n.length>1&&(r=s=>n(s,s.provide)),e.push(r)}return e.sort((n,r)=>{var s,i;return(((s=n.meta)==null?void 0:s.order)||Bo.default)-(((i=r.meta)==null?void 0:i.order)||Bo.default)}),e}const Bo={pre:-20,default:0,post:20};function Ir(t,e){var r;if(typeof t=="function")return Ir({setup:t},e);const n=s=>{if(t.hooks&&s.hooks.addHooks(t.hooks),t.setup)return t.setup(s)};return n.meta={name:(e==null?void 0:e.name)||t.name||((r=t.setup)==null?void 0:r.name),order:(e==null?void 0:e.order)||t.order||Bo[t.enforce||"default"]||Bo.default},n[cb]=!0,n}function nn(t,e,n){const r=()=>n?e(...n):e();return em.set(t),r()}function yt(){const t=em.tryUse();if(!t){const e=vn();if(!e)throw new Error("[nuxt] instance unavailable");return e.appContext.app.$nuxt}return t}function tm(){return yt().$config}function oo(t,e,n){Object.defineProperty(t,e,{get:()=>n})}const db=!1;/*!
  * pinia v2.0.34
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let nm;const Ci=t=>nm=t,rm=Symbol();function gl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qs||(qs={}));function pb(){const t=$p(!0),e=t.run(()=>bt({}));let n=[],r=[];const s=Yr({install(i){Ci(s),s._a=i,i.provide(rm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!db?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const sm=()=>{};function Uf(t,e,n,r=sm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Vp()&&Gw(s),s}function Nr(t,...e){t.slice().forEach(n=>{n(...e)})}function ml(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];gl(s)&&gl(r)&&t.hasOwnProperty(n)&&!Ne(r)&&!cn(r)?t[n]=ml(s,r):t[n]=r}return t}const gb=Symbol();function mb(t){return!gl(t)||!t.hasOwnProperty(gb)}const{assign:Sn}=Object;function yb(t){return!!(Ne(t)&&t.effect)}function vb(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=C_(n.state.value[t]);return Sn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Yr(nt(()=>{Ci(n);const g=n._s.get(t);return o[f].call(g,g)})),h),{}))}return c=im(t,l,e,n,r,!0),c}function im(t,e,n={},r,s,i){let o;const a=Sn({actions:{}},n),c={deep:!0};let l,u,h=Yr([]),f=Yr([]),g;const m=r.state.value[t];!i&&!m&&(r.state.value[t]={}),bt({});let w;function E(N){let b;l=u=!1,typeof N=="function"?(N(r.state.value[t]),b={type:qs.patchFunction,storeId:t,events:g}):(ml(r.state.value[t],N),b={type:qs.patchObject,payload:N,storeId:t,events:g});const F=w=Symbol();Tr().then(()=>{w===F&&(l=!0)}),u=!0,Nr(h,b,r.state.value[t])}const v=i?function(){const{state:b}=n,F=b?b():{};this.$patch(H=>{Sn(H,F)})}:sm;function p(){o.stop(),h=[],f=[],r._s.delete(t)}function _(N,b){return function(){Ci(r);const F=Array.from(arguments),H=[],G=[];function $(ve){H.push(ve)}function re(ve){G.push(ve)}Nr(f,{args:F,name:N,store:S,after:$,onError:re});let B;try{B=b.apply(this&&this.$id===t?this:S,F)}catch(ve){throw Nr(G,ve),ve}return B instanceof Promise?B.then(ve=>(Nr(H,ve),ve)).catch(ve=>(Nr(G,ve),Promise.reject(ve))):(Nr(H,B),B)}}const I={_p:r,$id:t,$onAction:Uf.bind(null,f),$patch:E,$reset:v,$subscribe(N,b={}){const F=Uf(h,N,b.detached,()=>H()),H=o.run(()=>Mn(()=>r.state.value[t],G=>{(b.flush==="sync"?u:l)&&N({storeId:t,type:qs.direct,events:g},G)},Sn({},c,b)));return F},$dispose:p},S=Ut(I);r._s.set(t,S);const P=r._e.run(()=>(o=$p(),o.run(()=>e())));for(const N in P){const b=P[N];if(Ne(b)&&!yb(b)||cn(b))i||(m&&mb(b)&&(Ne(b)?b.value=m[N]:ml(b,m[N])),r.state.value[t][N]=b);else if(typeof b=="function"){const F=_(N,b);P[N]=F,a.actions[N]=b}}return Sn(S,P),Sn(he(S),P),Object.defineProperty(S,"$state",{get:()=>r.state.value[t],set:N=>{E(b=>{Sn(b,N)})}}),r._p.forEach(N=>{Sn(S,o.run(()=>N({store:S,app:r._a,pinia:r,options:a})))}),m&&i&&n.hydrate&&n.hydrate(S.$state,m),l=!0,u=!0,S}function wb(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=vn();return a=a||l&&pt(rm,null),a&&Ci(a),a=nm,a._s.has(r)||(i?im(r,e,s,a):vb(r,s,a)),a._s.get(r)}return o.$id=r,o}function l1(t){{t=he(t);const e={};for(const n in t){const r=t[n];(Ne(r)||cn(r))&&(e[n]=va(t,n))}return e}}function _b(t){return Array.isArray(t)?t:[t]}const om=["title","script","style","noscript"],am=["base","meta","link","style","script","noscript"],Eb=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],bb=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Tb=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function cm(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function yl(t){return cm(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function Ib(t){let e=9;for(const n of t)for(let r=0;r<n.length;)e=Math.imul(e^n.charCodeAt(r++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function lm(t,e){const{props:n,tag:r}=t;if(bb.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${r}:${i}:${o}`}return!1}function $f(t,e){return t==null?e||null:typeof t=="function"?t(e):t}function ao(t,e=!1,n){const{tag:r,$el:s}=t;s&&(Object.entries(r.props).forEach(([i,o])=>{o=String(o);const a=`attr:${i}`;if(i==="class"){if(!o)return;for(const c of o.split(" ")){const l=`${a}:${c}`;n&&n(t,l,()=>s.classList.remove(c)),s.classList.contains(c)||s.classList.add(c)}return}n&&!i.startsWith("data-h-")&&n(t,a,()=>s.removeAttribute(i)),(e||s.getAttribute(i)!==o)&&s.setAttribute(i,o)}),om.includes(r.tag)&&(r.textContent&&r.textContent!==s.textContent?s.textContent=r.textContent:r.innerHTML&&r.innerHTML!==s.innerHTML&&(s.innerHTML=r.innerHTML)))}let ks=!1;async function Cb(t,e={}){var f,g;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const r=e.document||t.resolvedOptions.document||window.document,s=(await t.resolveTags()).map(a);if(t.resolvedOptions.experimentalHashHydration&&(ks=ks||t._hash||!1,ks)){const m=Ib(s.map(w=>w.tag._h));if(ks===m)return;ks=m}const i=t._popSideEffectQueue();t.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([w,E])=>{i[w]=E})});const o=(m,w,E)=>{w=`${m.renderId}:${w}`,m.entry&&(m.entry._sde[w]=E),delete i[w]};function a(m){const w=t.headEntries().find(v=>v._i===m._e),E={renderId:m._d||yl(m),$el:null,shouldRender:!0,tag:m,entry:w,markSideEffect:(v,p)=>o(E,v,p)};return E}const c=[],l={body:[],head:[]},u=m=>{t._elMap[m.renderId]=m.$el,c.push(m),o(m,"el",()=>{var w;(w=m.$el)==null||w.remove(),delete t._elMap[m.renderId]})};for(const m of s){if(await t.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:w}=m;if(w.tag==="title"){r.title=w.textContent||"",c.push(m);continue}if(w.tag==="htmlAttrs"||w.tag==="bodyAttrs"){m.$el=r[w.tag==="htmlAttrs"?"documentElement":"body"],ao(m,!1,o),c.push(m);continue}if(m.$el=t._elMap[m.renderId],!m.$el&&w.key&&(m.$el=r.querySelector(`${(f=w.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${w.tag}[data-h-${w._h}]`)),m.$el){m.tag._d&&ao(m),u(m);continue}l[(g=w.tagPosition)!=null&&g.startsWith("body")?"body":"head"].push(m)}const h={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(l).forEach(([m,w])=>{var v;if(!w.length)return;const E=(v=r==null?void 0:r[m])==null?void 0:v.children;if(E){for(const p of[...E].reverse()){const _=p.tagName.toLowerCase();if(!am.includes(_))continue;const I=p.getAttributeNames().reduce((b,F)=>({...b,[F]:p.getAttribute(F)}),{}),S={tag:_,props:I};p.innerHTML&&(S.innerHTML=p.innerHTML);const P=yl(S);let N=w.findIndex(b=>(b==null?void 0:b.renderId)===P);if(N===-1){const b=lm(S);N=w.findIndex(F=>(F==null?void 0:F.tag._d)&&F.tag._d===b)}if(N!==-1){const b=w[N];b.$el=p,ao(b),u(b),delete w[N]}}w.forEach(p=>{const _=p.tag.tagPosition||"head";h[_]=h[_]||r.createDocumentFragment(),p.$el||(p.$el=r.createElement(p.tag.tag),ao(p,!0)),h[_].appendChild(p.$el),u(p)})}}),h.head&&r.head.appendChild(h.head),h.bodyOpen&&r.body.insertBefore(h.bodyOpen,r.body.firstChild),h.bodyClose&&r.body.appendChild(h.bodyClose);for(const m of c)await t.hooks.callHook("dom:renderTag",m);Object.values(i).forEach(m=>m())}let Ic=null;async function Sb(t,e={}){function n(){return Ic=null,Cb(t,e)}const r=e.delayFn||(s=>setTimeout(s,10));return Ic=Ic||new Promise(s=>r(()=>s(n())))}function Ab(t){return{hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Sb(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})}}}}function kb(t){var e;return((e=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:e.getAttribute("content"))||!1}const Vf={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Bf(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const e=t.tagPriority||t.tag;return e in Vf?Vf[e]:10}const Rb=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Nb(){return{hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of Rb)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>Bf(n)-Bf(r))}}}}function Ob(){return{hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=$f(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=$f(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}}}function Db(){return{hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}}const Pb=["link","style","script","noscript"];function xb(){return{hooks:{"tag:normalise":({tag:t,resolvedOptions:e})=>{e.experimentalHashHydration===!0&&(t._h=yl(t)),t.key&&Pb.includes(t.tag)&&(t._h=cm(t.key),t.props[`data-h-${t._h}`]="")}}}}const jf=["script","link","bodyAttrs"];function Lb(){const t=(e,n)=>{const r={},s={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?s[o]=a:r[o]=a});let i;return e==="dom"&&n.tag==="script"&&typeof r.src=="string"&&typeof s.onload<"u"&&(i=r.src,delete r.src),{props:r,eventHandlers:s,delayedSrc:i}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(!jf.includes(n.tag)||!Object.entries(n.props).find(([r,s])=>r.startsWith("on")&&typeof s=="function")||(n.props=t("ssr",n).props),n))},"dom:beforeRenderTag":function(e){if(!jf.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([i,o])=>i.startsWith("on")&&typeof o=="function"))return;const{props:n,eventHandlers:r,delayedSrc:s}=t("dom",e.tag);Object.keys(r).length&&(e.tag.props=n,e.tag._eventHandlers=r,e.tag._delayedSrc=s)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const r=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([s,i])=>{const o=`${e.tag._d||e.tag._p}:${s}`,a=s.slice(2).toLowerCase(),c=`data-h-${a}`;if(e.markSideEffect(o,()=>{}),n.hasAttribute(c))return;const l=i;n.setAttribute(c,""),r.addEventListener(a,l),e.entry&&(e.entry._sde[o]=()=>{r.removeEventListener(a,l),n.removeAttribute(c)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}}const Mb=["templateParams","htmlAttrs","bodyAttrs"];function Fb(){return{hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(r=>{t.props[r]&&(t.key=t.props[r],delete t.props[r])});const n=lm(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&Mb.includes(r.tag)&&(a="merge"),a==="merge"){const c=i.props;["class","style"].forEach(l=>{r.props[l]&&c[l]&&(l==="style"&&!c[l].endsWith(";")&&(c[l]+=";"),r.props[l]=`${c[l]} ${r.props[l]}`)}),e[s].props={...c,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(am.includes(r.tag)&&o===0){delete e[s];return}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n}}}}function co(t,e){function n(i){if(["s","pageTitle"].includes(i))return e.pageTitle;let o;return i.includes(".")?o=i.split(".").reduce((a,c)=>a&&a[c]||void 0,e):o=e[i],typeof o<"u"?o||"":!1}let r=t;try{r=decodeURI(t)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{const o=n(i.slice(1));typeof o=="string"&&(t=t.replaceAll(new RegExp(`\\${i}(\\W|$)`,"g"),`${o}$1`).trim())}),e.separator&&(t.endsWith(e.separator)&&(t=t.slice(0,-e.separator.length).trim()),t.startsWith(e.separator)&&(t=t.slice(e.separator.length).trim()),t=t.replace(new RegExp(`\\${e.separator}\\s*\\${e.separator}`,"g"),e.separator)),t}function Ub(){return{hooks:{"tags:resolve":t=>{var i;const{tags:e}=t,n=(i=e.find(o=>o.tag==="title"))==null?void 0:i.textContent,r=e.findIndex(o=>o.tag==="templateParams"),s=r!==-1?e[r].props:{};s.pageTitle=s.pageTitle||n||"";for(const o of e)if(["titleTemplate","title"].includes(o.tag)&&typeof o.textContent=="string")o.textContent=co(o.textContent,s);else if(o.tag==="meta"&&typeof o.props.content=="string")o.props.content=co(o.props.content,s);else if(o.tag==="link"&&typeof o.props.href=="string")o.props.href=co(o.props.href,s);else if(o.tag==="script"&&["application/json","application/ld+json"].includes(o.props.type)&&typeof o.innerHTML=="string")try{o.innerHTML=JSON.stringify(JSON.parse(o.innerHTML),(a,c)=>typeof c=="string"?co(c,s):c)}catch{}t.tags=e.filter(o=>o.tag!=="templateParams")}}}}const $b=typeof window<"u";let um;function Vb(t){return um=t}function Bb(){return um}async function jb(t,e){const n={tag:t,props:{}};return t==="templateParams"?(n.props=e,n):["title","titleTemplate"].includes(t)?(n.textContent=e instanceof Promise?await e:e,n):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?n.props.src=e:n.innerHTML=e,n):!1:(n.props=await qb(t,{...e}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(r=>Tb.includes(r)).forEach(r=>{(!["innerHTML","textContent"].includes(r)||om.includes(n.tag))&&(n[r]=n.props[r]),delete n.props[r]}),["innerHTML","textContent"].forEach(r=>{if(n.tag==="script"&&typeof n[r]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[r]=JSON.parse(n[r])}catch{n[r]=""}typeof n[r]=="object"&&(n[r]=JSON.stringify(n[r]))}),n.props.class&&(n.props.class=Hb(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(r=>({...n,props:{...n.props,content:r}})):n)}function Hb(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function qb(t,e){for(const n of Object.keys(e)){const r=n.startsWith("data-");e[n]instanceof Promise&&(e[n]=await e[n]),String(e[n])==="true"?e[n]=r?"true":"":String(e[n])==="false"&&(r?e[n]="false":delete e[n])}return e}const Kb=10;async function zb(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&Eb.includes(n)).forEach(([n,r])=>{const s=_b(r);e.push(...s.map(i=>jb(n,i)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,n._p=(t._i<<Kb)+r,n))}function Wb(){return[Fb(),Nb(),Ub(),Ob(),xb(),Lb(),Db()]}function Gb(t={}){return[Ab({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})]}function Qb(t={}){const e=Jb({...t,plugins:[...Gb(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&e.resolvedOptions.document&&(e._hash=kb(e.resolvedOptions.document)),Vb(e),e}function Jb(t={}){let e=[],n={},r=0;const s=Zg();t!=null&&t.hooks&&s.addHooks(t.hooks),t.plugins=[...Wb(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&s.addHooks(a.hooks)),t.document=t.document||($b?document:void 0);const i=()=>s.callHook("entries:updated",o),o={resolvedOptions:t,headEntries(){return e},get hooks(){return s},use(a){a.hooks&&s.addHooks(a.hooks)},push(a,c){const l={_i:r++,input:a,_sde:{}};return c!=null&&c.mode&&(l._m=c==null?void 0:c.mode),c!=null&&c.transform&&(l._t=c==null?void 0:c.transform),e.push(l),i(),{dispose(){e=e.filter(u=>u._i!==l._i?!0:(n={...n,...u._sde||{}},u._sde={},i(),!1))},patch(u){e=e.map(h=>(h._i===l._i&&(l.input=h.input=u,i()),h))}}},async resolveTags(){const a={tags:[],entries:[...e]};await s.callHook("entries:resolve",a);for(const c of a.entries){const l=c._t||(u=>u);if(c.resolvedInput=l(c.resolvedInput||c.input),c.resolvedInput)for(const u of await zb(c)){const h={tag:u,entry:c,resolvedOptions:o.resolvedOptions};await s.callHook("tag:normalise",h),a.tags.push(h.tag)}}return await s.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return o.hooks.callHook("init",o),o}function Yb(t){return typeof t=="function"?t():$e(t)}function jo(t,e=""){if(t instanceof Promise)return t;const n=Yb(t);return!t||!n?n:Array.isArray(n)?n.map(r=>jo(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,$e(s)]:[r,jo(s,r)])):n}const Xb=Vg.startsWith("3"),Zb=typeof window<"u",hm="usehead";function Au(){return vn()&&pt(hm)||Bb()}function eT(t){return{install(n){Xb&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(hm,t))}}.install}function tT(t={}){const e=Qb({...t,domDelayFn:n=>setTimeout(()=>Tr(()=>n()),10),plugins:[nT(),...(t==null?void 0:t.plugins)||[]]});return e.install=eT(e),e}function nT(){return{hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=jo(e.input)}}}}function rT(t,e={}){const n=Au(),r=bt(!1),s=bt({});H_(()=>{s.value=r.value?{}:jo(t)});const i=n.push(s.value,e);return Mn(s,a=>{i.patch(a)}),vn()&&(Ca(()=>{i.dispose()}),yg(()=>{r.value=!0}),mg(()=>{r.value=!1})),i}function sT(t,e={}){return Au().push(t,e)}function u1(t,e={}){var r;const n=Au();if(n){const s=Zb||!!((r=n.resolvedOptions)!=null&&r.document);return e.mode==="server"&&s||e.mode==="client"&&!s?void 0:s?rT(t,e):sT(t,e)}}const iT=decodeURIComponent,oT=encodeURIComponent,aT=/; */,lo=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function cT(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");let n={},r=e||{},s=t.split(aT),i=r.decode||iT;for(let o=0;o<s.length;o++){let a=s[o],c=a.indexOf("=");if(c<0)continue;let l=a.substr(0,c).trim(),u=a.substr(++c,a.length).trim();u[0]=='"'&&(u=u.slice(1,-1)),n[l]==null&&(n[l]=lT(u,i))}return n}function Hf(t,e,n){let r=n||{},s=r.encode||oT;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!lo.test(t))throw new TypeError("argument name is invalid");let i=s(e);if(i&&!lo.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!=null){let a=r.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!lo.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!lo.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function lT(t,e){try{return e(t)}catch{return t}}function Cc(t){return t!==null&&typeof t=="object"}function vl(t,e,n=".",r){if(!Cc(e))return vl(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Cc(o)&&Cc(s[i])?s[i]=vl(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function uT(t){return(...e)=>e.reduce((n,r)=>vl(n,r,"",t),{})}const hT=uT();class wl extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage=void 0}toJSON(){const e={message:this.message,statusCode:El(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=fm(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}wl.__h3_error__=!0;function _l(t){if(typeof t=="string")return new wl(t);if(fT(t))return t;const e=new wl(t.message??t.statusMessage,t.cause?{cause:t.cause}:void 0);if("stack"in t)try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=El(t.statusCode,e.statusCode):t.status&&(e.statusCode=El(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;fm(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function fT(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const dT=/[^\u0009\u0020-\u007E]/g;function fm(t=""){return t.replace(dT,"")}function El(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}function pT(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s="$s"+n,i=yt(),o=va(i.payload.state,s);if(o.value===void 0&&r){const a=r();if(Ne(a))return i.payload.state[s]=a,a;o.value=a}return o}const Si=()=>{var t;return(t=yt())==null?void 0:t.$router},dm=()=>vn()?pt("_route",yt()._route):yt()._route,Oa=t=>t,gT=()=>{try{if(yt()._processingMiddleware)return!0}catch{return!0}return!1},pm=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:t.path||"/",r=(e==null?void 0:e.external)||Ra(n,{acceptRelative:!0});if(r&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(r&&Su(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");const s=gT();if(!r&&s)return t;const i=Si();return r?(e!=null&&e.replace?location.replace(n):location.href=n,Promise.resolve()):e!=null&&e.replace?i.replace(t):i.push(t)},Da=()=>va(yt().payload,"error"),Mr=t=>{const e=gm(t);try{yt().callHook("app:error",e);const r=Da();r.value=r.value||e}catch{throw e}return e},mT=async(t={})=>{const e=yt(),n=Da();e.callHook("app:error:cleared",t),t.redirect&&await Si().replace(t.redirect),n.value=null},yT=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),gm=t=>{const e=_l(t);return e.__nuxt_error=!0,e},vT={path:"/",watch:!0,decode:t=>qg(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))};function wT(t,e){var i;const n={...vT,...e},r=_T(n)||{},s=bt(r[t]??((i=n.default)==null?void 0:i.call(n)));{const o=()=>{bT(t,s.value,n)};n.watch?Mn(s,o,{deep:n.watch!=="shallow"}):o()}return s}function _T(t={}){return cT(document.cookie,t)}function ET(t,e,n={}){return e==null?Hf(t,e,{...n,maxAge:-1}):Hf(t,e,n)}function bT(t,e,n={}){document.cookie=ET(t,e,n)}const TT="modulepreload",IT=function(t,e){return t.startsWith(".")?new URL(t,e).href:t},qf={},CT=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=IT(i,r),i in qf)return;qf[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":TT,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Dt=(...t)=>CT(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e});Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const ST={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[],noscript:[],htmlAttrs:{lang:"en"},title:"Send Snoods",charset:"utf-8"},AT=!1,bl=!1,kT=!1,RT="__nuxt";function NT(t={}){const e=t.path||window.location.pathname;let n={};try{n=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:yt().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const OT=Ir(t=>{const e=pb();return t.vueApp.use(e),Ci(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}});const DT=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Sc=wT("cart",{sameSite:!0}),PT=wb({id:"store",state:()=>({loggedIn:!1,cart:Sc.value?Sc.value:[],cartVisible:!1,currentUser:null}),getters:{cartSize(){return this.cart.reduce((t,e)=>t+e.quantity,0)},cartTotal(){return this.cart.reduce((t,e)=>t+e.price*e.quantity,0)}},actions:{logIn(){this.loggedIn=!0},logOut(){this.loggedIn=!1},setCurrentUser(t){this.currentUser=t},addToCart(t){const e=this.cart.find(n=>n.id===t.id);e?e.quantity+=t.quantity.value:this.cart.push(t),Sc.value=this.cart},removeFromCart(t){const e=this.cart.find(n=>n.id===t);e.quantity>1?e.quantity-=1:this.cart.splice(this.cart.indexOf(e),1)},cartToggle(){this.cartVisible=!this.cartVisible}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ym={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new LT;const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MT=function(t){const e=mm(t);return ym.encodeByteArray(e,!0)},Ho=function(t){return MT(t).replace(/\./g,"")},vm=function(t){try{return ym.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=()=>FT().__FIREBASE_DEFAULTS__,$T=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vm(t[1]);return e&&JSON.parse(e)},ku=()=>{try{return UT()||$T()||VT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wm=t=>{var e,n;return(n=(e=ku())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},BT=t=>{const e=wm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jT=()=>{var t;return(t=ku())===null||t===void 0?void 0:t.config},_m=t=>{var e;return(e=ku())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ho(JSON.stringify(n)),Ho(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function zT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GT(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QT(){try{return typeof indexedDB=="object"}catch{return!1}}function JT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=YT,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?XT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wn(s,a,r)}}function XT(t,e){return t.replace(ZT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ZT=/\{\$([^}]+)}/g;function eI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Kf(i)&&Kf(o)){if(!qo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Kf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tI(t,e){const n=new nI(t,e);return n.subscribe.bind(n)}class nI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ac),s.error===void 0&&(s.error=Ac),s.complete===void 0&&(s.complete=Ac);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ac(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new HT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oI(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iI(t){return t===nr?void 0:t}function oI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const cI={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},lI=me.INFO,uI={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},hI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=uI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ru{constructor(e){this.name=e,this._logLevel=lI,this._logHandler=hI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const fI=(t,e)=>e.some(n=>t instanceof n);let zf,Wf;function dI(){return zf||(zf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pI(){return Wf||(Wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Em=new WeakMap,Tl=new WeakMap,bm=new WeakMap,kc=new WeakMap,Nu=new WeakMap;function gI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Un(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Em.set(n,t)}).catch(()=>{}),Nu.set(e,t),e}function mI(t){if(Tl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Tl.set(t,e)}let Il={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yI(t){Il=t(Il)}function vI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rc(this),e,...n);return bm.set(r,e.sort?e.sort():[e]),Un(r)}:pI().includes(t)?function(...e){return t.apply(Rc(this),e),Un(Em.get(this))}:function(...e){return Un(t.apply(Rc(this),e))}}function wI(t){return typeof t=="function"?vI(t):(t instanceof IDBTransaction&&mI(t),fI(t,dI())?new Proxy(t,Il):t)}function Un(t){if(t instanceof IDBRequest)return gI(t);if(kc.has(t))return kc.get(t);const e=wI(t);return e!==t&&(kc.set(t,e),Nu.set(e,t)),e}const Rc=t=>Nu.get(t);function _I(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Un(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Un(o.result),c.oldVersion,c.newVersion,Un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const EI=["get","getKey","getAll","getAllKeys","count"],bI=["put","add","delete","clear"],Nc=new Map;function Gf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nc.get(e))return Nc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||EI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Nc.set(e,i),i}yI(t=>({...t,get:(e,n,r)=>Gf(e,n)||t.get(e,n,r),has:(e,n)=>!!Gf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(II(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function II(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cl="@firebase/app",Qf="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new Ru("@firebase/app"),CI="@firebase/app-compat",SI="@firebase/analytics-compat",AI="@firebase/analytics",kI="@firebase/app-check-compat",RI="@firebase/app-check",NI="@firebase/auth",OI="@firebase/auth-compat",DI="@firebase/database",PI="@firebase/database-compat",xI="@firebase/functions",LI="@firebase/functions-compat",MI="@firebase/installations",FI="@firebase/installations-compat",UI="@firebase/messaging",$I="@firebase/messaging-compat",VI="@firebase/performance",BI="@firebase/performance-compat",jI="@firebase/remote-config",HI="@firebase/remote-config-compat",qI="@firebase/storage",KI="@firebase/storage-compat",zI="@firebase/firestore",WI="@firebase/firestore-compat",GI="firebase",QI="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="[DEFAULT]",JI={[Cl]:"fire-core",[CI]:"fire-core-compat",[AI]:"fire-analytics",[SI]:"fire-analytics-compat",[RI]:"fire-app-check",[kI]:"fire-app-check-compat",[NI]:"fire-auth",[OI]:"fire-auth-compat",[DI]:"fire-rtdb",[PI]:"fire-rtdb-compat",[xI]:"fire-fn",[LI]:"fire-fn-compat",[MI]:"fire-iid",[FI]:"fire-iid-compat",[UI]:"fire-fcm",[$I]:"fire-fcm-compat",[VI]:"fire-perf",[BI]:"fire-perf-compat",[jI]:"fire-rc",[HI]:"fire-rc-compat",[qI]:"fire-gcs",[KI]:"fire-gcs-compat",[zI]:"fire-fst",[WI]:"fire-fst-compat","fire-js":"fire-js",[GI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new Map,Al=new Map;function YI(t,e){try{t.container.addComponent(e)}catch(n){mr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(Al.has(e))return mr.debug(`There were multiple attempts to register component ${e}.`),!1;Al.set(e,t);for(const n of Ko.values())YI(n,t);return!0}function Ou(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$n=new Ai("app","Firebase",XI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=QI;function Tm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw $n.create("bad-app-name",{appName:String(s)});if(n||(n=jT()),!n)throw $n.create("no-options");const i=Ko.get(s);if(i){if(qo(n,i.options)&&qo(r,i.config))return i;throw $n.create("duplicate-app",{appName:s})}const o=new aI(s);for(const c of Al.values())o.addComponent(c);const a=new ZI(n,r,o);return Ko.set(s,a),a}function Im(t=Sl){const e=Ko.get(t);if(!e&&t===Sl)return Tm();if(!e)throw $n.create("no-app",{appName:t});return e}function Vn(t,e,n){var r;let s=(r=JI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mr.warn(a.join(" "));return}ns(new gr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="firebase-heartbeat-database",tC=1,ii="firebase-heartbeat-store";let Oc=null;function Cm(){return Oc||(Oc=_I(eC,tC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ii)}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),Oc}async function nC(t){try{return(await Cm()).transaction(ii).objectStore(ii).get(Sm(t))}catch(e){if(e instanceof wn)mr.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mr.warn(n.message)}}}async function Jf(t,e){try{const r=(await Cm()).transaction(ii,"readwrite");return await r.objectStore(ii).put(e,Sm(t)),r.done}catch(n){if(n instanceof wn)mr.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mr.warn(r.message)}}}function Sm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=1024,sC=30*24*60*60*1e3;class iC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=sC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yf(),{heartbeatsToSend:n,unsentEntries:r}=oC(this._heartbeatsCache.heartbeats),s=Ho(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Yf(){return new Date().toISOString().substring(0,10)}function oC(t,e=rC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QT()?JT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xf(t){return Ho(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){ns(new gr("platform-logger",e=>new TI(e),"PRIVATE")),ns(new gr("heartbeat",e=>new iC(e),"PRIVATE")),Vn(Cl,Qf,t),Vn(Cl,Qf,"esm2017"),Vn("fire-js","")}cC("");function Du(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Am(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lC=Am,km=new Ai("auth","Firebase",Am());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=new Ru("@firebase/auth");function Eo(t,...e){Zf.logLevel<=me.ERROR&&Zf.error(`Auth (${Ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw Pu(t,...e)}function zt(t,...e){return Pu(t,...e)}function uC(t,e,n){const r=Object.assign(Object.assign({},lC()),{[e]:n});return new Ai("auth","Firebase",r).create(e,{appName:t.name})}function Pu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return km.create(t,...e)}function ee(t,e,...n){if(!t)throw Pu(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eo(e),new Error(e)}function fn(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new Map;function on(t){fn(t instanceof Function,"Expected a class definition");let e=ed.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ed.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t,e){const n=Ou(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(qo(i,e??{}))return s;$t(s,"already-initialized")}return n.initialize({options:e})}function fC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dC(){return td()==="http:"||td()==="https:"}function td(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dC()||zT()||"connection"in navigator)?navigator.onLine:!0}function gC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=KT()||WT()}get(){return pC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=new Ni(3e4,6e4);function Oi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ys(t,e,n,r,s={}){return Nm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ki(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Rm.fetch()(Om(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Nm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mC),e);try{const s=new vC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw uo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw uo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw uo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw uC(t,u,l);$t(t,u)}}catch(s){if(s instanceof wn)throw s;$t(t,"network-request-failed",{message:String(s)})}}async function Di(t,e,n,r,s={}){const i=await ys(t,e,n,r,s);return"mfaPendingCredential"in i&&$t(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Om(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?xu(t.config,s):`${t.config.apiScheme}://${s}`}class vC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),yC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=zt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(t,e){return ys(t,"POST","/v1/accounts:delete",e)}async function _C(t,e){return ys(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EC(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=Lu(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ks(Dc(s.auth_time)),issuedAtTime:Ks(Dc(s.iat)),expirationTime:Ks(Dc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Dc(t){return Number(t)*1e3}function Lu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=vm(n);return s?JSON.parse(s):(Eo("Failed to decode base64 JWT payload"),null)}catch(s){return Eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bC(t){const e=Lu(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&TC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function TC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await rs(t,_C(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?AC(i.providerUserInfo):[],a=SC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Dm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function CC(t){const e=Je(t);await zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function AC(t){return t.map(e=>{var{providerId:n}=e,r=Du(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e){const n=await Nm(t,{},async()=>{const r=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Om(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await kC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new oi;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Du(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await rs(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EC(this,e)}reload(){return CC(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rs(this,wC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:I,isAnonymous:S,providerData:P,stsTokenManager:N}=n;ee(_&&N,e,"internal-error");const b=oi.fromJSON(this.name,N);ee(typeof _=="string",e,"internal-error"),In(h,e.name),In(f,e.name),ee(typeof I=="boolean",e,"internal-error"),ee(typeof S=="boolean",e,"internal-error"),In(g,e.name),In(m,e.name),In(w,e.name),In(E,e.name),In(v,e.name),In(p,e.name);const F=new hr({uid:_,auth:e,email:f,emailVerified:I,displayName:h,isAnonymous:S,photoURL:m,phoneNumber:g,tenantId:w,stsTokenManager:b,createdAt:v,lastLoginAt:p});return P&&Array.isArray(P)&&(F.providerData=P.map(H=>Object.assign({},H))),E&&(F._redirectEventId=E),F}static async _fromIdTokenResponse(e,n,r=!1){const s=new oi;s.updateFromServerResponse(n);const i=new hr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pm.type="NONE";const nd=Pm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=bo(this.userKey,s.apiKey,i),this.fullPersistenceKey=bo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zr(on(nd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||on(nd);const o=bo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=hr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new zr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new zr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Um(e))return"Blackberry";if($m(e))return"Webos";if(Mu(e))return"Safari";if((e.includes("chrome/")||Lm(e))&&!e.includes("edge/"))return"Chrome";if(Fm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xm(t=ot()){return/firefox\//i.test(t)}function Mu(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lm(t=ot()){return/crios\//i.test(t)}function Mm(t=ot()){return/iemobile/i.test(t)}function Fm(t=ot()){return/android/i.test(t)}function Um(t=ot()){return/blackberry/i.test(t)}function $m(t=ot()){return/webos/i.test(t)}function Pa(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RC(t=ot()){var e;return Pa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NC(){return GT()&&document.documentMode===10}function Vm(t=ot()){return Pa(t)||Fm(t)||$m(t)||Um(t)||/windows phone/i.test(t)||Mm(t)}function OC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t,e=[]){let n;switch(t){case"Browser":n=rd(ot());break;case"Worker":n=`${rd(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sd(this),this.idTokenSubscription=new sd(this),this.beforeStateQueue=new DC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=km,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Pi(t){return Je(t)}class sd{constructor(e){this.auth=e,this.observer=null,this.addObserver=tI(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function xC(t,e,n){const r=Pi(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=jm(e),{host:o,port:a}=LC(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||MC()}function jm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LC(t){const e=jm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:id(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:id(o)}}}function id(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}async function FC(t,e){return ys(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UC(t,e){return Di(t,"POST","/v1/accounts:signInWithPassword",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $C(t,e){return Di(t,"POST","/v1/accounts:signInWithEmailLink",Oi(t,e))}async function VC(t,e){return Di(t,"POST","/v1/accounts:signInWithEmailLink",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Fu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ai(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ai(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return UC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $C(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return FC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return VC(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(t,e){return Di(t,"POST","/v1/accounts:signInWithIdp",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC="http://localhost";class yr extends Fu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Du(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new yr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wr(e,n)}buildRequest(){const e={requestUri:BC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HC(t){const e=Ps(xs(t)).link,n=e?Ps(xs(e)).deep_link_id:null,r=Ps(xs(t)).deep_link_id;return(r?Ps(xs(r)).link:null)||r||n||e||t}class Uu{constructor(e){var n,r,s,i,o,a;const c=Ps(xs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=jC((s=c.mode)!==null&&s!==void 0?s:null);ee(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=HC(e);try{return new Uu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.providerId=vs.PROVIDER_ID}static credential(e,n){return ai._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Uu.parseLink(n);return ee(r,"argument-error"),ai._fromEmailAndCode(e,r.code,r.tenantId)}}vs.PROVIDER_ID="password";vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Hm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends xi{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends xi{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends xi{constructor(){super("twitter.com")}static credential(e,n){return yr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e){return Di(t,"POST","/v1/accounts:signUp",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hr._fromIdTokenResponse(e,r,s),o=od(r);return new vr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=od(r);return new vr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function od(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Wo(e,n,r,s)}}function qm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wo._fromErrorAndOperation(t,i,e,r):i})}async function KC(t,e,n=!1){const r=await rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await rs(t,qm(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=Lu(i.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),vr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Km(t,e,n=!1){const r="signIn",s=await qm(t,r,e),i=await vr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function WC(t,e){return Km(Pi(t),e)}async function GC(t,e,n){const r=Pi(t),s=await qC(r,{returnSecureToken:!0,email:e,password:n}),i=await vr._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function QC(t,e,n){return WC(Je(t),vs.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(t,e){return ys(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Je(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await rs(r,JC(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function XC(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function ZC(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function eS(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function tS(t){return Je(t).signOut()}const Go="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Go,"1"),this.storage.removeItem(Go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(){const t=ot();return Mu(t)||Pa(t)}const rS=1e3,sS=10;class Wm extends zm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nS()&&OC(),this.fallbackToPolling=Vm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);NC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wm.type="LOCAL";const iS=Wm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm extends zm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gm.type="SESSION";const Qm=Gm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new xa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await oS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=$u("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function cS(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function lS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hS(){return Jm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="firebaseLocalStorageDb",fS=1,Qo="firebaseLocalStorage",Xm="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function La(t,e){return t.transaction([Qo],e?"readwrite":"readonly").objectStore(Qo)}function dS(){const t=indexedDB.deleteDatabase(Ym);return new Li(t).toPromise()}function Rl(){const t=indexedDB.open(Ym,fS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qo,{keyPath:Xm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qo)?e(r):(r.close(),await dS(),e(await Rl()))})})}async function ad(t,e,n){const r=La(t,!0).put({[Xm]:e,value:n});return new Li(r).toPromise()}async function pS(t,e){const n=La(t,!1).get(e),r=await new Li(n).toPromise();return r===void 0?null:r.value}function cd(t,e){const n=La(t,!0).delete(e);return new Li(n).toPromise()}const gS=800,mS=3;class Zm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xa._getInstance(hS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lS(),!this.activeServiceWorker)return;this.sender=new aS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rl();return await ad(e,Go,"1"),await cd(e,Go),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ad(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=La(s,!1).getAll();return new Li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zm.type="LOCAL";const yS=Zm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",vS().appendChild(r)})}function _S(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ni(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t,e){return e?on(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends Fu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bS(t){return Km(t.auth,new Vu(t),t.bypassAuthState)}function TS(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),zC(n,new Vu(t),t.bypassAuthState)}async function IS(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),KC(n,new Vu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bS;case"linkViaPopup":case"linkViaRedirect":return IS;case"reauthViaPopup":case"reauthViaRedirect":return TS;default:$t(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=new Ni(2e3,1e4);class Fr extends ey{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Fr.currentPopupAction&&Fr.currentPopupAction.cancel(),Fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=$u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,CS.get())};e()}}Fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="pendingRedirect",To=new Map;class AS extends ey{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await kS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kS(t,e){const n=OS(e),r=NS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function RS(t,e){To.set(t._key(),e)}function NS(t){return on(t._redirectPersistence)}function OS(t){return bo(SS,t.config.apiKey,t.name)}async function DS(t,e,n=!1){const r=Pi(t),s=ES(r,e),o=await new AS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=10*60*1e3;class xS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ty(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PS&&this.cachedEventUids.clear(),this.cachedEventUids.has(ld(e))}saveEventToCache(e){this.cachedEventUids.add(ld(e)),this.lastProcessedEventTime=Date.now()}}function ld(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ty({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ty(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(t,e={}){return ys(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,US=/^https?/;async function $S(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MS(t);for(const n of e)try{if(VS(n))return}catch{}$t(t,"unauthorized-domain")}function VS(t){const e=kl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!US.test(n))return!1;if(FS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=new Ni(3e4,6e4);function ud(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jS(t){return new Promise((e,n)=>{var r,s,i;function o(){ud(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ud(),n(zt(t,"network-request-failed"))},timeout:BS.get()})}if(!((s=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)o();else{const a=_S("iframefcb");return Wt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},wS(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Io=null,e})}let Io=null;function HS(t){return Io=Io||jS(t),Io}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=new Ni(5e3,15e3),KS="__/auth/iframe",zS="emulator/auth/iframe",WS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QS(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xu(e,zS):`https://${t.config.authDomain}/${KS}`,r={apiKey:e.apiKey,appName:t.name,v:Ri},s=GS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ki(r).slice(1)}`}async function JS(t){const e=await HS(t),n=Wt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:QS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Wt().setTimeout(()=>{i(o)},qS.get());function c(){Wt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XS=500,ZS=600,eA="_blank",tA="http://localhost";class hd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nA(t,e,n,r=XS,s=ZS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},YS),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ot().toLowerCase();n&&(a=Lm(l)?eA:n),xm(l)&&(e=e||tA,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(RC(l)&&a!=="_self")return rA(e||"",a),new hd(null);const h=window.open(e||"",a,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new hd(h)}function rA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="__/auth/handler",iA="emulator/auth/handler";function fd(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ri,eventId:s};if(e instanceof Hm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof xi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${oA(t)}?${ki(a).slice(1)}`}function oA({config:t}){return t.emulator?xu(t,iA):`https://${t.authDomain}/${sA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="webStorageSupport";class aA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qm,this._completeRedirectFn=DS,this._overrideRedirectResult=RS}async _openPopup(e,n,r,s){var i;fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=fd(e,n,r,kl(),s);return nA(e,o,$u())}async _openRedirect(e,n,r,s){return await this._originValidation(e),cS(fd(e,n,r,kl(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JS(e),r=new xS(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pc,{type:Pc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Pc];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$S(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vm()||Mu()||Pa()}}const cA=aA;var dd="@firebase/auth",pd="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hA(t){ns(new gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{ee(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bm(t)},u=new PC(a,c,l);return fC(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ns(new gr("auth-internal",e=>{const n=Pi(e.getProvider("auth").getImmediate());return(r=>new lA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(dd,pd,uA(t)),Vn(dd,pd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=5*60,dA=_m("authIdTokenMaxAge")||fA;let gd=null;const pA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dA)return;const s=n==null?void 0:n.token;gd!==s&&(gd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function gA(t=Im()){const e=Ou(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hC(t,{popupRedirectResolver:cA,persistence:[yS,iS,Qm]}),r=_m("authTokenSyncURL");if(r){const i=pA(r);ZC(n,i,()=>i(n.currentUser)),XC(n,o=>i(o))}const s=wm("auth");return s&&xC(n,`http://${s}`),n}hA("Browser");var mA="firebase",yA="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn(mA,yA,"app");var vA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,Bu=Bu||{},ne=vA||self;function Jo(){}function Ma(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Mi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function wA(t){return Object.prototype.hasOwnProperty.call(t,xc)&&t[xc]||(t[xc]=++_A)}var xc="closure_uid_"+(1e9*Math.random()>>>0),_A=0;function EA(t,e,n){return t.call.apply(t.bind,arguments)}function bA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=EA:st=bA,st.apply(null,arguments)}function ho(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Gn(){this.s=this.s,this.o=this.o}var TA=0;Gn.prototype.s=!1;Gn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),TA!=0)&&wA(this)};Gn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ny=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ju(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function md(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ma(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var IA=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",Jo,e),ne.removeEventListener("test",Jo,e)}catch{}return t}();function Yo(t){return/^[\s\xa0]*$/.test(t)}var yd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Lc(t,e){return t<e?-1:t>e?1:0}function Fa(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function Kt(t){return Fa().indexOf(t)!=-1}function Hu(t){return Hu[" "](t),t}Hu[" "]=Jo;function CA(t){var e=kA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var SA=Kt("Opera"),ss=Kt("Trident")||Kt("MSIE"),ry=Kt("Edge"),Nl=ry||ss,sy=Kt("Gecko")&&!(Fa().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge"))&&!(Kt("Trident")||Kt("MSIE"))&&!Kt("Edge"),AA=Fa().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge");function iy(){var t=ne.document;return t?t.documentMode:void 0}var Xo;e:{var Mc="",Fc=function(){var t=Fa();if(sy)return/rv:([^\);]+)(\)|;)/.exec(t);if(ry)return/Edge\/([\d\.]+)/.exec(t);if(ss)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(AA)return/WebKit\/(\S+)/.exec(t);if(SA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fc&&(Mc=Fc?Fc[1]:""),ss){var Uc=iy();if(Uc!=null&&Uc>parseFloat(Mc)){Xo=String(Uc);break e}}Xo=Mc}var kA={};function RA(){return CA(function(){let t=0;const e=yd(String(Xo)).split("."),n=yd("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Lc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Lc(s[2].length==0,i[2].length==0)||Lc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Ol;if(ne.document&&ss){var vd=iy();Ol=vd||parseInt(Xo,10)||void 0}else Ol=void 0;var NA=Ol;function ci(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(sy){e:{try{Hu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:OA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ci.X.h.call(this)}}Ye(ci,it);var OA={2:"touch",3:"pen",4:"mouse"};ci.prototype.h=function(){ci.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fi="closure_listenable_"+(1e6*Math.random()|0),DA=0;function PA(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++DA,this.ba=this.ea=!1}function Ua(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function qu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function oy(t){const e={};for(const n in t)e[n]=t[n];return e}const wd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ay(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<wd.length;i++)n=wd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $a(t){this.src=t,this.g={},this.h=0}$a.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Pl(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new PA(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function Dl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=ny(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ua(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var Ku="closure_lm_"+(1e6*Math.random()|0),$c={};function cy(t,e,n,r,s){if(r&&r.once)return uy(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)cy(t,e[i],n,r,s);return null}return n=Gu(n),t&&t[Fi]?t.N(e,n,Mi(r)?!!r.capture:!!r,s):ly(t,e,n,!1,r,s)}function ly(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Mi(s)?!!s.capture:!!s,a=Wu(t);if(a||(t[Ku]=a=new $a(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=xA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)IA||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(fy(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xA(){function t(n){return e.call(t.src,t.listener,n)}const e=LA;return t}function uy(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)uy(t,e[i],n,r,s);return null}return n=Gu(n),t&&t[Fi]?t.O(e,n,Mi(r)?!!r.capture:!!r,s):ly(t,e,n,!0,r,s)}function hy(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)hy(t,e[i],n,r,s);else r=Mi(r)?!!r.capture:!!r,n=Gu(n),t&&t[Fi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Pl(i,n,r,s),-1<n&&(Ua(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pl(e,n,r,s)),(n=-1<t?e[t]:null)&&zu(n))}function zu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Fi])Dl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(fy(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Wu(e))?(Dl(n,t),n.h==0&&(n.src=null,e[Ku]=null)):Ua(t)}}}function fy(t){return t in $c?$c[t]:$c[t]="on"+t}function LA(t,e){if(t.ba)t=!0;else{e=new ci(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&zu(t),t=n.call(r,e)}return t}function Wu(t){return t=t[Ku],t instanceof $a?t:null}var Vc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gu(t){return typeof t=="function"?t:(t[Vc]||(t[Vc]=function(e){return t.handleEvent(e)}),t[Vc])}function qe(){Gn.call(this),this.i=new $a(this),this.P=this,this.I=null}Ye(qe,Gn);qe.prototype[Fi]=!0;qe.prototype.removeEventListener=function(t,e,n,r){hy(this,t,e,n,r)};function Ge(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var s=e;e=new it(r,t),ay(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=fo(o,r,!0,e)&&s}if(o=e.g=t,s=fo(o,r,!0,e)&&s,s=fo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=fo(o,r,!1,e)&&s}qe.prototype.M=function(){if(qe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ua(n[r]);delete t.g[e],t.h--}}this.I=null};qe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function fo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Dl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Qu=ne.JSON.stringify;function MA(){var t=gy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class FA{constructor(){this.h=this.g=null}add(e,n){const r=dy.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var dy=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new UA,t=>t.reset());class UA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $A(t){ne.setTimeout(()=>{throw t},0)}function py(t,e){xl||VA(),Ll||(xl(),Ll=!0),gy.add(t,e)}var xl;function VA(){var t=ne.Promise.resolve(void 0);xl=function(){t.then(BA)}}var Ll=!1,gy=new FA;function BA(){for(var t;t=MA();){try{t.h.call(t.g)}catch(n){$A(n)}var e=dy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ll=!1}function Va(t,e){qe.call(this),this.h=t||1,this.g=e||ne,this.j=st(this.lb,this),this.l=Date.now()}Ye(Va,qe);z=Va.prototype;z.ca=!1;z.R=null;z.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ge(this,"tick"),this.ca&&(Ju(this),this.start()))}};z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ju(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}z.M=function(){Va.X.M.call(this),Ju(this),delete this.g};function Yu(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function my(t){t.g=Yu(()=>{t.g=null,t.i&&(t.i=!1,my(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jA extends Gn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:my(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function li(t){Gn.call(this),this.h=t,this.g={}}Ye(li,Gn);var _d=[];function yy(t,e,n,r){Array.isArray(n)||(n&&(_d[0]=n.toString()),n=_d);for(var s=0;s<n.length;s++){var i=cy(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function vy(t){qu(t.g,function(e,n){this.g.hasOwnProperty(n)&&zu(e)},t),t.g={}}li.prototype.M=function(){li.X.M.call(this),vy(this)};li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ba(){this.g=!0}Ba.prototype.Aa=function(){this.g=!1};function HA(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function qA(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ur(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zA(t,n)+(r?" "+r:"")})}function KA(t,e){t.info(function(){return"TIMEOUT: "+e})}Ba.prototype.info=function(){};function zA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Qu(n)}catch{return e}}var Cr={},Ed=null;function ja(){return Ed=Ed||new qe}Cr.Pa="serverreachability";function wy(t){it.call(this,Cr.Pa,t)}Ye(wy,it);function ui(t){const e=ja();Ge(e,new wy(e))}Cr.STAT_EVENT="statevent";function _y(t,e){it.call(this,Cr.STAT_EVENT,t),this.stat=e}Ye(_y,it);function ut(t){const e=ja();Ge(e,new _y(e,t))}Cr.Qa="timingevent";function Ey(t,e){it.call(this,Cr.Qa,t),this.size=e}Ye(Ey,it);function Ui(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var Ha={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},by={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Xu(){}Xu.prototype.h=null;function bd(t){return t.h||(t.h=t.i())}function Ty(){}var $i={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Zu(){it.call(this,"d")}Ye(Zu,it);function eh(){it.call(this,"c")}Ye(eh,it);var Ml;function qa(){}Ye(qa,Xu);qa.prototype.g=function(){return new XMLHttpRequest};qa.prototype.i=function(){return{}};Ml=new qa;function Vi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new li(this),this.O=WA,t=Nl?125:void 0,this.T=new Va(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Iy}function Iy(){this.i=null,this.g="",this.h=!1}var WA=45e3,Fl={},Zo={};z=Vi.prototype;z.setTimeout=function(t){this.O=t};function Ul(t,e,n){t.K=1,t.v=za(dn(e)),t.s=n,t.P=!0,Cy(t,null)}function Cy(t,e){t.F=Date.now(),Bi(t),t.A=dn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Py(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Iy,t.g=ev(t.l,n?e:null,!t.s),0<t.N&&(t.L=new jA(st(t.La,t,t.g),t.N)),yy(t.S,t.g,"readystatechange",t.ib),e=t.H?oy(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ui(),HA(t.j,t.u,t.A,t.m,t.U,t.s)}z.ib=function(t){t=t.target;const e=this.L;e&&an(t)==3?e.l():this.La(t)};z.La=function(t){try{if(t==this.g)e:{const u=an(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Nl||this.g&&(this.h.h||this.g.fa()||Sd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ui(3):ui(2)),Ka(this);var n=this.g.aa();this.Y=n;t:if(Sy(this)){var r=Sd(this.g);t="";var s=r.length,i=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),zs(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,qA(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Yo(a)){var l=a;break t}}l=null}if(n=l)Ur(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,$l(this,n);else{this.i=!1,this.o=3,ut(12),or(this),zs(this);break e}}this.P?(Ay(this,u,o),Nl&&this.i&&u==3&&(yy(this.S,this.T,"tick",this.hb),this.T.start())):(Ur(this.j,this.m,o,null),$l(this,o)),u==4&&or(this),this.i&&!this.I&&(u==4?Jy(this.l,this):(this.i=!1,Bi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),or(this),zs(this)}}}catch{}finally{}};function Sy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ay(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=GA(t,n),s==Zo){e==4&&(t.o=4,ut(14),r=!1),Ur(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Fl){t.o=4,ut(15),Ur(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ur(t.j,t.m,s,null),$l(t,s);Sy(t)&&s!=Zo&&s!=Fl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ah(e),e.K=!0,ut(11))):(Ur(t.j,t.m,n,"[Invalid Chunked Response]"),or(t),zs(t))}z.hb=function(){if(this.g){var t=an(this.g),e=this.g.fa();this.C<e.length&&(Ka(this),Ay(this,t,e),this.i&&t!=4&&Bi(this))}};function GA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Zo:(n=Number(e.substring(n,r)),isNaN(n)?Fl:(r+=1,r+n>e.length?Zo:(e=e.substr(r,n),t.C=r+n,e)))}z.cancel=function(){this.I=!0,or(this)};function Bi(t){t.V=Date.now()+t.O,ky(t,t.O)}function ky(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ui(st(t.gb,t),e)}function Ka(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}z.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(KA(this.j,this.A),this.K!=2&&(ui(),ut(17)),or(this),this.o=2,zs(this)):ky(this,this.V-t)};function zs(t){t.l.G==0||t.I||Jy(t.l,t)}function or(t){Ka(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ju(t.T),vy(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function $l(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Vl(n.h,t))){if(!t.J&&Vl(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)na(n),Qa(n);else break e;oh(n),ut(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ui(st(n.cb,n),6e3));if(1>=My(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ar(n,11)}else if((t.J||n.g==t)&&na(n),!Yo(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(th(i,i.h),i.h=null))}if(r.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,ke(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Zy(r,r.H?r.ka:null,r.V),o.J){Fy(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Ka(a),Bi(a)),r.g=o}else Gy(r);0<n.i.length&&Ja(n)}else l[0]!="stop"&&l[0]!="close"||ar(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ar(n,7):ih(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ui(4)}catch{}}function QA(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ma(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function JA(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ma(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ry(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ma(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=JA(t),r=QA(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Ny=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function fr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof fr){this.h=e!==void 0?e:t.h,ea(this,t.j),this.s=t.s,this.g=t.g,ta(this,t.m),this.l=t.l,e=t.i;var n=new hi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Td(this,n),this.o=t.o}else t&&(n=String(t).match(Ny))?(this.h=!!e,ea(this,n[1]||"",!0),this.s=Ls(n[2]||""),this.g=Ls(n[3]||"",!0),ta(this,n[4]),this.l=Ls(n[5]||"",!0),Td(this,n[6]||"",!0),this.o=Ls(n[7]||"")):(this.h=!!e,this.i=new hi(null,this.h))}fr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ms(e,Id,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ms(e,Id,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ms(n,n.charAt(0)=="/"?ek:ZA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ms(n,nk)),t.join("")};function dn(t){return new fr(t)}function ea(t,e,n){t.j=n?Ls(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ta(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Td(t,e,n){e instanceof hi?(t.i=e,rk(t.i,t.h)):(n||(e=Ms(e,tk)),t.i=new hi(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function za(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ls(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ms(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,XA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function XA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Id=/[#\/\?@]/g,ZA=/[#\?:]/g,ek=/[#\?]/g,tk=/[#\?@]/g,nk=/#/g;function hi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qn(t){t.g||(t.g=new Map,t.h=0,t.i&&YA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=hi.prototype;z.add=function(t,e){Qn(this),this.i=null,t=ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Oy(t,e){Qn(t),e=ws(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Dy(t,e){return Qn(t),e=ws(t,e),t.g.has(e)}z.forEach=function(t,e){Qn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};z.oa=function(){Qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};z.W=function(t){Qn(this);let e=[];if(typeof t=="string")Dy(this,t)&&(e=e.concat(this.g.get(ws(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return Qn(this),this.i=null,t=ws(this,t),Dy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Py(t,e,n){Oy(t,e),0<n.length&&(t.i=null,t.g.set(ws(t,e),ju(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rk(t,e){e&&!t.j&&(Qn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Oy(this,r),Py(this,s,n))},t)),t.j=e}var sk=class{constructor(e,n){this.h=e,this.g=n}};function xy(t){this.l=t||ik,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ga&&ne.g.Ga()&&ne.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ik=10;function Ly(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function My(t){return t.h?1:t.g?t.g.size:0}function Vl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function th(t,e){t.g?t.g.add(e):t.h=e}function Fy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}xy.prototype.cancel=function(){if(this.i=Uy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Uy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ju(t.i)}function nh(){}nh.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)};nh.prototype.parse=function(t){return ne.JSON.parse(t,void 0)};function ok(){this.g=new nh}function ak(t,e,n){const r=n||"";try{Ry(t,function(s,i){let o=s;Mi(s)&&(o=Qu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function ck(t,e){const n=new Ba;if(ne.Image){const r=new Image;r.onload=ho(po,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ho(po,n,r,"TestLoadImage: error",!1,e),r.onabort=ho(po,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ho(po,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function po(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ji(t){this.l=t.ac||null,this.j=t.jb||!1}Ye(ji,Xu);ji.prototype.g=function(){return new Wa(this.l,this.j)};ji.prototype.i=function(t){return function(){return t}}({});function Wa(t,e){qe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=rh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(Wa,qe);var rh=0;z=Wa.prototype;z.open=function(t,e){if(this.readyState!=rh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,fi(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ne).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=rh};z.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$y(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function $y(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}z.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hi(this):fi(this),this.readyState==3&&$y(this)}};z.Va=function(t){this.g&&(this.response=this.responseText=t,Hi(this))};z.Ua=function(t){this.g&&(this.response=t,Hi(this))};z.ga=function(){this.g&&Hi(this)};function Hi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,fi(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function fi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lk=ne.JSON.parse;function xe(t){qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vy,this.K=this.L=!1}Ye(xe,qe);var Vy="",uk=/^https?$/i,hk=["POST","PUT"];z=xe.prototype;z.Ka=function(t){this.L=t};z.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ml.g(),this.C=this.u?bd(this.u):bd(Ml),this.g.onreadystatechange=st(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Cd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ne.FormData&&t instanceof ne.FormData,!(0<=ny(hk,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Hy(this),0<this.B&&((this.K=fk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.qa,this)):this.A=Yu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Cd(this,i)}};function fk(t){return ss&&RA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.qa=function(){typeof Bu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function Cd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,By(t),Ga(t)}function By(t){t.D||(t.D=!0,Ge(t,"complete"),Ge(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),Ga(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ga(this,!0)),xe.X.M.call(this)};z.Ha=function(){this.s||(this.F||this.v||this.l?jy(this):this.fb())};z.fb=function(){jy(this)};function jy(t){if(t.h&&typeof Bu<"u"&&(!t.C[1]||an(t)!=4||t.aa()!=2)){if(t.v&&an(t)==4)Yu(t.Ha,0,t);else if(Ge(t,"readystatechange"),an(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Ny)[1]||null;if(!s&&ne.self&&ne.self.location){var i=ne.self.location.protocol;s=i.substr(0,i.length-1)}r=!uk.test(s?s.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var o=2<an(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",By(t)}}finally{Ga(t)}}}}function Ga(t,e){if(t.g){Hy(t);const n=t.g,r=t.C[0]?Jo:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch{}}}function Hy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function an(t){return t.g?t.g.readyState:0}z.aa=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}};z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lk(e)}};function Sd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Vy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}z.Ea=function(){return this.m};z.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qy(t){let e="";return qu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function Rs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ky(t){this.Ca=0,this.i=[],this.j=new Ba,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Rs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Rs("baseRetryDelayMs",5e3,t),this.bb=Rs("retryDelaySeedMs",1e4,t),this.$a=Rs("forwardChannelMaxRetries",2,t),this.ta=Rs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new xy(t&&t.concurrentRequestLimit),this.Fa=new ok,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}z=Ky.prototype;z.ma=8;z.G=1;function ih(t){if(zy(t),t.G==3){var e=t.U++,n=dn(t.F);ke(n,"SID",t.I),ke(n,"RID",e),ke(n,"TYPE","terminate"),qi(t,n),e=new Vi(t,t.j,e,void 0),e.K=2,e.v=za(dn(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=ev(e.l,null),e.g.da(e.v)),e.F=Date.now(),Bi(e)}Xy(t)}function Qa(t){t.g&&(ah(t),t.g.cancel(),t.g=null)}function zy(t){Qa(t),t.u&&(ne.clearTimeout(t.u),t.u=null),na(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function Ja(t){Ly(t.h)||t.m||(t.m=!0,py(t.Ja,t),t.C=0)}function dk(t,e){return My(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ui(st(t.Ja,t,e),Yy(t,t.C)),t.C++,!0)}z.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Vi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=oy(i),ay(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Wy(this,s,e),n=dn(this.F),ke(n,"RID",t),ke(n,"CVER",22),this.D&&ke(n,"X-HTTP-Session-Id",this.D),qi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(qy(i)))+"&"+e:this.o&&sh(n,this.o,i)),th(this.h,s),this.Ya&&ke(n,"TYPE","init"),this.O?(ke(n,"$req",e),ke(n,"SID","null"),s.Z=!0,Ul(s,n,null)):Ul(s,n,e),this.G=2}}else this.G==3&&(t?Ad(this,t):this.i.length==0||Ly(this.h)||Ad(this))};function Ad(t,e){var n;e?n=e.m:n=t.U++;const r=dn(t.F);ke(r,"SID",t.I),ke(r,"RID",n),ke(r,"AID",t.T),qi(t,r),t.o&&t.s&&sh(r,t.o,t.s),n=new Vi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Wy(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),th(t.h,n),Ul(n,r,e)}function qi(t,e){t.ia&&qu(t.ia,function(n,r){ke(e,r,n)}),t.l&&Ry({},function(n,r){ke(e,r,n)})}function Wy(t,e,n){n=Math.min(t.i.length,n);var r=t.l?st(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{ak(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function Gy(t){t.g||t.u||(t.Z=1,py(t.Ia,t),t.A=0)}function oh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ui(st(t.Ia,t),Yy(t,t.A)),t.A++,!0)}z.Ia=function(){if(this.u=null,Qy(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ui(st(this.eb,this),t)}};z.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ut(10),Qa(this),Qy(this))};function ah(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function Qy(t){t.g=new Vi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=dn(t.sa);ke(e,"RID","rpc"),ke(e,"SID",t.I),ke(e,"CI",t.L?"0":"1"),ke(e,"AID",t.T),ke(e,"TYPE","xmlhttp"),qi(t,e),t.o&&t.s&&sh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=za(dn(e)),n.s=null,n.P=!0,Cy(n,t)}z.cb=function(){this.v!=null&&(this.v=null,Qa(this),oh(this),ut(19))};function na(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function Jy(t,e){var n=null;if(t.g==e){na(t),ah(t),t.g=null;var r=2}else if(Vl(t.h,e))n=e.D,Fy(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=ja(),Ge(r,new Ey(r,n)),Ja(t)}else Gy(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&dk(t,e)||r==2&&oh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:ar(t,5);break;case 4:ar(t,10);break;case 3:ar(t,6);break;default:ar(t,2)}}}function Yy(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ar(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=st(t.kb,t);n||(n=new fr("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||ea(n,"https"),za(n)),ck(n.toString(),r)}else ut(2);t.G=0,t.l&&t.l.va(e),Xy(t),zy(t)}z.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Xy(t){if(t.G=0,t.la=[],t.l){const e=Uy(t.h);(e.length!=0||t.i.length!=0)&&(md(t.la,e),md(t.la,t.i),t.h.i.length=0,ju(t.i),t.i.length=0),t.l.ua()}}function Zy(t,e,n){var r=n instanceof fr?dn(n):new fr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),ta(r,r.m);else{var s=ne.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new fr(null,void 0);r&&ea(i,r),e&&(i.g=e),s&&ta(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&ke(r,n,e),ke(r,"VER",t.ma),qi(t,r),r}function ev(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new xe(new ji({jb:!0})):new xe(t.ra),e.Ka(t.H),e}function tv(){}z=tv.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Ra=function(){};function ra(){if(ss&&!(10<=Number(NA)))throw Error("Environmental error: no available transport.")}ra.prototype.g=function(t,e){return new Tt(t,e)};function Tt(t,e){qe.call(this),this.g=new Ky(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Yo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Yo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _s(this)}Ye(Tt,qe);Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ut(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Zy(t,null,t.V),Ja(t)};Tt.prototype.close=function(){ih(this.g)};Tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qu(t),t=n);e.i.push(new sk(e.ab++,t)),e.G==3&&Ja(e)};Tt.prototype.M=function(){this.g.l=null,delete this.j,ih(this.g),delete this.g,Tt.X.M.call(this)};function nv(t){Zu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(nv,Zu);function rv(){eh.call(this),this.status=1}Ye(rv,eh);function _s(t){this.g=t}Ye(_s,tv);_s.prototype.xa=function(){Ge(this.g,"a")};_s.prototype.wa=function(t){Ge(this.g,new nv(t))};_s.prototype.va=function(t){Ge(this.g,new rv)};_s.prototype.ua=function(){Ge(this.g,"b")};ra.prototype.createWebChannel=ra.prototype.g;Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;Ha.NO_ERROR=0;Ha.TIMEOUT=8;Ha.HTTP_ERROR=6;by.COMPLETE="complete";Ty.EventType=$i;$i.OPEN="a";$i.CLOSE="b";$i.ERROR="c";$i.MESSAGE="d";qe.prototype.listen=qe.prototype.N;xe.prototype.listenOnce=xe.prototype.O;xe.prototype.getLastError=xe.prototype.Oa;xe.prototype.getLastErrorCode=xe.prototype.Ea;xe.prototype.getStatus=xe.prototype.aa;xe.prototype.getResponseJson=xe.prototype.Sa;xe.prototype.getResponseText=xe.prototype.fa;xe.prototype.send=xe.prototype.da;xe.prototype.setWithCredentials=xe.prototype.Ka;var pk=function(){return new ra},gk=function(){return ja()},Bc=Ha,mk=by,yk=Cr,kd={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},vk=ji,go=Ty,wk=xe;const Rd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Ru("@firebase/firestore");function Nd(){return wr.logLevel}function W(t,...e){if(wr.logLevel<=me.DEBUG){const n=e.map(ch);wr.debug(`Firestore (${Es}): ${t}`,...n)}}function pn(t,...e){if(wr.logLevel<=me.ERROR){const n=e.map(ch);wr.error(`Firestore (${Es}): ${t}`,...n)}}function sa(t,...e){if(wr.logLevel<=me.WARN){const n=e.map(ch);wr.warn(`Firestore (${Es}): ${t}`,...n)}}function ch(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t="Unexpected state"){const e=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: `+t;throw pn(e),new Error(e)}function Se(t,e){t||te()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class Ek{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bk{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new ln;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ln,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new sv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new Ze(e)}}class Tk{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ik{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Tk(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ck{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sk{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.T=n.token,new Ck(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Ak(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function is(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Ve(0,0))}static max(){return new oe(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof di?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends di{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const kk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends di{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return kk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new q(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new q(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Ce.fromString(e))}static fromName(e){return new J(Ce.fromString(e).popFirst(5))}static empty(){return new J(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Ce(e.slice()))}}function Rk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new qn(s,J.empty(),e)}function Nk(t){return new qn(t.readTime,t.key,-1)}class qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qn(oe.min(),J.empty(),-1)}static max(){return new qn(oe.max(),J.empty(),-1)}}function Ok(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==Dk)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(s=>s?D.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new D((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new D((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function zi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}lh.ct=-1;function Ya(t){return t==null}function ia(t){return t===0&&1/t==-1/0}function xk(t){return typeof t=="number"&&Number.isInteger(t)&&!ia(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ov(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mo(this.root,e,this.comparator,!0)}}class mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ze.RED,this.left=s??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(t,e,n,r,s){return this}insert(t,e,n){return new ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dd(this.data.getIterator())}getIteratorFrom(e){return new Dd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Dd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new Be(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Lk("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const Mk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(Se(!!t),typeof t=="string"){let e=0;const n=Mk.exec(t);if(Se(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cv(t){const e=t.mapValue.fields.__previous_value__;return av(e)?cv(e):e}function pi(t){const e=Kn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class gi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?av(t)?4:Uk(t)?9007199254740991:10:te()}function Xt(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pi(t).isEqual(pi(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Kn(r.timestampValue),o=Kn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return os(r.bytesValue).isEqual(os(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Fe(r.geoPointValue.latitude)===Fe(s.geoPointValue.latitude)&&Fe(r.geoPointValue.longitude)===Fe(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Fe(r.integerValue)===Fe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Fe(r.doubleValue),o=Fe(s.doubleValue);return i===o?ia(i)===ia(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return is(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Od(i)!==Od(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Xt(i[a],o[a])))return!1;return!0}(t,e);default:return te()}}function mi(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function as(t,e){if(t===e)return 0;const n=_r(t),r=_r(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Fe(s.integerValue||s.doubleValue),a=Fe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Pd(t.timestampValue,e.timestampValue);case 4:return Pd(pi(t),pi(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(s,i){const o=os(s),a=os(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ye(o[c],a[c]);if(l!==0)return l}return ye(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ye(Fe(s.latitude),Fe(i.latitude));return o!==0?o:ye(Fe(s.longitude),Fe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=as(o[c],a[c]);if(l)return l}return ye(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===yo.mapValue&&i===yo.mapValue)return 0;if(s===yo.mapValue)return 1;if(i===yo.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ye(a[u],l[u]);if(h!==0)return h;const f=as(o[a[u]],c[l[u]]);if(f!==0)return f}return ye(a.length,l.length)}(t.mapValue,e.mapValue);default:throw te()}}function Pd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Kn(t),r=Kn(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function cs(t){return Bl(t)}function Bl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Kn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?os(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,J.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Bl(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Bl(r.fields[a])}`;return i+"}"}(t.mapValue):te();var e,n}function xd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jl(t){return!!t&&"integerValue"in t}function uh(t){return!!t&&"arrayValue"in t}function Ld(t){return!!t&&"nullValue"in t}function Md(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Co(t){return!!t&&"mapValue"in t}function Ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ws(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ws(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Uk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Co(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ws(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Co(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Co(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){bs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new St(Ws(this.value))}}function lv(t){const e=[];return bs(t.fields,(n,r)=>{const s=new rt([n]);if(Co(r)){const i=lv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new et(e,0,oe.min(),oe.min(),oe.min(),St.empty(),0)}static newFoundDocument(e,n,r,s){return new et(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new et(e,2,n,oe.min(),oe.min(),St.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,oe.min(),oe.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.position=e,this.inclusive=n}}function Fd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=as(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ud(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n="asc"){this.field=e,this.dir=n}}function $k(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{}class Ue extends uv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Bk(e,n,r):n==="array-contains"?new qk(e,r):n==="in"?new Kk(e,r):n==="not-in"?new zk(e,r):n==="array-contains-any"?new Wk(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jk(e,r):new Hk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(as(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.matchesComparison(as(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Vt extends uv{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Vt(e,n)}matches(e){return hv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function hv(t){return t.op==="and"}function fv(t){return Vk(t)&&hv(t)}function Vk(t){for(const e of t.filters)if(e instanceof Vt)return!1;return!0}function Hl(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+cs(t.value);if(fv(t))return t.filters.map(e=>Hl(e)).join(",");{const e=t.filters.map(n=>Hl(n)).join(",");return`${t.op}(${e})`}}function dv(t,e){return t instanceof Ue?function(n,r){return r instanceof Ue&&n.op===r.op&&n.field.isEqual(r.field)&&Xt(n.value,r.value)}(t,e):t instanceof Vt?function(n,r){return r instanceof Vt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&dv(i,r.filters[o]),!0):!1}(t,e):void te()}function pv(t){return t instanceof Ue?function(e){return`${e.field.canonicalString()} ${e.op} ${cs(e.value)}`}(t):t instanceof Vt?function(e){return e.op.toString()+" {"+e.getFilters().map(pv).join(" ,")+"}"}(t):"Filter"}class Bk extends Ue{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class jk extends Ue{constructor(e,n){super(e,"in",n),this.keys=gv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Hk extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=gv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class qk extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uh(n)&&mi(n.arrayValue,this.value)}}class Kk extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mi(this.value.arrayValue,n)}}class zk extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!mi(this.value.arrayValue,n)}}class Wk extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>mi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function $d(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Gk(t,e,n,r,s,i,o)}function hh(t){const e=ae(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ya(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>cs(r)).join(",")),e.ft=n}return e.ft}function fh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$k(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ud(t.startAt,e.startAt)&&Ud(t.endAt,e.endAt)}function ql(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Qk(t,e,n,r,s,i,o,a){return new Ts(t,e,n,r,s,i,o,a)}function Xa(t){return new Ts(t)}function Vd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Za(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function mv(t){return t.collectionGroup!==null}function Qr(t){const e=ae(t);if(e.dt===null){e.dt=[];const n=Za(e),r=dh(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Gr(n)),e.dt.push(new Gr(rt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Gr(rt.keyField(),i))}}}return e.dt}function gn(t){const e=ae(t);if(!e.wt)if(e.limitType==="F")e.wt=$d(e.path,e.collectionGroup,Qr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Qr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Gr(i.field,o))}const r=e.endAt?new oa(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new oa(e.startAt.position,e.startAt.inclusive):null;e.wt=$d(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.wt}function Kl(t,e){e.getFirstInequalityField(),Za(t);const n=t.filters.concat([e]);return new Ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zl(t,e,n){return new Ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ec(t,e){return fh(gn(t),gn(e))&&t.limitType===e.limitType}function yv(t){return`${hh(gn(t))}|lt:${t.limitType}`}function Wl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>pv(r)).join(", ")}]`),Ya(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>cs(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>cs(r)).join(",")),`Target(${n})`}(gn(t))}; limitType=${t.limitType})`}function tc(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):J.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of Qr(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Fd(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Qr(n),r)||n.endAt&&!function(s,i,o){const a=Fd(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Qr(n),r))}(t,e)}function Jk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vv(t){return(e,n)=>{let r=!1;for(const s of Qr(t)){const i=Yk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Yk(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?as(a,c):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ov(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=new je(J.comparator);function mn(){return Xk}const wv=new je(J.comparator);function Fs(...t){let e=wv;for(const n of t)e=e.insert(n.key,n);return e}function _v(t){let e=wv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return Gs()}function Ev(){return Gs()}function Gs(){return new Is(t=>t.toString(),(t,e)=>t.isEqual(e))}const Zk=new je(J.comparator),eR=new Be(J.comparator);function ue(...t){let e=eR;for(const n of t)e=e.add(n);return e}const tR=new Be(ye);function bv(){return tR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ia(e)?"-0":e}}function Iv(t){return{integerValue:""+t}}function nR(t,e){return xk(e)?Iv(e):Tv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this._=void 0}}function rR(t,e,n){return t instanceof yi?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof vi?Sv(t,e):t instanceof wi?Av(t,e):function(r,s){const i=Cv(r,s),o=Bd(i)+Bd(r._t);return jl(i)&&jl(r._t)?Iv(o):Tv(r.serializer,o)}(t,e)}function sR(t,e,n){return t instanceof vi?Sv(t,e):t instanceof wi?Av(t,e):n}function Cv(t,e){return t instanceof aa?jl(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class yi extends nc{}class vi extends nc{constructor(e){super(),this.elements=e}}function Sv(t,e){const n=kv(e);for(const r of t.elements)n.some(s=>Xt(s,r))||n.push(r);return{arrayValue:{values:n}}}class wi extends nc{constructor(e){super(),this.elements=e}}function Av(t,e){let n=kv(e);for(const r of t.elements)n=n.filter(s=>!Xt(s,r));return{arrayValue:{values:n}}}class aa extends nc{constructor(e,n){super(),this.serializer=e,this._t=n}}function Bd(t){return Fe(t.integerValue||t.doubleValue)}function kv(t){return uh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n){this.field=e,this.transform=n}}function oR(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof vi&&r instanceof vi||n instanceof wi&&r instanceof wi?is(n.elements,r.elements,Xt):n instanceof aa&&r instanceof aa?Xt(n._t,r._t):n instanceof yi&&r instanceof yi}(t.transform,e.transform)}class aR{constructor(e,n){this.version=e,this.transformResults=n}}class Gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function So(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rc{}function Rv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ph(t.key,Gt.none()):new Wi(t.key,t.data,Gt.none());{const n=t.data,r=St.empty();let s=new Be(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Sr(t.key,r,new Lt(s.toArray()),Gt.none())}}function cR(t,e,n){t instanceof Wi?function(r,s,i){const o=r.value.clone(),a=Hd(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(r,s,i){if(!So(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Hd(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Nv(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,r){return t instanceof Wi?function(s,i,o,a){if(!So(s.precondition,i))return o;const c=s.value.clone(),l=qd(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(s,i,o,a){if(!So(s.precondition,i))return o;const c=qd(s.fieldTransforms,a,i),l=i.data;return l.setAll(Nv(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return So(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function lR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Cv(r.transform,s||null);i!=null&&(n===null&&(n=St.empty()),n.set(r.field,i))}return n||null}function jd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&is(n,r,(s,i)=>oR(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wi extends rc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends rc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hd(t,e,n){const r=new Map;Se(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,sR(o,a,n[s]))}return r}function qd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,rR(i,o,e))}return r}class ph extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uR extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ev();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Rv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,(n,r)=>jd(n,r))&&is(this.baseMutations,e.baseMutations,(n,r)=>jd(n,r))}}class gh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length);let s=Zk;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,fe;function pR(t){switch(t){default:return te();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function Ov(t){if(t===void 0)return pn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Me.OK:return A.OK;case Me.CANCELLED:return A.CANCELLED;case Me.UNKNOWN:return A.UNKNOWN;case Me.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Me.INTERNAL:return A.INTERNAL;case Me.UNAVAILABLE:return A.UNAVAILABLE;case Me.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Me.NOT_FOUND:return A.NOT_FOUND;case Me.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Me.ABORTED:return A.ABORTED;case Me.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Me.DATA_LOSS:return A.DATA_LOSS;default:return te()}}(fe=Me||(Me={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return vo}static getOrCreateInstance(){return vo===null&&(vo=new mh),vo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let vo=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Gi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sc(oe.min(),s,bv(),mn(),ue())}}class Gi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Gi(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,r,s){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=s}}class Dv{constructor(e,n){this.targetId=e,this.Et=n}}class Pv{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Kd{constructor(){this.At=0,this.Rt=Wd(),this.vt=at.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ue(),n=ue(),r=ue();return this.Rt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te()}}),new Gi(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=Wd()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class gR{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=mn(),this.qt=zd(),this.Ut=new Be(ye)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,s)=>{this.Wt(s)&&n(s)})}Jt(e){var n;const r=e.targetId,s=e.Et.count,i=this.Yt(r);if(i){const o=i.target;if(ql(o))if(s===0){const a=new J(o.path);this.Qt(r,a,et.newNoDocument(a,oe.min()))}else Se(s===1);else{const a=this.Zt(r);a!==s&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=mh.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&ql(a.target)){const c=new J(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,et.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let r=ue();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const s=new sc(e,n,this.Ut,this.Lt,r);return this.Lt=mn(),this.qt=zd(),this.Ut=new Be(ye),s}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Kd,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Be(ye),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Kd),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function zd(){return new je(J.comparator)}function Wd(){return new je(J.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),vR=(()=>({and:"AND",or:"OR"}))();class wR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ca(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _R(t,e){return ca(t,e.toTimestamp())}function Qt(t){return Se(!!t),oe.fromTimestamp(function(e){const n=Kn(e);return new Ve(n.seconds,n.nanos)}(t))}function yh(t,e){return function(n){return new Ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Lv(t){const e=Ce.fromString(t);return Se($v(e)),e}function Gl(t,e){return yh(t.databaseId,e.path)}function jc(t,e){const n=Lv(e);if(n.get(1)!==t.databaseId.projectId)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(Mv(n))}function Ql(t,e){return yh(t.databaseId,e)}function ER(t){const e=Lv(t);return e.length===4?Ce.emptyPath():Mv(e)}function Jl(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mv(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gd(t,e,n){return{name:Gl(t,e),fields:n.value.mapValue.fields}}function bR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Se(l===void 0||typeof l=="string"),at.fromBase64String(l||"")):(Se(l===void 0||l instanceof Uint8Array),at.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:Ov(c.code);return new q(l,c.message||"")}(o);n=new Pv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=jc(t,r.document.name),i=Qt(r.document.updateTime),o=r.document.createTime?Qt(r.document.createTime):oe.min(),a=new St({mapValue:{fields:r.document.fields}}),c=et.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ao(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=jc(t,r.document),i=r.readTime?Qt(r.readTime):oe.min(),o=et.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ao([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=jc(t,r.document),i=r.removedTargetIds||[];n=new Ao([],i,s,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new dR(s),o=r.targetId;n=new Dv(o,i)}}return n}function TR(t,e){let n;if(e instanceof Wi)n={update:Gd(t,e.key,e.value)};else if(e instanceof ph)n={delete:Gl(t,e.key)};else if(e instanceof Sr)n={update:Gd(t,e.key,e.data),updateMask:DR(e.fieldMask)};else{if(!(e instanceof uR))return te();n={verify:Gl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof yi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof vi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof wi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof aa)return{fieldPath:i.field.canonicalString(),increment:o._t};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:_R(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te()}(t,e.precondition)),n}function IR(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Qt(r.updateTime):Qt(s);return i.isEqual(oe.min())&&(i=Qt(s)),new aR(i,r.transformResults||[])}(n,e))):[]}function CR(t,e){return{documents:[Ql(t,e.path)]}}function SR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ql(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ql(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Uv(Vt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Pr(u.field),direction:RR(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||Ya(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function AR(t){let e=ER(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Fv(u);return h instanceof Vt&&fv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Gr(xr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ya(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new oa(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new oa(f,h)}(n.endAt)),Qk(e,s,o,i,a,"F",c,l)}function kR(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return te()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=xr(e.unaryFilter.field);return Ue.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=xr(e.unaryFilter.field);return Ue.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xr(e.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=xr(e.unaryFilter.field);return Ue.create(i,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(e){return Ue.create(xr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Vt.create(e.compositeFilter.filters.map(n=>Fv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return te()}}(e.compositeFilter.op))}(t):te()}function RR(t){return mR[t]}function NR(t){return yR[t]}function OR(t){return vR[t]}function Pr(t){return{fieldPath:t.canonicalString()}}function xr(t){return rt.fromServerFormat(t.fieldPath)}function Uv(t){return t instanceof Ue?function(e){if(e.op==="=="){if(Md(e.value))return{unaryFilter:{field:Pr(e.field),op:"IS_NAN"}};if(Ld(e.value))return{unaryFilter:{field:Pr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Md(e.value))return{unaryFilter:{field:Pr(e.field),op:"IS_NOT_NAN"}};if(Ld(e.value))return{unaryFilter:{field:Pr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(e.field),op:NR(e.op),value:e.value}}}(t):t instanceof Vt?function(e){const n=e.getFilters().map(r=>Uv(r));return n.length===1?n[0]:{compositeFilter:{op:OR(e.op),filters:n}}}(t):te()}function DR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $v(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r,s,i=oe.min(),o=oe.min(),a=at.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.se=e}}function xR(t){const e=AR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(){this.He=new MR}addToCollectionParentIndex(e,n){return this.He.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(qn.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(qn.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class MR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Be(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new ls(0)}static bn(){return new ls(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.changes=new Is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Qs(r.mutation,s,Lt.empty(),Ve.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Fs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=mn();const o=Gs(),a=Gs();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Sr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Qs(u.mutation,l,u.mutation.getFieldMask(),Ve.now())):o.set(l.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new UR(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Gs();let s=new je((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Lt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ue()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Ev();u.forEach(f=>{if(!i.has(f)){const g=Rv(n.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return J.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):D.resolve(cr());let a=-1,c=i;return o.next(l=>D.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?D.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ue())).next(u=>({batchId:a,changes:_v(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let s=Fs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Fs();return this.indexManager.getCollectionParents(e,s).next(o=>D.forEach(o,a=>{const c=function(l,u){return new Ts(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,et.newInvalidDocument(l)))});let o=Fs();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Qs(l.mutation,c,Lt.empty(),Ve.now()),tc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return D.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Qt(r.createTime)}),D.resolve()}getNamedQuery(e,n){return D.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:xR(r.bundledQuery),readTime:Qt(r.readTime)}}(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.overlays=new je(J.comparator),this.ts=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return D.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.re(e,n,i)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.ts.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const s=cr(),i=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return D.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=cr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=cr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return D.resolve(a)}re(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(r.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fR(n,r));let i=this.ts.get(n);i===void 0&&(i=ue(),this.ts.set(n,i)),this.ts.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.es=new Be(He.ns),this.ss=new Be(He.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new He(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new He(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new J(new Ce([])),r=new He(n,e),s=new He(n,e+1),i=[];return this.ss.forEachInRange([r,s],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new J(new Ce([])),r=new He(n,e),s=new He(n,e+1);let i=ue();return this.ss.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new He(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return J.comparator(e.key,n.key)||ye(e.ds,n.ds)}static rs(e,n){return ye(e.ds,n.ds)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Be(He.ns)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hR(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new He(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ys(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),s=new He(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([r,s],o=>{const a=this.gs(o.ds);i.push(a)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(ye);return n.forEach(s=>{const i=new He(s,0),o=new He(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{r=r.add(a.ds)})}),D.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const o=new He(new J(i),0);let a=new Be(ye);return this._s.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ds)),!0)},o),D.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const s=this.gs(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return D.forEach(n.mutations,s=>{const i=new He(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new He(n,0),s=this._s.firstAfterOrEqual(r);return D.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.Ts=e,this.docs=new je(J.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=mn();const o=n.path,a=new J(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Ok(Nk(u),r)<=0||(s.has(u.key)||tc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te()}Es(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qR(this)}getSize(e){return D.resolve(this.size)}}class qR extends FR{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.persistence=e,this.As=new Is(n=>hh(n),fh),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Rs=0,this.vs=new vh,this.targetCount=0,this.bs=ls.vn()}forEachTarget(e,n){return this.As.forEach((r,s)=>n(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),D.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.Sn(n),D.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new lh(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new KR(this),this.indexManager=new LR,this.remoteDocumentCache=function(r){return new HR(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new PR(n),this.xs=new VR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new jR(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new WR(this.Vs.next());return this.referenceDelegate.Ns(),r(s).next(i=>this.referenceDelegate.ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Os(e,n){return D.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class WR extends Pk{constructor(e){super(),this.currentSequenceNumber=e}}class wh{constructor(e){this.persistence=e,this.$s=new vh,this.Ms=null}static Fs(e){return new wh(e)}get Bs(){if(this.Ms)return this.Ms;throw te()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),D.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(s=>this.Bs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Bs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Bs,r=>{const s=J.fromPath(r);return this.Ls(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return D.or([()=>D.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=s}static Di(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _h(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ni(e,n).next(i=>i||this.ki(e,n,s,r)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(Vd(n))return D.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=zl(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,zl(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,r,s){return Vd(n)||s.isEqual(oe.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,r,s)?this.Oi(e,n):(Nd()<=me.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Wl(n)),this.Fi(e,o,n,Rk(s,-1)))})}$i(e,n){let r=new Be(vv(e));return n.forEach((s,i)=>{tc(e,i)&&(r=r.add(i))}),r}Mi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Oi(e,n){return Nd()<=me.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Wl(n)),this.xi.getDocumentsMatchingQuery(e,n,qn.min())}Fi(e,n,r,s){return this.xi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,n,r,s){this.persistence=e,this.Bi=n,this.serializer=s,this.Li=new je(ye),this.qi=new Is(i=>hh(i),fh),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $R(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function JR(t,e,n,r){return new QR(t,e,n,r)}async function Vv(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ue();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function YR(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=D.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(m=>{const w=c.docVersions.get(g);Se(w!==null),m.version.compareTo(w)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ue();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Bv(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function XR(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});s=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(at.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(m,w,E){return m.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,g,u)&&a.push(n.Ds.updateTargetData(i,g))});let c=mn(),l=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(ZR(i,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!r.isEqual(oe.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return D.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Li=s,i))}function ZR(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=mn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:s}})}function eN(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function tN(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ds.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):n.Ds.allocateTargetId(r).next(o=>(s=new dr(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Li.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Yl(t,e,n){const r=ae(t),s=r.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!zi(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(s.target)}function Qd(t,e,n){const r=ae(t);let s=oe.min(),i=ue();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ae(a),h=u.qi.get(l);return h!==void 0?D.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(r,o,gn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:ue())).next(a=>(nN(r,Jk(e),a),{documents:a,Wi:i})))}function nN(t,e,n){let r=t.Ui.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ui.set(e,r)}class Jd{constructor(){this.activeTargetIds=bv()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rN{constructor(){this.Br=new Jd,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Jd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo=null;function Hc(){return wo===null?wo=268435456+Math.round(2147483648*Math.random()):wo++,"0x"+wo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class aN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,s,i){const o=Hc(),a=this.ao(e,n);W("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.ho(c,s,i),this.lo(e,a,c,r).then(l=>(W("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw sa("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}fo(e,n,r,s,i,o){return this.co(e,n,r,s,i)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Es,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ao(e,n){const r=iN[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,s){const i=Hc();return new Promise((o,a)=>{const c=new wk;c.setWithCredentials(!0),c.listenOnce(mk.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Bc.NO_ERROR:const u=c.getResponseJson();W(Xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Bc.TIMEOUT:W(Xe,`RPC '${e}' ${i} timed out`),a(new q(A.DEADLINE_EXCEEDED,"Request time out"));break;case Bc.HTTP_ERROR:const h=c.getStatus();if(W(Xe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const m=function(w){const E=w.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(E)>=0?E:A.UNKNOWN}(g.status);a(new q(m,g.message))}else a(new q(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new q(A.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{W(Xe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);W(Xe,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}wo(e,n,r){const s=Hc(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pk(),a=gk(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new vk({})),this.ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=i.join("");W(Xe,`Creating RPC '${e}' stream ${s}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const g=new oN({Wr:w=>{f?W(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(h||(W(Xe,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),W(Xe,`RPC '${e}' stream ${s} sending:`,w),u.send(w))},Hr:()=>u.close()}),m=(w,E,v)=>{w.listen(E,p=>{try{v(p)}catch(_){setTimeout(()=>{throw _},0)}})};return m(u,go.EventType.OPEN,()=>{f||W(Xe,`RPC '${e}' stream ${s} transport opened.`)}),m(u,go.EventType.CLOSE,()=>{f||(f=!0,W(Xe,`RPC '${e}' stream ${s} transport closed`),g.so())}),m(u,go.EventType.ERROR,w=>{f||(f=!0,sa(Xe,`RPC '${e}' stream ${s} transport errored:`,w),g.so(new q(A.UNAVAILABLE,"The operation could not be completed")))}),m(u,go.EventType.MESSAGE,w=>{var E;if(!f){const v=w.data[0];Se(!!v);const p=v,_=p.error||((E=p[0])===null||E===void 0?void 0:E.error);if(_){W(Xe,`RPC '${e}' stream ${s} received error:`,_);const I=_.status;let S=function(N){const b=Me[N];if(b!==void 0)return Ov(b)}(I),P=_.message;S===void 0&&(S=A.INTERNAL,P="Unknown error status: "+I+" with message "+_.message),f=!0,g.so(new q(S,P)),u.close()}else W(Xe,`RPC '${e}' stream ${s} received:`,v),g.io(v)}}),m(a,yk.STAT_EVENT,w=>{w.stat===kd.PROXY?W(Xe,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===kd.NOPROXY&&W(Xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function qc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t){return new wR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=s,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,n,r,s,i,o,a,c){this.Ws=e,this.bo=r,this.Po=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new jv(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(pn(n.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Vo===n&&this.Ko(r,s)},r=>{e(()=>{const s=new q(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(s)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{r(()=>this.Go(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cN extends Hv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=bR(this.serializer,e),r=function(s){if(!("targetChange"in s))return oe.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?oe.min():i.readTime?Qt(i.readTime):oe.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=Jl(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;return o=ql(a)?{documents:CR(s,a)}:{query:SR(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=xv(s,i.resumeToken):i.snapshotVersion.compareTo(oe.min())>0&&(o.readTime=ca(s,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=kR(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=Jl(this.serializer),n.removeTarget=e,this.Fo(n)}}class lN extends Hv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=IR(e.writeResults,e.commitTime),r=Qt(e.commitTime);return this.listener.Zo(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Jl(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TR(this.serializer,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.co(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(A.UNKNOWN,s.toString())})}fo(e,n,r,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(A.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class hN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(pn(n),this.ru=!1):W("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{r.enqueueAndForget(async()=>{Ar(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ae(a);c.du.add(4),await Qi(c),c.mu.set("Unknown"),c.du.delete(4),await oc(c)}(this))})}),this.mu=new hN(r,s)}}async function oc(t){if(Ar(t))for(const e of t.wu)await e(!0)}async function Qi(t){for(const e of t.wu)await e(!1)}function qv(t,e){const n=ae(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Th(n)?bh(n):Cs(n).No()&&Eh(n,e))}function Kv(t,e){const n=ae(t),r=Cs(n);n.fu.delete(e),r.No()&&zv(n,e),n.fu.size===0&&(r.No()?r.$o():Ar(n)&&n.mu.set("Unknown"))}function Eh(t,e){t.gu.Ot(e.targetId),Cs(t).jo(e)}function zv(t,e){t.gu.Ot(e),Cs(t).Wo(e)}function bh(t){t.gu=new gR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Cs(t).start(),t.mu.ou()}function Th(t){return Ar(t)&&!Cs(t).xo()&&t.fu.size>0}function Ar(t){return ae(t).du.size===0}function Wv(t){t.gu=void 0}async function dN(t){t.fu.forEach((e,n)=>{Eh(t,e)})}async function pN(t,e){Wv(t),Th(t)?(t.mu.au(e),bh(t)):t.mu.set("Unknown")}async function gN(t,e,n){if(t.mu.set("Online"),e instanceof Pv&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await la(t,r)}else if(e instanceof Ao?t.gu.Kt(e):e instanceof Dv?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(oe.min()))try{const r=await Bv(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.fu.get(c);l&&s.fu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.fu.get(a);if(!c)return;s.fu.set(a,c.withResumeToken(at.EMPTY_BYTE_STRING,c.snapshotVersion)),zv(s,a);const l=new dr(c.target,a,1,c.sequenceNumber);Eh(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await la(t,r)}}async function la(t,e,n){if(!zi(e))throw e;t.du.add(1),await Qi(t),t.mu.set("Offline"),n||(n=()=>Bv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await oc(t)})}function Gv(t,e){return e().catch(n=>la(t,n,e))}async function ac(t){const e=ae(t),n=zn(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;mN(e);)try{const s=await eN(e.localStore,r);if(s===null){e.lu.length===0&&n.$o();break}r=s.batchId,yN(e,s)}catch(s){await la(e,s)}Qv(e)&&Jv(e)}function mN(t){return Ar(t)&&t.lu.length<10}function yN(t,e){t.lu.push(e);const n=zn(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Qv(t){return Ar(t)&&!zn(t).xo()&&t.lu.length>0}function Jv(t){zn(t).start()}async function vN(t){zn(t).tu()}async function wN(t){const e=zn(t);for(const n of t.lu)e.Yo(n.mutations)}async function _N(t,e,n){const r=t.lu.shift(),s=gh.from(r,e,n);await Gv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ac(t)}async function EN(t,e){e&&zn(t).Jo&&await async function(n,r){if(s=r.code,pR(s)&&s!==A.ABORTED){const i=n.lu.shift();zn(n).Oo(),await Gv(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await ac(n)}var s}(t,e),Qv(t)&&Jv(t)}async function Xd(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Ar(n);n.du.add(3),await Qi(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await oc(n)}async function bN(t,e){const n=ae(t);e?(n.du.delete(2),await oc(n)):e||(n.du.add(2),await Qi(n),n.mu.set("Unknown"))}function Cs(t){return t.yu||(t.yu=function(e,n,r){const s=ae(e);return s.nu(),new cN(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Jr:dN.bind(null,t),Zr:pN.bind(null,t),zo:gN.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Th(t)?bh(t):t.mu.set("Unknown")):(await t.yu.stop(),Wv(t))})),t.yu}function zn(t){return t.pu||(t.pu=function(e,n,r){const s=ae(e);return s.nu(),new lN(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Jr:vN.bind(null,t),Zr:EN.bind(null,t),Xo:wN.bind(null,t),Zo:_N.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await ac(t)):(await t.pu.stop(),t.lu.length>0&&(W("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ih(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ch(t,e){if(pn("AsyncQueue",`${e}: ${t}`),zi(t))return new q(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Fs(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new Jr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Jr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.Iu=new je(J.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):te():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new us(e,n,Jr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(){this.Eu=void 0,this.listeners=[]}}class IN{constructor(){this.queries=new Is(e=>yv(e),ec),this.onlineState="Unknown",this.Au=new Set}}async function Sh(t,e){const n=ae(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new TN),s)try{i.Eu=await n.onListen(r)}catch(o){const a=Ch(o,`Initialization of query '${Wl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&kh(n)}async function Ah(t,e){const n=ae(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function CN(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(s)&&(r=!0);o.Eu=s}}r&&kh(n)}function SN(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function kh(t){t.Au.forEach(e=>{e.next()})}class Rh{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){this.key=e}}class Xv{constructor(e){this.key=e}}class AN{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ue(),this.mutatedKeys=ue(),this.Ku=vv(e),this.Gu=new Jr(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new Zd,s=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),g=tc(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;f&&g?f.data.isEqual(g.data)?m!==w&&(r.track({type:3,doc:g}),E=!0):this.Wu(f,g)||(r.track({type:2,doc:g}),E=!0,(c&&this.Ku(g,c)>0||l&&this.Ku(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),E=!0):f&&!g&&(r.track({type:1,doc:f}),E=!0,(c||l)&&(a=!0)),E&&(g?(o=o.add(g),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Gu:o,ju:r,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((l,u)=>function(h,f){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return g(h)-g(f)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new us(this.query,e.Gu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Zd,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ue(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new Xv(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new Yv(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ue();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return us.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class kN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class RN{constructor(e){this.key=e,this.ec=!1}}class NN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Is(a=>yv(a),ec),this.ic=new Map,this.rc=new Set,this.oc=new je(J.comparator),this.uc=new Map,this.cc=new vh,this.ac={},this.hc=new Map,this.lc=ls.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function ON(t,e){const n=BN(t);let r,s;const i=n.sc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.tc();else{const o=await tN(n.localStore,gn(e));n.isPrimaryClient&&qv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await DN(n,e,r,a==="current",o.resumeToken)}return s}async function DN(t,e,n,r,s){t.dc=(h,f,g)=>async function(m,w,E,v){let p=w.view.zu(E);p.Mi&&(p=await Qd(m.localStore,w.query,!1).then(({documents:S})=>w.view.zu(S,p)));const _=v&&v.targetChanges.get(w.targetId),I=w.view.applyChanges(p,m.isPrimaryClient,_);return tp(m,w.targetId,I.Yu),I.snapshot}(t,h,f,g);const i=await Qd(t.localStore,e,!0),o=new AN(e,i.Wi),a=o.zu(i.documents),c=Gi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);tp(t,n,l.Yu);const u=new kN(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function PN(t,e){const n=ae(t),r=n.sc.get(e),s=n.ic.get(r.targetId);if(s.length>1)return n.ic.set(r.targetId,s.filter(i=>!ec(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Yl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Kv(n.remoteStore,r.targetId),Xl(n,r.targetId)}).catch(Ki)):(Xl(n,r.targetId),await Yl(n.localStore,r.targetId,!0))}async function xN(t,e,n){const r=jN(t);try{const s=await function(i,o){const a=ae(i),c=Ve.now(),l=o.reduce((f,g)=>f.add(g.key),ue());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=mn(),m=ue();return a.Ki.getEntries(f,l).next(w=>{g=w,g.forEach((E,v)=>{v.isValidDocument()||(m=m.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(w=>{u=w;const E=[];for(const v of o){const p=lR(v,u.get(v.key).overlayedDocument);p!=null&&E.push(new Sr(v.key,p,lv(p.value.mapValue),Gt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,E,o)}).next(w=>{h=w;const E=w.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,w.batchId,E)})}).then(()=>({batchId:h.batchId,changes:_v(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new je(ye)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(r,s.batchId,n),await Ji(r,s.changes),await ac(r.remoteStore)}catch(s){const i=Ch(s,"Failed to persist write");n.reject(i)}}async function Zv(t,e){const n=ae(t);try{const r=await XR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.uc.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?Se(o.ec):s.removedDocuments.size>0&&(Se(o.ec),o.ec=!1))}),await Ji(n,r,e)}catch(r){await Ki(r)}}function ep(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=ae(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&kh(a)}(r.eventManager,e),s.length&&r.nc.zo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LN(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.uc.get(e),i=s&&s.key;if(i){let o=new je(J.comparator);o=o.insert(i,et.newNoDocument(i,oe.min()));const a=ue().add(i),c=new sc(oe.min(),new Map,new Be(ye),o,a);await Zv(r,c),r.oc=r.oc.remove(i),r.uc.delete(e),Nh(r)}else await Yl(r.localStore,e,!1).then(()=>Xl(r,e,n)).catch(Ki)}async function MN(t,e){const n=ae(t),r=e.batch.batchId;try{const s=await YR(n.localStore,e);tw(n,r,null),ew(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ji(n,s)}catch(s){await Ki(s)}}async function FN(t,e,n){const r=ae(t);try{const s=await function(i,o){const a=ae(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Se(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);tw(r,e,n),ew(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ji(r,s)}catch(s){await Ki(s)}}function ew(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function tw(t,e,n){const r=ae(t);let s=r.ac[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ac[r.currentUser.toKey()]=s}}function Xl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||nw(t,r)})}function nw(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Kv(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Nh(t))}function tp(t,e,n){for(const r of n)r instanceof Yv?(t.cc.addReference(r.key,e),UN(t,r)):r instanceof Xv?(W("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||nw(t,r.key)):te()}function UN(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(W("SyncEngine","New document in limbo: "+n),t.rc.add(r),Nh(t))}function Nh(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new J(Ce.fromString(e)),r=t.lc.next();t.uc.set(r,new RN(n)),t.oc=t.oc.insert(n,r),qv(t.remoteStore,new dr(gn(Xa(n.path)),r,2,lh.ct))}}async function Ji(t,e,n){const r=ae(t),s=[],i=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,c)=>{o.push(r.dc(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=_h.Di(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.nc.zo(s),await async function(a,c){const l=ae(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>D.forEach(c,h=>D.forEach(h.Vi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>D.forEach(h.Si,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!zi(u))throw u;W("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Li.get(h),g=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(g);l.Li=l.Li.insert(h,m)}}}(r.localStore,i))}async function $N(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await Vv(n.localStore,e);n.currentUser=e,function(s,i){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new q(A.CANCELLED,i))})}),s.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ji(n,r.Qi)}}function VN(t,e){const n=ae(t),r=n.uc.get(e);if(r&&r.ec)return ue().add(r.key);{let s=ue();const i=n.ic.get(e);if(!i)return s;for(const o of i){const a=n.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}function BN(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LN.bind(null,e),e.nc.zo=CN.bind(null,e.eventManager),e.nc.wc=SN.bind(null,e.eventManager),e}function jN(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FN.bind(null,e),e}class np{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ic(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return JR(this.persistence,new GR,e.initialUser,this.serializer)}createPersistence(e){return new zR(wh.Fs,this.serializer)}createSharedClientState(e){return new rN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class HN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ep(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$N.bind(null,this.syncEngine),await bN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new IN}createDatastore(e){const n=ic(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new aN(s));var s;return function(i,o,a,c){return new uN(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>ep(this.syncEngine,a,0),o=Yd.D()?new Yd:new sN,new fN(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new NN(r,s,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ae(e);W("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Qi(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):pn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=iv.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{W("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(W("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ch(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Vv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zN(t);W("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Xd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Xd(e.remoteStore,i)),t._onlineComponents=e}function KN(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function zN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!KN(n))throw n;sa("Error using user provided cache. Falling back to memory cache: "+n),await Kc(t,new np)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Kc(t,new np);return t._offlineComponents}async function rw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await rp(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await rp(t,new HN))),t._onlineComponents}function WN(t){return rw(t).then(e=>e.syncEngine)}async function ua(t){const e=await rw(t),n=e.eventManager;return n.onListen=ON.bind(null,e.syncEngine),n.onUnlisten=PN.bind(null,e.syncEngine),n}function GN(t,e,n={}){const r=new ln;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new Oh({next:h=>{i.enqueueAndForget(()=>Ah(s,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new q(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new q(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Rh(Xa(o.path),l,{includeMetadataChanges:!0,xu:!0});return Sh(s,u)}(await ua(t),t.asyncQueue,e,n,r)),r.promise}function QN(t,e,n={}){const r=new ln;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new Oh({next:h=>{i.enqueueAndForget(()=>Ah(s,u)),h.fromCache&&a.source==="server"?c.reject(new q(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Rh(o,l,{includeMetadataChanges:!0,xu:!0});return Sh(s,u)}(await ua(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t,e,n){if(!n)throw new q(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JN(t,e,n,r){if(e===!0&&r===!0)throw new q(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ip(t){if(!J.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function op(t){if(J.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cc(t);throw new q(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,JN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ap({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ap(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _k;switch(n.type){case"firstParty":return new Ik(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=sp.get(e);n&&(W("ComponentProvider","Removing Datastore"),sp.delete(e),n.terminate())}(this),Promise.resolve()}}function YN(t,e,n,r={}){var s;const i=(t=Jt(t,lc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&sa("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ze.MOCK_USER;else{o=qT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ze(c)}t._authCredentials=new Ek(new sv(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class Jn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jn(this.firestore,e,this._query)}}class Bn extends Jn{constructor(e,n,r){super(e,n,Xa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new J(e))}withConverter(e){return new Bn(this.firestore,e,this._path)}}function f1(t,e,...n){if(t=Je(t),sw("collection","path",e),t instanceof lc){const r=Ce.fromString(e,...n);return op(r),new Bn(t,null,r)}{if(!(t instanceof gt||t instanceof Bn))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return op(r),new Bn(t.firestore,null,r)}}function XN(t,e,...n){if(t=Je(t),arguments.length===1&&(e=iv.A()),sw("doc","path",e),t instanceof lc){const r=Ce.fromString(e,...n);return ip(r),new gt(t,null,new J(r))}{if(!(t instanceof gt||t instanceof Bn))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return ip(r),new gt(t.firestore,t instanceof Bn?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new jv(this,"async_queue_retry"),this.qc=()=>{const n=qc();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=qc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new ln;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!zi(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw pn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=Ih.createAndSchedule(this,e,n,r,i=>this.Qc(i));return this.$c.push(s),s}Uc(){this.Mc&&te()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function cp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Er extends lc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ZN,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iw(this),this._firestoreClient.terminate()}}function eO(t,e){const n=typeof t=="object"?t:Im(),r=typeof t=="string"?t:e||"(default)",s=Ou(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=BT("firestore");i&&YN(s,...i)}return s}function uc(t){return t._firestoreClient||iw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function iw(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,c,l){return new Fk(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new qN(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(at.fromBase64String(e))}catch(n){throw new q(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=/^__.*__$/;class nO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wi(e,this.data,n,this.fieldTransforms)}}function ow(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Lh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Lh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:r,ta:!1});return s.ea(e),s}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:r,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return ha(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(ow(this.Yc)&&tO.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class rO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ic(e)}ua(e,n,r,s=!1){return new Lh({Yc:e,methodName:n,oa:r,path:rt.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aw(t){const e=t._freezeSettings(),n=ic(t._databaseId);return new rO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sO(t,e,n,r,s,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,s);uw("Data must be an object, but it was:",o,r);const a=cw(r,o);let c,l;if(i.merge)c=new Lt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=oO(e,h,n);if(!o.contains(f))throw new q(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);cO(u,f)||u.push(f)}c=new Lt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new nO(new St(a),c,l)}class Mh extends Ph{_toFieldTransform(e){return new iR(e.path,new yi)}isEqual(e){return e instanceof Mh}}function iO(t,e,n,r=!1){return Fh(n,t.ua(r?4:3,e))}function Fh(t,e){if(lw(t=Je(t)))return uw("Unsupported field value:",e,t),cw(t,e);if(t instanceof Ph)return function(n,r){if(!ow(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Fh(o,r.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return nR(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ve.fromDate(n);return{timestampValue:ca(r.serializer,s)}}if(n instanceof Ve){const s=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ca(r.serializer,s)}}if(n instanceof xh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hs)return{bytesValue:xv(r.serializer,n._byteString)};if(n instanceof gt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:yh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${cc(n)}`)}(t,e)}function cw(t,e){const n={};return ov(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(t,(r,s)=>{const i=Fh(s,e.Xc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function lw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof xh||t instanceof hs||t instanceof gt||t instanceof Ph)}function uw(t,e,n){if(!lw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=cc(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function oO(t,e,n){if((e=Je(e))instanceof Dh)return e._internalPath;if(typeof e=="string")return hw(t,e);throw ha("Field path arguments must be of type string or ",t,!1,void 0,n)}const aO=new RegExp("[~\\*/\\[\\]]");function hw(t,e,n){if(e.search(aO)>=0)throw ha(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dh(...e.split("."))._internalPath}catch{throw ha(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ha(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new q(A.INVALID_ARGUMENT,a+t+c)}function cO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Uh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lO extends fw{data(){return super.data()}}function Uh(t,e){return typeof e=="string"?hw(t,e):e instanceof Dh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $h{}class pw extends $h{}function d1(t,e,...n){let r=[];e instanceof $h&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof Bh).length,o=s.filter(a=>a instanceof Vh).length;if(i>1||i>0&&o>0)throw new q(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Vh extends pw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Vh(e,n,r)}_apply(e){const n=this._parse(e);return gw(e._query,n),new Jn(e.firestore,e.converter,Kl(e._query,n))}_parse(e){const n=aw(e.firestore);return function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new q(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){up(u,l);const f=[];for(const g of u)f.push(lp(a,s,g));h={arrayValue:{values:f}}}else h=lp(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||up(u,l),h=iO(o,i,u,l==="in"||l==="not-in");return Ue.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Bh extends $h{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Vt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)gw(i,a),i=Kl(i,a)}(e._query,n),new Jn(e.firestore,e.converter,Kl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jh extends pw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jh(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new q(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new q(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Gr(s,i);return function(a,c){if(dh(a)===null){const l=Za(a);l!==null&&mw(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new Jn(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Ts(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function p1(t,e="asc"){const n=e,r=Uh("orderBy",t);return jh._create(r,n)}function lp(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new q(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mv(e)&&n.indexOf("/")!==-1)throw new q(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!J.isDocumentKey(r))throw new q(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xd(t,new J(r))}if(n instanceof gt)return xd(t,n._key);throw new q(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${cc(n)}.`)}function up(t,e){if(!Array.isArray(t)||t.length===0)throw new q(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gw(t,e){if(e.isInequality()){const r=Za(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new q(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=dh(t);i!==null&&mw(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function mw(t,e,n){if(!n.isEqual(e))throw new q(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class uO{convertValue(e,n="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){const r={};return bs(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new xh(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pi(e));default:return null}}convertTimestamp(e){const n=Kn(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);Se($v(r));const s=new gi(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yw extends fw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ko(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Uh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ko extends yw{data(e={}){return super.data(e)}}class vw{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Us(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ko(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new ko(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Us(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new ko(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Us(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:fO(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t){t=Jt(t,gt);const e=Jt(t.firestore,Er);return GN(uc(e),t._key).then(n=>_w(e,t,n))}class Hh extends uO{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function m1(t){t=Jt(t,Jn);const e=Jt(t.firestore,Er),n=uc(e),r=new Hh(e);return dw(t._query),QN(n,t._query).then(s=>new vw(e,r,t,s))}function y1(t){return ww(Jt(t.firestore,Er),[new ph(t._key,Gt.none())])}function v1(t,e){const n=Jt(t.firestore,Er),r=XN(t),s=hO(t.converter,e);return ww(n,[sO(aw(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Gt.exists(!1))]).then(()=>r)}function w1(t,...e){var n,r,s;t=Je(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||cp(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(cp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof gt)l=Jt(t.firestore,Er),u=Xa(t._key.path),c={next:h=>{e[o]&&e[o](_w(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Jt(t,Jn);l=Jt(h.firestore,Er),u=h._query;const f=new Hh(l);c={next:g=>{e[o]&&e[o](new vw(l,f,h,g))},error:e[o+1],complete:e[o+2]},dw(t._query)}return function(h,f,g,m){const w=new Oh(m),E=new Rh(f,w,g);return h.asyncQueue.enqueueAndForget(async()=>Sh(await ua(h),E)),()=>{w.yc(),h.asyncQueue.enqueueAndForget(async()=>Ah(await ua(h),E))}}(uc(l),u,a,c)}function ww(t,e){return function(n,r){const s=new ln;return n.asyncQueue.enqueueAndForget(async()=>xN(await WN(n),r,s)),s.promise}(uc(t),e)}function _w(t,e,n){const r=n.docs.get(e._key),s=new Hh(t);return new yw(t,s,e._key,r,new Us(n.hasPendingWrites,n.fromCache),e.converter)}function dO(){return new Mh("serverTimestamp")}(function(t,e=!0){(function(n){Es=n})(Ri),ns(new gr("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Er(new bk(n.getProvider("auth-internal")),new Sk(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gi(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Vn(Rd,"3.10.0",t),Vn(Rd,"3.10.0","esm2017")})();const pO={apiKey:"AIzaSyBtRzZlHJxvwAZlB6TvxYq8oVkyfwsNjyc",authDomain:"portfolio-36624.firebaseapp.com",projectId:"portfolio-36624",storageBucket:"portfolio-36624.appspot.com",messagingSenderId:"453651491294",appId:"1:453651491294:web:617ab0f09069c335da554f",measurementId:"G-RWF6DS9WN7"};Tm(pO);const _1=eO(),_i=gA(),E1=dO,Zl=bt(null),gO=async()=>{Zl.value=null;try{await tS(_i)}catch(t){Zl.value=t.message}},b1=()=>({logout:gO,error:Zl}),Ro=bt(null),mO=async(t,e)=>{Ro.value=null;try{const n=await QC(_i,t,e);return Ro.value=null,n}catch{Ro.value="Incorrect login credentials"}},T1=()=>({error:Ro,login:mO}),hp=bt(null),qh=async()=>{try{return await new Promise(t=>{const e=eS(_i,n=>{hp.value=n,t(),e()})}),{user:hp}}catch{throw new Error("Error getting user")}},No=bt(null),yO=async(t,e,n)=>{No.value=null;try{const r=await GC(_i,t,e);if(!r)throw new Error("Could not complete the signup");return await YC(_i.currentUser,{displayName:n}),No.value=null,r}catch(r){No.value=r.message}},I1=()=>({error:No,signup:yO});const vO=Wn({name:"FragmentWrapper",setup(t,{slots:e}){return()=>{var n;return(n=e.default)==null?void 0:n.call(e)}}}),eu=(t,e,n)=>({default:()=>e?Ft(t,e===!0?{}:e,n):Ft(vO,{},n)});/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Lr=typeof window<"u";function wO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function zc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Bt(s)?s.map(t):t(s)}return n}const Js=()=>{},Bt=Array.isArray,_O=/\/$/,EO=t=>t.replace(_O,"");function Wc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=CO(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function bO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function fp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function TO(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fs(e.matched[r],n.matched[s])&&Ew(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ew(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!IO(t[n],e[n]))return!1;return!0}function IO(t,e){return Bt(t)?dp(t,e):Bt(e)?dp(e,t):t===e}function dp(t,e){return Bt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function CO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ei;(function(t){t.pop="pop",t.push="push"})(Ei||(Ei={}));var Ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ys||(Ys={}));function SO(t){if(!t)if(Lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),EO(t)}const AO=/^[^#]+#/;function kO(t,e){return t.replace(AO,"#")+e}function RO(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const hc=()=>({left:window.pageXOffset,top:window.pageYOffset});function NO(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=RO(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function pp(t,e){return(history.state?history.state.position-e:-1)+t}const tu=new Map;function OO(t,e){tu.set(t,e)}function DO(t){const e=tu.get(t);return tu.delete(t),e}let PO=()=>location.protocol+"//"+location.host;function bw(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),fp(c,"")}return fp(n,t)+r+s}function xO(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=bw(t,location),m=n.value,w=e.value;let E=0;if(f){if(n.value=g,e.value=f,o&&o===m){o=null;return}E=w?f.position-w.position:0}else r(g);s.forEach(v=>{v(n.value,m,{delta:E,type:Ei.pop,direction:E?E>0?Ys.forward:Ys.back:Ys.unknown})})};function c(){o=n.value}function l(f){s.push(f);const g=()=>{const m=s.indexOf(f);m>-1&&s.splice(m,1)};return i.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(we({},f.state,{scroll:hc()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function gp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?hc():null}}function LO(t){const{history:e,location:n}=window,r={value:bw(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:PO()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=we({},e.state,gp(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=we({},s.value,e.state,{forward:c,scroll:hc()});i(u.current,u,!0);const h=we({},gp(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Tw(t){t=SO(t);const e=LO(t),n=xO(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:kO.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function MO(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Tw(t)}function FO(t){return typeof t=="string"||t&&typeof t=="object"}function Iw(t){return typeof t=="string"||typeof t=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cw=Symbol("");var mp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mp||(mp={}));function ds(t,e){return we(new Error,{type:t,[Cw]:!0},e)}function Zt(t,e){return t instanceof Error&&Cw in t&&(e==null||!!(t.type&e))}const yp="[^/]+?",UO={sensitive:!1,strict:!1,start:!0,end:!0},$O=/[.+*?^${}()[\]/\\]/g;function VO(t,e){const n=we({},UO,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace($O,"\\$&"),g+=40;else if(f.type===1){const{value:m,repeatable:w,optional:E,regexp:v}=f;i.push({name:m,repeatable:w,optional:E});const p=v||yp;if(p!==yp){g+=10;try{new RegExp(`(${p})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${m}" (${p}): `+I.message)}}let _=w?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;h||(_=E&&l.length<2?`(?:/${_})`:"/"+_),E&&(_+="?"),s+=_,g+=20,E&&(g+=-8),w&&(g+=-20),p===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",m=i[f-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:w,optional:E}=g,v=m in l?l[m]:"";if(Bt(v)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const p=Bt(v)?v.join("/"):v;if(!p)if(E)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=p}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function BO(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function jO(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=BO(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(vp(r))return 1;if(vp(s))return-1}return s.length-r.length}function vp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const HO={type:0,value:""},qO=/[a-zA-Z0-9_]/;function KO(t){if(!t)return[[]];if(t==="/")return[[HO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:qO.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function zO(t,e,n){const r=VO(KO(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function WO(t,e){const n=[],r=new Map;e=Ep({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const g=!f,m=GO(u);m.aliasOf=f&&f.record;const w=Ep(e,u),E=[m];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const I of _)E.push(we({},m,{components:f?f.record.components:m.components,path:I,aliasOf:f?f.record:m}))}let v,p;for(const _ of E){const{path:I}=_;if(h&&I[0]!=="/"){const S=h.record.path,P=S[S.length-1]==="/"?"":"/";_.path=h.record.path+(I&&P+I)}if(v=zO(_,h,w),f?f.alias.push(v):(p=p||v,p!==v&&p.alias.push(v),g&&u.name&&!_p(v)&&o(u.name)),m.children){const S=m.children;for(let P=0;P<S.length;P++)i(S[P],v,f&&f.children[P])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return p?()=>{o(p)}:Js}function o(u){if(Iw(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&jO(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Sw(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!_p(u)&&r.set(u.record.name,u)}function l(u,h){let f,g={},m,w;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw ds(1,{location:u});w=f.record.name,g=we(wp(h.params,f.keys.filter(p=>!p.optional).map(p=>p.name)),u.params&&wp(u.params,f.keys.map(p=>p.name))),m=f.stringify(g)}else if("path"in u)m=u.path,f=n.find(p=>p.re.test(m)),f&&(g=f.parse(m),w=f.record.name);else{if(f=h.name?r.get(h.name):n.find(p=>p.re.test(h.path)),!f)throw ds(1,{location:u,currentLocation:h});w=f.record.name,g=we({},h.params,u.params),m=f.stringify(g)}const E=[];let v=f;for(;v;)E.unshift(v.record),v=v.parent;return{name:w,path:m,params:g,matched:E,meta:JO(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function wp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function GO(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:QO(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function QO(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function _p(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function JO(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Ep(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Sw(t,e){return e.children.some(n=>n===t||Sw(t,n))}const Aw=/#/g,YO=/&/g,XO=/\//g,ZO=/=/g,eD=/\?/g,kw=/\+/g,tD=/%5B/g,nD=/%5D/g,Rw=/%5E/g,rD=/%60/g,Nw=/%7B/g,sD=/%7C/g,Ow=/%7D/g,iD=/%20/g;function Kh(t){return encodeURI(""+t).replace(sD,"|").replace(tD,"[").replace(nD,"]")}function oD(t){return Kh(t).replace(Nw,"{").replace(Ow,"}").replace(Rw,"^")}function nu(t){return Kh(t).replace(kw,"%2B").replace(iD,"+").replace(Aw,"%23").replace(YO,"%26").replace(rD,"`").replace(Nw,"{").replace(Ow,"}").replace(Rw,"^")}function aD(t){return nu(t).replace(ZO,"%3D")}function cD(t){return Kh(t).replace(Aw,"%23").replace(eD,"%3F")}function lD(t){return t==null?"":cD(t).replace(XO,"%2F")}function fa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function uD(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(kw," "),o=i.indexOf("="),a=fa(o<0?i:i.slice(0,o)),c=o<0?null:fa(i.slice(o+1));if(a in e){let l=e[a];Bt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function bp(t){let e="";for(let n in t){const r=t[n];if(n=aD(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bt(r)?r.map(i=>i&&nu(i)):[r&&nu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function hD(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Bt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const fD=Symbol(""),Tp=Symbol(""),zh=Symbol(""),Wh=Symbol(""),ru=Symbol("");function Ns(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function kn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ds(4,{from:n,to:e})):h instanceof Error?a(h):FO(h)?a(ds(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Gc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(dD(a)){const l=(a.__vccOpts||a)[e];l&&s.push(kn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=wO(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&kn(f,n,r,i,o)()}))}}return s}function dD(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ip(t){const e=pt(zh),n=pt(Wh),r=nt(()=>e.resolve($e(t.to))),s=nt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(fs.bind(null,u));if(f>-1)return f;const g=Cp(c[l-2]);return l>1&&Cp(u)===g&&h[h.length-1].path!==g?h.findIndex(fs.bind(null,c[l-2])):f}),i=nt(()=>s.value>-1&&yD(n.params,r.value.params)),o=nt(()=>s.value>-1&&s.value===n.matched.length-1&&Ew(n.params,r.value.params));function a(c={}){return mD(c)?e[$e(t.replace)?"replace":"push"]($e(t.to)).catch(Js):Promise.resolve()}return{route:r,href:nt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const pD=Wn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ip,setup(t,{slots:e}){const n=Ut(Ip(t)),{options:r}=pt(zh),s=nt(()=>({[Sp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Sp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ft("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),gD=pD;function mD(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yD(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Bt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Cp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sp=(t,e,n)=>t??e??n,vD=Wn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=pt(ru),s=nt(()=>t.route||r.value),i=pt(Tp,0),o=nt(()=>{let l=$e(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=nt(()=>s.value.matched[o.value]);Kr(Tp,nt(()=>o.value+1)),Kr(fD,a),Kr(ru,s);const c=bt();return Mn(()=>[c.value,a.value,t.name],([l,u,h],[f,g,m])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!fs(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Ap(n.default,{Component:f,route:l});const g=h.props[u],m=g?g===!0?l.params:typeof g=="function"?g(l):g:null,E=Ft(f,we({},m,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Ap(n.default,{Component:E,route:l})||E}}});function Ap(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Dw=vD;function wD(t){const e=WO(t.routes,t),n=t.parseQuery||uD,r=t.stringifyQuery||bp,s=t.history,i=Ns(),o=Ns(),a=Ns(),c=Zc(Cn);let l=Cn;Lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zc.bind(null,k=>""+k),h=zc.bind(null,lD),f=zc.bind(null,fa);function g(k,j){let U,Q;return Iw(k)?(U=e.getRecordMatcher(k),Q=j):Q=k,e.addRoute(Q,U)}function m(k){const j=e.getRecordMatcher(k);j&&e.removeRoute(j)}function w(){return e.getRoutes().map(k=>k.record)}function E(k){return!!e.getRecordMatcher(k)}function v(k,j){if(j=we({},j||c.value),typeof k=="string"){const d=Wc(n,k,j.path),y=e.resolve({path:d.path},j),T=s.createHref(d.fullPath);return we(d,y,{params:f(y.params),hash:fa(d.hash),redirectedFrom:void 0,href:T})}let U;if("path"in k)U=we({},k,{path:Wc(n,k.path,j.path).path});else{const d=we({},k.params);for(const y in d)d[y]==null&&delete d[y];U=we({},k,{params:h(k.params)}),j.params=h(j.params)}const Q=e.resolve(U,j),pe=k.hash||"";Q.params=u(f(Q.params));const Re=bO(r,we({},k,{hash:oD(pe),path:Q.path})),ce=s.createHref(Re);return we({fullPath:Re,hash:pe,query:r===bp?hD(k.query):k.query||{}},Q,{redirectedFrom:void 0,href:ce})}function p(k){return typeof k=="string"?Wc(n,k,c.value.path):we({},k)}function _(k,j){if(l!==k)return ds(8,{from:j,to:k})}function I(k){return N(k)}function S(k){return I(we(p(k),{replace:!0}))}function P(k){const j=k.matched[k.matched.length-1];if(j&&j.redirect){const{redirect:U}=j;let Q=typeof U=="function"?U(k):U;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=p(Q):{path:Q},Q.params={}),we({query:k.query,hash:k.hash,params:"path"in Q?{}:k.params},Q)}}function N(k,j){const U=l=v(k),Q=c.value,pe=k.state,Re=k.force,ce=k.replace===!0,d=P(U);if(d)return N(we(p(d),{state:typeof d=="object"?we({},pe,d.state):pe,force:Re,replace:ce}),j||U);const y=U;y.redirectedFrom=j;let T;return!Re&&TO(r,Q,U)&&(T=ds(16,{to:y,from:Q}),Yn(Q,Q,!0,!1)),(T?Promise.resolve(T):F(y,Q)).catch(C=>Zt(C)?Zt(C,2)?C:Rt(C):be(C,y,Q)).then(C=>{if(C){if(Zt(C,2))return N(we({replace:ce},p(C.to),{state:typeof C.to=="object"?we({},pe,C.to.state):pe,force:Re}),j||y)}else C=G(y,Q,!0,ce,pe);return H(y,Q,C),C})}function b(k,j){const U=_(k,j);return U?Promise.reject(U):Promise.resolve()}function F(k,j){let U;const[Q,pe,Re]=_D(k,j);U=Gc(Q.reverse(),"beforeRouteLeave",k,j);for(const d of Q)d.leaveGuards.forEach(y=>{U.push(kn(y,k,j))});const ce=b.bind(null,k,j);return U.push(ce),Or(U).then(()=>{U=[];for(const d of i.list())U.push(kn(d,k,j));return U.push(ce),Or(U)}).then(()=>{U=Gc(pe,"beforeRouteUpdate",k,j);for(const d of pe)d.updateGuards.forEach(y=>{U.push(kn(y,k,j))});return U.push(ce),Or(U)}).then(()=>{U=[];for(const d of k.matched)if(d.beforeEnter&&!j.matched.includes(d))if(Bt(d.beforeEnter))for(const y of d.beforeEnter)U.push(kn(y,k,j));else U.push(kn(d.beforeEnter,k,j));return U.push(ce),Or(U)}).then(()=>(k.matched.forEach(d=>d.enterCallbacks={}),U=Gc(Re,"beforeRouteEnter",k,j),U.push(ce),Or(U))).then(()=>{U=[];for(const d of o.list())U.push(kn(d,k,j));return U.push(ce),Or(U)}).catch(d=>Zt(d,8)?d:Promise.reject(d))}function H(k,j,U){for(const Q of a.list())Q(k,j,U)}function G(k,j,U,Q,pe){const Re=_(k,j);if(Re)return Re;const ce=j===Cn,d=Lr?history.state:{};U&&(Q||ce?s.replace(k.fullPath,we({scroll:ce&&d&&d.scroll},pe)):s.push(k.fullPath,pe)),c.value=k,Yn(k,j,U,ce),Rt()}let $;function re(){$||($=s.listen((k,j,U)=>{if(!Yi.listening)return;const Q=v(k),pe=P(Q);if(pe){N(we(pe,{replace:!0}),Q).catch(Js);return}l=Q;const Re=c.value;Lr&&OO(pp(Re.fullPath,U.delta),hc()),F(Q,Re).catch(ce=>Zt(ce,12)?ce:Zt(ce,2)?(N(ce.to,Q).then(d=>{Zt(d,20)&&!U.delta&&U.type===Ei.pop&&s.go(-1,!1)}).catch(Js),Promise.reject()):(U.delta&&s.go(-U.delta,!1),be(ce,Q,Re))).then(ce=>{ce=ce||G(Q,Re,!1),ce&&(U.delta&&!Zt(ce,8)?s.go(-U.delta,!1):U.type===Ei.pop&&Zt(ce,20)&&s.go(-1,!1)),H(Q,Re,ce)}).catch(Js)}))}let B=Ns(),ve=Ns(),de;function be(k,j,U){Rt(k);const Q=ve.list();return Q.length?Q.forEach(pe=>pe(k,j,U)):console.error(k),Promise.reject(k)}function _e(){return de&&c.value!==Cn?Promise.resolve():new Promise((k,j)=>{B.add([k,j])})}function Rt(k){return de||(de=!k,re(),B.list().forEach(([j,U])=>k?U(k):j()),B.reset()),k}function Yn(k,j,U,Q){const{scrollBehavior:pe}=t;if(!Lr||!pe)return Promise.resolve();const Re=!U&&DO(pp(k.fullPath,0))||(Q||!U)&&history.state&&history.state.scroll||null;return Tr().then(()=>pe(k,j,Re)).then(ce=>ce&&NO(ce)).catch(ce=>be(ce,k,j))}const Nt=k=>s.go(k);let ft;const kr=new Set,Yi={currentRoute:c,listening:!0,addRoute:g,removeRoute:m,hasRoute:E,getRoutes:w,resolve:v,options:t,push:I,replace:S,go:Nt,back:()=>Nt(-1),forward:()=>Nt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ve.add,isReady:_e,install(k){const j=this;k.component("RouterLink",gD),k.component("RouterView",Dw),k.config.globalProperties.$router=j,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(c)}),Lr&&!ft&&c.value===Cn&&(ft=!0,I(s.location).catch(pe=>{}));const U={};for(const pe in Cn)U[pe]=nt(()=>c.value[pe]);k.provide(zh,j),k.provide(Wh,Ut(U)),k.provide(ru,c);const Q=k.unmount;kr.add(k),k.unmount=function(){kr.delete(k),kr.size<1&&(l=Cn,$&&$(),$=null,c.value=Cn,ft=!1,de=!1),Q()}}};return Yi}function Or(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function _D(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>fs(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>fs(l,c))||s.push(c))}return[n,r,s]}function ED(){return pt(Wh)}const $r={default:()=>Dt(()=>import("./default.4ccdcb96.js"),["./default.4ccdcb96.js","./nuxt-link.6a51fdce.js","./HeroIcons.f5dd9299.js"],import.meta.url).then(t=>t.default||t)},bD=Wn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(t,e){const n=await $r[t.name]().then(r=>r.default||r);return()=>Ft(n,e.attrs,e.slots)}}),TD=Wn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=pt("_route"),r=n===dm()?ED():n,s=nt(()=>$e(t.name)??r.meta.layout??"default");return()=>{const i=s.value&&s.value in $r,o=r.meta.layoutTransition??AT;return eu(ka,i&&o,{default:()=>eu(bD,i&&{key:s.value,name:s.value,...e.attrs},e.slots).default()}).default()}}}),ID=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),CD=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&ID(t.route,n));return typeof r=="function"?r(t.route):r},SD=(t,e)=>({default:()=>t?Ft(J_,t===!0?{}:t,e):e}),AD=Wn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e}){const n=yt();return()=>Ft(Dw,{name:t.name,route:t.route,...e},{default:r=>{if(!r.Component)return;const s=CD(r,t.pageKey),i=n.deferHydration(),o=!!(t.transition??r.route.meta.pageTransition??bl),a=o&&RD([t.transition,r.route.meta.pageTransition,bl,{onAfterLeave:()=>{n.callHook("page:transition:finish",r.Component)}}].filter(Boolean));return eu(ka,o&&a,SD(t.keepalive??r.route.meta.keepalive??kT,Ft(ug,{onPending:()=>n.callHook("page:start",r.Component),onResolve:()=>{Tr(()=>n.callHook("page:finish",r.Component).finally(i))}},{default:()=>Ft(ND,{key:s,routeProps:r,pageKey:s,hasTransition:o})}))).default()}})}});function kD(t){return Array.isArray(t)?t:t?[t]:[]}function RD(t){const e=t.map(n=>({...n,onAfterLeave:kD(n.onAfterLeave)}));return hT(...e)}const ND=Wn({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(t){const e=t.pageKey,n=t.routeProps.route,r={};for(const s in t.routeProps.route)r[s]=nt(()=>e===t.pageKey?t.routeProps.route[s]:n[s]);return Kr("_route",Ut(r)),()=>Ft(t.routeProps.Component)}}),OD=Ir({name:"nuxt:global-components"}),DD=Ir({name:"nuxt:head",setup(t){const n=tT();n.push(ST),t.vueApp.use(n);{let r=!0;const s=()=>{r=!1,n.hooks.callHook("entries:updated",n)};n.hooks.hook("dom:beforeRender",i=>{i.shouldRender=!r}),t.hooks.hook("page:start",()=>{r=!0}),t.hooks.hook("page:finish",s),t.hooks.hook("app:suspense:resolve",s)}}}),wt={middleware:[Oa(async()=>{let t,e;const{user:n}=([t,e]=si(()=>qh()),t=await t,e(),t);if(!n.value)return pm("/userentry")})]},_t={middleware:[Oa(async()=>{let t,e;const{user:n}=([t,e]=si(()=>qh()),t=await t,e(),t);if(!n.value)return pm("/userentry")})]},kp=[{name:(wt==null?void 0:wt.name)??"Chatroom",path:(wt==null?void 0:wt.path)??"/Chatroom",meta:wt||{},alias:(wt==null?void 0:wt.alias)||[],redirect:(wt==null?void 0:wt.redirect)||void 0,component:()=>Dt(()=>import("./Chatroom.557908bd.js"),[],import.meta.url).then(t=>t.default||t)},{name:(_t==null?void 0:_t.name)??"Create",path:(_t==null?void 0:_t.path)??"/Create",meta:_t||{},alias:(_t==null?void 0:_t.alias)||[],redirect:(_t==null?void 0:_t.redirect)||void 0,component:()=>Dt(()=>import("./Create.09dbbbb7.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Details-id",path:"/Details/:id()",meta:{},alias:[],redirect:void 0,component:()=>Dt(()=>import("./_id_.a667850d.js"),["./_id_.a667850d.js","./TagPill.b1436896.js","./nuxt-link.6a51fdce.js","./HeroIcons.f5dd9299.js"],import.meta.url).then(t=>t.default||t)},{name:"Products-NewProduct",path:"/Products/NewProduct",meta:{},alias:[],redirect:void 0,component:()=>Dt(()=>import("./NewProduct.0305693b.js"),[],import.meta.url).then(t=>t.default||t)},{name:"Products-id",path:"/Products/:id()",meta:{},alias:[],redirect:void 0,component:()=>Dt(()=>import("./_id_.841b556e.js"),["./_id_.841b556e.js","./HeroIcons.f5dd9299.js"],import.meta.url).then(t=>t.default||t)},{name:"Products",path:"/Products",meta:{},alias:[],redirect:void 0,component:()=>Dt(()=>import("./index.e3951378.js"),["./index.e3951378.js","./nuxt-link.6a51fdce.js"],import.meta.url).then(t=>t.default||t)},{name:"Tags-id",path:"/Tags/:id()",meta:{},alias:[],redirect:void 0,component:()=>Dt(()=>import("./_id_.95383ba1.js"),["./_id_.95383ba1.js","./TagPill.b1436896.js","./nuxt-link.6a51fdce.js","./getPosts.64323e90.js"],import.meta.url).then(t=>t.default||t)},{name:"UserEntry",path:"/UserEntry",meta:{},alias:[],redirect:void 0,component:()=>Dt(()=>import("./UserEntry.abae89ec.js"),["./UserEntry.abae89ec.js","./UserEntry.3fe09e19.css"],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",meta:{},alias:[],redirect:void 0,component:()=>Dt(()=>import("./index.28df9d4d.js"),["./index.28df9d4d.js","./nuxt-link.6a51fdce.js","./TagPill.b1436896.js","./getPosts.64323e90.js","./index.591e3e63.css"],import.meta.url).then(t=>t.default||t)}],PD={scrollBehavior(t,e,n){const r=yt();let s=n||void 0;if(!s&&e&&t&&t.meta.scrollToTop!==!1&&xD(e,t)&&(s={left:0,top:0}),t.path===e.path){if(e.hash&&!t.hash)return{left:0,top:0};if(t.hash)return{el:t.hash,top:Rp(t.hash)}}const i=a=>!!(a.meta.pageTransition??bl),o=i(e)&&i(t)?"page:transition:finish":"page:finish";return new Promise(a=>{r.hooks.hookOnce(o,async()=>{await Tr(),t.hash&&(s={el:t.hash,top:Rp(t.hash)}),a(s)})})}};function Rp(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}function xD(t,e){const n=t.matched[0]===e.matched[0];return!!(!n||n&&JSON.stringify(t.params)!==JSON.stringify(e.params))}const LD={},en={...LD,...PD},MD=Oa(async t=>{var c;let e,n;if(!((c=t.meta)!=null&&c.validate))return;const r=yt(),s=Si();if(([e,n]=si(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=gm({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`}),a=s.beforeResolve(l=>{if(a(),l===t){const u=s.afterEach(async()=>{u(),await nn(r,Mr,[o]),window.history.pushState({},"",t.fullPath)});return!1}})}),FD=Oa((t,e)=>{localStorage.setItem("currentRoute",t.name),localStorage.setItem("prevRoute",e.name);const n=PT();(async()=>{const{user:s}=await qh();s.value?(n.logIn(),n.setCurrentUser(s.value)):(n.logOut(),n.setCurrentUser(null))})()}),UD=[MD,FD],Xs={};function $D(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){const a=s.includes(t.slice(i))?t.slice(i).length:1;let c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Pf(c,"")}return Pf(n,t)+r+s}const VD=Ir({name:"nuxt:router",enforce:"pre",async setup(t){var m,w;let e,n,r=tm().app.baseURL;en.hashMode&&!r.includes("#")&&(r+="#");const s=((m=en.history)==null?void 0:m.call(en,r))??(en.hashMode?MO(r):Tw(r)),i=((w=en.routes)==null?void 0:w.call(en,kp))??kp,o=$D(r,window.location),a=wD({...en,history:s,routes:i});t.vueApp.use(a);const c=Zc(a.currentRoute.value);a.afterEach((E,v)=>{c.value=v}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const l=Zc(a.resolve(o)),u=()=>{l.value=a.currentRoute.value};t.hook("page:finish",u),a.afterEach((E,v)=>{var p,_,I,S;((_=(p=E.matched[0])==null?void 0:p.components)==null?void 0:_.default)===((S=(I=v.matched[0])==null?void 0:I.components)==null?void 0:S.default)&&u()});const h={};for(const E in l.value)h[E]=nt(()=>l.value[E]);t._route=Ut(h),t._middleware=t._middleware||{global:[],named:{}};const f=Da();try{[e,n]=si(()=>a.isReady()),await e,n()}catch(E){[e,n]=si(()=>nn(t,Mr,[E])),await e,n()}const g=pT("_layout");return a.beforeEach(async(E,v)=>{var _;E.meta=Ut(E.meta),t.isHydrating&&g.value&&!pr(E.meta.layout)&&(E.meta.layout=g.value),t._processingMiddleware=!0;const p=new Set([...UD,...t._middleware.global]);for(const I of E.matched){const S=I.meta.middleware;if(S)if(Array.isArray(S))for(const P of S)p.add(P);else p.add(S)}for(const I of p){const S=typeof I=="string"?t._middleware.named[I]||await((_=Xs[I])==null?void 0:_.call(Xs).then(N=>N.default||N)):I;if(!S)throw new Error(`Unknown route middleware: '${I}'.`);const P=await nn(t,S,[E,v]);if(!t.payload.serverRendered&&t.isHydrating&&(P===!1||P instanceof Error)){const N=P||_l({statusCode:404,statusMessage:`Page Not Found: ${o}`});return await nn(t,Mr,[N]),!1}if(P||P===!1)return P}}),a.onError(()=>{delete t._processingMiddleware}),a.afterEach(async(E,v,p)=>{delete t._processingMiddleware,!t.isHydrating&&f.value&&await nn(t,mT),E.matched.length===0&&await nn(t,Mr,[_l({statusCode:404,fatal:!1,statusMessage:`Page not found: ${E.fullPath}`})])}),t.hooks.hookOnce("app:created",async()=>{try{await a.replace({...a.resolve(o),name:void 0,force:!0})}catch(E){await nn(t,Mr,[E])}}),{provide:{router:a}}}},1),BD=Ir({name:"nuxt:prefetch",setup(t){const e=Si();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof $r[r]=="function"&&await $r[r]()})}),t.hooks.hook("link:prefetch",n=>{var o,a,c,l;if(Ra(n))return;const r=e.resolve(n);if(!r)return;const s=(o=r==null?void 0:r.meta)==null?void 0:o.layout;let i=Array.isArray((a=r==null?void 0:r.meta)==null?void 0:a.middleware)?(c=r==null?void 0:r.meta)==null?void 0:c.middleware:[(l=r==null?void 0:r.meta)==null?void 0:l.middleware];i=i.filter(u=>typeof u=="string");for(const u of i)typeof Xs[u]=="function"&&Xs[u]();s&&typeof $r[s]=="function"&&$r[s]()})}}),jD=Ir({name:"nuxt:chunk-reload",setup(t){const e=Si(),n=tm(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:s})=>{r.add(s)}),e.onError((s,i)=>{if(r.has(s)){const a="href"in i&&i.href.startsWith("#")?n.app.baseURL+i.href:Na(n.app.baseURL,i.fullPath);NT({path:a,persistState:!0})}})}}),HD=[OT,OD,DD,VD,BD,jD],qD={};function KD(t,e){const n=AD,r=TD;return rn(),Rn(r,null,{default:vu(()=>[Pe(n)]),_:1})}const zD=DT(qD,[["render",KD]]),Np={__name:"nuxt-root",setup(t){const e=G_(()=>Dt(()=>import("./error-component.19dd9a8a.js"),[],import.meta.url).then(c=>c.default||c)),n=()=>null,r=yt(),s=r.deferHydration(),i=!1;Kr("_route",dm()),r.hooks.callHookWith(c=>c.map(l=>l()),"vue:setup");const o=Da();_g((c,l,u)=>{if(r.hooks.callHook("vue:error",c,l,u).catch(h=>console.error("[nuxt] Error in `vue:error` hook",h)),yT(c)&&(c.fatal||c.unhandled))return nn(r,Mr,[c]),!1});const{islandContext:a}=!1;return(c,l)=>(rn(),Rn(ug,{onResolve:$e(s)},{default:vu(()=>[$e(o)?(rn(),Rn($e(e),{key:0,error:$e(o)},null,8,["error"])):$e(a)?(rn(),Rn($e(n),{key:1,context:$e(a)},null,8,["context"])):$e(i)?(rn(),Rn(rE($e(i)),{key:2})):(rn(),Rn($e(zD),{key:3}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=G0.create({baseURL:J0()}));let Op;const WD=fb(HD);Op=async function(){var s,i;const n=!!((s=window.__NUXT__)!=null&&s.serverRendered||((i=document.getElementById("__NUXT_DATA__"))==null?void 0:i.dataset.ssr)==="true")?l0(Np):c0(Np),r=lb({vueApp:n});try{await hb(r,WD)}catch(o){await r.callHook("app:error",o),r.payload.error=r.payload.error||o}try{await r.hooks.callHook("app:created",n),await r.hooks.callHook("app:beforeMount",n),n.mount("#"+RT),await r.hooks.callHook("app:mounted",n),await Tr()}catch(o){await r.callHook("app:error",o),r.payload.error=r.payload.error||o}},Op().catch(t=>{console.error("Error while mounting app:",t)});export{Ia as $,c1 as A,a1 as B,E1 as C,Pe as D,Fg as E,lt as F,pm as G,XN as H,p1 as I,g1 as J,dm as K,Si as L,y1 as M,PT as N,Wn as O,u1 as P,gm as Q,vu as R,m1 as S,l1 as T,T1 as U,I1 as V,JD as W,YD as X,b1 as Y,i1 as Z,Dt as _,d1 as a,Eu as a0,Mn as a1,pa as a2,t1 as a3,yt as a4,Ra as a5,Ca as a6,Ft as a7,ZD as a8,Su as a9,T0 as aa,N0 as ab,Wg as ac,_1 as b,Rn as c,G_ as d,w1 as e,DT as f,TE as g,nt as h,wg as i,n1 as j,r1 as k,e1 as l,Mg as m,GD as n,rn as o,v1 as p,s1 as q,bt as r,f1 as s,QD as t,$e as u,qh as v,H_ as w,XD as x,o1 as y,Ne as z};
