<template>
    <v-container fill-height fluid>
        <v-layout align-center justify-center>
            <v-flex md4 sm8 xs12>
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark>
                        <v-toolbar-title>Registration form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" validation>
                            <v-text-field
                                    label="E-mail"
                                    name="email"
                                    prepend-icon="person"
                                    type="email"
                                    v-model="email"
                                    :rules="emailRules"
                            >
                            </v-text-field>
                            <v-text-field
                                    label="Password"
                                    name="password"
                                    prepend-icon="lock"
                                    type="password"
                                    v-model="password"
                                    :counter="6"
                                    :rules="passwordRules"
                            >
                            </v-text-field>
                            <v-text-field
                                    label="Confirm password"
                                    name="confirm-password"
                                    prepend-icon="lock"
                                    type="password"
                                    v-model="confirmPassword"
                                    :counter="6"
                                    :rules="confirmPasswordRules"
                            >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                color="primary"
                                @click="onSubmit()"
                                :loading="loading"
                                :disabled="!valid || loading"
                        >Create account
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    export default {
      data () {
        return {
          email: '',
          password: '',
          confirmPassword: '',
          valid: false,
          emailRules: [
            v => !!v || 'E-mail is required',
            v => emailRegex.test(v) || 'E-mail must be valid'
          ],
          passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
          ],
          confirmPasswordRules: [
            v => !!v || 'Cjnfirm password is required',
            v => v === this.password || 'Passwords should matsh'
          ]

        }
      },
      computed: {
        loading () {
          return this.$store.getters.loading
        }
      },
      methods: {
        onSubmit () {
          if (this.$refs.form.validate()) {
            const user = {
              email: this.email,
              password: this.password,
              confirmPassword: this.confirmPassword

            }
            this.$store.dispatch('registerUser', user)
                .then(() => {
                  this.$router.push('/')
                })
                .catch(() => {})
          }
        }
      }
    }
</script>

<style scoped>

</style>