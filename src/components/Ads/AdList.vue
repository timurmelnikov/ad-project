<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ads</h1>
                <v-card
                        class="elevation-10 mb-3"
                        v-for="ad in ads"
                        :key="ad.id"
                >
                    <v-layout row>
                        <v-flex xs4>
                            <v-card-media
                                    :src="ad.imageSrc"
                                    height="160px"
                            >

                            </v-card-media>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ad.title}}</h2>
                                <p>{{ad.description}}</p>

                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        class="info"
                                        :to="'/ad/'+ad.id"
                                >Open
                                </v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
      data () {
        return {
          ads: [
            {
              id: '11',
              title: 'Товар 1',
              description: 'Описание товара 1',
              promo: false,
              imageSrc: 'https://v1.vuetifyjs.com/static/doc-images/carousel/squirrel.jpg'
            },
            {
              id: '22',
              title: 'Товар 2',
              description: 'Описание товара 2',
              promo: false,
              imageSrc: 'https://v1.vuetifyjs.com/static/doc-images/carousel/sky.jpg'
            },
            {
              id: '33',
              title: 'Товар 3',
              description: 'Описание товара 3',
              promo: false,
              imageSrc: 'https://v1.vuetifyjs.com/static/doc-images/carousel/bird.jpg'
            },
            {
              id: '44',
              title: 'Товар 4',
              description: 'Описание товара 4',
              promo: false,
              imageSrc: 'https://v1.vuetifyjs.com/static/doc-images/carousel/planet.jpg'
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>