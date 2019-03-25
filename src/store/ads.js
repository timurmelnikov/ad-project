export default {
  state: {
    ads: [
      {
        id: '11',
        title: 'Товар 1',
        description: 'Описание товара 1',
        promo: true,
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
        promo: true,
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
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = Math.random().toString()
      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo === true
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }

  }
}
