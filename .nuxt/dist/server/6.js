exports.ids = [6];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // import request from '@/utils/request'

const login = data => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'post',
  url: '/api/users/login',
  data
});
const register = data => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'post',
  url: '/api/users',
  data
});
const getProfile = ({
  username
}) => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'GET',
  url: `/api/profiles/${username}`
});
const getUser = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/user'
  });
};
const updateUser = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: '/api/user',
    data
  });
};

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=071fd05c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\" data-v-071fd05c><div class=\"row\" data-v-071fd05c><div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-071fd05c><h1 class=\"text-xs-center\" data-v-071fd05c>Your Settings</h1> <form data-v-071fd05c><fieldset data-v-071fd05c><fieldset class=\"form-group\" data-v-071fd05c><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.profile.image)))+" class=\"form-control\" data-v-071fd05c></fieldset> <fieldset class=\"form-group\" data-v-071fd05c><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.profile.username)))+" class=\"form-control form-control-lg\" data-v-071fd05c></fieldset> <fieldset class=\"form-group\" data-v-071fd05c><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\" data-v-071fd05c>"+_vm._ssrEscape(_vm._s(_vm.profile.bio))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-071fd05c><input type=\"email\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.profile.email)))+" class=\"form-control form-control-lg\" data-v-071fd05c></fieldset> <fieldset class=\"form-group\" data-v-071fd05c><input type=\"password\" placeholder=\"Password\" minlength=\"8\""+(_vm._ssrAttr("value",(_vm.profile.password)))+" class=\"form-control form-control-lg\" data-v-071fd05c></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-071fd05c>\n              Update Settings\n            </button> <button class=\"btn btn-lg btn-danger pull-xs-left\" data-v-071fd05c>\n              logout\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=071fd05c&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var api_user = __webpack_require__(30);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(27);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const Cookie =  false ? undefined : undefined;
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  middleware: 'nologin',
  name: 'Settings',

  async asyncData() {
    const {
      data: {
        user
      }
    } = await Object(api_user["b" /* getUser */])();
    const {
      data: {
        profile
      }
    } = await Object(api_user["a" /* getProfile */])({
      username: user.username
    });
    return {
      profile
    };
  },

  methods: { ...Object(external_vuex_["mapMutations"])(['logout']),

    async onSubmit() {
      const {
        data: {
          user
        }
      } = await Object(api_user["e" /* updateUser */])({
        user: external_lodash_default.a.omit(this.profile, ['following'])
      });
      this.$router.push(`/profile/${user.username}`);
    },

    cookieLogout() {
      Cookie.remove('user');
      this.logout();
      this.$router.push('/login');
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "071fd05c",
  "49a7956a"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map