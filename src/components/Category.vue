<template>
    <div class="c-category" @mouseenter="toggleTools" @mouseleave="toggleTools">
        <div v-bind:class="{ 'hide-visually': isHidden }" class="c-editing-icons animated fadeIn">
            <span class="c-editing-icons__icon-wrapper" @click="deleteCategory">
                <i class="el-icon-delete"></i>
            </span>
            <span class="c-editing-icons__icon-wrapper" @click="toggleColorPicker">
                <i class="el-icon-menu"></i>
            </span>
            <span class="c-editing-icons__icon-wrapper" @click="toggleView">
                <i v-if="!isEditMode" class="el-icon-edit"></i>
                <i v-if="isEditMode" class="el-icon-check"></i>
            </span>
        </div>
        <div v-if="!isEditMode" class="display-mode">
            <div class="c-category__heading">
                <h4 class="c-category__title" :style="{ color: catColor }">{{ name }}</h4>
                <div @click="toggleMarkInput" 
                    :style="{ color: catColor }"
                    class="c-category__mark"
                    v-if="!isMarkEditMode">{{ mark }}</div>
                <input v-if="isMarkEditMode" 
                    @mouseout="toggleMarkInput"
                    class="c-category__inputMark" 
                    :style="{ color: catColor }"
                    :value="mark" 
                    @input="updateMark($event, id)"
                />   
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
                isHidden: true as boolean,
                isColorEditMode: false as boolean,
                isMarkEditMode: false as boolean,
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
            toggleMarkInput(): void {
                this.isMarkEditMode = !this.isMarkEditMode;
            },
            updateMark(e, id): void {
                this.$store.commit('updateMark', {newMark: e.target.value, id: id })
            },
            updateName(e, id): void {
                this.$store.commit('updateName', {newName: e.target.value, id: id })
            },
            updateDesc(e, id): void {
                this.$store.commit('updateDesc', {newDesc: e.target.value, id: id })
            },
            toggleTools(): void {
                this.isHidden = this.isEditMode ? false : !this.isHidden;
            },
            toggleView(): boolean {
                if (this.isColorEditMode) {
                    this.toggleColorPicker();
                }
                // TODO research how to reverse boolean
                if (this.$refs.descViewMode) {
                    this.$set(this.descInputHeight, 'height', this.$refs.descViewMode.clientHeight + 10  + 'px')
                }
                return this.isEditMode = !this.isEditMode
            },
            deleteCategory(id): void {
                if (this.isColorEditMode) {
                    this.toggleColorPicker();
                }
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
    // helpers
    .hide-visually {
        visibility: hidden;
    }

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
            margin: 0;
            font-size: 0.8rem;

            padding: .2rem;
            width: 100%;
        }

        &__inputTitle,
        &__inputMark {
            font-family: 'Amatic SC', italic;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 1.2rem;
        }
        
        &__inputMark {
            max-width: 25px;
        }

        &__inputTitle,
        &__inputDesc,
        &__inputMark {
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
            font-family: 'Didact Gothic', sans-serif;
            resize: none;
            line-break: 1;
        }

        .display-mode,
        .edit-mode {
            //min-height: 5rem;
            max-width: 18rem;
            width: 100%;
        }

    }

    .c-editing-icons {
        max-width: 75px;
        text-align: center;
        margin-right: 5px;
        padding-top: 5px;
        display: flex;
        justify-content: space-between;

        &__icon-wrapper {
            margin: 0.1rem 0.3rem 0;
            cursor: pointer;

            label {
                font-size: 0.6rem;
                margin: 0 0.5rem;
            }
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

    .vc-compact {
        position: absolute;
        top: 35px; 
    }
</style>