'use strict';



;define('front-end-kitady/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONAPIAdapter.extend({
        host: 'https://agile-shore-96727.herokuapp.com/api/v1'
        //namespace:'api',
    });
});
;define('front-end-kitady/app', ['exports', 'front-end-kitady/resolver', 'ember-load-initializers', 'front-end-kitady/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('front-end-kitady/components/about-us', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('front-end-kitady/components/frequently-asked-questions', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('front-end-kitady/components/main-cover', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('front-end-kitady/components/nav-bar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('front-end-kitady/components/nav-footer', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('front-end-kitady/components/our-banks', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('front-end-kitady/components/pricing-table', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('front-end-kitady/components/product-feature', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('front-end-kitady/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('front-end-kitady/helpers/app-version', ['exports', 'front-end-kitady/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('front-end-kitady/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('front-end-kitady/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('front-end-kitady/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'front-end-kitady/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('front-end-kitady/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('front-end-kitady/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('front-end-kitady/initializers/export-application-global', ['exports', 'front-end-kitady/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('front-end-kitady/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('front-end-kitady/models/request', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    fullname: _emberData.default.attr('string'),
    email: _emberData.default.attr('string'),
    phonenumber: _emberData.default.attr('string'),
    bordereaunumber: _emberData.default.attr('string'),
    cardtype: _emberData.default.attr('string'),
    cardvalue: _emberData.default.attr('number'),
    bankname: _emberData.default.attr('string'),
    amountdeposited: _emberData.default.attr('string'),
    message: _emberData.default.attr('string')
  });
});
;define('front-end-kitady/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('front-end-kitady/router', ['exports', 'front-end-kitady/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
;define('front-end-kitady/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    actions: {
      requestCard: function () {

        var fullName = document.getElementById('fullName').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var bolderoNumber = document.getElementById('boldero_numer').value;
        var amoundDeposited = document.getElementById('amound_deposited').value;
        var message = document.getElementById('message').value.toString();
        var typeOfBank = document.getElementById('type_of_bank').value;
        var typeOfCard = document.getElementById('type_of_card').value;
        var budget = document.getElementById('budget').value;

        if (message === '') message = 'no message';
        console.log(message);

        let newRecord = this.store.createRecord('request', {
          "fullname": fullName,
          "email": email,
          "phonenumber": phone,
          "bordereaunumber": bolderoNumber,
          "cardtype": typeOfCard,
          "cardvalue": Number(budget),
          "bankname": typeOfBank,
          "amountdeposited": amoundDeposited,
          "message": message
        }).save().then(alert('Pedido Enviado'));
        // .catch(alert('Ocorreu um erro ao enviar o seu pedido. Por favor, certifique-se que o seus dados estão correctos. Ou pode ainda enviar o pedido pelo nosso numero do WhatsApp'));
        // .catch(function(reason){alert(reason.message)}
        //   );
      }
    }

  });
});
;define('front-end-kitady/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("front-end-kitady/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fhu/8WLO", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "front-end-kitady/templates/application.hbs" } });
});
;define("front-end-kitady/templates/components/about-us", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0K+QZ0BN", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\\n\"],[2,\"================Choose Us Area =================\"],[0,\"\\n\\n\"],[7,\"section\"],[11,\"class\",\"choose_us_area\"],[11,\"id\",\"about\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row left_choose_image\"],[9],[0,\"\\n      \"],[7,\"ul\"],[9],[0,\"\\n        \"],[2,\" <li><img src=\\\"{{rootURL}}assets/images/kitady_amazon.png\\\" alt=\\\"\\\"></li> \"],[0,\"\\n        \"],[7,\"li\"],[9],[7,\"img\"],[11,\"style\",\"width: 50vh\"],[12,\"src\",[28,[[21,\"rootURL\"],\"assets/images/kitady_visa.png\"]]],[11,\"alt\",\"\"],[11,\"data-parallax\",\"{\\\"x\\\": 25, \\\"y\\\": -50}\"],[9],[10],[10],[0,\"\\n        \"],[7,\"li\"],[9],[7,\"img\"],[11,\"style\",\"width: 50vh\"],[12,\"src\",[28,[[21,\"rootURL\"],\"assets/images/kitady_play_store.png\"]]],[11,\"alt\",\"\"],[11,\"data-parallax\",\"{\\\"x\\\": 50, \\\"y\\\": -100}\"],[9],[10],[10],[0,\"\\n        \"],[7,\"li\"],[9],[7,\"img\"],[11,\"style\",\"width: 50vh\"],[12,\"src\",[28,[[21,\"rootURL\"],\"assets/images/kitady_master_card.png\"]]],[11,\"alt\",\"\"],[11,\"data-parallax\",\"{\\\"x\\\": 90, \\\"y\\\": -180}\"],[9],[10],[10],[0,\"\\n        \"],[7,\"li\"],[9],[7,\"img\"],[11,\"style\",\"width: 50vh\"],[12,\"src\",[28,[[21,\"rootURL\"],\"assets/images/kitady_amazon.png\"]]],[11,\"alt\",\"\"],[11,\"data-parallax\",\"{\\\"x\\\": 20, \\\"y\\\": -130}\"],[9],[10],[10],[0,\"\\n        \"],[7,\"li\"],[9],[7,\"img\"],[11,\"style\",\"width: 50vh\"],[12,\"src\",[28,[[21,\"rootURL\"],\"assets/images/kitady_ebay.png\"]]],[11,\"alt\",\"\"],[11,\"data-parallax\",\"{\\\"x\\\": 20, \\\"y\\\": -100}\"],[9],[10],[10],[0,\"\\n\\n\\n        \"],[2,\" <li><img src=\\\"{{rootURL}}assets/template_images/mockup-img/m-image-7.png\\\" alt=\\\"\\\"></li> \"],[0,\"\\n        \"],[7,\"li\"],[9],[7,\"img\"],[11,\"style\",\"width: 50vh\"],[12,\"src\",[28,[[21,\"rootURL\"],\"assets/images/kitady_apple_store.png\"]]],[11,\"alt\",\"\"],[11,\"data-parallax\",\"{\\\"x\\\": 90, \\\"y\\\": -180}\"],[9],[10],[10],[0,\"\\n\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"right_choose_image\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"left_title\"],[9],[0,\"\\n        \"],[7,\"h2\"],[11,\"style\",\"font-weight: bold;color:#000000AA\"],[9],[0,\"porquê ESCOLHER-NOS ?\"],[10],[0,\"\\n        \"],[7,\"p\"],[11,\"style\",\"color:#000000AA\"],[9],[0,\"Kitady é uma empresa criada para suprir as necessidades que a população africana tem fazer compras internacionais online.\\n          Nós facilitamos o acesso à cartões digitais de compras internacionais como: \"],[10],[0,\"\\n\\n        \"],[2,\" o Visa, amazon, apple, google play e muito mais.\"],[0,\"\\n        \"],[2,\"<p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>\"],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row choose_item_inner\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-6 col-xs-6\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"choose_item\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"media\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"media-left\"],[9],[0,\"\\n                \"],[7,\"a\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-cc-visa\"],[9],[10],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"media-body\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"style\",\"\"],[9],[0,\"VISA\"],[10],[0,\"\\n\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-6 col-xs-6\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"choose_item\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"media\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"media-left\"],[9],[0,\"\\n                \"],[7,\"a\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-apple\"],[9],[10],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"media-body\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"style\",\"\"],[9],[0,\"Apple\"],[10],[0,\"\\n\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-6 col-xs-6\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"choose_item\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"media\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"media-left\"],[9],[0,\"\\n                \"],[7,\"a\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-amazon\"],[9],[10],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"media-body\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"style\",\"\"],[9],[0,\"Amazon\"],[10],[0,\"\\n\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-6 col-xs-6\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"choose_item\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"media\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"media-left\"],[9],[0,\"\\n                \"],[7,\"a\"],[9],[7,\"i\"],[11,\"class\",\"fab fa-ebay\"],[9],[10],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"media-body\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"style\",\"\"],[9],[0,\"Ebay\"],[10],[0,\"\\n\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-6 col-xs-6\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"choose_item\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"media\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"media-left\"],[9],[0,\"\\n                \"],[7,\"a\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-cc-mastercard\"],[9],[10],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"media-body\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"style\",\"\"],[9],[0,\"MasterCard\"],[10],[0,\"\\n\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-6 col-xs-6\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"choose_item\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"media\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"media-left\"],[9],[0,\"\\n                \"],[7,\"a\"],[9],[7,\"i\"],[11,\"class\",\"fab fa-google-play\"],[9],[10],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"media-body\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"style\",\"\"],[9],[0,\"Google Play\"],[10],[0,\"\\n\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[2,\"================End Choose Us Area =================\"],[0,\"\\n\\n\\n\"],[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "front-end-kitady/templates/components/about-us.hbs" } });
});
;define("front-end-kitady/templates/components/frequently-asked-questions", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+Jn/UpkX", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[2,\"================Question Area =================\"],[0,\"\\n\"],[7,\"section\"],[11,\"class\",\"question_area\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"main_title\"],[9],[0,\"\\n      \"],[7,\"h2\"],[11,\"style\",\"font-weight: bold\"],[9],[0,\"Perguntas frequentes\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-12\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"left_question_inner\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"panel-group\"],[11,\"id\",\"accordion\"],[11,\"role\",\"tablist\"],[11,\"aria-multiselectable\",\"true\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"panel-heading\"],[11,\"role\",\"tab\"],[11,\"id\",\"headingOne\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"panel-title\"],[9],[0,\"\\n                  \"],[7,\"a\"],[11,\"role\",\"button\"],[11,\"data-toggle\",\"collapse\"],[11,\"data-parent\",\"#accordion\"],[11,\"href\",\"#collapseOne\"],[11,\"aria-expanded\",\"true\"],[11,\"aria-controls\",\"collapseOne\"],[9],[0,\"\\n                    1. Quanto tempo leva para a emissão de um cartão ?\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-minus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-plus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"id\",\"collapseOne\"],[11,\"class\",\"panel-collapse collapse in\"],[11,\"role\",\"tabpanel\"],[11,\"aria-labelledby\",\"headingOne\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                  Os cartões são emitidos em, no máximo, 48 horas. Um máximo de 24 horas para o processamento do pedido e outras 24 horas para a emissão do cartão.\\n\\n                \"],[10],[0,\"\\n\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"panel-heading\"],[11,\"role\",\"tab\"],[11,\"id\",\"headingTwo\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"panel-title\"],[9],[0,\"\\n                  \"],[7,\"a\"],[11,\"class\",\"collapsed\"],[11,\"role\",\"button\"],[11,\"data-toggle\",\"collapse\"],[11,\"data-parent\",\"#accordion\"],[11,\"href\",\"#collapseTwo\"],[11,\"aria-expanded\",\"false\"],[11,\"aria-controls\",\"collapseTwo\"],[9],[0,\"\\n                    2. Onde posso utilizar estes cartões ?\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-minus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-plus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"id\",\"collapseTwo\"],[11,\"class\",\"panel-collapse collapse\"],[11,\"role\",\"tabpanel\"],[11,\"aria-labelledby\",\"headingTwo\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                  Estes cartões podem ser utilizados em qualquer loja da mesma marca. Por exemplo, se adquirir um cartão da \"],[7,\"strong\"],[9],[0,\"Amazon\"],[10],[0,\", o mesmo poderá ser usado em lojas e serviços da \"],[7,\"strong\"],[9],[0,\"Amazon\"],[10],[0,\".\\n                  No caso de cartões \"],[7,\"strong\"],[9],[0,\"Visa\"],[10],[0,\" e \"],[7,\"strong\"],[9],[0,\"MasterCard\"],[10],[0,\", poderá utilizá-los em qualquer loja online que aceite tais cartões.\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"panel-heading\"],[11,\"role\",\"tab\"],[11,\"id\",\"headingThree\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"panel-title\"],[9],[0,\"\\n                  \"],[7,\"a\"],[11,\"class\",\"collapsed\"],[11,\"role\",\"button\"],[11,\"data-toggle\",\"collapse\"],[11,\"data-parent\",\"#accordion\"],[11,\"href\",\"#collapseThree\"],[11,\"aria-expanded\",\"false\"],[11,\"aria-controls\",\"collapseThree\"],[9],[0,\"\\n                    3. Estes cartões são confiáveis?\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-minus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-plus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"id\",\"collapseThree\"],[11,\"class\",\"panel-collapse collapse\"],[11,\"role\",\"tabpanel\"],[11,\"aria-labelledby\",\"headingThree\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                  Sim. Os nossos cartões são emitidos e verificados pelas empresas específicas(Amazon, Visa, MasterCard, etc...) à pedido da Kitady.\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"panel-heading\"],[11,\"role\",\"tab\"],[11,\"id\",\"headingfour\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"panel-title\"],[9],[0,\"\\n                  \"],[7,\"a\"],[11,\"class\",\"collapsed\"],[11,\"role\",\"button\"],[11,\"data-toggle\",\"collapse\"],[11,\"data-parent\",\"#accordion\"],[11,\"href\",\"#collapsefour\"],[11,\"aria-expanded\",\"false\"],[11,\"aria-controls\",\"collapsefour\"],[9],[0,\"\\n                    4. Quantas vezes posso utilizar o mesmo cartão ?\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-minus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-plus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"id\",\"collapsefour\"],[11,\"class\",\"panel-collapse collapse\"],[11,\"role\",\"tabpanel\"],[11,\"aria-labelledby\",\"headingfour\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                  Um cartão pode ser utilizado até 4 vezes por apenas um único usuário.\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\\n            \"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"panel-heading\"],[11,\"role\",\"tab\"],[11,\"id\",\"headingfive\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"panel-title\"],[9],[0,\"\\n                  \"],[7,\"a\"],[11,\"class\",\"collapsed\"],[11,\"role\",\"button\"],[11,\"data-toggle\",\"collapse\"],[11,\"data-parent\",\"#accordion\"],[11,\"href\",\"#collapsefive\"],[11,\"aria-expanded\",\"false\"],[11,\"aria-controls\",\"collapsefour\"],[9],[0,\"\\n                    5. Quanto tempo leva para o cartão expirar?\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-minus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-plus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"id\",\"collapsefive\"],[11,\"class\",\"panel-collapse collapse\"],[11,\"role\",\"tabpanel\"],[11,\"aria-labelledby\",\"headingfour\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                  Os nossos cartões têm um periodo de validade de 1 mês depois da data de emissão.\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\\n            \"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"panel-heading\"],[11,\"role\",\"tab\"],[11,\"id\",\"headingsix\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"panel-title\"],[9],[0,\"\\n                  \"],[7,\"a\"],[11,\"class\",\"collapsed\"],[11,\"role\",\"button\"],[11,\"data-toggle\",\"collapse\"],[11,\"data-parent\",\"#accordion\"],[11,\"href\",\"#collapsesix\"],[11,\"aria-expanded\",\"false\"],[11,\"aria-controls\",\"collapsefour\"],[9],[0,\"\\n                    6. Se eu quiser o cartão de uma loja que não está listada aqui?\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-minus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-plus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"id\",\"collapsesix\"],[11,\"class\",\"panel-collapse collapse\"],[11,\"role\",\"tabpanel\"],[11,\"aria-labelledby\",\"headingsix\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                  A Kitady recebe pedidos de cartões para outras lojas específicas. Envia o teu pedido para \"],[7,\"a\"],[11,\"href\",\"mailto:info@angoapp.com\"],[9],[7,\"strong\"],[9],[0,\"geral@usekitady.com\"],[10],[10],[0,\" e nós verificaremos a disponibilidade do cartão requerido. \"],[7,\"strong\"],[9],[0,\" A Kitady não adicionará taxas extra ao preço de cartões personalizados. Os preços listados nesse website se aplicam também para todos cartões customizados.\"],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\\n\\n\\n            \"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"panel-heading\"],[11,\"role\",\"tab\"],[11,\"id\",\"headingseven\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"panel-title\"],[9],[0,\"\\n                  \"],[7,\"a\"],[11,\"class\",\"collapsed\"],[11,\"role\",\"button\"],[11,\"data-toggle\",\"collapse\"],[11,\"data-parent\",\"#accordion\"],[11,\"href\",\"#collapseseven\"],[11,\"aria-expanded\",\"false\"],[11,\"aria-controls\",\"collapsefour\"],[9],[0,\"\\n                    7. Como é que eu recebo o meu cartão Kitady?\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-minus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-plus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"id\",\"collapseseven\"],[11,\"class\",\"panel-collapse collapse\"],[11,\"role\",\"tabpanel\"],[11,\"aria-labelledby\",\"headingseven\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                  O seu cartão Kitady será enviado para si por email (método padrão). Se fizer o seu pedido pelo WhatsApp, pode requerir que o cartão seja enviado pela mesma via.\\n\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\\n\\n            \"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"panel-heading\"],[11,\"role\",\"tab\"],[11,\"id\",\"headingeight\"],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"panel-title\"],[9],[0,\"\\n                  \"],[7,\"a\"],[11,\"class\",\"collapsed\"],[11,\"role\",\"button\"],[11,\"data-toggle\",\"collapse\"],[11,\"data-parent\",\"#accordion\"],[11,\"href\",\"#collapseeight\"],[11,\"aria-expanded\",\"false\"],[11,\"aria-controls\",\"collapsefour\"],[9],[0,\"\\n                    8. Não recebo/vejo os emails da Kitady. O que faço?\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-minus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                    \"],[7,\"i\"],[11,\"class\",\"fa fa-plus\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"id\",\"collapseeight\"],[11,\"class\",\"panel-collapse collapse\"],[11,\"role\",\"tabpanel\"],[11,\"aria-labelledby\",\"headingeight\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                  Verifique na sua caixa de \"],[7,\"strong\"],[9],[0,\"“Emails de lixo”\"],[10],[0,\" ou \"],[7,\"strong\"],[9],[0,\"“Spam”\"],[10],[0,\". Caso encontre os emails da Kitady nessas caixas, marque Kitady como seguro para passar a receber os emails normalmente na sua caixa de entrada. Se ainda assim não encontrar os emails da Kitady, entre em contacto connosco para solucionarmos o seu problema.\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[2,\" <div class=\\\"col-md-5\\\">\\n        <div class=\\\"right_question_img\\\">\\n          <img src=\\\"{{rootURL}}assets/template_images/question-tab.png\\\" alt=\\\"\\\">\\n        </div>\\n      </div> \"],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[2,\"================End Question Area =================\"],[0,\"\\n\\n\"],[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "front-end-kitady/templates/components/frequently-asked-questions.hbs" } });
});
;define("front-end-kitady/templates/components/main-cover", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Z1w0JUgA", "block": "{\"symbols\":[\"&default\"],\"statements\":[[2,\"================Banner Nine Area =================\"],[0,\"\\n\"],[7,\"section\"],[11,\"class\",\"banner_nine_area\"],[12,\"style\",[28,[\"padding-top: 80px; background-image: url('\",[21,\"rootURL\"],\"assets/template_images/banner-n-bg.jpg');\"]]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-7\"],[11,\"style\",\"height: 90vh\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"b_nine_text\"],[9],[0,\"\\n\\n          \"],[7,\"div\"],[11,\"class\",\"main_title\"],[9],[0,\"\\n            \"],[7,\"h2\"],[9],[0,\"ESCOLHA O CARTÃO DA TUA LOJA FAVORITA\"],[10],[0,\"\\n            \"],[7,\"p\"],[11,\"style\",\"font-weight: bold;color:#000000AA\"],[9],[0,\"Cartões Visa, Amazon, Ebay, MasterCard, Google Play, Apple Store, ....\"],[10],[0,\"\\n            \"],[7,\"a\"],[11,\"href\",\"#user-form\"],[9],[7,\"button\"],[11,\"value\",\"submit your quote\"],[11,\"class\",\"btn submint_btn form-control\"],[11,\"type\",\"submit\"],[9],[0,\"Fazer Pedido\"],[10],[10],[0,\"\\n          \"],[10],[0,\"\\n\\n\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[2,\"================End Banner Nine Area =================\"],[0,\"\\n\\n\"],[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "front-end-kitady/templates/components/main-cover.hbs" } });
});
;define("front-end-kitady/templates/components/nav-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/dOHlNmk", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[2,\"================Header Area =================\"],[0,\"\\n\"],[7,\"header\"],[11,\"class\",\"main_header_area \"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"main_menu_area\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n      \"],[7,\"nav\"],[11,\"class\",\"navbar navbar-default \"],[11,\"style\",\"background-color: #FFFFFF\"],[9],[0,\"\\n        \"],[2,\" Brand and toggle get grouped for better mobile display \"],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"navbar-header\"],[9],[0,\"\\n          \"],[7,\"button\"],[11,\"class\",\"navbar-toggle collapsed\"],[11,\"data-toggle\",\"collapse\"],[11,\"data-target\",\"#bs-example-navbar-collapse-1\"],[11,\"aria-expanded\",\"false\"],[11,\"type\",\"button\"],[9],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[0,\"Toggle navigation\"],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"icon-bar\"],[9],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"icon-bar\"],[9],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"icon-bar\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"div\"],[9],[0,\"\\n            \"],[7,\"a\"],[11,\"class\",\"navbar-brand\"],[11,\"href\",\"/\"],[11,\"style\",\"margin-left: 40px;color: #000;font-size: 8px;\"],[9],[7,\"img\"],[12,\"src\",[28,[[21,\"rootURL\"],\"assets/images/Kitady_logo_sem_fundo.png\"]]],[11,\"alt\",\"logo\"],[11,\"style\",\"width: 100px\"],[9],[10],[0,\"Emissão de Cartões Online\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[2,\" Collect the nav links, forms, and other content for toggling \"],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"collapse navbar-collapse\"],[11,\"id\",\"bs-example-navbar-collapse-1\"],[9],[0,\"\\n          \"],[7,\"ul\"],[11,\"class\",\"nav navbar-nav navbar-right\"],[9],[0,\"\\n\\n            \"],[2,\" <li class=\\\"active\\\"><a href=\\\"/\\\">Página Inicial</a></li> \"],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"active\"],[9],[7,\"a\"],[11,\"href\",\"#user-form\"],[9],[0,\"Fazer pedido\"],[10],[10],[0,\"\\n            \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#about\"],[9],[0,\"SOBRE\"],[10],[10],[0,\"\\n            \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#price\"],[9],[0,\"Preçário\"],[10],[10],[0,\"\\n            \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#feature\"],[9],[0,\"CARACTERÍSTICAS\"],[10],[10],[0,\"\\n\\n          \"],[10],[0,\"\\n        \"],[10],[2,\" /.navbar-collapse \"],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[2,\"================End Header Area =================\"],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "front-end-kitady/templates/components/nav-bar.hbs" } });
});
;define("front-end-kitady/templates/components/nav-footer", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QgybcZEh", "block": "{\"symbols\":[\"&default\"],\"statements\":[[2,\"================Footer Area =================\"],[0,\"\\n\"],[7,\"footer\"],[11,\"class\",\"footer_area\"],[11,\"id\",\"contact\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"footer_widget_area\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-4 col-xs-6\"],[9],[0,\"\\n          \"],[7,\"aside\"],[11,\"class\",\"f_widget home_widget\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"f_title\"],[9],[0,\"\\n              \"],[7,\"h3\"],[11,\"style\",\"color:#FFFFFF\"],[9],[0,\"Suporte\"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"ul\"],[9],[0,\"\\n              \"],[2,\" <li><a href=\\\"#\\\" style=\\\"font-weight: bold;color:#FFFFFF\\\">Perguntas Frequentes</a></li> \"],[0,\"\\n              \"],[7,\"li\"],[11,\"style\",\"color:#FFFFFF\"],[9],[0,\"Telefone : +244 946 342 240 (WhatsApp)\"],[10],[0,\"\\n              \"],[7,\"li\"],[11,\"style\",\"color:#FFFFFF\"],[9],[0,\"Telefone : +244 928 166 922 (WhatsApp)\"],[10],[0,\"\\n              \"],[7,\"li\"],[11,\"style\",\"color:#FFFFFF\"],[9],[0,\"Email : geral@usekitady.com\"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-3 col-xs-6\"],[9],[0,\"\\n          \"],[7,\"aside\"],[11,\"class\",\"f_widget home_widget\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"f_title\"],[9],[0,\"\\n              \"],[7,\"h3\"],[11,\"style\",\"color:#FFFFFF\"],[9],[0,\"Redes Sociais\"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n              \"],[7,\"ul\"],[9],[0,\"\\n                \"],[7,\"li\"],[9],[7,\"a\"],[11,\"target\",\"_blank\"],[11,\"href\",\"https://web.facebook.com/Kitady-638394353257063/?modal=admin_todo_tour\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-facebook \"],[11,\"style\",\"font-size:30px\"],[9],[10],[10],[0,\" \"],[10],[0,\"\\n                \"],[2,\" <a href=\\\"#\\\"><i class=\\\"fa fa-instagram \\\" style='font-size:30px'></i></a> \"],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[11,\"style\",\"margin-top:40px\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col-md-12\"],[9],[0,\"\\n              \"],[7,\"p\"],[11,\"class\",\"left\"],[9],[0,\"\\n                  \"],[7,\"small\"],[9],[0,\"© 2019 AngoApp.\"],[10],[0,\"\\n                  \"],[7,\"small\"],[11,\"class\",\"right\"],[9],[0,\"Website by \"],[7,\"a\"],[11,\"target\",\"_blank\"],[11,\"href\",\"https://www.angoapp.com/\"],[9],[0,\"AngoApp\"],[10],[10],[0,\"\\n              \"],[10],[0,\"\\n          \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\"],[2,\"================End Footer Area =================\"],[0,\"\\n\\n\"],[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "front-end-kitady/templates/components/nav-footer.hbs" } });
});
;define("front-end-kitady/templates/components/our-banks", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "isBKyUTx", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[2,\"================MacBook Mockup Area =================\"],[0,\"\\n\"],[7,\"section\"],[11,\"class\",\"install_app_area\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"install_left_content\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"left_title\"],[9],[0,\"\\n          \"],[7,\"h2\"],[11,\"style\",\"font-weight: bold;\"],[9],[0,\"COMO ADERIR AO SERVIÇO\"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"install_content\"],[9],[0,\"\\n          \"],[7,\"h5\"],[9],[0,\"1 - Faça o depósito da quantia corresponde ao cartão que deseja comprar em uma das nossas contas bancárias\"],[10],[0,\"\\n          \"],[7,\"p\"],[11,\"style\",\"padding-left:30px\"],[9],[0,\"OBS: Por favor, guarde o seu bordereau pois irá precisar para o processamento do o seu pedido.\"],[10],[0,\"\\n\\n          \"],[7,\"h5\"],[9],[0,\"2 - Preencha o nosso formulário online para que o seu pedido seja processado\"],[10],[0,\"\\n          \"],[7,\"a\"],[11,\"class\",\"gradient_bg_btn\"],[11,\"href\",\"#user-form\"],[11,\"style\",\"width: 300px\"],[9],[0,\"Preencha o Formulário* \"],[10],[0,\"\\n          \"],[7,\"p\"],[11,\"style\",\"margin-top: 10px\"],[9],[0,\"*Ou envie os dados do seu pedido para +244 946 342 240 (WhatsApp)\"],[10],[0,\"\\n\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"install_left_content\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"left_title\"],[9],[0,\"\\n          \"],[7,\"img\"],[12,\"src\",[28,[[21,\"rootURL\"],\"assets/template_images/bai_details.png\"]]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"install_content\"],[9],[0,\"\\n\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\"],[2,\"================End MacBook Mockup Area =================\"],[0,\"\\n\\n\\n\"],[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "front-end-kitady/templates/components/our-banks.hbs" } });
});
;define("front-end-kitady/templates/components/pricing-table", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wSIf6BQ2", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[2,\"================Pricing Table Area =================\"],[0,\"\\n\"],[7,\"section\"],[11,\"class\",\"price_table_area\"],[11,\"id\",\"price\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"main_title\"],[9],[0,\"\\n      \"],[7,\"h2\"],[11,\"style\",\"font-weight: bold;color:#000000AA\"],[9],[0,\"Preçário\"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"style\",\"color: #000000AA\"],[9],[0,\"A Kitady oferece preços baixos para a sua satisfação.\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"price_table_inner\"],[9],[0,\"\\n\\n\\n      \"],[7,\"div\"],[11,\"class\",\"price_item\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#user-form\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"price_header\"],[9],[0,\"\\n            \"],[7,\"h3\"],[9],[0,\"Valor de\"],[10],[0,\"\\n            \"],[7,\"h2\"],[9],[0,\"25$\"],[10],[0,\"\\n            \"],[7,\"h6\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Para um dos cartões a baixo\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\" \"],[9],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"fa fa-cc-visa \"],[11,\"style\",\"font-size:50px\"],[9],[10],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"fa fa-apple\"],[11,\"style\",\"font-size:50px\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\" \"],[9],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"fa fa-amazon\"],[11,\"style\",\"font-size:50px\"],[9],[10],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"fab fa-ebay\"],[11,\"style\",\"font-size:50px\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"a\"],[11,\"class\",\"price_btn\"],[11,\"href\",\"#\"],[9],[0,\"Por apenas: 13.000,00Kz\"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n\\n\\n\\n      \"],[7,\"div\"],[11,\"class\",\"price_item\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#user-form\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"price_header\"],[9],[0,\"\\n            \"],[7,\"h3\"],[9],[0,\"Valor de\"],[10],[0,\"\\n            \"],[7,\"h2\"],[9],[0,\"50$\"],[10],[0,\"\\n            \"],[7,\"h6\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Para um dos cartões a baixo\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\" \"],[9],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"fa fa-cc-visa \"],[11,\"style\",\"font-size:50px\"],[9],[10],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"fa fa-apple\"],[11,\"style\",\"font-size:50px\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\" \"],[9],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"fa fa-amazon\"],[11,\"style\",\"font-size:50px\"],[9],[10],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"fab fa-ebay\"],[11,\"style\",\"font-size:50px\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"a\"],[11,\"class\",\"price_btn\"],[11,\"href\",\"#\"],[9],[0,\"Por apenas: 26.000,00Kz\"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n\\n\\n      \"],[7,\"div\"],[11,\"class\",\"price_item\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#user-form\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"price_header\"],[9],[0,\"\\n            \"],[7,\"h3\"],[9],[0,\"Valor de\"],[10],[0,\"\\n            \"],[7,\"h2\"],[9],[0,\"100$\"],[10],[0,\"\\n            \"],[7,\"h6\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Para um dos cartões a baixo\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\" \"],[9],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"fa fa-cc-visa \"],[11,\"style\",\"font-size:50px\"],[9],[10],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"fa fa-apple\"],[11,\"style\",\"font-size:50px\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\" \"],[9],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"fa fa-amazon\"],[11,\"style\",\"font-size:50px\"],[9],[10],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"fab fa-ebay\"],[11,\"style\",\"font-size:50px\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"a\"],[11,\"class\",\"price_btn\"],[11,\"href\",\"#\"],[9],[0,\"Por apenas: 52.000,00Kz\"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n\\n\\n\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[2,\"================End Pricing Table Area =================\"],[0,\"\\n\"],[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "front-end-kitady/templates/components/pricing-table.hbs" } });
});
;define("front-end-kitady/templates/components/product-feature", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "omihVV/J", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\\n\\n\"],[2,\"================App Feature Area =================\"],[0,\"\\n\"],[7,\"section\"],[11,\"class\",\"app_feature_area\"],[11,\"id\",\"feature\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"main_title\"],[9],[0,\"\\n      \"],[7,\"h2\"],[11,\"style\",\"font-weight: bold;color:#000000AA\"],[9],[0,\"CARACTERÍSTICAS do KITADY\"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"style\",\"color:#000000AA\"],[9],[0,\"\\n        Nós existimos para suprir as suas necessidades de compras internacionalmente\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row app_feature_inner\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-3\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"app_feature_item_inner\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"app_feature_item\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"round_icon\"],[9],[0,\"\\n              \"],[7,\"i\"],[11,\"class\",\"material-icons\"],[9],[0,\"security\"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"a\"],[11,\"href\",\"#\"],[9],[7,\"h4\"],[11,\"style\",\"color:#000000AA\"],[9],[0,\"Segurança\"],[10],[10],[0,\"\\n            \"],[7,\"p\"],[11,\"style\",\"color:#000000AA\"],[9],[0,\"As nossas transações são feitas com serviços de seguranças reconhecidos internacionais.\"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"app_feature_item\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"round_icon\"],[9],[0,\"\\n              \"],[7,\"i\"],[11,\"class\",\"fas fa-hand-holding-usd\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"a\"],[11,\"href\",\"#\"],[9],[7,\"h4\"],[11,\"style\",\"color:#000000AA\"],[9],[0,\"Confiabilidade\"],[10],[10],[0,\"\\n            \"],[7,\"p\"],[11,\"style\",\"color:#000000AA\"],[9],[0,\"Empresas e privados confiam em nós para facilitar  as suas transações internacionais e não só.\"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"app_round_image\"],[9],[0,\"\\n          \"],[7,\"img\"],[11,\"class\",\"round_c\"],[12,\"src\",[28,[[21,\"rootURL\"],\"assets/template_images/round-circle.png\"]]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n          \"],[7,\"img\"],[11,\"class\",\"app_mobile\"],[12,\"src\",[28,[[21,\"rootURL\"],\"assets/template_images/family_card.png\"]]],[11,\"alt\",\"\"],[11,\"style\",\"height:60vh\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"app_feature_item app_middle\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"round_icon\"],[9],[0,\"\\n            \"],[7,\"i\"],[11,\"class\",\"fas fa-shipping-fast\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"a\"],[11,\"href\",\"#\"],[9],[7,\"h4\"],[11,\"style\",\"color:#000000AA\"],[9],[0,\"Rapidez\"],[10],[10],[0,\"\\n          \"],[7,\"p\"],[11,\"style\",\"color:#000000AA\"],[9],[0,\"Transações feitas na hora e com muita eficácia.\"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-3\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"app_feature_item_inner left_feature\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"app_feature_item\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"round_icon\"],[9],[0,\"\\n              \"],[7,\"i\"],[11,\"class\",\"material-icons\"],[9],[0,\"flight_takeoff\"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"a\"],[11,\"href\",\"#\"],[9],[7,\"h4\"],[11,\"style\",\"color:#000000AA\"],[9],[0,\"Serviços internacionais\"],[10],[10],[0,\"\\n            \"],[7,\"p\"],[11,\"style\",\"color:#000000AA\"],[9],[0,\"Connosco você terá acesso à produtos e serviços como os da Amazon, Apple store, Google Play, Visa, MasterCard e muitos mais.\"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"app_feature_item\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"round_icon\"],[9],[0,\"\\n              \"],[7,\"i\"],[11,\"class\",\"fas fa-calendar-check\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n\\n            \"],[7,\"a\"],[11,\"href\",\"#\"],[9],[7,\"h4\"],[11,\"style\",\"color:#000000AA\"],[9],[0,\"Assistência 24/24\"],[10],[10],[0,\"\\n            \"],[7,\"p\"],[11,\"style\",\"color:#000000AA\"],[9],[0,\"Se tiver algum problema ao utilizar os nossos serviços, nós estamos à uma chamada telefónica de si.\"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[2,\"================End App Feature Area =================\"],[0,\"\\n\\n\\n\"],[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "front-end-kitady/templates/components/product-feature.hbs" } });
});
;define("front-end-kitady/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "htcBpKPP", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"nav-bar\",null,null,{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\"],[4,\"main-cover\",null,null,{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\n\\n\\n\"],[4,\"about-us\",null,null,{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\n\\n\\n\"],[4,\"our-banks\",null,null,{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"user_form\"],[9],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[11,\"style\",\"height: 90vh;;margin: 80px 0px 80px 0px\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-md-12 col-xs-12\"],[11,\"style\",\"margin-top:10vh\"],[9],[0,\"\\n      \"],[7,\"aside\"],[11,\"class\",\"f_widget contact_widget\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"main_title \"],[9],[0,\"\\n          \"],[7,\"h2\"],[11,\"style\",\"font-weight: bold;color:#000000AA\"],[9],[0,\"Formulário\"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"form\"],[11,\"class\",\"row \"],[11,\"style\",\"margin-top: 50px\"],[11,\"method\",\"post\"],[11,\"id\",\"user-form\"],[3,\"action\",[[22,0,[]],\"requestCard\"],[[\"on\"],[\"submit\"]]],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"form-group col-md-12\"],[9],[0,\"\\n                \"],[1,[27,\"input\",null,[[\"required\",\"id\",\"type\",\"class\",\"placeholder\",\"value\"],[true,\"fullName\",\"text\",\"form-control\",\"Nome Completo\",[23,[\"fullName\"]]]]],false],[0,\"\\n\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"form-group col-md-12\"],[9],[0,\"\\n                \"],[2,\"<input type=\\\"text\\\" name=\\\"usrname\\\" required>\"],[0,\"\\n                \"],[1,[27,\"input\",null,[[\"required\",\"id\",\"type\",\"class\",\"placeholder\",\"name\",\"value\"],[true,\"phone\",\"number\",\"form-control\",\"Número de Telefone\",\"phone\",[23,[\"phone\"]]]]],false],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"form-group col-md-12\"],[9],[0,\"\\n                \"],[1,[27,\"input\",null,[[\"required\",\"id\",\"type\",\"class\",\"placeholder\",\"name\",\"value\"],[true,\"email\",\"email\",\"form-control\",\"E-Mail\",\"email\",[23,[\"email\"]]]]],false],[0,\"\\n              \"],[10],[0,\"\\n\\n              \"],[7,\"div\"],[11,\"class\",\"form-group col-md-12\"],[9],[0,\"\\n                \"],[1,[27,\"input\",null,[[\"required\",\"id\",\"type\",\"class\",\"placeholder\",\"name\",\"value\"],[true,\"boldero_numer\",\"text\",\"form-control\",\"Número do bordereau\",\"boldero_numer\",[23,[\"boldero_numer\"]]]]],false],[0,\"\\n              \"],[10],[0,\"\\n\\n              \"],[7,\"div\"],[11,\"class\",\"form-group col-md-12\"],[9],[0,\"\\n                \"],[1,[27,\"input\",null,[[\"required\",\"id\",\"type\",\"class\",\"placeholder\",\"name\",\"value\"],[true,\"amound_deposited\",\"text\",\"form-control\",\"dinheiro depositado\",\"amound_deposited\",[23,[\"amound_deposited\"]]]]],false],[0,\"\\n              \"],[10],[0,\"\\n\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"form-group col-md-12\"],[9],[0,\"\\n                \"],[1,[27,\"textarea\",null,[[\"id\",\"type\",\"class\",\"name\",\"id\",\"placeholder\",\"name\",\"value\"],[\"boldero_numer\",\"text\",\"form-control\",\"message\",\"message\",\"Mensagem.......\",\"message\",[23,[\"message\"]]]]],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"div\"],[11,\"class\",\"form-group item col-md-4 \"],[9],[0,\"\\n            \"],[7,\"p\"],[11,\"class\",\"col-md-4\"],[11,\"style\",\"color: #000000AA\"],[9],[0,\"Banco \"],[10],[0,\"\\n            \"],[7,\"select\"],[11,\"name\",\"type_of_bank\"],[11,\"id\",\"type_of_bank\"],[11,\"required\",\"\"],[9],[0,\"\\n              \"],[7,\"option\"],[11,\"value\",\"BAI\"],[11,\"selected\",\"\"],[9],[0,\"BAI\"],[10],[0,\"\\n              \"],[2,\" <option value=\\\"Atlantico\\\">Atlantico</option> \"],[0,\"\\n            \"],[10],[0,\"\\n\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"div\"],[11,\"class\",\"form-group item col-md-4 \"],[9],[0,\"\\n            \"],[7,\"p\"],[11,\"class\",\"col-md-4\"],[11,\"style\",\"color: #000000AA\"],[9],[0,\"Tipo de cartão \"],[10],[0,\"\\n            \"],[7,\"select\"],[11,\"name\",\"type_of_card\"],[11,\"id\",\"type_of_card\"],[11,\"required\",\"\"],[9],[0,\"\\n              \"],[7,\"option\"],[11,\"value\",\"Visa\"],[11,\"selected\",\"\"],[9],[0,\"Visa\"],[10],[0,\"\\n              \"],[7,\"option\"],[11,\"value\",\"Amazon\"],[9],[0,\"Amazon\"],[10],[0,\"\\n              \"],[7,\"option\"],[11,\"value\",\"Apple Store\"],[9],[0,\"Apple Store\"],[10],[0,\"\\n              \"],[7,\"option\"],[11,\"value\",\"Google Play\"],[9],[0,\"Google Play\"],[10],[0,\"\\n              \"],[7,\"option\"],[11,\"value\",\"Ebay\"],[9],[0,\"Ebay\"],[10],[0,\"\\n              \"],[7,\"option\"],[11,\"value\",\"MasterCard\"],[9],[0,\"MasterCard\"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"div\"],[11,\"class\",\"form-group item col-md-4 \"],[9],[0,\"\\n            \"],[7,\"p\"],[11,\"class\",\"col-md-4\"],[11,\"style\",\"color: #000000AA\"],[9],[0,\"Quantidade de dinheiro no cartão\"],[10],[0,\"\\n            \"],[7,\"select\"],[11,\"name\",\"budget\"],[11,\"id\",\"budget\"],[11,\"required\",\"\"],[9],[0,\"\\n              \"],[7,\"option\"],[11,\"value\",\"25 \"],[11,\"selected\",\"\"],[9],[0,\"25$\"],[10],[0,\"\\n              \"],[7,\"option\"],[11,\"value\",\"50\"],[9],[0,\"50$\"],[10],[0,\"\\n              \"],[2,\" <option value=\\\"75\\\">75$</option> \"],[0,\"\\n              \"],[7,\"option\"],[11,\"value\",\"100\"],[9],[0,\"100$\"],[10],[0,\"\\n              \"],[2,\" <option value=\\\"150\\\">150$</option> \"],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\\n\\n          \"],[7,\"div\"],[11,\"class\",\"form-group col-md-3\"],[9],[0,\"\\n            \"],[7,\"button\"],[11,\"class\",\"form-control\"],[11,\"type\",\"submit\"],[9],[0,\"Submeter o pedido\"],[10],[0,\"\\n\\n            \"],[2,\"<button type=\\\"submit\\\" value=\\\"submit your quote\\\" class=\\\"btn submint_btn form-control\\\">ENVIAR</button>\"],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[4,\"product-feature\",null,null,{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\n\\n\\n\"],[4,\"pricing-table\",null,null,{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"frequently-asked-questions\",null,null,{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\"],[4,\"nav-footer\",null,null,{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\"],[2,\"\\n{{welcome-page}}\\n{{!-- Feel free to remove this! --}}\\n{{outlet}} \"],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "front-end-kitady/templates/index.hbs" } });
});
;

;define('front-end-kitady/config/environment', [], function() {
  var prefix = 'front-end-kitady';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("front-end-kitady/app")["default"].create({"name":"front-end-kitady","version":"0.0.0+fb1de90a"});
          }
        
//# sourceMappingURL=front-end-kitady.map
