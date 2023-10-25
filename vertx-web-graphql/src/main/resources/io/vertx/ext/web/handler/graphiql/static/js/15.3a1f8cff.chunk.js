"use strict";(self.webpackChunkvertx_web_graphiql=self.webpackChunkvertx_web_graphiql||[]).push([[15,3],{1003:function(e,r,n){n.r(r),n.d(r,{C:function(){return c},c:function(){return u}});var t=n(1777);function a(e,r){for(var n=function(){var n=r[t];if("string"!=typeof n&&!Array.isArray(n)){var a=function(r){if("default"!==r&&!(r in e)){var t=Object.getOwnPropertyDescriptor(n,r);t&&Object.defineProperty(e,r,t.get?t:{enumerable:!0,get:function(){return n[r]}})}};for(var i in n)a(i)}},t=0;t<r.length;t++)n();return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(0,Object.defineProperty)(a,"name",{value:"_mergeNamespaces",configurable:!0});var i=(0,t.r)(),c=(0,t.g)(i),u=a({__proto__:null,default:c},[i])},15:function(e,r,n){n.r(r);var t,a,i,c,u,o,s,l=n(885),f=n(7762),d=n(3144),v=n(5671),p=n(136),b=n(7277),m=n(8737),y=n(1003),h=n(3651),g=(n(1777),Object.defineProperty),k=function(e,r){return g(e,"name",{value:r,configurable:!0})};function w(e){t=e,a=e.length,i=c=u=-1,Z(),A();var r=O();return E("EOF"),r}function O(){var e=i,r=[];if(E("{"),!_("}")){do{r.push(N())}while(_(","));E("}")}return{kind:"Object",start:e,end:u,members:r}}function N(){var e=i,r="String"===s?S():null;E("String"),E(":");var n=x();return{kind:"Member",start:e,end:u,key:r,value:n}}function j(){var e=i,r=[];if(E("["),!_("]")){do{r.push(x())}while(_(","));E("]")}return{kind:"Array",start:e,end:u,values:r}}function x(){switch(s){case"[":return j();case"{":return O();case"String":case"Number":case"Boolean":case"Null":var e=S();return A(),e}E("Value")}function S(){return{kind:s,start:i,end:c,value:JSON.parse(t.slice(i,c))}}function E(e){if(s!==e){var r;if("EOF"===s)r="[end of file]";else if(c-i>1)r="`"+t.slice(i,c)+"`";else{var n=t.slice(i).match(/^.+?\b/);r="`"+(n?n[0]:t[i])+"`"}throw T("Expected ".concat(e," but found ").concat(r,"."))}A()}k(w,"jsonParse"),k(O,"parseObj"),k(N,"parseMember"),k(j,"parseArr"),k(x,"parseVal"),k(S,"curToken"),k(E,"expect");var F=function(e){(0,p.Z)(n,e);var r=(0,b.Z)(n);function n(e,t){var a;return(0,v.Z)(this,n),(a=r.call(this,e)).position=t,a}return(0,d.Z)(n)}((0,m.Z)(Error));function T(e){return new F(e,{start:i,end:c})}function _(e){if(s===e)return A(),!0}function Z(){return c<a&&(c++,o=c===a?0:t.charCodeAt(c)),o}function A(){for(u=c;9===o||10===o||13===o||32===o;)Z();if(0!==o){switch(i=c,o){case 34:return s="String",B();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return s="Number",q();case 102:if("false"!==t.slice(i,i+5))break;return c+=4,Z(),void(s="Boolean");case 110:if("null"!==t.slice(i,i+4))break;return c+=3,Z(),void(s="Null");case 116:if("true"!==t.slice(i,i+4))break;return c+=3,Z(),void(s="Boolean")}s=t[i],Z()}else s="EOF"}function B(){for(Z();34!==o&&o>31;)if(92===o)switch(o=Z(),o){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:Z();break;case 117:Z(),V(),V(),V(),V();break;default:throw T("Bad character escape sequence.")}else{if(c===a)throw T("Unterminated string.");Z()}if(34!==o)throw T("Unterminated string.");Z()}function V(){if(o>=48&&o<=57||o>=65&&o<=70||o>=97&&o<=102)return Z();throw T("Expected hexadecimal digit.")}function q(){45===o&&Z(),48===o?Z():C(),46===o&&(Z(),C()),(69===o||101===o)&&((43===(o=Z())||45===o)&&Z(),C())}function C(){if(o<48||o>57)throw T("Expected decimal digit.");do{Z()}while(o>=48&&o<=57)}function P(e,r,n){var t,a,i=[],c=(0,f.Z)(n.members);try{for(c.s();!(a=c.n()).done;){var u=a.value;if(u){var o=null===(t=u.key)||void 0===t?void 0:t.value,s=r[o];if(s){var d,v=(0,f.Z)(M(s,u.value));try{for(v.s();!(d=v.n()).done;){var p=(0,l.Z)(d.value,2),b=p[0],m=p[1];i.push(I(e,b,m))}}catch(y){v.e(y)}finally{v.f()}}else i.push(I(e,u.key,'Variable "$'.concat(o,'" does not appear in any GraphQL query.')))}}}catch(y){c.e(y)}finally{c.f()}return i}function M(e,r){if(!e||!r)return[];if(e instanceof h.bM)return"Null"===r.kind?[[r,'Type "'.concat(e,'" is non-nullable and cannot be null.')]]:M(e.ofType,r);if("Null"===r.kind)return[];if(e instanceof h.p2){var n=e.ofType;return"Array"===r.kind?H(r.values||[],(function(e){return M(n,e)})):M(n,r)}if(e instanceof h.sR){if("Object"!==r.kind)return[[r,'Type "'.concat(e,'" must be an Object.')]];for(var t=Object.create(null),a=H(r.members,(function(r){var n,a=null===(n=null==r?void 0:r.key)||void 0===n?void 0:n.value;t[a]=!0;var i=e.getFields()[a];return i?M(i?i.type:void 0,r.value):[[r.key,'Type "'.concat(e,'" does not have a field "').concat(a,'".')]]})),i=0,c=Object.keys(e.getFields());i<c.length;i++){var u=c[i],o=e.getFields()[u];!t[u]&&o.type instanceof h.bM&&!o.defaultValue&&a.push([r,'Object of type "'.concat(e,'" is missing required field "').concat(u,'".')])}return a}return"Boolean"===e.name&&"Boolean"!==r.kind||"String"===e.name&&"String"!==r.kind||"ID"===e.name&&"Number"!==r.kind&&"String"!==r.kind||"Float"===e.name&&"Number"!==r.kind||"Int"===e.name&&("Number"!==r.kind||(0|r.value)!==r.value)||(e instanceof h.mR||e instanceof h.n2)&&("String"!==r.kind&&"Number"!==r.kind&&"Boolean"!==r.kind&&"Null"!==r.kind||D(e.parseValue(r.value)))?[[r,'Expected value of type "'.concat(e,'".')]]:[]}function I(e,r,n){return{message:n,severity:"error",type:"validation",from:e.posFromIndex(r.start),to:e.posFromIndex(r.end)}}function D(e){return null==e||e!==e}function H(e,r){return Array.prototype.concat.apply([],e.map(r))}k(F,"JSONSyntaxError"),k(T,"syntaxError"),k(_,"skip"),k(Z,"ch"),k(A,"lex"),k(B,"readString"),k(V,"readHex"),k(q,"readNumber"),k(C,"readDigits"),y.C.registerHelper("lint","graphql-variables",(function(e,r,n){if(!e)return[];var t;try{t=w(e)}catch(i){if(i instanceof F)return[I(n,i.position,i.message)];throw i}var a=r.variableToType;return a?P(n,a,t):[]})),k(P,"validateVariables"),k(M,"validateValue"),k(I,"lintError"),k(D,"isNullish"),k(H,"mapCat")}}]);