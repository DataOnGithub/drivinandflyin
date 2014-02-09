tomtom.define("text!templates/controls/RouteControl.html",[],function(){return'<div class="control routeControl">\n\n	<h2>Directions</h2>\n	\n	<div class="parameters">\n		<div class="row">\n			<label>From:</label>\n			<div class="data">\n				<input class="text" type="text" name="routeFrom" />\n			</div>\n		</div>\n		\n		<div class="row">\n			<label>To:</label>\n			<div class="data">\n				<input class="text" type="text" name="routeTo" />\n			</div>\n		</div>\n		\n		<div class="row">\n			<label>Traffic:</label>\n			<div class="data">\n				<input type="checkbox" name="routeTraffic" id="traffic_${control_id}" checked="checked" />\n				<label for="traffic_${control_id}">Minimize delays</label>\n			</div>\n		</div>\n		\n		<div class="row">\n			<label>Leave:</label>\n			<div class="data">\n				<div>\n					<select name="routeLeaveAt">\n						<option value="NOW">Right now</option>\n						<option value="LATER_TODAY">Later today</option>\n						<option value="TOMORROW_AT">Tomorrow at...</option>\n						<option value="SPECIFIC_TIME">Specific day and time...</option>\n						<option value="NO_SPECIFIC_TIME">No specific day and time</option>\n					</select>\n				</div>\n				<div>\n					<select name="routeDay" disabled="disabled">\n						<option value="today">Today</option>\n						<option value="monday">Monday</option>\n						<option value="tuesday">Tuesday</option>\n						<option value="wednesday">Wednesday</option>\n						<option value="thursday">Thursday</option>\n						<option value="friday">Friday</option>\n						<option value="saturday">Saturday</option>\n						<option value="sunday">Sunday</option>\n					</select>\n					\n					<select name="routeTime" disabled="disabled"></select>\n				</div>\n			</div>\n		</div>\n		\n		<div class="buttons">\n			<button class="planRoute">Get Directions</button>\n		</div>\n		\n		<div class="routeInformation">\n			<div class="summary">\n				\n			</div>\n			\n			<ul class="instructions">\n			\n			</ul>\n		</div>\n		\n	</div>\n\n</div>'}),tomtom.define("text!templates/controls/RouteControl_summary.html",[],function(){return"<p>${distance} - ${time}</p>\n<p>Includes traffic delay: ${trafficDelay}</p>"}),tomtom.define("text!templates/controls/RouteControl_instruction.html",[],function(){return'<div class="icon"><img src="${iconUrl}" alt="direction" /></div>\n<div class="instructionText">\n	${instruction}\n	<span class="roadNumber${roadNumberClass}">${roadNumber}</span>\n	<span class="road">${roadName}</span>\n</div>\n<div class="distance">${distance}</div>'}),tomtom.define("controls/AutoComplete",["../BaseObject","../DomUtil","../Utils","../Main"],function(e,t,n){tomtom.controls.AutoComplete=OpenLayers.Class(e,{initialize:function(n,r,i){this.textBox=n,this._timeoutId=0,this._resultsCallback=r,this._itemSelectedCallback=i,this._listIndex=0,this._eventHandles=[],e.prototype.initialize.apply(this,arguments);var s=document.createElement("div"),o=this;this._eventHandles.push(t.bind(this.textBox,"keyup",this._inputKeyUp,this)),this._eventHandles.push(t.bind(document,"click",this._inputBlur,this)),this._eventHandles.push(t.bind(this.textBox,"blur",this._inputBlur,this)),this.textBox.parentNode.appendChild(s),this.div=s,this.list=document.createElement("ul"),t.addClass(this.div,"olAutoComplete"),s.appendChild(this.list),this.events=new OpenLayers.Events(this,this.div),i&&this.events.register("itemSelected",this,i)},destroy:function(){e.prototype.destroy.apply(this,arguments),t.unbindAll(this._eventHandles)},clear:function(){while(this.list.children.length>0)this.list.removeChild(this.list.children[0])},processResults:function(e){if(this._lostFocus){this._lostFocus=!1;return}this.clear();if(e.length==1){this._itemSelected(!1,e[0]);return}if(e.length==0)return;for(var n=0;n<e.length;n++){var r=e[n],i=document.createElement("li");i.innerHTML=r.text,t.data(i,"tt_autoComplete_result",r),this._eventHandles.push(t.bind(i,"click",this._itemClicked(i),this)),this._eventHandles.push(t.bind(i,"mouseover",this._mouseOver(i),this)),this.list.appendChild(i)}t.addClass(this.list.childNodes[0],"selected"),this.show()},show:function(){t.css(this.div,"display","block")},hide:function(){t.css(this.div,"display","none")},cancel:function(){clearTimeout(this._timeoutId)},_itemClicked:function(e){return function(){this._itemSelected(!0,t.data(e,"tt_autoComplete_result"))}},_mouseOver:function(e){return function(){t.removeClass(this.list.childNodes,"selected"),t.addClass(e,"selected")}},_inputKeyUp:function(e){this._lostFocus=!1,clearTimeout(this._timeoutId);var s=e.keyCode?e.keyCode:e.which,o=t.query(".selected",this.list);if(s==38){var u=o.prev();return u.length()&&(t.removeClass(this.list.childNodes,"selected"),u.addClass("selected"),this._updateSelected()),OpenLayers.Event.stop(e),!1}if(s==40){var a=o.next();return a.length()&&(t.removeClass(this.list.childNodes,"selected"),a.addClass("selected"),this._updateSelected()),OpenLayers.Event.stop(e),!1}if(s==13){var o=t.query(".selected",this.list);return o.length()&&this._itemSelected(!0,o.data("tt_autoComplete_result")),OpenLayers.Event.stop(e),!1}s==27?this.hide():t.val(this.textBox).length>i?this._timeoutId=setTimeout(n.hitch(this,function(){this._resultsCallback(this.textBox.value,n.hitch(this,this.processResults))}),r):this.hide()},_updateSelected:function(){var e=t.query(".selected",this.list),n=e.get().offsetTop;n+e.offsetHeight()>=this.div.offsetHeight+this.div.scrollTop?this.div.scrollTop=n+e.offsetHeight()-this.div.offsetHeight:n<this.div.scrollTop&&(this.div.scrollTop=n)},_inputBlur:function(e){this._lostFocus=!0,this.hide()},_itemSelected:function(e,t){this.hide(),e&&(this.textBox.value=t.text),this.value=t.value,this.events.triggerEvent("itemSelected",{textBox:this.textBox,value:t.value})}});var r=500,i=3;return tomtom.controls.RouteControl}),tomtom.define("controls/RouteControl",["text!templates/controls/RouteControl.html","../DomUtil","../Utils","text!templates/controls/RouteControl_summary.html","text!templates/controls/RouteControl_instruction.html","../Main","./AutoComplete","../Map","../Logger","../layers/MarkerLayer","../OpenLayers"],function(e,t,n,r,i){tomtom.controls.RouteControl=OpenLayers.Class({initialize:function(e){this.markers=null,this._geocodeTimeoutId=0,this._fromAutoComplete=null,this._toAutoComplete=null,this._eventHandles=[],this.log=new tomtom.Logger,this.container=typeof e.domNode=="string"?document.getElementById(e.domNode):e.domNode,this.setMap(e.map),this.draw()},draw:function(){var r=this.container;r.innerHTML=e,this.events=new OpenLayers.Events(this,r),this.events.on({mousedown:this._cancelEvent,dblclick:this._cancelEvent}),this._fromNode=t.query("input[name='routeFrom']",r).get(),this._toNode=t.query("input[name='routeTo']",r).get(),this._routeTimeNode=t.query("select[name='routeTime']",r).get(),this._planRouteNode=t.query("button.planRoute",r).get(),this._dayNode=t.query("select[name='routeDay']",r).get(),this._leaveAtNode=t.query("select[name='routeLeaveAt']",r).get(),this._timeNode=t.query("select[name='routeTime']",r).get(),this._avoidTrafficNode=t.query("input[name='routeTraffic']",r).get(),this._routeInformationNode=t.query(".routeInformation",r).get(),this._summaryNode=t.query(".summary",r).get(),this._instructionsNode=t.query(".instructions",r).get(),this._fromAutoComplete=new tomtom.controls.AutoComplete(this._fromNode,n.hitch(this,this._getAutocompleteResults),n.hitch(this,this._autoCompleteItemSelected)),this._toAutoComplete=new tomtom.controls.AutoComplete(this._toNode,n.hitch(this,this._getAutocompleteResults),n.hitch(this,this._autoCompleteItemSelected));var i=this._routeTimeNode;while(i.children.length>0)i.removeChild(i.children[0]);for(var s=0;s<1440;s+=30){var o=Math.floor(s/60),u=o+12,a=n.zeroPad(s%60,2),f="am";u>12&&(u-=12),o>12&&(f="pm",u-=12);var l=document.createElement("option");t.attr(l,"value",s),t.html(l,u+":"+a+" "+f),i.appendChild(l)}return this._eventHandles.push(t.bind(this._planRouteNode,"click",this._routeClick,this)),this._eventHandles.push(t.bind(this._fromNode,"keyup",this._inputKeyUp,this)),this._eventHandles.push(t.bind(this._toNode,"keyup",this._inputKeyUp,this)),this._eventHandles.push(t.bind(this._dayNode,"change",this._dayChange,this)),this._eventHandles.push(t.bind(this._leaveAtNode,"change",this._leaveAtChange,this)),t.addClass(r,"routeControlWrapper"),r},destroy:function(){t.unbindAll(this._eventHandles),this._fromAutoComplete.destroy(),this._toAutoComplete.destroy()},setMap:function(e){this.apiKey=e.apiKey,this.map=e,this.markers=new tomtom.layers.MarkerLayer(s),e.addLayer(this.markers)},_dayChange:function(){var e=t.val(this._dayNode),n=this._leaveAtNode;e=="today"?t.val(n,"LATER_TODAY"):t.val(n,"SPECIFIC_TIME")},_leaveAtChange:function(){var e=t.val(this._leaveAtNode),n=this._dayNode;if(e=="NOW"||e=="NO_SPECIFIC_TIME")t.attr(this._dayNode,"disabled","disabled"),t.attr(this._timeNode,"disabled","disabled");else{t.removeAttr(this._dayNode,"disabled"),t.removeAttr(this._timeNode,"disabled");var r=new Date;e=="TOMORROW_AT"?(r.setDate(r.getDate()+1),t.val(n,a[r.getDay()])):e=="LATER_TODAY"&&t.val(n,"today")}},_routeClick:function(){var e=this._fromAutoComplete.value,r=this._toAutoComplete.value;e?e={lat:e.latitude,lon:e.longitude}:e=this._fromNode.value,r?r={lat:r.latitude,lon:r.longitude}:r=this._toNode.value;if(e&&r){var i=t.val(this._leaveAtNode),s=i!="NO_SPECIFIC_TIME"&&i!="NOW",o=t.val(this._dayNode),u=t.val(this._timeNode),a={includeTraffic:!0,avoidTraffic:t.attr(this._avoidTrafficNode,"checked")?!0:!1,iqRoutes:s?2:0,trafficModelId:this.map.getTrafficModel()};s&&(a.day=o,a.time=u),this.log.debug(a),this.map.displayRoute([e,r],a,n.hitch(this,this._routeCallback))}},_routeCallback:function(e){var s=this._currentRoute=e.route;this.markers.clearMarkers();if(s){var o=this._instructionsNode,u=this._summaryNode,a=s.instructions?s.instructions.instruction:null;if(s.summary){var f=s.summary,l={distance:n.round(n.metersToMiles(f.totalDistanceMeters),1)+" mi",time:n.formatSeconds(f.totalTimeSeconds),trafficDelay:n.formatSeconds(f.totalDelaySeconds)};t.html(u,OpenLayers.String.format(r,l))}t.empty(o);if(a){var c=OpenLayers.ImgPath,h=0;for(var p=0;p<a.length;p++){var d=a[p],v=document.createElement("li");t.append(v,OpenLayers.String.format(i,{instruction:d.text,roadName:d.roadName,roadNumber:d.roadNumber,distance:n.round(n.metersToMiles(d.distanceMeters-h),1)+" mi",iconUrl:c+"instructions/"+d.iconPath,roadNumberClass:d.roadNumber?" sign":""})),o.appendChild(v),this._eventHandles.push(t.bind(v,"click",this._instructionClick(d),this)),h=d.distanceMeters}}t.css(this._routeInformationNode,"display","block")}},_instructionClick:function(e){return function(){var t=this._currentRoute.instructions?this._currentRoute.instructions.instruction:null;if(t){var n=t.indexOf(e);this.map.displayRouteInstruction(n)}}},_cancelEvent:function(){return!1},_autoCompleteItemSelected:function(e){this._displayRoutePoints()},_displayRoutePoints:function(){this.markers.clearMarkers();var e=null,t=this._fromAutoComplete.value,n=this._toAutoComplete.value;t&&(e=t,this.markers.addMarker(new tomtom.Marker(t.longitude,t.latitude,tomtom.Map.MARKER_OPTIONS_ROUTE_START))),n&&(e=n,this.markers.addMarker(new tomtom.Marker(n.longitude,n.latitude,tomtom.Map.MARKER_OPTIONS_ROUTE_END)));if(t&&n){var r=new OpenLayers.Bounds;r.extend(new OpenLayers.LonLat(t.longitude,t.latitude)),r.extend(new OpenLayers.LonLat(n.longitude,n.latitude)),this.map.zoomToExtentTransform(r)}else if(e){var r=new OpenLayers.Bounds;r.extend(new OpenLayers.LonLat(e.longitude-u,e.latitude-u)),r.extend(new OpenLayers.LonLat(e.longitude+u,e.latitude+u)),this.map.zoomToExtentTransform(r)}this.map.setLayerIndex(this.markers,o)},_getAutocompleteResults:function(e,t){var n=this.map.geocodingService;n.geocode(e,function(e){if(e.geoResponse&&e.geoResponse.geoResult){var n=e.geoResponse.geoResult;if(n.length){var r=[];for(var i=0;i<n.length;i++){var s=n[i].formattedAddress;r.push({text:s,value:n[i]})}t(r)}else{var s=n.formattedAddress;t([{text:s,value:n}])}}})},_inputKeyUp:function(e){var t=e.keyCode?e.keyCode:e.which;t==13&&this._routeClick()}});var s="TomTom-RoutingControl",o=49,u=.1,a=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];return tomtom.controls.RouteControl}),tomtom.define("controls/ContextMenu",["../OpenLayers","../Utils","../DomUtil"],function(e,t,n){var r=OpenLayers.Control;return tomtom.controls.ContextMenu=OpenLayers.Class(r,{initialize:function(e){this.container=document.createElement("ul"),this._eventHandles=[],this._targetElements=[],this.events=new OpenLayers.Events(this,this.container);if(e.menuItems){this.menuItems=e.menuItems;for(var r=0;r<this.menuItems.length;r++)this.addMenuItem(this.menuItems[r])}this._eventHandles.push(n.bind(document,"click",t.hitch(this,function(){this.hide()})))},addMenuItem:function(e){var r=document.createElement("li");r.innerHTML=e.label,n.bind(r,"click",t.hitch(this,function(){var t={menuItem:e,contextMenu:this,x:this.currentX,y:this.currentY,targetElement:this.currentTargetElement,targetObject:this.currentTargetObject};typeof e.onClick=="function"&&e.onClick(t),this.events.triggerEvent("menuitemclick",t)})),n.bind(r,"mouseover",function(){n.addClass(this,"menuItemHover")}),n.bind(r,"mouseout",function(){n.removeClass(this,"menuItemHover")}),this.container.appendChild(r),n.query("li",this.container).removeClass("last"),n.query("li",this.container).removeClass("first"),n.query("li:last-child",this.container).addClass("last"),n.query("li:first-child",this.container).addClass("first")},addTarget:function(e,r){this._targetElements.indexOf(e)==-1&&this._eventHandles.push(n.bind(e,"contextmenu",t.hitch(this,function(t){this._onContextMenu(t,e,r)})))},setData:function(e){this.data=e},getData:function(){return this.data},draw:function(){return n.addClass(this.container,"contextMenu"),this.map.div.appendChild(this.container),this.container},destroy:function(){r.prototype.destroy.apply(this,arguments),n.unbindAll(this._eventHandles)},hide:function(){n.removeClass(this.container,"contextMenuActive")},_onContextMenu:function(e,t,r){var i=n.offset(this.map.div),s=n.dimensions(this.container),o=n.dimensions(this.map.div),u=e.clientX-i.left,a=e.clientY-i.top;return u+s.outerWidth>o.width&&(u-=s.outerWidth),a+s.outerHeight>o.height&&(a-=s.outerHeight),this.currentX=u,this.currentY=a,n.css(this.container,"left",u+"px"),n.css(this.container,"top",a+"px"),n.addClass(this.container,"contextMenuActive"),OpenLayers.Event.stop(e),this.currentTargetElement=t,this.currentTargetObject=r,!1}}),tomtom.controls.ContextMenu}),tomtom.require("controls/RouteControl"),tomtom.require("controls/ContextMenu")