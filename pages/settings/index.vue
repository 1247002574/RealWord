<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="onSubmit()">
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model="profile.image"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="profile.username"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="profile.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  v-model="profile.email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="profile.password"
                  minlength="8"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
              <button
                class="btn btn-lg btn-danger pull-xs-left"
                @click.prevent="cookieLogout()"
              >
                logout
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfile, getUser, updateUser } from '@/api/user'
import { mapMutations } from 'vuex'
import _ from 'lodash'

const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'nologin',
  name: 'Settings',
  async asyncData() {
    const {
      data: { user },
    } = await getUser()
    const {
      data: { profile },
    } = await getProfile({ username: user.username })
    return {
      profile,
    }
  },
  methods: {
    ...mapMutations(['logout']),
    async onSubmit() {
      const {
        data: { user },
      } = await updateUser({
        user: _.omit(this.profile, ['following']),
      })
      this.$router.push(`/profile/${user.username}`)
    },
    cookieLogout() {
      Cookie.remove('user')
      this.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped lang="stylus"></style>
