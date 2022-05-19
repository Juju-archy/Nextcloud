/*! For license information please see settings-vue-settings-admin-basic-settings.js.LICENSE.txt */
!function(){"use strict";var e,n={4157:function(e,n,r){var a=r(20144),i=r(22200),s=r(16453),o=r(9944),l=(r(73317),(0,r(17499).IY)().setApp("settings").detectUser().build()),u=r(26932),c=r(4820),f=r(79753),d=r(10128),E=r.n(d);function A(e,t,n,r,a,i,s){try{var o=e[i](s),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(r,a)}var p,O,I,L=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=t?"1":"0",n=(0,f.generateOcsUrl)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"settings",key:"profile_enabled_by_default"}),e.next=4,E()();case 4:return e.next=6,c.default.post(n,{value:t});case 6:return r=e.sent,e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){A(i,r,a,s,o,"next",e)}function o(e){A(i,r,a,s,o,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}();function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=Object.freeze({ADDRESS:"address",AVATAR:"avatar",BIOGRAPHY:"biography",DISPLAYNAME:"displayname",EMAIL_COLLECTION:"additional_mail",EMAIL:"email",HEADLINE:"headline",NOTIFICATION_EMAIL:"notify_email",ORGANISATION:"organisation",PHONE:"phone",PROFILE_ENABLED:"profile_enabled",ROLE:"role",TWITTER:"twitter",WEBSITE:"website"}),g=Object.freeze({ADDRESS:(0,o.translate)("settings","Address"),AVATAR:(0,o.translate)("settings","Avatar"),BIOGRAPHY:(0,o.translate)("settings","About"),DISPLAYNAME:(0,o.translate)("settings","Full name"),EMAIL_COLLECTION:(0,o.translate)("settings","Additional email"),EMAIL:(0,o.translate)("settings","Email"),HEADLINE:(0,o.translate)("settings","Headline"),ORGANISATION:(0,o.translate)("settings","Organisation"),PHONE:(0,o.translate)("settings","Phone number"),PROFILE_ENABLED:(0,o.translate)("settings","Profile"),ROLE:(0,o.translate)("settings","Role"),TWITTER:(0,o.translate)("settings","Twitter"),WEBSITE:(0,o.translate)("settings","Website")}),h=(Object.freeze({PROFILE_VISIBILITY:(0,o.translate)("settings","Profile visibility")}),Object.freeze((v(p={},g.ADDRESS,b.ADDRESS),v(p,g.AVATAR,b.AVATAR),v(p,g.BIOGRAPHY,b.BIOGRAPHY),v(p,g.DISPLAYNAME,b.DISPLAYNAME),v(p,g.EMAIL_COLLECTION,b.EMAIL_COLLECTION),v(p,g.EMAIL,b.EMAIL),v(p,g.HEADLINE,b.HEADLINE),v(p,g.ORGANISATION,b.ORGANISATION),v(p,g.PHONE,b.PHONE),v(p,g.PROFILE_ENABLED,b.PROFILE_ENABLED),v(p,g.ROLE,b.ROLE),v(p,g.TWITTER,b.TWITTER),v(p,g.WEBSITE,b.WEBSITE),p)),Object.freeze({LANGUAGE:"language"}),Object.freeze({LANGUAGE:(0,o.translate)("settings","Language")}),Object.freeze({PRIVATE:"v2-private",LOCAL:"v2-local",FEDERATED:"v2-federated",PUBLISHED:"v2-published"}));Object.freeze((v(O={},g.ADDRESS,[h.LOCAL,h.PRIVATE]),v(O,g.AVATAR,[h.LOCAL,h.PRIVATE]),v(O,g.BIOGRAPHY,[h.LOCAL,h.PRIVATE]),v(O,g.DISPLAYNAME,[h.LOCAL]),v(O,g.EMAIL_COLLECTION,[h.LOCAL]),v(O,g.EMAIL,[h.LOCAL]),v(O,g.HEADLINE,[h.LOCAL,h.PRIVATE]),v(O,g.ORGANISATION,[h.LOCAL,h.PRIVATE]),v(O,g.PHONE,[h.LOCAL,h.PRIVATE]),v(O,g.PROFILE_ENABLED,[h.LOCAL,h.PRIVATE]),v(O,g.ROLE,[h.LOCAL,h.PRIVATE]),v(O,g.TWITTER,[h.LOCAL,h.PRIVATE]),v(O,g.WEBSITE,[h.LOCAL,h.PRIVATE]),O)),Object.freeze([g.BIOGRAPHY,g.HEADLINE,g.ORGANISATION,g.ROLE]),Object.freeze((v(I={},h.PRIVATE,{name:h.PRIVATE,displayName:(0,o.translate)("settings","Private"),tooltip:(0,o.translate)("settings","Only visible to people matched via phone number integration through Talk on mobile"),tooltipDisabled:(0,o.translate)("settings","Not available as this property is required for core functionality including file sharing and calendar invitations"),iconClass:"icon-phone"}),v(I,h.LOCAL,{name:h.LOCAL,displayName:(0,o.translate)("settings","Local"),tooltip:(0,o.translate)("settings","Only visible to people on this instance and guests"),iconClass:"icon-password"}),v(I,h.FEDERATED,{name:h.FEDERATED,displayName:(0,o.translate)("settings","Federated"),tooltip:(0,o.translate)("settings","Only synchronize to trusted servers"),tooltipDisabled:(0,o.translate)("settings","Not available as publishing user specific data to the lookup server is not allowed, contact your system administrator if you have any questions"),iconClass:"icon-contacts-dark"}),v(I,h.PUBLISHED,{name:h.PUBLISHED,displayName:(0,o.translate)("settings","Published"),tooltip:(0,o.translate)("settings","Synchronize to trusted servers and the global and public address book"),tooltipDisabled:(0,o.translate)("settings","Not available as publishing user specific data to the lookup server is not allowed, contact your system administrator if you have any questions"),iconClass:"icon-link"}),I)),h.LOCAL,Object.freeze({NOT_VERIFIED:0,VERIFICATION_IN_PROGRESS:1,VERIFIED:2});var R=r(7826),T=r.n(R);function P(e,t,n,r,a,i,s){try{var o=e[i](s),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(r,a)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){P(i,r,a,s,o,"next",e)}function o(e){P(i,r,a,s,o,"throw",e)}s(void 0)}))}}var y=(0,s.loadState)("settings","profileEnabledByDefault",!0),N={name:"ProfileSettings",components:{CheckboxRadioSwitch:T()},data:function(){return{initialProfileEnabledByDefault:y}},methods:{onProfileDefaultChange:function(e){var t=this;return m(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("boolean"!=typeof e){n.next=3;break}return n.next=3,t.updateProfileDefault(e);case 3:case"end":return n.stop()}}),n)})))()},updateProfileDefault:function(e){var n=this;return m(regeneratorRuntime.mark((function r(){var a,i,s;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,L(e);case 3:s=r.sent,n.handleResponse({isEnabled:e,status:null===(a=s.ocs)||void 0===a||null===(i=a.meta)||void 0===i?void 0:i.status}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),n.handleResponse({errorMessage:t("settings","Unable to update profile default setting"),error:r.t0});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},handleResponse:function(e){var t=e.isEnabled,n=e.status,r=e.errorMessage,a=e.error;"ok"===n?this.initialProfileEnabledByDefault=t:((0,u.x2)(r),this.logger.error(r,a))}}},D=(0,r(51900).Z)(N,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section",attrs:{id:"profile-settings"}},[n("h2",{staticClass:"inlineblock"},[e._v("\n\t\t"+e._s(e.t("settings","Profile"))+"\n\t")]),e._v(" "),n("p",{staticClass:"settings-hint"},[e._v("\n\t\t"+e._s(e.t("settings","Enable or disable profile by default for new users."))+"\n\t")]),e._v(" "),n("CheckboxRadioSwitch",{attrs:{type:"switch",checked:e.initialProfileEnabledByDefault},on:{"update:checked":[function(t){e.initialProfileEnabledByDefault=t},e.onProfileDefaultChange]}},[e._v("\n\t\t"+e._s(e.t("settings","Enable"))+"\n\t")])],1)}),[],!1,null,"414249e6",null).exports;r.nc=btoa((0,i.getRequestToken)());var S=(0,s.loadState)("settings","profileEnabledGlobally",!0);a.default.mixin({props:{logger:l},methods:{t:o.translate}}),S&&(new(a.default.extend(D))).$mount(".vue-admin-profile-settings")}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=n,a.amdD=function(){throw new Error("define cannot be used indirect")},a.amdO={},e=[],a.O=function(t,n,r,i){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],i=e[c][2];for(var o=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(o=!1,i<s&&(s=i));if(o){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,r,i]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},a.j=6192,function(){a.b=document.baseURI||self.location.href;var e={6192:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,s=n[0],o=n[1],l=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(l)var c=l(a)}for(t&&t(n);u<s.length;u++)i=s[u],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=a.O(void 0,[7874],(function(){return a(4157)}));i=a.O(i)}();
//# sourceMappingURL=settings-vue-settings-admin-basic-settings.js.map?v=4df34c6c5c61ce148bd3