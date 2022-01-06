<template>
    <div>
        <div class="container_filter">
            <h1 class="container_filter_title">List of universities</h1>
            <br>
            <form class="form">
                <div class="form__container">
                    <select class="form_container__select" v-model="selected">
                        <option value="">Choose a filter</option>
                        <optgroup label="Places">
                            <option value="country">Country</option>
                            <option value="country-code">Country code</option>
                            <option value="state">State</option>
                        </optgroup>
                        <option value="web-domain">Web domain</option>
                        <option value="name">Name</option>
                    </select>
                </div>
                <div class="form__search__text">
                    <input type="text" class="form__searchInput" v-model="searchText" placeholder="Reference to search">
                </div>
                <div class="form__search__button">
                    <button type="button" class="btn" @click="searchUniversities">Search<i class="fas fa-search"></i></button>
                </div>
            </form>
        </div>
        
        <div class="container_list">
            <div 
            v-for="university in searchedUniversities"
            :key="Object.keys(university)" 
            class="container_list">
                <Nuxt-link 
                :to="{ name: 'UniversityDetails', params: { id: Object.keys(universities) }}">
                <div class="university_item">
                    <div class="university_location">
                    <span>{{university.country}}</span>
                    <span>{{university.code}}</span>
                    <br>
                    <span>{{university.state}}</span>
                    </div>
                    <div class="university_web">
                    <span>{{university.web}}</span>
                    </div>
                    <div class="university_name">
                    <span>{{university.name}}</span>
                    </div>
                </div>
                </Nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            selected: "",
            searchText: "",
            universitiesArray: [],
            searchedUniversities: []
            }
        },
        props: ["universities"],

        created() {
            this.universitiesArray = this.universities.map(function(item){
                return {
                    "country": item.country,
                    "code": item.alpha_two_code.toLowerCase(),
                    "state": item.state-province,
                    "web": item.web_pages,
                    "name": item.name
                }
            })
            this.searchedUniversities = this.universitiesArray
        }, 

        methods: {
            searchUniversities(){
                this.searchedUniversities = this.universitiesArray

                //Si recherche neutre
                if(this.selected === "" && this.searchText === ""){ 
                    return this.searchedUniversities
                }
                //Si selected a une valeure
                else if (this.selected !== ""){
                    this.searchedUniversities = this.searchedUniversities.filter(univ => {
                        return univ.selected === this.selected
                    })
                }
                //Si search a une valeure 
                // else if(this.searchText !==""){
                //     console.log(this.searchText)
                //     this.searchedUniversities = this.searchText.filter(univ => {
                //         return univ.country.toLowerCase().indexOf(this.searchText.trim().toLowerCase()) > -1 ||
                //                univ.code.toLowerCase().indexOf(this.searchText.trim().toLowerCase()) > -1 ||
                //                univ.state.toLowerCase().indexOf(this.searchText.trim()toLowerCase()) > -1 ||

                //     })
                // }
            }
        }
    }
</script>

<style scoped>

</style>