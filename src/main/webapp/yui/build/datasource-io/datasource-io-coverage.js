/*
YUI 3.12.0 (build 8655935)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/datasource-io/datasource-io.js']) {
   __coverage__['build/datasource-io/datasource-io.js'] = {"path":"build/datasource-io/datasource-io.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0},"b":{"1":[0,0],"2":[0,0,0],"3":[0,0],"4":[0,0],"5":[0,0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":44}}},"2":{"name":"(anonymous_2)","line":16,"loc":{"start":{"line":16,"column":11},"end":{"line":16,"column":22}}},"3":{"name":"(anonymous_3)","line":79,"loc":{"start":{"line":79,"column":17},"end":{"line":79,"column":34}}},"4":{"name":"(anonymous_4)","line":92,"loc":{"start":{"line":92,"column":20},"end":{"line":92,"column":47}}},"5":{"name":"(anonymous_5)","line":116,"loc":{"start":{"line":116,"column":20},"end":{"line":116,"column":47}}},"6":{"name":"(anonymous_6)","line":170,"loc":{"start":{"line":170,"column":19},"end":{"line":170,"column":31}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":201,"column":60}},"2":{"start":{"line":16,"column":0},"end":{"line":18,"column":2}},"3":{"start":{"line":17,"column":4},"end":{"line":17,"column":55}},"4":{"start":{"line":26,"column":0},"end":{"line":69,"column":3}},"5":{"start":{"line":71,"column":0},"end":{"line":196,"column":3}},"6":{"start":{"line":80,"column":8},"end":{"line":80,"column":62}},"7":{"start":{"line":93,"column":8},"end":{"line":94,"column":35}},"8":{"start":{"line":96,"column":8},"end":{"line":96,"column":54}},"9":{"start":{"line":98,"column":8},"end":{"line":98,"column":32}},"10":{"start":{"line":99,"column":8},"end":{"line":99,"column":35}},"11":{"start":{"line":102,"column":8},"end":{"line":104,"column":9}},"12":{"start":{"line":103,"column":12},"end":{"line":103,"column":78}},"13":{"start":{"line":117,"column":8},"end":{"line":118,"column":35}},"14":{"start":{"line":120,"column":8},"end":{"line":120,"column":54}},"15":{"start":{"line":122,"column":8},"end":{"line":122,"column":53}},"16":{"start":{"line":124,"column":8},"end":{"line":124,"column":32}},"17":{"start":{"line":125,"column":8},"end":{"line":125,"column":35}},"18":{"start":{"line":128,"column":8},"end":{"line":130,"column":9}},"19":{"start":{"line":129,"column":12},"end":{"line":129,"column":78}},"20":{"start":{"line":171,"column":8},"end":{"line":182,"column":15}},"21":{"start":{"line":185,"column":8},"end":{"line":192,"column":9}},"22":{"start":{"line":186,"column":12},"end":{"line":191,"column":13}},"23":{"start":{"line":187,"column":16},"end":{"line":187,"column":65}},"24":{"start":{"line":190,"column":16},"end":{"line":190,"column":31}},"25":{"start":{"line":193,"column":8},"end":{"line":193,"column":62}},"26":{"start":{"line":194,"column":8},"end":{"line":194,"column":21}},"27":{"start":{"line":198,"column":0},"end":{"line":198,"column":23}}},"branchMap":{"1":{"line":102,"type":"if","locations":[{"start":{"line":102,"column":8},"end":{"line":102,"column":8}},{"start":{"line":102,"column":8},"end":{"line":102,"column":8}}]},"2":{"line":102,"type":"binary-expr","locations":[{"start":{"line":102,"column":12},"end":{"line":102,"column":23}},{"start":{"line":102,"column":27},"end":{"line":102,"column":41}},{"start":{"line":102,"column":45},"end":{"line":102,"column":67}}]},"3":{"line":103,"type":"binary-expr","locations":[{"start":{"line":103,"column":41},"end":{"line":103,"column":60}},{"start":{"line":103,"column":64},"end":{"line":103,"column":65}}]},"4":{"line":128,"type":"if","locations":[{"start":{"line":128,"column":8},"end":{"line":128,"column":8}},{"start":{"line":128,"column":8},"end":{"line":128,"column":8}}]},"5":{"line":128,"type":"binary-expr","locations":[{"start":{"line":128,"column":12},"end":{"line":128,"column":23}},{"start":{"line":128,"column":27},"end":{"line":128,"column":41}},{"start":{"line":128,"column":45},"end":{"line":128,"column":67}}]},"6":{"line":129,"type":"binary-expr","locations":[{"start":{"line":129,"column":41},"end":{"line":129,"column":60}},{"start":{"line":129,"column":64},"end":{"line":129,"column":65}}]},"7":{"line":185,"type":"if","locations":[{"start":{"line":185,"column":8},"end":{"line":185,"column":8}},{"start":{"line":185,"column":8},"end":{"line":185,"column":8}}]},"8":{"line":186,"type":"if","locations":[{"start":{"line":186,"column":12},"end":{"line":186,"column":12}},{"start":{"line":186,"column":12},"end":{"line":186,"column":12}}]},"9":{"line":186,"type":"binary-expr","locations":[{"start":{"line":186,"column":15},"end":{"line":186,"column":25}},{"start":{"line":186,"column":30},"end":{"line":186,"column":65}}]},"10":{"line":187,"type":"cond-expr","locations":[{"start":{"line":187,"column":38},"end":{"line":187,"column":54}},{"start":{"line":187,"column":57},"end":{"line":187,"column":64}}]}},"code":["(function () { YUI.add('datasource-io', function (Y, NAME) {","","/**"," * Provides a DataSource implementation which can be used to retrieve data via the IO Utility."," *"," * @module datasource"," * @submodule datasource-io"," */","","/**"," * IO subclass for the DataSource Utility."," * @class DataSource.IO"," * @extends DataSource.Local"," * @constructor"," */    ","var DSIO = function() {","    DSIO.superclass.constructor.apply(this, arguments);","};","    ","","    /////////////////////////////////////////////////////////////////////////////","    //","    // DataSource.IO static properties","    //","    /////////////////////////////////////////////////////////////////////////////","Y.mix(DSIO, {","    /**","     * Class name.","     *","     * @property NAME","     * @type String","     * @static     ","     * @final","     * @value \"dataSourceIO\"","     */","    NAME: \"dataSourceIO\",","","","    /////////////////////////////////////////////////////////////////////////////","    //","    // DataSource.IO Attributes","    //","    /////////////////////////////////////////////////////////////////////////////","","    ATTRS: {","        /**","         * Pointer to IO Utility.","         *","         * @attribute io","         * @type Y.io","         * @default Y.io","         */","        io: {","            value: Y.io,","            cloneDefaultValue: false","        },","        ","        /**","         * Default IO Config.","         *","         * @attribute ioConfig","         * @type Object","         * @default null","         */","         ioConfig: {","            value: null","         }","    }","});","    ","Y.extend(DSIO, Y.DataSource.Local, {","    /**","    * Internal init() handler.","    *","    * @method initializer","    * @param config {Object} Config object.","    * @private","    */","    initializer: function(config) {","        this._queue = {interval:null, conn:null, requests:[]};","    },","","    /**","    * IO success callback.","    *","    * @method successHandler","    * @param id {String} Transaction ID.","    * @param response {String} Response.","    * @param e {Event.Facade} Event facade.","    * @private","    */","    successHandler: function (id, response, e) {","        var defIOConfig = this.get(\"ioConfig\"),","            payload = e.details[0];","","        delete Y.DataSource.Local.transactions[e.tId];","","        payload.data = response;","        this.fire(\"data\", payload);","","","        if (defIOConfig && defIOConfig.on && defIOConfig.on.success) {","            defIOConfig.on.success.apply(defIOConfig.context || Y, arguments);","        }","    },","","    /**","    * IO failure callback.","    *","    * @method failureHandler","    * @param id {String} Transaction ID.","    * @param response {String} Response.","    * @param e {Event.Facade} Event facade.","    * @private","    */","    failureHandler: function (id, response, e) {","        var defIOConfig = this.get(\"ioConfig\"),","            payload = e.details[0];","        ","        delete Y.DataSource.Local.transactions[e.tId];","","        payload.error = new Error(\"IO data failure\");","","        payload.data = response;","        this.fire(\"data\", payload);","","","        if (defIOConfig && defIOConfig.on && defIOConfig.on.failure) {","            defIOConfig.on.failure.apply(defIOConfig.context || Y, arguments);","        }","    },","    ","    /**","    * @property _queue","    * @description Object literal to manage asynchronous request/response","    * cycles enabled if queue needs to be managed (asyncMode/ioConnMode):","    * <dl>","    *     <dt>interval {Number}</dt>","    *         <dd>Interval ID of in-progress queue.</dd>","    *     <dt>conn</dt>","    *         <dd>In-progress connection identifier (if applicable).</dd>","    *     <dt>requests {Object[]}</dt>","    *         <dd>Array of queued request objects: {request:request, callback:callback}.</dd>","    * </dl>","    * @type Object","    * @default {interval:null, conn:null, requests:[]}","    * @private","    */","    _queue: null,","","    /**","     * Passes query string to IO. Fires <code>response</code> event when","     * response is received asynchronously.","     *","     * @method _defRequestFn","     * @param e {Event.Facade} Event Facade with the following properties:","     * <dl>","     * <dt>tId (Number)</dt> <dd>Unique transaction ID.</dd>","     * <dt>request (Object)</dt> <dd>The request.</dd>","     * <dt>callback (Object)</dt> <dd>The callback object with the following properties:","     *     <dl>","     *         <dt>success (Function)</dt> <dd>Success handler.</dd>","     *         <dt>failure (Function)</dt> <dd>Failure handler.</dd>","     *     </dl>","     * </dd>","     * <dt>cfg (Object)</dt> <dd>Configuration object.</dd>","     * </dl>","     * @protected","     */","    _defRequestFn: function(e) {","        var uri = this.get(\"source\"),","            io = this.get(\"io\"),","            defIOConfig = this.get(\"ioConfig\"),","            request = e.request,","            cfg = Y.merge(defIOConfig, e.cfg, {","                on: Y.merge(defIOConfig, {","                    success: this.successHandler,","                    failure: this.failureHandler","                }),","                context: this,","                \"arguments\": e","            });","        ","        // Support for POST transactions","        if(Y.Lang.isString(request)) {","            if(cfg.method && (cfg.method.toUpperCase() === \"POST\")) {","                cfg.data = cfg.data ? cfg.data+request : request;","            }","            else {","                uri += request;","            }","        }","        Y.DataSource.Local.transactions[e.tId] = io(uri, cfg);","        return e.tId;","    }","});","  ","Y.DataSource.IO = DSIO;","","","}, '3.12.0', {\"requires\": [\"datasource-local\", \"io-base\"]});","","}());"]};
}
var __cov_f6kq7FI1nnTtVqSzBsDs7A = __coverage__['build/datasource-io/datasource-io.js'];
__cov_f6kq7FI1nnTtVqSzBsDs7A.s['1']++;YUI.add('datasource-io',function(Y,NAME){__cov_f6kq7FI1nnTtVqSzBsDs7A.f['1']++;__cov_f6kq7FI1nnTtVqSzBsDs7A.s['2']++;var DSIO=function(){__cov_f6kq7FI1nnTtVqSzBsDs7A.f['2']++;__cov_f6kq7FI1nnTtVqSzBsDs7A.s['3']++;DSIO.superclass.constructor.apply(this,arguments);};__cov_f6kq7FI1nnTtVqSzBsDs7A.s['4']++;Y.mix(DSIO,{NAME:'dataSourceIO',ATTRS:{io:{value:Y.io,cloneDefaultValue:false},ioConfig:{value:null}}});__cov_f6kq7FI1nnTtVqSzBsDs7A.s['5']++;Y.extend(DSIO,Y.DataSource.Local,{initializer:function(config){__cov_f6kq7FI1nnTtVqSzBsDs7A.f['3']++;__cov_f6kq7FI1nnTtVqSzBsDs7A.s['6']++;this._queue={interval:null,conn:null,requests:[]};},successHandler:function(id,response,e){__cov_f6kq7FI1nnTtVqSzBsDs7A.f['4']++;__cov_f6kq7FI1nnTtVqSzBsDs7A.s['7']++;var defIOConfig=this.get('ioConfig'),payload=e.details[0];__cov_f6kq7FI1nnTtVqSzBsDs7A.s['8']++;delete Y.DataSource.Local.transactions[e.tId];__cov_f6kq7FI1nnTtVqSzBsDs7A.s['9']++;payload.data=response;__cov_f6kq7FI1nnTtVqSzBsDs7A.s['10']++;this.fire('data',payload);__cov_f6kq7FI1nnTtVqSzBsDs7A.s['11']++;if((__cov_f6kq7FI1nnTtVqSzBsDs7A.b['2'][0]++,defIOConfig)&&(__cov_f6kq7FI1nnTtVqSzBsDs7A.b['2'][1]++,defIOConfig.on)&&(__cov_f6kq7FI1nnTtVqSzBsDs7A.b['2'][2]++,defIOConfig.on.success)){__cov_f6kq7FI1nnTtVqSzBsDs7A.b['1'][0]++;__cov_f6kq7FI1nnTtVqSzBsDs7A.s['12']++;defIOConfig.on.success.apply((__cov_f6kq7FI1nnTtVqSzBsDs7A.b['3'][0]++,defIOConfig.context)||(__cov_f6kq7FI1nnTtVqSzBsDs7A.b['3'][1]++,Y),arguments);}else{__cov_f6kq7FI1nnTtVqSzBsDs7A.b['1'][1]++;}},failureHandler:function(id,response,e){__cov_f6kq7FI1nnTtVqSzBsDs7A.f['5']++;__cov_f6kq7FI1nnTtVqSzBsDs7A.s['13']++;var defIOConfig=this.get('ioConfig'),payload=e.details[0];__cov_f6kq7FI1nnTtVqSzBsDs7A.s['14']++;delete Y.DataSource.Local.transactions[e.tId];__cov_f6kq7FI1nnTtVqSzBsDs7A.s['15']++;payload.error=new Error('IO data failure');__cov_f6kq7FI1nnTtVqSzBsDs7A.s['16']++;payload.data=response;__cov_f6kq7FI1nnTtVqSzBsDs7A.s['17']++;this.fire('data',payload);__cov_f6kq7FI1nnTtVqSzBsDs7A.s['18']++;if((__cov_f6kq7FI1nnTtVqSzBsDs7A.b['5'][0]++,defIOConfig)&&(__cov_f6kq7FI1nnTtVqSzBsDs7A.b['5'][1]++,defIOConfig.on)&&(__cov_f6kq7FI1nnTtVqSzBsDs7A.b['5'][2]++,defIOConfig.on.failure)){__cov_f6kq7FI1nnTtVqSzBsDs7A.b['4'][0]++;__cov_f6kq7FI1nnTtVqSzBsDs7A.s['19']++;defIOConfig.on.failure.apply((__cov_f6kq7FI1nnTtVqSzBsDs7A.b['6'][0]++,defIOConfig.context)||(__cov_f6kq7FI1nnTtVqSzBsDs7A.b['6'][1]++,Y),arguments);}else{__cov_f6kq7FI1nnTtVqSzBsDs7A.b['4'][1]++;}},_queue:null,_defRequestFn:function(e){__cov_f6kq7FI1nnTtVqSzBsDs7A.f['6']++;__cov_f6kq7FI1nnTtVqSzBsDs7A.s['20']++;var uri=this.get('source'),io=this.get('io'),defIOConfig=this.get('ioConfig'),request=e.request,cfg=Y.merge(defIOConfig,e.cfg,{on:Y.merge(defIOConfig,{success:this.successHandler,failure:this.failureHandler}),context:this,'arguments':e});__cov_f6kq7FI1nnTtVqSzBsDs7A.s['21']++;if(Y.Lang.isString(request)){__cov_f6kq7FI1nnTtVqSzBsDs7A.b['7'][0]++;__cov_f6kq7FI1nnTtVqSzBsDs7A.s['22']++;if((__cov_f6kq7FI1nnTtVqSzBsDs7A.b['9'][0]++,cfg.method)&&(__cov_f6kq7FI1nnTtVqSzBsDs7A.b['9'][1]++,cfg.method.toUpperCase()==='POST')){__cov_f6kq7FI1nnTtVqSzBsDs7A.b['8'][0]++;__cov_f6kq7FI1nnTtVqSzBsDs7A.s['23']++;cfg.data=cfg.data?(__cov_f6kq7FI1nnTtVqSzBsDs7A.b['10'][0]++,cfg.data+request):(__cov_f6kq7FI1nnTtVqSzBsDs7A.b['10'][1]++,request);}else{__cov_f6kq7FI1nnTtVqSzBsDs7A.b['8'][1]++;__cov_f6kq7FI1nnTtVqSzBsDs7A.s['24']++;uri+=request;}}else{__cov_f6kq7FI1nnTtVqSzBsDs7A.b['7'][1]++;}__cov_f6kq7FI1nnTtVqSzBsDs7A.s['25']++;Y.DataSource.Local.transactions[e.tId]=io(uri,cfg);__cov_f6kq7FI1nnTtVqSzBsDs7A.s['26']++;return e.tId;}});__cov_f6kq7FI1nnTtVqSzBsDs7A.s['27']++;Y.DataSource.IO=DSIO;},'3.12.0',{'requires':['datasource-local','io-base']});
