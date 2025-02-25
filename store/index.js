import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import { createClient } from '~/plugins/contentful.js';

Vue.use(Vuex)

const client = createClient()

export default () => new Vuex.Store({

  state: {
    postsLinkedin : [],
    langContent : [],
    universities: [],
    companies: [
      {
          "id": 53,
          "name": "Isa",
          "date": "1980",
          "state": true,
          "maturity": "Final-Stage",
          "industry": "Education"
      },
      {
          "id": 59,
          "name": "Joane",
          "date": "2013",
          "state": true,
          "maturity": "Early-Stage",
          "industry": "Agriculture"
      },
      {
          "id": 38,
          "name": "Bernardine",
          "date": "1988",
          "state": true,
          "maturity": "Early-Stage",
          "industry": "Pharmaceutical"
      },
      {
          "id": 38,
          "name": "Desirae",
          "date": "1986",
          "state": false,
          "maturity": "Intermediate-Stage",
          "industry": "Agriculture"
      },
      {
          "id": 38,
          "name": "Emilia",
          "date": "2002",
          "state": false,
          "maturity": "Early-Stage",
          "industry": "Aerospace"
      },
      {
          "id": 21,
          "name": "Hyacinthe",
          "date": "2014",
          "state": false,
          "maturity": "Early-Stage",
          "industry": "Telecommunication"
      },
      {
          "id": 95,
          "name": "Ebonee",
          "date": "1980",
          "state": true,
          "maturity": "Early-Stage",
          "industry": "Health care"
      },
      {
          "id": 10,
          "name": "Ricky",
          "date": "1994",
          "state": false,
          "maturity": "Final-Stage",
          "industry": "Health care"
      },
      {
          "id": 71,
          "name": "Andree",
          "date": "2012",
          "state": false,
          "maturity": "Final-Stage",
          "industry": "Energy"
      },
      {
          "id": 10,
          "name": "Winny",
          "date": "1992",
          "state": true,
          "maturity": "Intermediate-Stage",
          "industry": "Agriculture"
      },
      {
          "id": 82,
          "name": "Doro",
          "date": "1999",
          "state": false,
          "maturity": "Early-Stage",
          "industry": "Aerospace"
      },
      {
          "id": 22,
          "name": "Marnia",
          "date": "1994",
          "state": true,
          "maturity": "Final-Stage",
          "industry": "Construction"
      },
      {
          "id": 31,
          "name": "Cordi",
          "date": "1989",
          "state": false,
          "maturity": "Early-Stage",
          "industry": "Manufacturing"
      },
      {
          "id": 71,
          "name": "Camile",
          "date": "2014",
          "state": true,
          "maturity": "Intermediate-Stage",
          "industry": "Manufacturing"
      },
      {
          "id": 69,
          "name": "Eolanda",
          "date": "1985",
          "state": true,
          "maturity": "Early-Stage",
          "industry": "Transport"
      },
      {
          "id": 42,
          "name": "Dotty",
          "date": "1997",
          "state": false,
          "maturity": "Early-Stage",
          "industry": "Manufacturing"
      },
      {
          "id": 47,
          "name": "Brianna",
          "date": "1997",
          "state": true,
          "maturity": "Final-Stage",
          "industry": "Hospitality"
      },
      {
          "id": 15,
          "name": "Maisey",
          "date": "1990",
          "state": false,
          "maturity": "Intermediate-Stage",
          "industry": "Aerospace"
      },
      {
          "id": 37,
          "name": "Rozele",
          "date": "1986",
          "state": true,
          "maturity": "Final-Stage",
          "industry": "Telecommunication"
      },
      {
          "id": 64,
          "name": "Michaelina",
          "date": "2013",
          "state": false,
          "maturity": "Final-Stage",
          "industry": "Entertainment"
      },
      {
          "id": 72,
          "name": "Melisent",
          "date": "1986",
          "state": false,
          "maturity": "Intermediate-Stage",
          "industry": "Computer"
      },
      {
          "id": 96,
          "name": "Tatiania",
          "date": "1990",
          "state": false,
          "maturity": "Final-Stage",
          "industry": "Worldwide web"
      },
      {
          "id": 1,
          "name": "Adelle",
          "date": "2019",
          "state": false,
          "maturity": "Final-Stage",
          "industry": "Telecommunication"
      },
      {
          "id": 75,
          "name": "Daryl",
          "date": "2005",
          "state": false,
          "maturity": "Early-Stage",
          "industry": "Health care"
      },
      {
          "id": 27,
          "name": "Joelly",
          "date": "2019",
          "state": false,
          "maturity": "Early-Stage",
          "industry": "Telecommunication"
      },
      {
          "id": 50,
          "name": "Kristina",
          "date": "1994",
          "state": false,
          "maturity": "Early-Stage",
          "industry": "Agriculture"
      },
      {
          "id": 64,
          "name": "Carolina",
          "date": "1983",
          "state": true,
          "maturity": "Final-Stage",
          "industry": "Worldwide web"
      },
      {
          "id": 83,
          "name": "Laurene",
          "date": "1981",
          "state": true,
          "maturity": "Intermediate-Stage",
          "industry": "Transport"
      },
      {
          "id": 1,
          "name": "Ashlee",
          "date": "2010",
          "state": false,
          "maturity": "Early-Stage",
          "industry": "Computer"
      },
      {
          "id": 42,
          "name": "Laurene",
          "date": "2012",
          "state": true,
          "maturity": "Intermediate-Stage",
          "industry": "Electronics"
      },
      {
          "id": 18,
          "name": "Lesly",
          "date": "1999",
          "state": false,
          "maturity": "Early-Stage",
          "industry": "Education"
      },
      {
          "id": 75,
          "name": "Clarice",
          "date": "2005",
          "state": true,
          "maturity": "Final-Stage",
          "industry": "Energy"
      },
      {
          "id": 81,
          "name": "Kirbee",
          "date": "2007",
          "state": true,
          "maturity": "Early-Stage",
          "industry": "Agriculture"
      },
      {
          "id": 37,
          "name": "Brynna",
          "date": "1994",
          "state": true,
          "maturity": "Final-Stage",
          "industry": "Construction"
      },
      {
          "id": 34,
          "name": "Tani",
          "date": "2010",
          "state": false,
          "maturity": "Intermediate-Stage",
          "industry": "Education"
      },
      {
          "id": 88,
          "name": "Lexine",
          "date": "1984",
          "state": true,
          "maturity": "Final-Stage",
          "industry": "Entertainment"
      },
      {
          "id": 58,
          "name": "Shel",
          "date": "2007",
          "state": false,
          "maturity": "Early-Stage",
          "industry": "Worldwide web"
      },
      {
          "id": 49,
          "name": "Gale",
          "date": "2013",
          "state": true,
          "maturity": "Final-Stage",
          "industry": "Manufacturing"
      },
      {
          "id": 45,
          "name": "Gratia",
          "date": "2003",
          "state": false,
          "maturity": "Final-Stage",
          "industry": "Electronics"
      },
      {
          "id": 84,
          "name": "Helsa",
          "date": "1984",
          "state": false,
          "maturity": "Final-Stage",
          "industry": "News Media"
      },
      {
          "id": 90,
          "name": "Charmaine",
          "date": "1994",
          "state": true,
          "maturity": "Intermediate-Stage",
          "industry": "Health care"
      }
  
    ]
  },

  getters: {
    postsLinkedin: state => {
        return state.postsLinkedin
    },

    getLangContent: state => {
        return state.langContent
    },

    getUniversities: state => {
      return state.universities
    }
  },

  mutations: {
      SET_PostsLinkedin (state, datas){
          state.postsLinkedin = datas
      },

      SET_LangContent (state, datas) {
        state.langContent = datas
      },

      SET_Universities (state, datas){
        state.universities = datas
      }
  },

  actions: {
      loadPostsLinkedin ({commit}) {
        client.getEntries({
          'content_type': "postLinkedin"
        })
        .then(response => response.items)
        .then(datas => {
          console.log(datas, "Store : postLinkedin")
          commit('SET_PostsLinkedin', datas)
        })
        .catch(console.error)
      },

      loadLangContent ({commit}, iso) {  //Récupère selon l'iso local, le contenu de la langue correspondante sur contentful
        client.getEntries({
          'content_type' : "langues",
          'locale' : iso
        })
        .then(response => response.items)
        .then(datas => {
          console.log(datas, "Store : langContent")
          commit('SET_LangContent', datas)
        })
      },

      loadUniversities ({commit}) {
        this.$axios.$get('https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json')
        .then(response => {
          commit('SET_Universities', response)
        })
      }
  }
})