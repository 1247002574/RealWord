import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7ae9c638 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _78123d19 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _eb24a322 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _7ee29f2f = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _229d5146 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _928779b2 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _65ace27c = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _7ae9c638,
    children: [{
      path: "",
      component: _78123d19,
      name: "home"
    }, {
      path: "/login",
      component: _eb24a322,
      name: "login"
    }, {
      path: "/register",
      component: _eb24a322,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _7ee29f2f,
      name: "profile"
    }, {
      path: "/settings",
      component: _229d5146,
      name: "settings"
    }, {
      path: "/editor",
      component: _928779b2,
      name: "editor"
    }, {
      path: "/editor/:slug",
      component: _928779b2,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _65ace27c,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
