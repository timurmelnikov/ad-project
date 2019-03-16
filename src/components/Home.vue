<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                                v-for="(ad,i) in ads"
                                :src="ad.imageSrc"
                                :key="ad.id"
                        >
                            <div class="car-link">
                                <v-btn class="error" :to="'/ad/'+ad.id">{{ad.title}}</v-btn>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                        xs12
                        sm6
                        md4
                        v-for="(ad,i) in ads"
                        :key="ad.id"
                >
                    <v-card>
                        <v-card-media
                                :src="ad.imageSrc"
                                height="200px"
                        >
                        </v-card-media>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ad.title}}</h3>
                                <div>{{ad.description}}</div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat :to="'/ad/'+ad.id">Open</v-btn>
                            <v-btn raised class="primary">Buye</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    data: function () {
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
    .car-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50%, 0);
        padding: 5px 15px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

</style>
