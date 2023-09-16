;if (CloudflareApps.matchPage(CloudflareApps.installs['DyHT7OEIbHOI'].URLPatterns)) {
    (function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
            }
        }
        ;
        __webpack_require__.r = function(exports) {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
            }
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
        }
        ;
        __webpack_require__.t = function(value, mode) {
            if (mode & 1)
                value = __webpack_require__(value);
            if (mode & 8)
                return value;
            if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
                return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            if (mode & 2 && typeof value != 'string')
                for (var key in value)
                    __webpack_require__.d(ns, key, function(key) {
                        return value[key];
                    }
                    .bind(null, key));
            return ns;
        }
        ;
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module['default'];
            }
            : function getModuleExports() {
                return module;
            }
            ;
            __webpack_require__.d(getter, 'a', getter);
            return getter;
        }
        ;
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }
        ;
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = "./src/index.js");
    }
    )({
        "./src/index.js": (function(module, exports, __webpack_require__) {
            "use strict";
            function get_host_name() {
                if ("DyHT7OEIbHOI" == 'preview') {
                    return CloudflareApps.proxy.originalURL.parsed.host;
                } else {
                    return window.location.hostname;
                }
            }
            function check_plan() {
                var options = CloudflareApps.installs['DyHT7OEIbHOI'].options;
                var product = CloudflareApps.installs['DyHT7OEIbHOI'].product;
                console.log(product.id);
                if (product && product.id === 'google-analytics-pro') {
                    console.log('CF-GA: Thank you for installing pro :)');
                } else {
                    console.log('CF-GA: Please update to pro in order to get more features.');
                }
            }
            function init() {
                check_plan();
                var current_host = get_host_name();
                var sub_domain_tracker_ids = CloudflareApps.installs['DyHT7OEIbHOI'].options.subdomain_tracker_ids;
                var options = CloudflareApps.installs['DyHT7OEIbHOI'].options;
                var product = CloudflareApps.installs['DyHT7OEIbHOI'].product;
                if (product && product.id === 'google-analytics-pro' && true) {
                    var subdomain_tracker = sub_domain_tracker_ids.filter(function(item) {
                        return item.subdomain == current_host;
                    });
                    if (subdomain_tracker[0] && subdomain_tracker[0].tracker_id) {
                        send_to_google_analytics(subdomain_tracker[0].tracker_id);
                    } else {
                        send_to_google_analytics(CloudflareApps.installs['DyHT7OEIbHOI'].options.tracker_id);
                    }
                } else {
                    send_to_google_analytics(CloudflareApps.installs['DyHT7OEIbHOI'].options.tracker_id);
                }
            }
            function send_to_google_analytics(tracker_id) {
                console.log('CF-GA: ' + get_host_name() + " is using " + tracker_id);
                if (tracker_id != "UA-XXXXX-Y") {
                    (function(i, s, o, g, r, a, m) {
                        i['GoogleAnalyticsObject'] = r;
                        i[r] = i[r] || function() {
                            (i[r].q = i[r].q || []).push(arguments);
                        }
                        ,
                        i[r].l = 1 * new Date();
                        a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                        a.async = 1;
                        a.src = g;
                        m.parentNode.insertBefore(a, m);
                    }
                    )(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
                    ga('create', tracker_id, 'auto');
                    ga('send', 'pageview');
                }
            }
            init();
        }
        )
    });
}
;if (CloudflareApps.matchPage(CloudflareApps.installs['Gja7vEoCkvPD'].URLPatterns)) {
    (function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.i = function(value) {
            return value;
        }
        ;
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter
                });
            }
        }
        ;
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module['default'];
            }
            : function getModuleExports() {
                return module;
            }
            ;
            __webpack_require__.d(getter, 'a', getter);
            return getter;
        }
        ;
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }
        ;
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 2);
    }
    )([(function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            'en': ['You are using an outdated browser.', 'More information &#187;'],
            'af': ['Jy gebruik \'n verouderde webblaaier.', 'Meer inligting &#187;'],
            'ar': ['المتصفح الذي تستخدمه قديم وغير محدث.', 'المزيد من المعلومات &#187; '],
            'be': ['Вы выкарыстоўваеце састарэлы браўзэр.', 'Падрабязьней &#187;'],
            'bg': ['Използвате стар браузър.', 'Повече информация &#187;'],
            'bn': ['আপনি একটি সেকেলে ঘরানার ব্রাউজার ব্যবহার করছেন।', 'বিস্তারিত দেখুন &#187;'],
            'cs': ['Používáte zastaralý prohlížeč.', 'Více informací &#187;'],
            'da': ['Du bruger en forældet browser.', 'Mere information &#187;'],
            'de': ['Sie benutzen einen veralteten Browser.', 'Mehr Informationen &#187;'],
            'el': ['Χρησιμοποιείτε ένα ξεπερασμένο πρόγραμμα περιήγησης.', 'Περισσότερες πληροφορίες &#187;'],
            'eo': ['Vi uzas antikvan retumilon.', 'Pli informo &#187;'],
            'es': ['Su navegador está obsoleto.', 'M&aacute;s informaci&oacute;n &#187;'],
            'et': ['Sa kasutad aegunud ebaturvalist veebilehitsejat.', 'Rohkem informatsiooni &#187;'],
            'fa': ['شما از مرورگری قدیمی استفاده می کنید.', '&#187;اطلاعات بیشتر'],
            'fi': ['Käytät vanhentunutta selainta.', 'Lisää tietoa &#187;'],
            'fr': ['Votre navigateur n\'est pas à jour.', 'Plus d\'information &#187;'],
            'fy': ['Jo brûkt op dit stuit in ferâldere webbrowser.', 'Mear ynformaasje &#187;'],
            'ga': ['Tá tú ag baint úsáide as brabhsálaí atá as dáta.', 'Tuilleadh eolais &#187;'],
            'he': ['דפדפן האינטרנט שלך אינו מעודכן.', 'למידע נוסף &#187;'],
            'hr': ['Koristite zastarjeli pretraživač.', 'Više informacija &#187;'],
            'hu': ['A böngészője elavult.', 'További információ &#187;'],
            'id': ['Anda menggunakan web browser versi lama.', 'Informasi selengkapnya &#187;'],
            'is': ['Þú ert að nota úreltan vafra.', 'Nánari upplýsingar &#187;'],
            'it': ['Stai usando un browser datato.', 'Ulteriori informazioni &#187;'],
            'ja': ['旧式のブラウザーを利用されています。', '詳細情報 &#187;'],
            'ko': ['오래된 웹브라우저를 사용하고 계십니다.', '자세히 알아보기 &#187;'],
            'lt': ['Jūs naudojate pasenusią naršyklę.', 'Daugiau informacijos &#187;'],
            'lv': ['Jūs izmantojat novecojušu pārlūku.', 'Uzzināt vairāk &#187;'],
            'nb-NO': ['Du bruker en utdatert nettleser.', 'Mer informasjon &#187;'],
            'nl': ['U gebruikt op dit moment een verouderde webbrowser.', 'Meer informatie &#187;'],
            'pl': ['Używasz przestarzałej przeglądarki.', 'Więcej informacji &#187;'],
            'pt-BR': ['Você está usando um navegador desatualizado.', 'Mais informações &#187;'],
            'pt-PT': ['Está a utilizar um navegador desatualizado.', 'Mais informações &#187;'],
            'ro': ['Browserul dumneavoastră este depăşit.', 'Mai multe informații &#187;'],
            'ru': ['Вы используете устаревший браузер.', 'Подробнее &#187;'],
            'sk': ['Používate zastaralý prehliadač.', 'Viac informácií &#187;'],
            'sl': ['Uporabljate zastarel brskalnik.', 'Več informacij &#187;'],
            'sr': ['Vi koristite zastarelu verziju browsera.', 'Vi&#353;e informacija &#187;'],
            'sv': ['Du använder en gammal webbläsare.', 'Mer information &#187;'],
            'tr': ['Çok eski bir tarayıcı kullanıyorsunuz.', 'Daha fazla bilgi &#187;'],
            'vi': ['Trình duyệt bạn dùng đã lỗi thời rồi.', 'Thêm thông tin &#187;'],
            'zh': ['您的浏览器版本过旧。', '更多信息 &#187;'],
            'zh-tw': ['你正在使用過時的瀏覽器。', '詳細資訊 &#187;']
        };
    }
    ), (function(module, exports, __webpack_require__) {
        (function(process) {
            function detect() {
                var nodeVersion = getNodeVersion();
                if (nodeVersion) {
                    return nodeVersion;
                } else if (typeof navigator !== 'undefined') {
                    return parseUserAgent(navigator.userAgent);
                }
                return null;
            }
            function detectOS(userAgentString) {
                var rules = getOperatingSystemRules();
                var detected = rules.filter(function(os) {
                    return os.rule && os.rule.test(userAgentString);
                })[0];
                return detected ? detected.name : null;
            }
            function getNodeVersion() {
                var isNode = typeof navigator === 'undefined' && typeof process !== 'undefined';
                return isNode ? {
                    name: 'node',
                    version: process.version.slice(1),
                    os: __webpack_require__(4).type().toLowerCase()
                } : null;
            }
            function parseUserAgent(userAgentString) {
                var browsers = getBrowserRules();
                if (!userAgentString) {
                    return null;
                }
                var detected = browsers.map(function(browser) {
                    var match = browser.rule.exec(userAgentString);
                    var version = match && match[1].split(/[._]/).slice(0, 3);
                    if (version && version.length < 3) {
                        version = version.concat(version.length == 1 ? [0, 0] : [0]);
                    }
                    return match && {
                        name: browser.name,
                        version: version.join('.')
                    };
                }).filter(Boolean)[0] || null;
                if (detected) {
                    detected.os = detectOS(userAgentString);
                }
                return detected;
            }
            function getBrowserRules() {
                return buildRules([['edge', /Edge\/([0-9\._]+)/], ['yandexbrowser', /YaBrowser\/([0-9\._]+)/], ['vivaldi', /Vivaldi\/([0-9\.]+)/], ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/], ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/], ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/], ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/], ['fxios', /FxiOS\/([0-9\.]+)/], ['opera', /Opera\/([0-9\.]+)(?:\s|$)/], ['opera', /OPR\/([0-9\.]+)(:?\s|$)$/], ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ['ie', /MSIE\s(7\.0)/], ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/], ['android', /Android\s([0-9\.]+)/], ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/], ['safari', /Version\/([0-9\._]+).*Safari/]]);
            }
            function getOperatingSystemRules() {
                return buildRules([['iOS', /iP(hone|od|ad)/], ['Android OS', /Android/], ['BlackBerry OS', /BlackBerry|BB10/], ['Windows Mobile', /IEMobile/], ['Amazon OS', /Kindle/], ['Windows 3.11', /Win16/], ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/], ['Windows 98', /(Windows 98)|(Win98)/], ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/], ['Windows XP', /(Windows NT 5.1)|(Windows XP)/], ['Windows Server 2003', /(Windows NT 5.2)/], ['Windows Vista', /(Windows NT 6.0)/], ['Windows 7', /(Windows NT 6.1)/], ['Windows 8', /(Windows NT 6.2)/], ['Windows 8.1', /(Windows NT 6.3)/], ['Windows 10', /(Windows NT 10.0)/], ['Windows ME', /Windows ME/], ['Open BSD', /OpenBSD/], ['Sun OS', /SunOS/], ['Linux', /(Linux)|(X11)/], ['Mac OS', /(Mac_PowerPC)|(Macintosh)/], ['QNX', /QNX/], ['BeOS', /BeOS/], ['OS/2', /OS\/2/], ['Search Bot', /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]]);
            }
            function buildRules(ruleTuples) {
                return ruleTuples.map(function(tuple) {
                    return {
                        name: tuple[0],
                        rule: tuple[1]
                    };
                });
            }
            module.exports = {
                detect: detect,
                detectOS: detectOS,
                getNodeVersion: getNodeVersion,
                parseUserAgent: parseUserAgent
            };
        }
        .call(exports, __webpack_require__(5)))
    }
    ), (function(module, exports, __webpack_require__) {
        "use strict";
        var _slicedToArray = function() {
            function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = undefined;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i)
                            break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally {
                    try {
                        if (!_n && _i["return"])
                            _i["return"]();
                    } finally {
                        if (_d)
                            throw _e;
                    }
                }
                return _arr;
            }
            return function(arr, i) {
                if (Array.isArray(arr)) {
                    return arr;
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                } else {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
            }
            ;
        }();
        var _detectBrowser = __webpack_require__(1);
        var _translations = __webpack_require__(0);
        var _translations2 = _interopRequireDefault(_translations);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        (function() {
            var options = CloudflareApps.installs['Gja7vEoCkvPD'].options;
            var appElement = void 0;
            var _window = window
              , _window$localStorage = _window.localStorage
              , localStorage = _window$localStorage === undefined ? {} : _window$localStorage;
            var DAY_DURATION = 1000 * 60 * 60 * 24;
            var now = new Date();
            var weekAgo = new Date(now - DAY_DURATION * 7);
            var seenRecently = localStorage.cfBetterBrowserDismissedAt && new Date(parseInt(localStorage.cfBetterBrowserDismissedAt, 10)) >= weekAgo;
            var detected = {};
            try {
                var browser = (0,
                _detectBrowser.detect)();
                detected.name = browser.name;
                detected.version = parseFloat(browser.version.match(/^(\d+\.?\d*)/));
                detected.minimum = options[browser.name] || 0;
            } catch (e) {
                return;
            }
            var legacyBodyClass = 'cloudflare-old-browser-body';
            function removeBodyClass() {
                document.body.className = document.body.className.replace(new RegExp('(?:^|s)' + legacyBodyClass + '(?!S)','g'), '');
            }
            function updateElement() {
                var outdated = detected.version < detected.minimum;
                var visibility = !seenRecently && outdated ? 'visible' : 'hidden';
                removeBodyClass();
                if ("Gja7vEoCkvPD" === 'preview')
                    visibility = 'visible';
                document.body.setAttribute('data-cf-browser-state', outdated ? 'outdated' : 'modern');
                document.body.setAttribute('data-cf-browser-version', detected.version);
                document.body.setAttribute('data-cf-browser-name', detected.name);
                if (visibility !== 'visible')
                    return;
                var language = window.navigator.language || window.navigator.userLanguage || 'en';
                var _ref = _translations2.default[language] || _translations2.default[language.substring(0, 2)] || _translations2.default.en
                  , _ref2 = _slicedToArray(_ref, 2)
                  , messageLabel = _ref2[0]
                  , moreLabel = _ref2[1];
                appElement = appElement || document.createElement('cloudflare-app');
                appElement.setAttribute('app', 'a-better-browser');
                appElement.id = 'cloudflare-old-browser';
                appElement.innerHTML = '\n      <cloudflare-app-message>\n        ' + messageLabel + '\n        <a href="https://browsehappy.com/?locale=' + language + '" target="_blank" rel="noopener noreferrer">' + moreLabel + '</a>\n        </cloudflare-app-message>\n      <cloudflare-app-close>&times;</cloudflare-app-close>\n    ';
                var closeButton = appElement.querySelector('cloudflare-app-close');
                closeButton.id = 'cloudflare-old-browser-close';
                closeButton.addEventListener('click', function() {
                    appElement.setAttribute('data-visibility', 'hidden');
                    localStorage.cfBetterBrowserDismissedAt = now.getTime();
                    removeBodyClass();
                });
                appElement.setAttribute('data-visibility', visibility);
                document.body.appendChild(appElement);
                document.body.className += legacyBodyClass;
            }
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', updateElement);
            } else {
                updateElement();
            }
            window.CloudflareApps.installs['Gja7vEoCkvPD'].scope = {
                setOptions: function setOptions(nextOptions) {
                    options = nextOptions;
                    updateElement();
                }
            };
        }
        )();
    }
    ), , (function(module, exports) {
        exports.endianness = function() {
            return 'LE'
        }
        ;
        exports.hostname = function() {
            if (typeof location !== 'undefined') {
                return location.hostname
            } else
                return '';
        }
        ;
        exports.loadavg = function() {
            return []
        }
        ;
        exports.uptime = function() {
            return 0
        }
        ;
        exports.freemem = function() {
            return Number.MAX_VALUE;
        }
        ;
        exports.totalmem = function() {
            return Number.MAX_VALUE;
        }
        ;
        exports.cpus = function() {
            return []
        }
        ;
        exports.type = function() {
            return 'Browser'
        }
        ;
        exports.release = function() {
            if (typeof navigator !== 'undefined') {
                return navigator.appVersion;
            }
            return '';
        }
        ;
        exports.networkInterfaces = exports.getNetworkInterfaces = function() {
            return {}
        }
        ;
        exports.arch = function() {
            return 'javascript'
        }
        ;
        exports.platform = function() {
            return 'browser'
        }
        ;
        exports.tmpdir = exports.tmpDir = function() {
            return '/tmp';
        }
        ;
        exports.EOL = '\n';
    }
    ), (function(module, exports) {
        var process = module.exports = {};
        var cachedSetTimeout;
        var cachedClearTimeout;
        function defaultSetTimout() {
            throw new Error('setTimeout has not been defined');
        }
        function defaultClearTimeout() {
            throw new Error('clearTimeout has not been defined');
        }
        (function() {
            try {
                if (typeof setTimeout === 'function') {
                    cachedSetTimeout = setTimeout;
                } else {
                    cachedSetTimeout = defaultSetTimout;
                }
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                if (typeof clearTimeout === 'function') {
                    cachedClearTimeout = clearTimeout;
                } else {
                    cachedClearTimeout = defaultClearTimeout;
                }
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }())
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
                return setTimeout(fun, 0);
            }
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
            }
            try {
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
                return clearTimeout(marker);
            }
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
            }
            try {
                return cachedClearTimeout(marker);
            } catch (e) {
                try {
                    return cachedClearTimeout.call(null, marker);
                } catch (e) {
                    return cachedClearTimeout.call(this, marker);
                }
            }
        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;
        function cleanUpNextTick() {
            if (!draining || !currentQueue) {
                return;
            }
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue);
            } else {
                queueIndex = -1;
            }
            if (queue.length) {
                drainQueue();
            }
        }
        function drainQueue() {
            if (draining) {
                return;
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;
            var len = queue.length;
            while (len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                    if (currentQueue) {
                        currentQueue[queueIndex].run();
                    }
                }
                queueIndex = -1;
                len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
        }
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                }
            }
            queue.push(new Item(fun,args));
            if (queue.length === 1 && !draining) {
                runTimeout(drainQueue);
            }
        }
        ;
        function Item(fun, array) {
            this.fun = fun;
            this.array = array;
        }
        Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        }
        ;
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = '';
        process.versions = {};
        function noop() {}
        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;
        process.listeners = function(name) {
            return []
        }
        process.binding = function(name) {
            throw new Error('process.binding is not supported');
        }
        ;
        process.cwd = function() {
            return '/'
        }
        ;
        process.chdir = function(dir) {
            throw new Error('process.chdir is not supported');
        }
        ;
        process.umask = function() {
            return 0;
        }
        ;
    }
    )]);
}
;(function() {
    try {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwPSJhLWJldHRlci1icm93c2VyIl0gew0KICBkaXNwbGF5OiBibG9jazsNCiAgYmFja2dyb3VuZDogIzQ1NDg0ZDsNCiAgY29sb3I6ICNmZmY7DQogIGxpbmUtaGVpZ2h0OiAxLjQ1Ow0KICBwb3NpdGlvbjogZml4ZWQ7DQogIHotaW5kZXg6IDkwMDAwMDAwOw0KICB0b3A6IDA7DQogIGxlZnQ6IDA7DQogIHJpZ2h0OiAwOw0KICBwYWRkaW5nOiAuNWVtIDFlbTsNCiAgdGV4dC1hbGlnbjogY2VudGVyOw0KICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOw0KICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOw0KICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOw0KICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOw0KfQ0KDQpjbG91ZGZsYXJlLWFwcFthcHA9ImEtYmV0dGVyLWJyb3dzZXIiXVtkYXRhLXZpc2liaWxpdHk9ImhpZGRlbiJdIHsNCiAgZGlzcGxheTogbm9uZTsNCn0NCg0KY2xvdWRmbGFyZS1hcHBbYXBwPSJhLWJldHRlci1icm93c2VyIl0gY2xvdWRmbGFyZS1hcHAtbWVzc2FnZSB7DQogIGRpc3BsYXk6IGJsb2NrOw0KfQ0KDQpjbG91ZGZsYXJlLWFwcFthcHA9ImEtYmV0dGVyLWJyb3dzZXIiXSBhIHsNCiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7DQogIGNvbG9yOiAjZWJlYmY0Ow0KfQ0KDQpjbG91ZGZsYXJlLWFwcFthcHA9ImEtYmV0dGVyLWJyb3dzZXIiXSBhOmhvdmVyLA0KY2xvdWRmbGFyZS1hcHBbYXBwPSJhLWJldHRlci1icm93c2VyIl0gYTphY3RpdmUgew0KICBjb2xvcjogI2RiZGJlYjsNCn0NCg0KY2xvdWRmbGFyZS1hcHBbYXBwPSJhLWJldHRlci1icm93c2VyIl0gY2xvdWRmbGFyZS1hcHAtY2xvc2Ugew0KICBkaXNwbGF5OiBibG9jazsNCiAgY3Vyc29yOiBwb2ludGVyOw0KICBmb250LXNpemU6IDEuNWVtOw0KICBwb3NpdGlvbjogYWJzb2x1dGU7DQogIHJpZ2h0OiAuNGVtOw0KICB0b3A6IC4zNWVtOw0KICBoZWlnaHQ6IDFlbTsNCiAgd2lkdGg6IDFlbTsNCiAgbGluZS1oZWlnaHQ6IDE7DQp9DQoNCmNsb3VkZmxhcmUtYXBwW2FwcD0iYS1iZXR0ZXItYnJvd3NlciJdIGNsb3VkZmxhcmUtYXBwLWNsb3NlOmFjdGl2ZSB7DQogIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7DQogICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7DQp9DQoNCmNsb3VkZmxhcmUtYXBwW2FwcD0iYS1iZXR0ZXItYnJvd3NlciJdIGNsb3VkZmxhcmUtYXBwLWNsb3NlOmhvdmVyIHsNCiAgb3BhY2l0eTogLjllbTsNCiAgY29sb3I6ICNmZmY7DQp9DQo=';
        document.getElementsByTagName('head')[0].appendChild(link);
    } catch (e) {}
}
)();
