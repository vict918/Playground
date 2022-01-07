<template>
    <div>
        <div class="container_filter">
            <h1 class="title">Our investments</h1>
            <div class="filter_state">
                <div class="container_select_state">
                    <h3 class="filter_state_title">State</h3>
                    <select class="select_state" v-model="selectedState" @change="filter2()">
                        <option value="">All State</option>
                        <option v-bind:value="true">Completed</option>
                        <option v-bind:value="false">Uncompleted</option>
                    </select>
                </div>
                <div class="container_select_industry">
                    <h3 class="filter_maturity_title">Industry</h3>
                    <select class="select_industry" v-model="selectedIndustry" @change="filter2()">
                        <option value="">All Industry</option>
                        <option
                        v-for="industry in industries"
                        :key="industry"
                        >{{industry}}</option>
                    </select>
                </div>
                Results : {{ filteredSearch.length }}
            </div>
        </div>

        <div v-if="filteredSearch.length == 0">Aucun résultat</div>

        <div class="container_companies_list">
            <div class="item_company" v-for="(company, index) in filteredSearch" :key="company.name+index">
                <h3>Name: {{company.name}}</h3>
                <h4>{{company.date}}</h4>
                <p>{{company.state}}</p>
                <p>{{company.industry}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return{
                companies: [],
                filteredSearch: [],
                industries: [
                    "Aerospace","Transport","Computer","Telecommunication","Agriculture","Construction","Education","Pharmaceutical","Food","Health care","Hospitality","Entertainment","News Media","Energy", "Manufacturing", "Music", "Mining","Worldwide web", "Electronics"
                ],
                selectedState: "",
                lastState: "",
                selectedIndustry: "",
                lastIndustry: ""
            }
        },

        created(){
            this.companies = this.$store.state.companies
            this.filteredSearch = this.companies
        },

        methods:{
            /*
            * Filtre la liste des compagnies sur base :
            * de leur états : true/false
            * de leur industries : industries []
            */
            filter2(){
              this.filteredSearch = this.companies;

              if(this.selectedState !== ""){
                this.filteredSearch = this.filteredSearch.filter(company => {
                    return company.state == this.selectedState
                })
              }

              if(this.selectedIndustry !== ""){
                this.filteredSearch = this.filteredSearch.filter(company => {
                    return company.industry == this.selectedIndustry
                })
              }
            },
            filter(){
                this.filteredSearch = this.companies

                if(this.selectedState === ""){

                    if(this.selectedIndustry === ""){
                        this.filteredSearch = this.companies
                    }
                    else{
                        this.filteredSearch = this.filteredSearch.filter(company => {
                            return company.industry == this.selectedIndustry
                        })
                    }
                }

                else if(this.selectedState == true){

                    if(this.selectedIndustry === ""){
                        this.filteredSearch = this.filteredSearch.filter(company => {
                            return company.state == this.selectedState
                        })
                    }
                    else{
                        this.filteredSearch = this.filteredSearch.filter(company => {
                            return company.state == this.selectedState
                        })
                        this.filteredSearch = this.filteredSearch.filter(company => {
                            return company.industry == this.selectedIndustry
                        })
                    }
                }


                else if(this.selectedState == false){

                    if(this.selectedIndustry === ""){
                        this.filteredSearch = this.filteredSearch.filter(company => {
                            return company.state == this.selectedState
                        })
                    }
                    else{
                        this.filteredSearch = this.filteredSearch.filter(company => {
                            return company.state == this.selectedState
                        })
                        this.filteredSearch = this.filteredSearch.filter(company => {
                            return company.industry == this.selectedIndustry
                        })
                    }
                }
            }
        },
        computed: {
            /*
            * Trie le tableau filteredSearch de manière alphabétique ascendante
            * Affiche les 12 premiers résulats
            */
            triNameAsc(){
                return this.filteredSearch.sort((a,b)=>(a.name < b.name)? -1 : ((a.name > b.name) ? 1 : 0)).slice(0,12)
            }
        }
    }
</script>

<style scoped>

</style>
