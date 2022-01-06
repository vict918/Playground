<template>
    <div>
        <div class="dropdown">
            <button class="dropdown__btn">{{ lang.fields.code.toUpperCase()}}</button>
            <div class="dropdown__contents">
                <Nuxt-link
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)" class="nav-link">{{locale.code.toUpperCase()}}
                </Nuxt-link>
            </div>
        </div>

        <div class="texts">
            <h1>{{lang.fields.titre}}</h1>
            <p>{{lang.fields.paragraphe}}</p>
            <i>{{lang.fields.langue}}</i>
            <h2>{{lang.fields.code}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        props : ["lang"],

        computed: {
            availableLocales () {
                //console.log(this.$i18n.locales.filter(i => i.code !== this.$i18n.locale), "AvailableLocales")
                return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
            }
        }
    }
</script>

<style lang="scss" scoped>

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .dropdown {
        position: relative;
        display: inline-block;

        &:hover .dropdown__contents {
            display: block;
            margin: auto 2rem;
        }

        &:hover .dropdown__btn {
            background-color: lightsalmon;
        }

        &__btn {
            background-color: grey;
            color: white;
            padding: 16px;
            font-size: 16px;
            border: none;
            cursor: pointer;
            text-align: center;
            align-items: center;
            border-radius: 50%;
            margin: 1rem 2rem;
        }
        
        &__contents {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }
    }

    .nav-link{
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;

        &:hover {
            background-color: #f1f1f1; 
        }
    }

    .texts {
        height: 100vh;
        width: 100vw;
        align-items: center;
        text-align: center;
        margin: 2rem auto;
    }
</style>