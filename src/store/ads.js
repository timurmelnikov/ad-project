import * as fb from 'firebase'

class Ad {
  constructor (title, description, ownerId, imageSrc = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

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
    async createAd ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const newAd = new Ad(
            payload.title,
            payload.description,
            // 'PR6QwBPxKTT1RG6ScwcVpWtIQww2',
            'sdfsdfsd',
            // getters.user.id,
            payload.imageSrc,
            payload.promo
        )
        console.log('4444')
        console.log(getters.user)

        const fbValue = await fb.database().ref('ads').push(newAd)
        console.log(fbValue)
      } catch (e) {
        commit('setError', e.message)
        commit('setError', e.message)
        commit('setLoading', false)
        throw e
      }
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
