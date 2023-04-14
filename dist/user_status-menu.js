/*! For license information please see user_status-menu.js.LICENSE.txt */
(()=>{var e,s,a,n={17824:(e,s,a)=>{"use strict";var n=a(20144),r=a(45994),i=a(78595),o=a(79753),u=a(79954),d=a(20296),l=a.n(d),c=a(4820),m=a(84387),p=a(25108);const{profileEnabled:A}=(0,u.j)("user_status","profileEnabled",!1),g={name:"UserStatus",components:{SetStatusModal:()=>Promise.all([a.e(7874),a.e(8299)]).then(a.bind(a,25499))},mixins:[m.Z],props:{inline:{type:Boolean,default:!1}},data:()=>({displayName:(0,r.ts)().displayName,heartbeatInterval:null,isAway:!1,isModalOpen:!1,loadingProfilePage:!1,mouseMoveListener:null,profileEnabled:A,setAwayTimeout:null}),computed:{elementTag(){return this.inline?"div":"li"},profilePageLink(){return this.profileEnabled?(0,o.generateUrl)("/u/{userId}",{userId:(0,r.ts)().uid}):null}},mounted(){(0,i.Ld)("settings:display-name:updated",this.handleDisplayNameUpdate),(0,i.Ld)("settings:profile-enabled:updated",this.handleProfileEnabledUpdate),this.$store.dispatch("loadStatusFromInitialState"),OC.config.session_keepalive&&(this.heartbeatInterval=setInterval(this._backgroundHeartbeat.bind(this),3e5),this.setAwayTimeout=()=>{this.isAway=!0},this.mouseMoveListener=l()((()=>{const t=this.isAway;this.isAway=!1,clearTimeout(this.setAwayTimeout),setTimeout(this.setAwayTimeout,12e4),t&&this._backgroundHeartbeat()}),2e3,!0),window.addEventListener("mousemove",this.mouseMoveListener,{capture:!0,passive:!0}),this._backgroundHeartbeat()),(0,i.Ld)("user_status:status.updated",this.handleUserStatusUpdated)},beforeDestroy(){(0,i.r1)("settings:display-name:updated",this.handleDisplayNameUpdate),(0,i.r1)("settings:profile-enabled:updated",this.handleProfileEnabledUpdate),window.removeEventListener("mouseMove",this.mouseMoveListener),clearInterval(this.heartbeatInterval),(0,i.r1)("user_status:status.updated",this.handleUserStatusUpdated)},methods:{handleDisplayNameUpdate(t){this.displayName=t},handleProfileEnabledUpdate(t){this.profileEnabled=t},loadProfilePage(){this.profileEnabled&&(this.loadingProfilePage=!0)},openModal(){this.isModalOpen=!0},closeModal(){this.isModalOpen=!1},async _backgroundHeartbeat(){try{const t=await(async t=>{const e=(0,o.generateOcsUrl)("apps/user_status/api/v1/heartbeat?format=json");return(await c.default.put(e,{status:t?"away":"online"})).data.ocs.data})(this.isAway);null!=t&&t.userId?this.$store.dispatch("setStatusFromHeartbeat",t):await this.$store.dispatch("reFetchStatusFromServer")}catch(e){var t;p.debug("Failed sending heartbeat, got: "+(null===(t=e.response)||void 0===t?void 0:t.status))}},handleUserStatusUpdated(t){OC.getCurrentUser().uid===t.userId&&this.$store.dispatch("setStatusFromObject",{status:t.status,icon:t.icon,message:t.message})}}},h=g;var v=a(93379),f=a.n(v),b=a(7795),j=a.n(b),y=a(90569),C=a.n(y),_=a(3565),w=a.n(_),k=a(19216),S=a.n(k),x=a(44589),I=a.n(x),U=a(90292),O={};O.styleTagTransform=I(),O.setAttributes=w(),O.insert=C().bind(null,"head"),O.domAPI=j(),O.insertStyleElement=S(),f()(U.Z,O),U.Z&&U.Z.locals&&U.Z.locals;const P=(0,a(51900).Z)(h,(function(){var t=this,e=t._self._c;return e(t.elementTag,{tag:"component"},[e("div",{staticClass:"user-status-menu-item"},[t.inline?t._e():e("a",{staticClass:"user-status-menu-item__header",attrs:{href:t.profilePageLink},on:{click:function(e){return e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.loadProfilePage.apply(null,arguments)}}},[e("div",{staticClass:"user-status-menu-item__header-content"},[e("div",{staticClass:"user-status-menu-item__header-content-displayname"},[t._v(t._s(t.displayName))]),t._v(" "),t.loadingProfilePage?e("div",{staticClass:"icon-loading-small"}):e("div",{staticClass:"user-status-menu-item__header-content-placeholder"})]),t._v(" "),t.profileEnabled?e("div",[t._v("\n\t\t\t\t"+t._s(t.t("user_status","View profile"))+"\n\t\t\t")]):t._e()]),t._v(" "),e(t.inline?"button":"a",{tag:"toggle",staticClass:"user-status-menu-item__toggle",class:{"user-status-menu-item__toggle--inline":t.inline},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.openModal.apply(null,arguments)}}},[e("span",{staticClass:"user-status-menu-item__toggle-icon",class:t.statusIcon,attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t"+t._s(t.visibleMessage)+"\n\t\t")])],1),t._v(" "),t.isModalOpen?e("SetStatusModal",{on:{close:t.closeModal}}):t._e()],1)}),[],!1,null,"59a5bedd",null).exports;var D=a(20629);const M={state:{predefinedStatuses:[]},mutations:{addPredefinedStatus(t,e){t.predefinedStatuses.push(e)}},getters:{},actions:{async loadAllPredefinedStatuses(t){let{state:e,commit:s}=t;if(e.predefinedStatuses.length>0)return;const a=await(async()=>{const t=(0,o.generateOcsUrl)("apps/user_status/api/v1/predefined_statuses?format=json");return(await c.default.get(t)).data.ocs.data})();for(const t of a)s("addPredefinedStatus",t)}}};var E=a(64039),B=a(80351),T=a.n(B);const z=t=>{if(null===t)return null;const e=(0,E.n)();if("period"===t.type)return e.setSeconds(e.getSeconds()+t.time),Math.floor(e.getTime()/1e3);if("end-of"===t.type)switch(t.time){case"day":case"week":return Number(T()(e).endOf(t.time).format("X"))}return"_time"===t.type?t.time:null},F={state:{status:null,statusIsUserDefined:null,message:null,icon:null,clearAt:null,messageIsPredefined:null,messageId:null},mutations:{setStatus(t,e){let{statusType:s}=e;t.status=s,t.statusIsUserDefined=!0},setPredefinedMessage(t,e){let{messageId:s,clearAt:a,message:n,icon:r}=e;t.messageId=s,t.messageIsPredefined=!0,t.message=n,t.icon=r,t.clearAt=a},setCustomMessage(t,e){let{message:s,icon:a,clearAt:n}=e;t.messageId=null,t.messageIsPredefined=!1,t.message=s,t.icon=a,t.clearAt=n},clearMessage(t){t.messageId=null,t.messageIsPredefined=!1,t.message=null,t.icon=null,t.clearAt=null},loadStatusFromServer(t,e){let{status:s,statusIsUserDefined:a,message:n,icon:r,clearAt:i,messageIsPredefined:o,messageId:u}=e;t.status=s,t.message=n,t.icon=r,void 0!==a&&(t.statusIsUserDefined=a),void 0!==i&&(t.clearAt=i),void 0!==o&&(t.messageIsPredefined=o),void 0!==u&&(t.messageId=u)}},getters:{},actions:{async setStatus(t,e){var s;let{commit:a,state:n}=t,{statusType:u}=e;await(async t=>{const e=(0,o.generateOcsUrl)("apps/user_status/api/v1/user_status/status");await c.default.put(e,{statusType:t})})(u),a("setStatus",{statusType:u}),(0,i.j8)("user_status:status.updated",{status:n.status,message:n.message,icon:n.icon,clearAt:n.clearAt,userId:null===(s=(0,r.ts)())||void 0===s?void 0:s.uid})},async setStatusFromObject(t,e){let{commit:s,state:a}=t;s("loadStatusFromServer",e)},async setPredefinedMessage(t,e){var s;let{commit:a,rootState:n,state:u}=t,{messageId:d,clearAt:l}=e;const m=z(l);await async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const s=(0,o.generateOcsUrl)("apps/user_status/api/v1/user_status/message/predefined?format=json");await c.default.put(s,{messageId:t,clearAt:e})}(d,m);const p=n.predefinedStatuses.predefinedStatuses.find((t=>t.id===d)),{message:A,icon:g}=p;a("setPredefinedMessage",{messageId:d,clearAt:m,message:A,icon:g}),(0,i.j8)("user_status:status.updated",{status:u.status,message:u.message,icon:u.icon,clearAt:u.clearAt,userId:null===(s=(0,r.ts)())||void 0===s?void 0:s.uid})},async setCustomMessage(t,e){var s;let{commit:a,state:n}=t,{message:u,icon:d,clearAt:l}=e;const m=z(l);await async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const a=(0,o.generateOcsUrl)("apps/user_status/api/v1/user_status/message/custom?format=json");await c.default.put(a,{message:t,statusIcon:e,clearAt:s})}(u,d,m),a("setCustomMessage",{message:u,icon:d,clearAt:m}),(0,i.j8)("user_status:status.updated",{status:n.status,message:n.message,icon:n.icon,clearAt:n.clearAt,userId:null===(s=(0,r.ts)())||void 0===s?void 0:s.uid})},async clearMessage(t){var e;let{commit:s,state:a}=t;await(async()=>{const t=(0,o.generateOcsUrl)("apps/user_status/api/v1/user_status/message?format=json");await c.default.delete(t)})(),s("clearMessage"),(0,i.j8)("user_status:status.updated",{status:a.status,message:a.message,icon:a.icon,clearAt:a.clearAt,userId:null===(e=(0,r.ts)())||void 0===e?void 0:e.uid})},async reFetchStatusFromServer(t){let{commit:e}=t;e("loadStatusFromServer",await(async()=>{const t=(0,o.generateOcsUrl)("apps/user_status/api/v1/user_status");return(await c.default.get(t)).data.ocs.data})())},async setStatusFromHeartbeat(t,e){let{commit:s}=t;s("loadStatusFromServer",e)},loadStatusFromInitialState(t){let{commit:e}=t;e("loadStatusFromServer",(0,u.j)("user_status","status"))}}},L={state:{status:null,statusIsUserDefined:null,message:null,icon:null,clearAt:null,messageIsPredefined:null,messageId:null},mutations:{loadBackupStatusFromServer(t,e){let{status:s,statusIsUserDefined:a,message:n,icon:r,clearAt:i,messageIsPredefined:o,messageId:u}=e;t.status=s,t.message=n,t.icon=r,void 0!==a&&(t.statusIsUserDefined=a),void 0!==i&&(t.clearAt=i),void 0!==o&&(t.messageIsPredefined=o),void 0!==u&&(t.messageId=u)}},getters:{},actions:{async fetchBackupFromServer(t){var e;let{commit:s}=t;s("loadBackupStatusFromServer",await(async t=>{const e=(0,o.generateOcsUrl)("apps/user_status/api/v1/statuses/{userId}",{userId:"_"+t});return(await c.default.get(e)).data.ocs.data})(null===(e=(0,r.ts)())||void 0===e?void 0:e.uid))},async revertBackupFromServer(t,e){let{commit:s}=t,{messageId:a}=e;const n=await(async t=>{const e=(0,o.generateOcsUrl)("apps/user_status/api/v1/user_status/revert/{messageId}",{messageId:t});return(await c.default.delete(e)).data.ocs.data})(a);var u;n&&(s("loadBackupStatusFromServer",{}),s("loadStatusFromServer",n),(0,i.j8)("user_status:status.updated",{status:n.status,message:n.message,icon:n.icon,clearAt:n.clearAt,userId:null===(u=(0,r.ts)())||void 0===u?void 0:u.uid}))}}};n.default.use(D.ZP);const $=new D.yh({modules:{predefinedStatuses:M,userStatus:F,userBackupStatus:L},strict:!0});a.nc=btoa((0,r.IH)()),n.default.prototype.t=t,n.default.prototype.$t=t;const N=()=>{const t=document.getElementById("user_status-menu-entry");new n.default({el:t,render:t=>t(P),store:$})};document.getElementById("user_status-menu-entry")?N():(0,i.Ld)("core:user-menu:mounted",N),document.addEventListener("DOMContentLoaded",(function(){OCA.Dashboard&&OCA.Dashboard.registerStatus("status",(t=>new(n.default.extend(P))({propsData:{inline:!0},store:$}).$mount(t)))}))},84387:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});var a=s(20629),n=s(64024),r=s(25108);const i={computed:{...(0,a.rn)({statusType:t=>t.userStatus.status,statusIsUserDefined:t=>t.userStatus.statusIsUserDefined,customIcon:t=>t.userStatus.icon,customMessage:t=>t.userStatus.message}),visibleMessage(){if(this.customIcon&&this.customMessage)return"".concat(this.customIcon," ").concat(this.customMessage);if(this.customMessage)return this.customMessage;if(this.statusIsUserDefined)switch(this.statusType){case"online":return this.$t("user_status","Online");case"away":return this.$t("user_status","Away");case"dnd":return this.$t("user_status","Do not disturb");case"invisible":return this.$t("user_status","Invisible");case"offline":return this.$t("user_status","Offline")}return this.$t("user_status","Set status")},statusIcon(){switch(this.statusType){case"online":return"icon-user-status-online";case"away":return"icon-user-status-away";case"dnd":return"icon-user-status-dnd";case"invisible":case"offline":return"icon-user-status-invisible"}return""}},methods:{async changeStatus(t){try{await this.$store.dispatch("setStatus",{statusType:t})}catch(t){(0,n.x2)(this.$t("user_status","There was an error saving the new status")),r.debug(t)}}}}},64039:(t,e,s)=>{"use strict";s.d(e,{n:()=>a});const a=()=>new Date},90292:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var a=s(87537),n=s.n(a),r=s(23645),i=s.n(r)()(n());i.push([t.id,".user-status-menu-item__header[data-v-59a5bedd]{display:flex !important;flex-direction:column !important;width:auto !important;height:66px !important;padding:10px 12px 5px 12px !important;align-items:flex-start !important;color:var(--color-main-text) !important}.user-status-menu-item__header[data-v-59a5bedd]:not([href]){height:var(--header-menu-item-height) !important;color:var(--color-text-maxcontrast) !important;cursor:default !important}.user-status-menu-item__header:not([href]) *[data-v-59a5bedd]{cursor:default !important}.user-status-menu-item__header[data-v-59a5bedd]:not([href]):hover{background-color:rgba(0,0,0,0) !important}.user-status-menu-item__header-content[data-v-59a5bedd]{display:inline-flex !important;font-weight:bold !important;gap:0 10px !important;width:auto}.user-status-menu-item__header-content-displayname[data-v-59a5bedd]{width:auto}.user-status-menu-item__header-content-placeholder[data-v-59a5bedd]{width:16px !important;height:24px !important;margin-right:10px !important;visibility:hidden !important}.user-status-menu-item__header span[data-v-59a5bedd]{color:var(--color-text-maxcontrast) !important}.user-status-menu-item__toggle-icon[data-v-59a5bedd]{width:16px;height:16px;margin-right:10px;opacity:1 !important;background-size:16px;vertical-align:middle !important}.user-status-menu-item__toggle--inline[data-v-59a5bedd]{width:auto;min-width:44px;height:44px;margin:0;border:0;border-radius:var(--border-radius-pill);background-color:var(--color-main-background-blur);font-size:inherit;font-weight:normal;-webkit-backdrop-filter:var(--background-blur);backdrop-filter:var(--background-blur)}.user-status-menu-item__toggle--inline[data-v-59a5bedd]:active,.user-status-menu-item__toggle--inline[data-v-59a5bedd]:hover,.user-status-menu-item__toggle--inline[data-v-59a5bedd]:focus{background-color:var(--color-background-hover)}.user-status-menu-item__toggle--inline[data-v-59a5bedd]:focus{box-shadow:0 0 0 2px var(--color-main-text) !important}li[data-v-59a5bedd]{list-style-type:none}","",{version:3,sources:["webpack://./apps/user_status/src/UserStatus.vue"],names:[],mappings:"AAEC,gDACC,uBAAA,CACA,gCAAA,CACA,qBAAA,CACA,sBAAA,CACA,qCAAA,CACA,iCAAA,CACA,uCAAA,CAEA,4DACC,gDAAA,CACA,8CAAA,CACA,yBAAA,CAEA,8DACC,yBAAA,CAGD,kEACC,yCAAA,CAIF,wDACC,8BAAA,CACA,2BAAA,CACA,qBAAA,CACA,UAAA,CAEA,oEACC,UAAA,CAGD,oEACC,qBAAA,CACA,sBAAA,CACA,4BAAA,CACA,4BAAA,CAIF,qDACC,8CAAA,CAKD,qDACC,UAAA,CACA,WAAA,CACA,iBAAA,CACA,oBAAA,CACA,oBAAA,CACA,gCAAA,CAID,wDACC,UAAA,CACA,cAAA,CACA,WAAA,CACA,QAAA,CACA,QAAA,CACA,uCAAA,CACA,kDAAA,CACA,iBAAA,CACA,kBAAA,CAEA,8CAAA,CACA,sCAAA,CAEA,2LAGC,8CAAA,CAED,8DACC,sDAAA,CAMJ,oBACC,oBAAA",sourcesContent:["\n.user-status-menu-item {\n\t&__header {\n\t\tdisplay: flex !important;\n\t\tflex-direction: column !important;\n\t\twidth: auto !important;\n\t\theight: 44px * 1.5 !important;\n\t\tpadding: 10px 12px 5px 12px !important;\n\t\talign-items: flex-start !important;\n\t\tcolor: var(--color-main-text) !important;\n\n\t\t&:not([href]) {\n\t\t\theight: var(--header-menu-item-height) !important;\n\t\t\tcolor: var(--color-text-maxcontrast) !important;\n\t\t\tcursor: default !important;\n\n\t\t\t& * {\n\t\t\t\tcursor: default !important;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\tbackground-color: transparent !important;\n\t\t\t}\n\t\t}\n\n\t\t&-content {\n\t\t\tdisplay: inline-flex !important;\n\t\t\tfont-weight: bold !important;\n\t\t\tgap: 0 10px !important;\n\t\t\twidth: auto;\n\n\t\t\t&-displayname {\n\t\t\t\twidth: auto;\n\t\t\t}\n\n\t\t\t&-placeholder {\n\t\t\t\twidth: 16px !important;\n\t\t\t\theight: 24px !important;\n\t\t\t\tmargin-right: 10px !important;\n\t\t\t\tvisibility: hidden !important;\n\t\t\t}\n\t\t}\n\n\t\tspan {\n\t\t\tcolor: var(--color-text-maxcontrast) !important;\n\t\t}\n\t}\n\n\t&__toggle {\n\t\t&-icon {\n\t\t\twidth: 16px;\n\t\t\theight: 16px;\n\t\t\tmargin-right: 10px;\n\t\t\topacity: 1 !important;\n\t\t\tbackground-size: 16px;\n\t\t\tvertical-align: middle !important;\n\t\t}\n\n\t\t// In dashboard\n\t\t&--inline {\n\t\t\twidth: auto;\n\t\t\tmin-width: 44px;\n\t\t\theight: 44px;\n\t\t\tmargin: 0;\n\t\t\tborder: 0;\n\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\tbackground-color: var(--color-main-background-blur);\n\t\t\tfont-size: inherit;\n\t\t\tfont-weight: normal;\n\n\t\t\t-webkit-backdrop-filter: var(--background-blur);\n\t\t\tbackdrop-filter: var(--background-blur);\n\n\t\t\t&:active,\n\t\t\t&:hover,\n\t\t\t&:focus {\n\t\t\t\tbackground-color: var(--color-background-hover);\n\t\t\t}\n\t\t\t&:focus {\n\t\t\t\tbox-shadow: 0 0 0 2px var(--color-main-text) !important;\n\t\t\t}\n\t\t}\n\t}\n}\n\nli {\n\tlist-style-type: none;\n}\n\n"],sourceRoot:""}]);const o=i},46700:(t,e,s)=>{var a={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=46700}},r={};function i(t){var e=r[t];if(void 0!==e)return e.exports;var s=r[t]={id:t,loaded:!1,exports:{}};return n[t].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.m=n,e=[],i.O=(t,s,a,n)=>{if(!s){var r=1/0;for(l=0;l<e.length;l++){s=e[l][0],a=e[l][1],n=e[l][2];for(var o=!0,u=0;u<s.length;u++)(!1&n||r>=n)&&Object.keys(i.O).every((t=>i.O[t](s[u])))?s.splice(u--,1):(o=!1,n<r&&(r=n));if(o){e.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[s,a,n]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.f={},i.e=t=>Promise.all(Object.keys(i.f).reduce(((e,s)=>(i.f[s](t,e),e)),[])),i.u=t=>"user-status-modal-"+t+".js?v=01ad3c8bef6e794d3687",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s={},a="nextcloud:",i.l=(t,e,n,r)=>{if(s[t])s[t].push(e);else{var o,u;if(void 0!==n)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var c=d[l];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==a+n){o=c;break}}o||(u=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",a+n),o.src=t),s[t]=[e];var m=(e,a)=>{o.onerror=o.onload=null,clearTimeout(p);var n=s[t];if(delete s[t],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((t=>t(a))),e)return e(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),u&&document.head.appendChild(o)}},i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),i.j=2613,(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{i.b=document.baseURI||self.location.href;var t={2613:0};i.f.j=(e,s)=>{var a=i.o(t,e)?t[e]:void 0;if(0!==a)if(a)s.push(a[2]);else{var n=new Promise(((s,n)=>a=t[e]=[s,n]));s.push(a[2]=n);var r=i.p+i.u(e),o=new Error;i.l(r,(s=>{if(i.o(t,e)&&(0!==(a=t[e])&&(t[e]=void 0),a)){var n=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,a[1](o)}}),"chunk-"+e,e)}},i.O.j=e=>0===t[e];var e=(e,s)=>{var a,n,r=s[0],o=s[1],u=s[2],d=0;if(r.some((e=>0!==t[e]))){for(a in o)i.o(o,a)&&(i.m[a]=o[a]);if(u)var l=u(i)}for(e&&e(s);d<r.length;d++)n=r[d],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(l)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})(),i.nc=void 0;var o=i.O(void 0,[7874],(()=>i(17824)));o=i.O(o)})();
//# sourceMappingURL=user_status-menu.js.map?v=71aa6d87989b58ea0637