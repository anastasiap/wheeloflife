<template>
    <div class="c-category" @mouseenter="toggleTools" @mouseleave="toggleTools">
        <div v-bind:class="{ 'hide-visually': isHidden }" class="c-editing-icons animated fadeIn">
            <span class="c-editing-icons__icon-wrapper" @click="deleteCategory">
                <svg class="icon-delete" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 470.7 470.7">
                    <path  d="M96 133.5c3.9 2.7 8.2 4.3 12.6 5.3 -5.3 99-15.8 202.4 20.4 297 1.7 4.5 4.9 7.4 8.6 8.8 1.3 1.8 3.1 3.3 5.6 4.5 64.7 28.7 133.5 27.5 199.9 4.5 8.7-3 11.3-11.2 9.7-18.3 12.6-95.9 24.6-194.7 14.7-291.4 7.8-1.7 15.1-5 20.6-11.1 10.7-12 8.7-27.3 3.4-41.1 0-3.8-1.8-7.5-5.9-10 -1.6-1.3-3.5-2.1-5.6-2.6 -29.7-12.7-61.4-19.3-93.7-22.4 0.6-2.9 0.3-6.1-1.1-9.3C275.2 24.1 255-3.4 226.1 0.3c-27.9 3.6-41.4 30.8-47 55.7 -18.6 1-37 2.2-55 3.2 -0.1 0-0.2 0-0.4 0.1 -0.9-0.1-1.7-0.2-2.6-0.1 -19.3 2.3-35.5 11.5-44 29.6 -1.1 2.4-1.7 4.9-1.7 7.4 -0.7 2.5-0.8 5.3 0.2 8.4C79.5 116.7 85.7 126.3 96 133.5zM324.1 428.5c-54.9 16.9-112.2 18.7-165.8-5.1 -0.8-0.4-1.6-0.6-2.4-0.8 -33-90.8-22.6-189.4-17.5-284.2 65.5-4.6 131.5-5.7 196.8 2.6 0.8 0.8 1.7 1.5 2.6 2.1C347.6 237.8 336.4 334.5 324.1 428.5zM228.7 29.7c12.9-1.7 22 13.3 27.6 25.1 -15.4-0.5-31-0.4-46.4 0C212.9 43.4 218.4 31 228.7 29.7zM110.8 92.7c-1.8 1.6 4.9-2.5 2.8-1.6 1.5-0.6 3.1-1 4.6-1.5 -0.4 0.1 4.9-0.9 2.8-0.6 0.2 0 0.4-0.1 0.5-0.1 0.8 0.1 1.6 0.2 2.4 0.1 77.3-4.5 167.3-15.4 240.8 15.7 0.2 0.7 0.5 1.4 0.7 2.1 0.3 1 0.5 2.1 0.7 3.1 0 0.2 0 0.5 0.1 0.8 0 0.5 0 1.1 0 1.6 0 0 0 0.2-0.1 0.2 -0.3-0.1-2.5 1.5-1.6 1.3 -1.6 0.6-3.3 1-5 1.4 -0.8 0.2-1.9 0.3-3.1 0.4 -1.6-1.1-3.5-2-6-2.3 -75.3-10.3-150.9-9.4-226.5-3.5 -1.4 0.1-2.6 0.4-3.8 0.8 -7.4-0.1-12.1-3.7-15.2-11.3C106.6 96.9 108.1 95.1 110.8 92.7z"/><path d="M186.4 186.9c-0.2-19.1-29.9-19.1-29.7 0 0.4 47.8 5.9 95.1 11.9 142.5 2.3 18.7 32 19 29.7 0C192.3 282 186.8 234.7 186.4 186.9z"/><path d="M248.7 184c-1-19-30.7-19.1-29.7 0 2.8 52.5 4.7 105 10.4 157.3 2 18.8 31.7 19 29.7 0C253.4 289 251.5 236.5 248.7 184z"/><path d="M284.9 186.4c8 58.7 4.2 118.1 3.9 177.1 -0.1 19.1 29.6 19.1 29.7 0 0.3-61.9 3.4-123.4-5-185C310.9 159.6 282.3 167.7 284.9 186.4z"/>
                </svg>
            </span>
            <span class="c-editing-icons__icon-wrapper" @click="toggleColorPicker">
                <svg :class="{'icon-pallete': !isColorEditMode, 'icon-pallete--active': isColorEditMode }" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 471.4 471.4">
                    <path  d="M395.8 7.9c-1.7-1.2-3.7-2.1-6.2-2.6C259-20.3 112.6 49.5 43.4 161.8 10.5 215.3 3 280.6 27.4 338.7c13.8 32.9 37.2 64.1 64.9 86.6 40 32.5 92.4 42.9 142.4 45.4 50.1 2.5 106-1.2 146.7-34.3 22.6-18.4 36.5-42.7 44-70.6 8.9-33-5.3-68.4-17.1-98.6 -11.4-29.5-23.9-59.6-7.7-89.5 12.9-23.8 32-43.9 45.9-67.2C477.1 59.3 444.3 24.8 395.8 7.9zM424.5 79.2c-5.2 19.3-21.6 37-33.2 52.8 -29.3 39.9-39 73.5-23.2 121.9 18.1 55.2 46.1 107.5-5.2 154.8 -37.7 34.8-102.9 30.5-150 28.2 -1.7-0.1-3.1 0.1-4.5 0.4 -32.9-10.2-70.4-17.9-97.6-40 -24.7-20-44.5-49.7-55.7-79.3C35.4 266.7 49.8 213 78.8 168.4 139.5 75.1 270.4 16.1 380.1 37.4c1 0.6 2.2 1.1 3.4 1.5C402.9 45.2 431.3 53.9 424.5 79.2z"/><path d="M280.8 298c-19.9 4-35.3 20.9-45.9 37.2 -1.4 2.1-2.1 4.1-2.4 6.1 -0.7 1.2-1.3 2.5-1.7 4 -3.9 14.3-4.2 32.1 8.3 42.5 31.6 26.2 78.5-4.3 91.5-36 6-14.5 2-31.3-8.2-42.7C311.9 297.5 295.3 295.1 280.8 298zM301 342.5c-0.3 0.5-0.9 2.1-1.1 2.3 -0.7 1.3-1.5 2.5-2.4 3.7 -0.2 0.3-0.3 0.4-0.4 0.6 -0.2 0.1-0.5 0.4-1.1 1.2 -1.1 1.3-2.4 2.5-3.6 3.7 -4.1 4-8.9 7.1-13.8 9.9 -0.7 0.1-1.4 0.1-2.1 0.3 -4.9 1.1-6.4 1.4-11.6 1.4 -0.8 0-1.6-0.1-2.3-0.1 -0.2 0-0.3-0.1-0.6-0.1 -0.3-0.1-0.7-0.2-1-0.3 -0.1-0.1-0.8-0.3-1.3-0.6 -0.1-0.2-0.1-0.4-0.2-0.6 0.4 1.1-0.2-3.1-0.1-3.9 0.1-1.5 0.5-3.3 1.4-6.4 0.2-0.6 0.2-1.2 0.3-1.9 0.2-0.3 0.5-0.6 0.7-0.9 3.8-5.8 8-10.9 13.2-15.6 1.4-1.2 3.4-2.7 6.2-4.3 0.9-0.5 1.9-1 2.9-1.5 -0.1 0.1 2.3-0.8 2.5-0.9 0.8-0.3 1.7-0.4 2.6-0.6 0.6-0.1 1.6-0.3 2-0.3 0.9-0.1 1.7 0 2.6 0.1 0.4 0 0.9 0.1 1.2 0.2 0.6 0.1 1.2 0.4 1.8 0.6 0.5 0.2 1 0.4 1.4 0.6 0.2 0.1 0.7 0.4 1.1 0.7 0.5 0.4 0.9 0.8 1.4 1.3 0 0 0 0 0 0 0.4 0.6 0.8 1.1 1.1 1.7 0 0.1 0.1 0.1 0.1 0.1 0.2 0.5 0.3 1 0.4 1.5 -0.2-0.4 0 1.9 0.1 3.7C302 338.3 301.5 340.8 301 342.5z"/><path d="M123.7 294.7c-5.2 0.2-9.8 3.1-12.1 7.5 -4.1 0.7-8.2 1.8-11.9 3.2 -7 2.5-11.6 9.2-9.5 16.8 1.6 5.8 7.8 10.6 13.9 10.1 1.4 4.7 3.1 9.4 5.5 13.7 3.2 5.9 8.3 11.3 14.9 13 9.3 2.5 17.5-2.6 22.1-10.2 3.7-0.7 7.2-3 9.4-6.4 7.6-11.7 11.6-25.8 2.2-37.6C150.3 295.1 135.1 294.3 123.7 294.7z"/><path d="M110.5 260.4c1.6 3.4 4.7 6.2 8.5 7.5 13.2 4.5 27.9 4.9 37-7.2 7.5-10 4.6-24.9 1.3-35.8 -1.5-5-5.5-8.8-10.3-9.9 -1.7-3.8-3.8-7.5-6-10.8 -4.2-6.1-11.8-9-18.6-5.1 -5.3 3-8.3 10.1-6.3 16 -4.2 2.5-8.3 5.4-11.9 8.7 -4.9 4.5-8.9 10.8-8.9 17.7C95 251.1 102 257.8 110.5 260.4z"/><path d="M210.2 153.5c1-4.8 1.7-9.7 1.8-14.7 0-6.7-1.9-13.8-6.8-18.6 -7-6.6-16.6-6.1-24.3-1.6 -3.6-1.1-7.7-0.8-11.3 1.1 -12.2 6.6-22.6 17.1-19.9 32 2.2 12.3 15.1 20.3 25.4 25.4 4.7 2.3 10.1 2 14.2-0.8 3.9 1.4 8 2.3 12 2.9 7.3 1.1 14.6-2.5 16.4-10.2C219 163.1 215.9 156 210.2 153.5z"/><path d="M268.4 115.1c1.3 7.3 7 13 14.8 12.3 6-0.6 11.8-5.8 12.4-11.9 4.9-0.6 9.8-1.4 14.5-3 6.3-2.1 12.5-6.2 15.5-12.4 4.1-8.7 0.5-17.7-6.1-23.5 -0.1-3.8-1.7-7.6-4.7-10.4 -10.2-9.5-23.3-16-36.6-8.8 -11 6-14.5 20.8-16 32.1 -0.7 5.2 1.4 10.2 5.3 13.2C267.3 106.9 267.7 111.1 268.4 115.1z"/>
                </svg>
            </span>
            <span class="c-editing-icons__icon-wrapper" @click="toggleView">
                <svg class="icon-edit" v-if="!isEditMode" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 479 479">
                    <path d="M13.6 467.5c1.7 6.5 7.7 12.5 16.1 11.3 53.3-7.5 105.5-19.6 157.6-33.1 2.4-0.6 4.3-1.8 5.8-3.1 3.2-0.6 6-2.7 7.9-5.5 1-0.6 2-1.3 3-2.3 73.5-75.4 152.2-145.6 225.7-221 5.9-6.1 4.3-13.7-0.2-18.4 -0.6-1-1.3-1.9-2.2-2.8 -1.3-1.3-2.7-2.7-4.1-4 14.7-15.3 28.4-31.5 41.9-48 4.7-5.7 3.8-12.4 0.5-17.2 -0.5-1.1-1.2-2.2-2.1-3.3 -35.9-41.9-74.8-80.6-116.6-116.6 -6.4-5.5-14.3-3.7-19.1 0.9 -1 0.6-2 1.3-3 2.3 -15.3 15.3-30.7 30.3-47.3 44.1 -0.2 0.1-0.3 0.3-0.4 0.4 -1.6-1.3-3.1-2.7-4.7-4 -9.4-7.9-21.9-0.3-23.2 8.6C172 126.9 98.5 202 23.2 275.2c-0.9 0.8-1.5 1.7-2.1 2.6 -1.5 1.6-2.6 3.7-3 6.6 -7.7 59.8-9.8 119.7-5.2 179.9C13.1 465.5 13.3 466.5 13.6 467.5zM39 450.4c-0.6-9.9-1-19.8-1.2-29.7 9.6 8.1 18.9 16.5 28 25.1C56.8 447.4 47.9 449 39 450.4zM338.2 31.2c35.5 31.3 68.8 64.7 99.9 100.4 -10.8 13.1-22 25.9-33.7 38.1 -34.8-34.5-69.9-68.6-106.7-100.9C311.8 56.9 325.1 44.1 338.2 31.2zM266.1 76.7c5.9 5 11.7 10.1 17.5 15.3 -39.2 38.9-79.2 77-115.5 118.7 -11.3 12.9 7.6 31.9 18.9 18.9 36.6-42 76.9-80.5 116.5-119.7 5.2 4.7 10.3 9.6 15.4 14.3 -58.8 56.1-110.9 118.6-167.3 177 -12 12.4 6.9 31.3 18.9 18.9 56.6-58.6 108.8-121.3 167.9-177.5 7.5 7.2 15 14.5 22.4 21.8 -43.7 43.3-88.3 85.7-131.2 129.8 -12 12.4 6.9 31.3 18.9 18.9 43-44.2 87.6-86.6 131.4-130 7.2 7.1 14.3 14.2 21.5 21.3 -69.4 70.3-142.8 136.5-211.9 207.1 -51.3-36.3-97.4-78.5-138.3-126.1C122.6 215.6 192.7 144.4 266.1 76.7zM41.4 314.7c36.4 40.8 76.7 77.4 120.7 109.8 -21.4 5.4-42.9 10.4-64.4 15 -18.1-17.9-36.9-35.1-57.1-50.8 -1-0.8-2-1.4-3.1-1.8C37.7 362.8 39 338.7 41.4 314.7z"/>
                </svg>
                <svg class="icon-check" v-if="isEditMode" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 469.9 469.9">
                    <path  d="M429.3 44.6c-3.3-5.8-8.5-8.9-14.7-8.9 -3.5 0-7 1-9.9 2.8 -2 1-3.8 2.2-5.3 3.7 -92.6 92.6-171.4 169.4-254.3 242.8l-43.5-52.8c-4.2-5.1-8.9-6.2-12.1-6.2 -3.8 0-7.8 1.6-10.8 4.2l-0.7 0.4c-23.6 15.2-45.6 27.9-67.4 38.9 -5.8 2.9-9.2 8-9.3 13.9 -2.7 6.6-1.1 13.5 4.3 18.7 19.5 18.6 37.6 39.2 55.1 59.1 19.1 21.8 38.9 44.3 60.7 64.4 0.8 0.7 1.6 1.4 2.6 2 3.2 4.3 7.8 6.8 12.5 6.8 3.4 0 6.6-1.2 9.8-3.6 60.7-45.8 114.9-97.5 155.3-137.4 11.9-11.7 23.8-23.4 35.7-35.1 41.8-41 84.9-83.5 125.8-126.5 2.2-2.3 3.8-5.1 4.5-8.1 3.6-5.5 3.4-12.1-0.5-17.9C452.8 84.3 440.5 64.4 429.3 44.6zM429.1 114.1c-30.1 31.4-61.6 62.5-92.1 92.5 -16.1 15.9-32.2 31.7-48.1 47.7 -45.6 45.6-95.3 93.7-150.7 136.8 -18.1-17.7-35.1-37-51.6-55.7 -12.9-14.6-26.1-29.6-39.9-43.9 12.4-6.8 25.1-14.2 38.4-22.5l45.1 54.8c4.2 5.1 8.9 6.2 12.2 6.2 4.1 0 8.2-1.7 11.6-4.9 1.2-0.7 2.3-1.5 3.3-2.3 88.6-77.6 173.7-160.9 252.5-239.6C415.4 92.8 421.8 102.9 429.1 114.1z"/>
                </svg>
            </span>
        </div>
        <div v-if="!isEditMode" class="c-category--display-mode">
            <div class="c-category__heading">
                <h4 @click="toggleView" class="c-category__title" :style="{ color: catColor }">{{ name }}</h4>
                <div class="c-category__mark-wrapper" :style="{ 'background-color': catColor }">
                    <div @click="toggleView" 
                        class="c-category__mark"
                        v-if="!isEditMode">{{ mark }}</div>
                    <input v-if="isEditMode" 
                        class="c-category__inputMark" 
                        :value="mark" 
                        @input="updateData($event.target.value, id, 'mark')"
                    />
                </div>
            </div>
            <div ref="descViewMode" @click="toggleView" class="c-category__description">{{ description }}</div>
        </div>
        <div v-if="isEditMode" class="c-category--edit-mode">
            <form action="">
                <input 
                    class="c-category__inputTitle" 
                    :style="{ color: catColor }"
                    :value="name" 
                    @input="updateData($event.target.value, id, 'name')" />
                <textarea 
                    ref="descEditMode"
                    v-bind:style="descInputHeight"
                    class="c-category__inputDesc" 
                    :value="description" 
                    @input="updateData($event.target.value, id, 'description')" 
                    placeholder="What is this">
                </textarea>
            </form>
        </div>
        
        <chrome-picker class="" v-model="catColor" v-if="isColorEditMode" @input="updateColor"></chrome-picker>
    </div>   
</template>

<script lang="ts">
import { updateData } from '@/services/service'
import { ICategory } from '@/types/category'
import Vue from 'vue'
import chrome from 'vue-color/src/components/Chrome.vue'

interface IRefs {
    descViewMode: HTMLFormElement
}

export default Vue.extend({
    data() {
        return {
            catColor: this.color as string,
            descInputHeight: {},
            isColorEditMode: false as boolean,
            isEditMode: false as boolean,
            isHidden: true as boolean,
            isMarkEditMode: false as boolean,
        }
    },
    components: {
        'chrome-picker': chrome,
    },
    mounted() {
        if (!this.isEditMode) {
            const FormEl = this.$refs.descViewMode as HTMLElement
            const FormHeight = FormEl.clientHeight
        }
    },
    methods: {
        updateData,
        toggleTools(): boolean | void {
            if (!this.isColorEditMode && !this.isEditMode) {
                return this.isHidden = !this.isHidden
            }
        },
        toggleView(): boolean {
            // set height for textearea element
            if (window.innerWidth < 768) {
                return false
            }

            if (this.$refs.descViewMode) {
                const FormEl = this.$refs.descViewMode as HTMLElement
                const FormHeight = FormEl.clientHeight

                this.$set(this.descInputHeight, 'height', FormHeight + 25 + 'px')
            }

            return this.isEditMode = !this.isEditMode
        },
        deleteCategory(): void {
            this.$store.commit('deleteCategory', this.id)
        },
        toggleColorPicker(): boolean {
            return this.isColorEditMode = !this.isColorEditMode
        },
        updateColor(value: { hex: string }): void {
            // hack: fixing - catColor model gets object on click, not store value
            this.catColor = value.hex

            updateData(value.hex, this.id, 'color')
        },
    },
    name: 'Category',
    props: [
        'name',
        'description',
        'mark',
        'id',
        'color',
    ],
})
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

        &__title,
        &__mark {
            font-family: 'Amatic SC', italic;
            text-transform: uppercase;
            font-size: 1.6rem;
            padding: 3px 0;
        }

        &__title {
            margin: 0;
            width: 100%;
        }

        &__mark-wrapper {
            width: 45px;
            text-align: center;
        }

        &__mark {
            color: #fff;
        }

        &__description {
            margin: 0;
            font-size: 0.8rem;
            padding: 0;
            width: 100%;
        }

        &__inputTitle,
        &__inputMark {
            font-family: 'Amatic SC', italic;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 1.6rem;
        }

        &__inputMark {
            max-width: 25px;
            color: #fff;
        }

        &__inputTitle,
        &__inputDesc,
        &__inputMark {
            background: #fff;
            border: none;
            padding: 3px 5px;
            margin: 0;
            width: 100%;
            box-shadow: inset 0px 0px 2px 0px rgba(56, 56, 56, 0.2);


            &:focus {
                outline: none;
            }
        }

        &__inputDesc {
            font-family: 'Didact Gothic', sans-serif;
            resize: none;
            line-break: 1;
        }

        &--display-mode,
        &--edit-mode {
            max-width: 18rem;
            width: 100%;
        }
    }

    .c-editing-icons {
        max-width: 75px;
        text-align: center;
        margin-right: 10px;
        margin-left: 5px;
        padding-top: 5px;
        display: flex;
        justify-content: space-between;

        &__icon-wrapper {
            margin: 0.2rem 0.3rem 0;
            cursor: pointer;

            label {
                font-size: 0.6rem;
                margin: 0 0.5rem;
            }
        }

        .icon-edit,
        .icon-delete,
        .icon-pallete {
            fill: #afafaf;
            stroke: #afafaf;
        }

        .icon-check {
            fill: #2ea538;
        }

        .icon-pallete {
            &--active {
                fill: #2ea538;
            }
        }

        .icon-delete {
            &:hover {
                fill: red;
            }
        }
    }

    .vc-compact, .vc-chrome {
        position: absolute;
        top: 35px;
        z-index: 9999;
    }

    @media (max-width: 768px) { 
        .c-editing-icons {
            display: none;
        }

        .c-category {
            justify-content: center;
            max-width: 100%;
        } 
    }
</style>