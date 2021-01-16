exports.ids = [4];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 获取公共文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 获取公共文章列表

const getYourFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params // headers: {
    //   // 添加用户身份，数据格式：Token空格Token数据
    //   Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDgxMTYsInVzZXJuYW1lIjoibHB6OTk5IiwiZXhwIjoxNTk3NzQxNTA4fQ.2yO8Fss4hYnvsIN2UYHsutQ1hmYqSSAA-UrIRnP4DOY`
    // }

  });
}; // 添加点赞

const addFavorite = slug => {
  console.log(slug);
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 更新文章

const updateArticle = ({
  slug,
  article
}) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data: article
  });
}; // 发表文章评论

const addComment = ({
  slug,
  comment
}) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data: comment
  });
}; // 发布文章

const addArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=704d4afc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-704d4afc><div class=\"container\" data-v-704d4afc><h1 class=\"logo-font\" data-v-704d4afc>conduit</h1> <p data-v-704d4afc>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-704d4afc>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-704d4afc>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-704d4afc>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-704d4afc>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-704d4afc>","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\" data-v-704d4afc>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active:_vm.tab==='your_feed'
                },attrs:{"exact":"","to":{
                  name:'home',
                  query:{
                    tab:'your_feed',
                  }
                }}},[_vm._v("\n                Your Feed\n              ")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-704d4afc>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active:_vm.tab==='global_feed'
                },attrs:{"exact":"","to":{
                  name:'home',
                }}},[_vm._v("\n                Global Feed\n              ")])],1),_vm._ssrNode(" "),(_vm.$route.query.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-704d4afc>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active:_vm.tab === 'tag'
                },attrs:{"exact":"","to":{
                  name:'home',
                  query:{
                    tab:'tag',
                    tag:_vm.tag
                  }
                }}},[_vm._v("\n                #"+_vm._s(_vm.tag)+"\n              ")])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-704d4afc>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-704d4afc>","</div>",[_c('nuxt-link',{attrs:{"to":{
              name:'profile',
              params:{
                username:article.author.username
              }
            }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-704d4afc>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
              name:'profile',
              params:{
                username:article.author.username
              }
            }}},[_vm._v("\n                "+_vm._s(article.author.username)+"\n              ")]),_vm._ssrNode(" <span class=\"date\" data-v-704d4afc>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMM DD,YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                active:article.favorited
              }))+" data-v-704d4afc><i class=\"ion-heart\" data-v-704d4afc></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
            name:'article',
            params:{
              slug:article.slug
            }
          }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-704d4afc>","</nav>",[_vm._ssrNode("<ul class=\"pahination\" data-v-704d4afc>","</ul>",_vm._l((_vm.getPages),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
              active:item===_vm.page
            }))+" data-v-704d4afc>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                name:'home',
                query:{
                  tab:_vm.tab,
                  tag:_vm.$route.query.tag,
                  page:item
                }
              }}},[_vm._v("\n                "+_vm._s(item)+"\n              ")])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-704d4afc>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-704d4afc>","</div>",[_vm._ssrNode("<p data-v-704d4afc>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-704d4afc>","</div>",_vm._l((_vm.tags),function(item){return _c('nuxt-link',{key:item,staticClass:"tag-pill tag-default",attrs:{"to":{
              name:'home',
              query:{
                tab:'tag',
                tag:item
              }
            }}},[_vm._v(_vm._s(item)+"\n            ")])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=704d4afc&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(29);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/tag.js
 // import request from '@/utils/request'

const getTags = () => Object(request["b" /* request */])({
  method: 'GET',
  url: '/api/tags'
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'HomeIndex',

  async asyncData({
    query
  }) {
    const limit = 20;
    const page = +query.page || 1;
    const tag = query.tag;
    const tab = query.tab || 'global_feed';
    const loadArticles = query.tab === 'your_feed' ? api_article["h" /* getYourFeedArticles */] : api_article["f" /* getArticles */];
    const [articleRes, tagRes] = await Promise.all([loadArticles({
      limit,
      offset: (page - 1) * limit,
      tag
    }), getTags()]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    const {
      tags
    } = tagRes.data;
    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tag,
      tab
    };
  },

  watchQuery: ['page', 'tag', 'tab'],
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    getPages() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async onFavArticle(article) {
      console.log(article);

      if (article.favorited) {
        await Object(api_article["d" /* deleteFavorite */])(article.slug);
        article.favcount--;
        article.favorited = false;
      } else {
        await Object(api_article["c" /* addFavorite */])(article.slug);
        article.favcount++;
        article.favorited = true;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "704d4afc",
  "26e8e926"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map