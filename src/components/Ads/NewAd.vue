<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form ref="form" v-model="valid" validation class="mb-3">
                    <v-text-field
                            label="Ad title"
                            name="title"
                            type="text"
                            v-model="title"
                            required
                            :rules="[v => !!v || 'Ad title is required']"
                    >
                    </v-text-field>
                    <v-text-field
                            label="Ad description"
                            name="description"
                            type="text"
                            v-model="description"
                            multi-line
                            required
                            :rules="[v => !!v || 'Ad title is description']"
                    >
                    </v-text-field>
                </v-form>
                <v-layout row class="mb-3">
                    <v-flex xs12>
                        <v-btn class="warning">
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>

                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img src="https://v1.vuetifyjs.com/static/doc-images/carousel/squirrel.jpg" height="100">
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
                                class="success"
                                @click="createAd"
                                :disabled="!valid"
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