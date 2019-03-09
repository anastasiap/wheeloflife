<template>
    <div class="c-category">
        <div v-if="!isEditMode" v-on:mouseover="toggleTools = !toggleTools"  class="display-mode">
            <div class="c-category__heading">
                <h4 class="c-category__title" :style="{ color: catColor }">{{ name }}</h4>
                <div class="c-category__mark">{{ mark }}</div>
            </div>
            <div class="c-category__description">{{ description }}</div>
        </div>
        <div v-if="isEditMode" class="edit-mode">
            <form action="">
                <input 
                    class="c-category__inputTitle" 
                    :style="{ color: catColor }"
                    :value="name" 
                    @input="updateName($event, id)" />
                <textarea 
                    class="c-category__inputDesc" 
                    :value="description" 
                    @input="updateDesc($event, id)" 
                    placeholder="What is this">
                </textarea>
            </form>
        </div>
        <div v-if="toggleTools" class="icons-container">
            <span class="icon-wrapper" @click="toggleView">
                <i class="el-icon-edit"></i>
            </span>
            <span class="icon-wrapper" @click="toggleColorPicker">
                <i class="el-icon-menu"></i>
            </span>
            <span class="icon-wrapper" @click="deleteCategory">
                <i class="el-icon-delete"></i>
            </span>
        </div>
        <compact-picker v-model="catColor" v-if="isColorEditMode" @input="updateColor"></compact-picker>
    </div>   
</template>

<script lang="ts">
    import { ICategory } from '../configs/app.config'
    import compact from 'vue-color/src/components/Compact.vue'

    export default {
        data() {
            return {
                isEditMode: false as boolean,
                toggleTools: false as boolean,
                isColorEditMode: false as boolean,
                catColor: this.color as string
            }
        },
        components: {
            'compact-picker': compact,
        },
        mounted() {
            const blockHeight = document.getElementsByClassName('c-category__description');
            const minDescHeight = blockHeight[0].offsetHeight;
            //const inputDescEl = document.getElementsByClassName('c-category__inputDesc');

            //console.log(inputDescEl)

            // inputDescEl.map((t) => {
            //     t.attr('height', minDescHeight);
            // })

            
        },
        methods: {
            updateName(e, id): void {
                this.$store.commit('updateName', {newName: e.target.value, id: id })
            },
            updateDesc(e, id): void {
                this.$store.commit('updateDesc', {newDesc: e.target.value, id: id })
            },
            toggleView(): boolean {
                // TODO research how to reverse boolean

                // fix textarea height
                this.toggleTools = true;
                return this.isEditMode = !this.isEditMode
            },
            deleteCategory(id): void {
                this.$store.commit('deleteCategory', id);
            },
            toggleColorPicker(): boolean {
                return this.isColorEditMode = !this.isColorEditMode
            },
            updateColor(value): void {
                this.catColor = value.hex
            }
        },
        name: 'Category',
        props: ['name', 'description', 'mark', 'id', 'color']
    }
</script>

<style lang="scss" scoped>
    .c-category {
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        max-width: 350px;
        position: relative;

        &__heading { 
            display: flex;
            justify-content: space-between;
        }

        &__title {
            text-transform: uppercase;
            font-size: 1.2rem;

            padding: .2rem;
            margin: 0 0 .2rem;
            width: 100%;
            
        }

        &__mark {
            padding: .2rem;
            // margin: 5px 0;
        }

        &__description {
            margin: 0 0 .2rem;
            font-size: 0.8rem;

            padding: .2rem;
            width: 100%;
        }

        &__inputTitle {
            text-transform: uppercase;
            font-weight: 700;
            font-size: 1.2rem;
        } 


        &__inputTitle,
        &__inputDesc {
            background: #ddd;
            border: none;
            padding: .2rem;
            width: 100%;
            margin: 0 0 .2rem;

            &:focus {
                outline: none;
            }
        }

        &__inputDesc {
            resize: none;
        }

        .display-mode,
        .edit-mode {
            min-height: 5rem;
            max-width: 18rem;
            width: 100%;
        }

        .icons-container {
            max-width: 20px;
            padding: 10px;
            
        }

        .icon-wrapper {
            padding: 5px;
        }

        .el-icon-menu {
            background: #1e5799;
            background: -moz-linear-gradient(45deg, #1e5799 0%, #1e5799 10%, #2ab722 35%, #f2dd26 52%, #f2dd26 62%, #ff0cca 100%);
            background: -webkit-linear-gradient(45deg, #1e5799 0%,#1e5799 10%,#2ab722 35%,#f2dd26 52%,#f2dd26 62%,#ff0cca 100%);
            background: linear-gradient(45deg, #1e5799 0%,#1e5799 10%,#2ab722 35%,#f2dd26 52%,#f2dd26 62%,#ff0cca 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#ff0cca',GradientType=1 );
        }

        .el-icon-delete {
            color: red;
        }

        .vs-compact {
            position: absolute;
            right: 0;
            bottom: -31px;
            z-index: 20;
        }
    }
</style>