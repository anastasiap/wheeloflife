<template>
    <div class="c-category" @mouseenter="toggleTools" @mouseleave="toggleTools"> 
        <div v-if="!isEditMode" class="display-mode">
            <div class="c-category__heading">
                <h4 class="c-category__title" :style="{ color: catColor }">{{ name }}</h4>
                <div class="c-category__mark">{{ mark }}</div>
            </div>
            <div ref="descViewMode" class="c-category__description">{{ description }}</div>
        </div>
        <div v-if="isEditMode" class="edit-mode">
            <form action="">
                <input 
                    class="c-category__inputTitle" 
                    :style="{ color: catColor }"
                    :value="name" 
                    @input="updateName($event, id)" />
                <textarea 
                    ref="descEditMode"
                    v-bind:style="descInputHeight"
                    class="c-category__inputDesc" 
                    :value="description" 
                    @input="updateDesc($event, id)" 
                    placeholder="What is this">
                </textarea>
            </form>
        </div>
        <div v-if="toggleToolsIcons" class="icons-container animated fadeIn">
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
        <compact-picker class="" v-model="catColor" v-if="isColorEditMode" @input="updateColor"></compact-picker>
    </div>   
</template>

<script lang="ts">
    import { ICategory } from '../configs/app.config'
    import compact from 'vue-color/src/components/Compact.vue'

    export default {
        data() {
            return {
                isEditMode: false as boolean,
                toggleToolsIcons: false as boolean,
                isColorEditMode: false as boolean,
                catColor: this.color as string,
                descInputHeight: {} 
            }
        },
        components: {
            'compact-picker': compact,
        },
        mounted() {
            const FormHeight = this.$refs.descViewMode.clientHeight;
        },
        methods: {
            updateName(e, id): void {
                this.$store.commit('updateName', {newName: e.target.value, id: id })
            },
            updateDesc(e, id): void {
                this.$store.commit('updateDesc', {newDesc: e.target.value, id: id })
            },
            toggleTools(): void {
                this.toggleToolsIcons = !this.toggleToolsIcons;
            },
            toggleView(): boolean {
                // TODO research how to reverse boolean
                if (this.$refs.descViewMode) {
                    this.$set(this.descInputHeight, 'height', this.$refs.descViewMode.clientHeight + 10  + 'px')
                }
                
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
        // display: flex;
        // justify-content: space-between;
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
            margin: 0 0 .4rem;
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
            //min-height: 5rem;
            max-width: 18rem;
            width: 100%;
        }

        .icons-container {
            //max-width: 20px;
            
        }

        .icon-wrapper {
            margin: 0.2rem 0.4rem 0.4rem;
            display: inline-block;
            cursor: pointer;
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

        
    }

    .vs-compact {
        position: absolute;
        right: 0;
        bottom: -50px;
        z-index: 1;
    }
</style>