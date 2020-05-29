(this.webpackJsonptelegram_react=this.webpackJsonptelegram_react||[]).push([[8],{619:function(e,t,n){},621:function(e,t,n){},622:function(e,t,n){},623:function(e,t,n){},624:function(e,t,n){},648:function(e,t,n){"use strict";n.r(t);var a=n(11),i=n.n(a),r=n(18),s=n(5),o=n(6),c=n(8),l=n(7),u=n(9),d=n(0),f=n.n(d),p=n(22),h=n.n(p),k=n(62),m=n(183),S=n.n(m),v=n(26),b=n(240),g=n(362),w=n(448),j=n(625),E=n(436),O=n(38),y=n(36),C=n(620),P=n.n(C),M=n(154),R=n(4),T=(n(619),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){var a=this.props,i=a.info;return a.theme!==e.theme||i!==e.info}},{key:"render",value:function(){var e=this.props,t=e.info,n=e.onSelect,a=e.onMouseDown,i=e.onMouseEnter,r=e.onDeleteClick;if(!t)return null;var s=t.title,o=t.stickers.map(function(e,t){return f.a.createElement("div",{className:"sticker-set-item",key:e.sticker.id,"data-sticker-id":e.sticker.id,onClick:function(){return n(e)},onMouseEnter:i,onMouseDown:a,style:{width:R.mb,height:R.mb}},f.a.createElement(M.b,{key:e.sticker.id,sticker:e,autoplay:!1,blur:!1,displaySize:R.mb-6,preview:!0,source:M.a.PICKER}))});return f.a.createElement("div",{className:"sticker-set"},f.a.createElement("div",{className:"sticker-set-title"},f.a.createElement("div",{className:"sticker-set-title-wrapper"},f.a.createElement("span",null,s)),r&&f.a.createElement(g.a,{"aria-label":"delete",classes:{root:"sticker-set-icon-root"},size:"small",onClick:r},f.a.createElement(P.a,{fontSize:"inherit"}))),f.a.createElement("div",{className:"sticker-set-content"},o))}}]),t}(f.a.Component)),U=function(){function e(t){var n=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(s.a)(this,e),this.start=function(){n.stopped=!1,n.id=requestAnimationFrame(n.startAnim)},this.startAnim=function(e){var t=n.start,a=n.duration;n.start=e,n.end=t+a,n.draw(e)},this.draw=function(t){var a=n.stopped,i=n.duration,r=n.start,s=n.options;if(t-r>i&&s.every(function(e){return e.to===e.last})&&(n.stopped=!0),!a){var o=Math.min(t-r,i),c=0===i?1:o/i,l=e.outSine(c);s.forEach(function(e){var t=e.from,n=e.to,a=e.func;e.last=t+(n-t)*l,a(e.last)}),n.id=requestAnimationFrame(n.draw)}},this.stop=function(){n.stopped=!0,cancelAnimationFrame(n.id)},this.options=a,this.duration=t}return Object(o.a)(e,null,[{key:"outSine",value:function(e){return Math.sin(e*Math.PI/2)}}]),e}(),x=n(90),I=(n(621),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).onClientUpdateStickerSetPosition=function(e){var t=e.position;n.setState({position:t})},n.scrollToPosition=function(){var e=n.state.position,t=Object(O.a)(n),a=t.animator,i=t.anchorRef,r=t.scrollRef.current,s=i.current,o=y.findDOMNode(s),c=r.scrollLeft,l=48*e-147,u=Number(o.style.left.replace("px","")),d=48*e;a&&a.stop(),n.animator=new U(0,[{from:c,to:l,func:function(e){return r.scrollLeft=e}},{from:Math.abs(d-u)>338?d-338*Math.sign(d-u):u,to:d,func:function(e){return o.style.left=e+"px"}}]),setTimeout(function(){n.animator&&n.animator.start()},0)},n.handleWheel=function(e){var t=Object(O.a)(n).scrollRef;0===e.deltaX&&(t.current.scrollLeft+=e.deltaY)},n.handleSelect=function(e){var t=n.props,a=t.stickers;(0,t.onSelect)(a.indexOf(e))},n.scrollRef=f.a.createRef(),n.anchorRef=f.a.createRef(),n.state={position:0},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){x.a.on("clientUpdateStickerSetPosition",this.onClientUpdateStickerSetPosition)}},{key:"componentWillUnmount",value:function(){x.a.off("clientUpdateStickerSetPosition",this.onClientUpdateStickerSetPosition)}},{key:"componentDidUpdate",value:function(e,t,n){t.position!==this.state.position&&this.scrollToPosition()}},{key:"render",value:function(){var e=this,t=this.props.stickers.map(function(t){return f.a.createElement(M.b,{key:t.sticker.id,className:"stickers-picker-header-sticker",style:{width:36,height:36},sticker:t,play:!1,autoplay:!1,blur:!1,displaySize:32,preview:!0,source:M.a.PICKER_HEADER,openMedia:function(){return e.handleSelect(t)}})});return f.a.createElement("div",{className:"stickers-picker-header"},f.a.createElement("div",{ref:this.scrollRef,className:"stickers-picker-header-scroll",onWheel:this.handleWheel},f.a.createElement("div",{className:"stickers-picker-header-items"},t),f.a.createElement("div",{ref:this.anchorRef,className:"stickers-picker-header-anchor"})))}}]),t}(f.a.Component)),D=n(16),N=n(24),A=n(44),_=n(1),L=n(2),V=(n(622),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).onUpdateInstalledStickerSets=function(e){var t=e.is_masks;e.sticker_set_ids;t&&n.filterSets()},n.onUpdateRecentStickers=function(e){n.reloadRecentContent()},n.scrollTop=function(){n.scrollRef.current.scrollTop=0},n.loadContent=function(){var e=Object(r.a)(i.a.mark(function e(t,a,r){var s,o,c,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return e.next=3,L.a.send({"@type":"getRecentStickers",is_attached:!1});case 3:t=e.sent;case 4:if(r){e.next=13;break}return e.next=7,L.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 7:return s=e.sent,o=[],s.sets.forEach(function(e){o.push(L.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=12,Promise.all(o);case 12:r=e.sent;case 13:c=r.slice(0,5),l=r.reduce(function(e,t){return t.stickers.length>0&&e.push(t.stickers[0]),e},[]),n.setState({recent:t,stickerSets:a,sets:c,fullSets:r,headerStickers:l}),n.setsLength=c.length;case 17:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}(),n.loadInViewContentOnScroll=function(){n.loadInViewContent()},n.loadInViewContentOnScrollEnd=function(){n.loadInViewContent(400)},n.loadInViewContent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=n.scrollRef.current,a=n.state.sets,i=[];a.forEach(function(a){var r=n.itemsMap.get(a.id),s=y.findDOMNode(r);if(s){var o=t.scrollTop-e,c=t.scrollTop+t.offsetHeight+e,l=s.offsetTop,u=s.offsetTop+s.clientHeight;l>=o&&s.offsetTop<=c?i.push(a):u>=o&&u<=c?i.push(a):l<=o&&u>=c&&i.push(a)}}),i.forEach(function(e){var t=_.a.getStore();n.loadedSets.has(e.id)||(n.loadedSets.set(e.id,e.id),Object(N.E)(t,e))})},n.updatePosition=function(){var e=n.scrollRef.current,t=n.state.sets,a=e.scrollHeight,i=0,r=0;t.forEach(function(t,s){var o=n.itemsMap.get(t.id);if(o){var c=y.findDOMNode(o);if(c){r=0===s?c.offsetTop:r;var l=c.offsetTop-r;if(c&&l<=e.scrollTop){var u=Math.abs(e.scrollTop-l);u<=a&&(a=u,i=s)}}}}),L.a.clientUpdate({"@type":"clientUpdateStickerSetPosition",position:i})},n.handleScroll=Object(r.a)(i.a.mark(function e(){var t,a,r,s,o,c,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.loadInViewContentOnScrollEnd(),n.updatePosition(),t=n.scrollRef.current,!n.loadingChunk){e.next=5;break}return e.abrupt("return");case 5:if(a=!1,t.scrollTop+t.offsetHeight>=t.scrollHeight-400&&(a=!0),a){e.next=9;break}return e.abrupt("return",!1);case 9:if(r=n.state,s=r.sets,(o=r.stickerSets).sets.length!==s.length){e.next=12;break}return e.abrupt("return");case 12:return n.loadingChunk=!0,c=[],o.sets.slice(n.setsLength,n.setsLength+5).forEach(function(e){c.push(L.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=17,Promise.all(c).finally(function(){n.loadingChunk=!1});case 17:l=e.sent,n.setsLength+=l.length,n.setState({sets:s.concat(l)});case 20:case"end":return e.stop()}},e)})),n.loadPreviewContent=function(e){var t=n.state,a=t.recent,i=t.sets,r=Object(A.j)([a].concat(i)).find(function(t){return t.sticker.id===e});if(r){var s=_.a.getStore();Object(N.D)(s,r,null);Object(A.i)(r,i,5).forEach(function(e){Object(N.D)(s,e,null)})}},n.handleMouseEnter=function(e){var t=Number(e.currentTarget.dataset.stickerId);if(t&&n.mouseDown){n.mouseDownStickerId!==t&&(n.mouseDownStickerId=null),n.setState({previewStickerId:t}),n.loadPreviewContent(t);var a=n.props.onPreview,i=n.state,r=i.recent,s=i.sets;a(Object(A.j)([r].concat(s)).find(function(e){return e.sticker.id===t}))}},n.handleMouseDown=function(e){var t=Number(e.currentTarget.dataset.stickerId);if(t){n.mouseDownStickerId=t;var a=Date.now();return n.setState({previewStickerId:t,timestamp:a,showPreview:!1,cancelSend:!1}),setTimeout(function(){n.state.timestamp===a&&n.setState({showPreview:!0,cancelSend:!0},function(){var e=n.props.onPreview,a=n.state,i=a.recent,r=a.sets;e(Object(A.j)([i].concat(r)).find(function(e){return e.sticker.id===t}))})},500),n.loadPreviewContent(t),n.mouseDown=!0,document.addEventListener("mouseup",n.handleMouseUp),e.preventDefault(),e.stopPropagation(),!1}},n.handleMouseUp=function(){n.setState({previewStickerId:0,timestamp:0,showPreview:!1}),(0,n.props.onPreview)(null),n.mouseDown=!1,document.removeEventListener("mouseup",n.handleMouseUp)},n.handleStickerSelect=function(e){var t=n.props.onSelect;n.state.cancelSend||t(e)},n.handleSelectSet=function(){var e=Object(r.a)(i.a.mark(function e(t){var a,r,s,o,c,l,u,d,f,p;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state,r=a.sets,s=a.stickerSets,o=Object(O.a)(n),c=o.scrollRef,!(t<r.length)){e.next=7;break}(l=n.itemsMap.get(r[t].id))&&(u=y.findDOMNode(l))&&(c.current.scrollTop=u.offsetTop),e.next=21;break;case 7:if(!(t<s.sets.length)){e.next=21;break}if(!n.loadingChunk){e.next=10;break}return e.abrupt("return");case 10:if(s.sets.length!==r.length){e.next=12;break}return e.abrupt("return");case 12:return n.loadingChunk=!0,d=[],s.sets.slice(n.setsLength,t+1).forEach(function(e){d.push(L.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=17,Promise.all(d).finally(function(){return n.loadingChunk=!1});case 17:f=e.sent,n.setsLength+=f.length,p=r.concat(f),n.setState({sets:p},function(){t<p.length&&n.handleSelectSet(t)});case 21:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.handleDeleteRecent=function(){L.a.send({"@type":"clearRecentStickers",is_attached:!1})},n.handleDeleteStickerSet=function(e){L.a.send({"@type":"changeStickerSet",set_id:e,is_installed:!1})},n.scrollRef=f.a.createRef(),n.itemsMap=new Map,n.loadedSets=new Map,n.state={recent:null,stickerSets:null,sets:[],headerStickers:[],position:0},n.loadInViewContentOnScrollEnd=Object(D.d)(n.loadInViewContentOnScrollEnd,100),n.loadInViewContentOnScroll=Object(D.z)(n.loadInViewContentOnScroll,2e3),n.updatePosition=Object(D.z)(n.updatePosition,250),n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){var a=this.state,i=a.position,r=a.recent,s=a.stickerSets,o=a.sets,c=a.showPreview;return t.recent!==r||(t.stickerSets!==s||(t.sets!==o||(t.showPreview!==c||t.position!==i)))}},{key:"componentDidMount",value:function(){x.a.on("updateInstalledStickerSets",this.onUpdateInstalledStickerSets),x.a.on("updateRecentStickers",this.onUpdateRecentStickers)}},{key:"componentWillUnmount",value:function(){x.a.off("updateInstalledStickerSets",this.onUpdateInstalledStickerSets),x.a.off("updateRecentStickers",this.onUpdateRecentStickers)}},{key:"filterSets",value:function(e){var t=this.state;t.sets,t.stickerSets}},{key:"reloadRecentContent",value:function(){var e=Object(r.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.send({"@type":"getRecentStickers",is_attached:!1});case 2:t=e.sent,this.setState({recent:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.t,n=this.state,a=n.recent,i=(n.stickerSets,n.sets),r=n.headerStickers;this.itemsMap.clear();var s=i.map(function(t){return f.a.createElement(T,{key:t.id,ref:function(n){return e.itemsMap.set(t.id,n)},info:t,onSelect:e.handleStickerSelect,onMouseDown:e.handleMouseDown,onMouseEnter:e.handleMouseEnter})}),o=a&&a.stickers.length>0?{stickers:a.stickers,title:t("RecentStickers")}:null;return f.a.createElement("div",{className:"stickers-picker"},f.a.createElement(I,{onSelect:this.handleSelectSet,stickers:r}),f.a.createElement("div",{ref:this.scrollRef,className:"stickers-picker-scroll",onScroll:this.handleScroll},Boolean(o)&&f.a.createElement(T,{info:o,onSelect:this.handleStickerSelect,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onDeleteClick:this.handleDeleteRecent}),s))}}]),t}(f.a.Component)),H=Object(k.a)(Object(k.d)(),Object(v.d)(),Object(k.c)())(V),F=n(128),z=n(158),G=(n(623),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).handleScroll=function(e){var t=n.scrollRef.current,a=t.scrollTop,i=a<=10,r=t.scrollHeight-(a+t.offsetHeight)<=10,s=Math.abs(a-n.prevScrollTop)>50&&!i&&!r;n.prevScrollTop=a,s||n.loadInViewContent()},n.scrollTop=function(){n.scrollRef.current.scrollTop=0},n.loadInViewContentOnScroll=function(){n.loadInViewContent()},n.loadInViewContent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=n.scrollRef.current,a=z.a.savedAnimations,i=new Map,r=[];a.animations.forEach(function(a,s){var o=n.itemsMap.get("".concat(s,"_").concat(a.animation.id)),c=y.findDOMNode(o);if(c){var l=t.scrollTop-e,u=t.scrollTop+t.offsetHeight+e,d=c.offsetTop,f=c.offsetTop+c.clientHeight;d>=l&&c.offsetTop<=u?(i.set(a,a),r.push(s)):f>=l&&f<=u?(i.set(a,a),r.push(s)):d<=l&&f>=u&&(i.set(a,a),r.push(s))}}),L.a.clientUpdate({"@type":"clientUpdateAnimationsInView",animations:i})},n.scrollRef=f.a.createRef(),n.itemsMap=new Map,n.loadInViewContentOnScroll=Object(D.z)(n.loadInViewContentOnScroll,250),n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"start",value:function(){this.loadInViewContent()}},{key:"stop",value:function(){L.a.clientUpdate({"@type":"clientUpdateAnimationsInView",animations:new Map})}},{key:"loadContent",value:function(){var e=Object(r.a)(i.a.mark(function e(){var t,n,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=z.a.savedAnimations){e.next=7;break}return e.next=4,L.a.send({"@type":"getSavedAnimations"});case 4:n=e.sent,z.a.savedAnimations=n,t=n;case 7:a=_.a.getStore(),r=t.animations.slice(0,1e3),console.log("[sp] loadAnimationThumbnailContent",r),r.forEach(function(e){Object(N.s)(a,e,null),Object(N.r)(a,e,null,!1)});case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,n=(t.t,t.onSelect),a=z.a.savedAnimations;if(!a)return null;this.itemsMap.clear();var i=a.animations.map(function(t,a){return f.a.createElement(F.a,{key:"".concat(a,"_").concat(t.animation.id),ref:function(n){return e.itemsMap.set("".concat(a,"_").concat(t.animation.id),n)},animation:t,openMedia:function(){return n(t)},picker:!0,style:{width:105,height:105,margin:2,borderRadius:0}})});return f.a.createElement("div",{className:"gifs-picker"},f.a.createElement("div",{ref:this.scrollRef,className:"gifs-picker-scroll",onScroll:this.handleScroll},i))}}]),t}(f.a.Component)),B=Object(k.a)(Object(k.d)(),Object(v.d)(),Object(k.c)())(G),W=n(17),q=n(96),J=(n(624),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).onClientUpdateChange=function(e){n.picker=null},n.handleButtonMouseEnter=function(e){n.buttonEnter=!0,setTimeout(function(){n.buttonEnter&&(n.updatePicker(!0),n.loadStickerSets(),n.loadSavedAnimations())},R.e)},n.loadSavedAnimations=Object(r.a)(i.a.mark(function e(){var t,n,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=z.a.savedAnimations){e.next=7;break}return e.next=4,L.a.send({"@type":"getSavedAnimations"});case 4:n=e.sent,z.a.savedAnimations=n,t=n;case 7:a=_.a.getStore(),r=t.animations.slice(0,1e3),console.log("[sp] loadAnimationThumbnailContent",r),r.forEach(function(e){Object(N.s)(a,e)});case 11:case"end":return e.stop()}},e)})),n.loadStickerSets=Object(r.a)(i.a.mark(function e(){var t,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.sets){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,L.a.send({"@type":"getRecentStickers",is_attached:!1});case 4:return n.recent=e.sent,e.next=7,L.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 7:return n.stickerSets=e.sent,t=[],n.stickerSets.sets.forEach(function(e){t.push(L.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=12,Promise.all(t);case 12:n.sets=e.sent,a=n.stickersPickerRef.current,r=_.a.getStore(),Object(N.C)(r,n.recent),n.sets.slice(0,5).reverse().forEach(function(e){Object(N.E)(r,e),a.loadedSets.set(e.id,e.id)}),n.sets.reduce(function(e,t){return t.stickers.length>0&&e.push(t.stickers[0]),e},[]).forEach(function(e){Object(N.F)(r,e)});case 20:case"end":return e.stop()}},e)})),n.handleButtonMouseLeave=function(){n.buttonEnter=!1,setTimeout(function(){n.tryClosePicker()},R.e)},n.tryClosePicker=function(){var e=n.state.sticker;n.paperEnter||n.buttonEnter||e||n.updatePicker(!1)},n.handlePaperMouseEnter=function(){n.paperEnter=!0},n.handlePaperMouseLeave=function(){n.paperEnter=!1,setTimeout(function(){n.tryClosePicker()},R.e)},n.updatePicker=function(e){n.setState({open:e})},n.handleEmojiClick=function(){n.setState({tab:0}),n.gifsPickerRef.current.stop()},n.handleStickersClick=function(){var e=n.stickersPickerRef.current,t=n.state.tab;setTimeout(function(){e.loadContent(n.recent,n.stickerSets,n.sets)},150),n.setState({tab:1}),1===t&&e.scrollTop(),n.gifsPickerRef.current.stop()},n.handleGifsClick=function(){var e=n.gifsPickerRef.current;if(2===n.state.tab)e.scrollTop();else{var t=z.a.savedAnimations;setTimeout(function(){e.loadContent(t),e.start()},150),n.setState({tab:2})}},n.handleStickerSend=function(e){e&&(L.a.clientUpdate({"@type":"clientUpdateStickerSend",sticker:e}),n.updatePicker(!1))},n.handleStickerPreview=function(e){n.setState({sticker:e}),L.a.clientUpdate({"@type":"clientUpdateStickerPreview",sticker:e}),e||n.tryClosePicker()},n.handleGifSend=function(e){e&&(L.a.clientUpdate({"@type":"clientUpdateAnimationSend",animation:e}),n.updatePicker(!1))},n.handleGifPreview=function(e){n.setState({animation:e}),L.a.clientUpdate({"@type":"clientUpdateAnimationPreview",animation:e}),e||n.tryClosePicker()},n.state={open:!1,tab:0},n.emojiPickerRef=f.a.createRef(),n.stickersPickerRef=f.a.createRef(),n.gifsPickerRef=f.a.createRef(),n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){W.a.on("clientUpdateThemeChange",this.onClientUpdateChange),q.a.on("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"componentWillUnmount",value:function(){W.a.off("clientUpdateThemeChange",this.onClientUpdateChange),q.a.off("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.t,a=this.state,i=a.open,r=a.tab,s=a.sticker;if(i&&!this.picker){var o={search:n("Search"),notfound:n("NotEmojiFound"),skintext:n("ChooseDefaultSkinTone"),categories:{search:n("SearchResults"),recent:n("Recent"),people:n("SmileysPeople"),nature:n("AnimalsNature"),foods:n("FoodDrink"),activity:n("Activity"),places:n("TravelPlaces"),objects:n("Objects"),symbols:n("Symbols"),flags:n("Flags"),custom:n("Custom")}};this.picker=f.a.createElement(j.a,{ref:this.emojiPickerRef,set:"apple",showPreview:!1,showSkinTones:!1,onSelect:this.props.onSelect,color:t.palette.primary.dark,i18n:o,native:Object(D.q)(),style:{width:338,overflowX:"hidden"}}),this.stickersPicker=f.a.createElement(H,{ref:this.stickersPickerRef,onSelect:this.handleStickerSend,onPreview:this.handleStickerPreview}),this.gifsPicker=f.a.createElement(B,{ref:this.gifsPickerRef,onSelect:this.handleGifSend,onPreview:this.handleGifPreview})}return f.a.createElement(f.a.Fragment,null,f.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"dark"===t.palette.type?"emoji-mart.dark.css":"emoji-mart.light.css"}),f.a.createElement(g.a,{className:"inputbox-icon-button","aria-label":"Emoticon",onMouseEnter:this.handleButtonMouseEnter,onMouseLeave:this.handleButtonMouseLeave},f.a.createElement(w.a,null)),f.a.createElement("div",{className:h()("emoji-picker-root",{"emoji-picker-root-opened":i}),onMouseEnter:this.handlePaperMouseEnter,onMouseLeave:this.handlePaperMouseLeave},f.a.createElement("div",{className:h()("emoji-picker-content",{"emoji-picker-content-stickers":1===r},{"emoji-picker-content-gifs":2===r})},this.picker,this.stickersPicker,this.gifsPicker),f.a.createElement("div",{className:"emoji-picker-header"},f.a.createElement(b.a,{color:0===r?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleEmojiClick},n("Emoji")),f.a.createElement(b.a,{color:1===r?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleStickersClick},n("AccDescrStickers")),f.a.createElement(b.a,{color:2===r?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleGifsClick},n("AttachGif"))),Boolean(s)&&f.a.createElement(E.a,{sticker:s})))}}]),t}(f.a.Component)),K=Object(k.a)(Object(v.d)(),S.a);t.default=K(J)}}]);
//# sourceMappingURL=8.0cec7e18.chunk.js.map