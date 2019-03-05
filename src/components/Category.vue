<template>
    <div class="c-category">
        <div v-if="isDisplayMode" class="display-mode">
            <div class="c-category__heading">
                <h4 class="c-category__title" :style="{ color: catColor }">{{ name }}</h4>
                <div class="c-category__mark">{{ mark }}</div>
            </div>
            <div class="c-category__description">{{ description }}</div>
        </div>
        <div v-if="!isDisplayMode" class="edit-mode">
            <form action="">
            <input :value="name" @input="updateName($event, id)" />
            <textarea :value="description" @input="updateDesc($event, id)" placeholder="What is this"></textarea>
            </form>
        </div>
        <div class="icons-container">
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
                isDisplayMode: true as boolean,
                isColorEditMode: false as boolean,
                catColor: this.color as string
            }
        },
        components: {
            'compact-picker': compact,
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
                return this.isDisplayMode = !this.isDisplayMode
            },
            deleteCategory(id): void {
                this.$store.commit('deleteCategory', id);
            },
            toggleColorPicker(): boolean {
                return this.isColorEditMode = !this.isColorEditMode
            },
            updateColor(value): void {
                this.catColor = value.hex
            },
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

        &__heading { 
            display: flex;
            justify-content: space-between;
        }

        &__title {
            text-transform: uppercase;
        }

        &__title, 
        &__mark {
            margin: 5px 0;
        }

        &__description {
            margin: 5px 0;
            font-size: 0.8rem;
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
    }
</style>