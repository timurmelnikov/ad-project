<template>
    <v-container>
        <v-layout row>
            <v-flex offset-sm3 sm6 xs12>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form class="mb-3" ref="form" v-model="valid" validation>
                    <v-text-field
                            :rules="[v => !!v || 'Ad title is required']"
                            label="Ad title"
                            name="title"
                            required
                            type="text"
                            v-model="title"
                    >
                    </v-text-field>
                    <v-text-field
                            :rules="[v => !!v || 'Ad title is description']"
                            label="Ad description"
                            multi-line
                            name="description"
                            required
                            type="text"
                            v-model="description"
                    >
                    </v-text-field>
                </v-form>
                <v-layout class="mb-3" row>
                    <v-flex xs12>
                        <v-btn class="warning">
                            Upload
                            <v-icon dark right>cloud_upload</v-icon>
                        </v-btn>

                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img height="100" src="https://v1.vuetifyjs.com/static/doc-images/carousel/squirrel.jpg">
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                                color="primary"
                                label="Add to promo ?"
                                v-model="promo"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                                :disabled="!valid"
                                @click="createAd"
                                class="success"
                        >
                            Create ad
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
      data () {
        return {
          title: '',
          description: '',
          promo: false,
          valid: false

        }
      },
      methods: {
        createAd () {
          if (this.$refs.form.validate()) {
            const ad = {
              title: this.title,
              description: this.description,
              promo: this.promo
            }
            console.log(ad)
          }
        }
      }
    }
</script>

<style scoped>

</style>