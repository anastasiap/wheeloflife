<template>
    <div class="m-action-buttons">
        <div class="c-button  button-add">
            <button @click="add" type="button" class="el-button el-button--primary is-circle">
                <svg class="icon-add" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 414.3 414.3">
                    <path d="M398.9 139.5l-1.1-0.5 -0.9-0.8c-3.3-2.8-7.5-4.3-12.4-4.3H272.5l-0.3-7.4c-0.7-14.6-1.2-29.3-1.7-43.9 -0.7-20.4-1.5-41.4-2.7-62.1 -0.7-12.4-9.9-18.1-18.2-19.3l-1.2-0.3C246.1 0.3 244.1 0 242 0h-97.7c-10.4 0-15.1 5.9-17.2 10.9l-0.8 1.7 -1.5 1.2c-4.2 3.4-6.3 8.3-6.2 14.5 0.4 37.7 4.2 75.3 8 107.1l1 8.1 -37.1 2.7c-20 1.5-40 2.9-60 4.4 -3.4 0.2-6.4 1.2-9.2 2.8l-0.9 0.5 -1 0.3c-8.8 2.4-15.1 10.5-15.1 19.4v5.6c0 3 0.8 6.1 2.4 9.1l0.8 1.4 0.1 1.6c2.1 27.2 2.3 54.7 2.3 82.8 0 13.4 10.1 17.4 14.4 18.4l0.9 0.3c2.5 1 5 1.4 7.6 1.4h102.9l0.2 7.6c0.3 11.8 0.7 23.6 1.1 35.5 0.6 18.6 1.3 37.8 1.4 56.8 0.1 13.2 9.9 17.2 14.1 18.3l0.9 0.3c2.5 1 5.1 1.5 7.9 1.5h94.9c5.5 0 10-1.7 13.4-5.2l1.5-1.5c3.4-3.4 5.2-7.9 5.2-13.4 0-29.2-0.2-63.6-1.7-97.4l-0.4-8.1h113.1c12.7 0 18.1-9.1 19-17.6l0.2-1.8 0.9-1.5c1.9-3.1 2.8-6.5 2.8-10.4V156.9C410.1 146.4 404 141.7 398.9 139.5zM369.9 248.5H253.2c-15.2 0-18.3 12.6-18.9 16.5l-0.3 1.3c-0.8 2.4-1.1 4.9-0.9 7.5 2.1 34 2.6 67.3 2.7 92.6l0 7.8h-57.7l-0.2-7.6c-0.3-9.3-0.6-18.6-0.9-27.9 -0.6-18.3-1.3-37.3-1.4-56 0-1.8-0.2-3.5-0.8-5.5l-0.3-1.1 0-1.1c0.2-6.1-1.8-11.8-5.5-15.7 -3.4-3.5-7.9-5.2-13.6-5.2H49.9l-0.1-7.7c-0.2-16.8-0.8-33.3-1.9-48.9l-0.5-7.7 36.4-2.7c20-1.5 39.9-2.9 59.9-4.4 1.7-0.1 3.5-0.5 5.4-1.1l1.4-0.4 1.4 0.1c6.3 0.4 11.9-1.6 15.1-5.2 2.7-3 3.7-7.2 3-12.5 -5.3-42.8-9.2-78.7-10.6-115.1l-0.3-8.1h69.3l0.3 7.5c0.5 11.2 0.9 22.4 1.3 33.6 0.8 21.9 1.6 44.5 3 66.7 0.1 1.3 0.3 2.7 0.7 4.3l0.2 1.9c0 10 6 20 19.2 20h116.7V248.5z"/>
                </svg>
            </button>
            <label class="c-button__label" for="">{{ $t("addCat") }}</label>
        </div>
        <div class="c-button">
            <button @click="alertResetMarks" type="button" class="el-button el-button--primary is-circle">
                <svg class="icon-zero" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 453.7 453.7">
                    <path d="M231.2 16.4c-9.7 0-19.6 0.6-29.6 1.7 -4.6 0.6-9.3 1.3-13.7 2 -2.9 0.4-5.5 1.3-7.9 2.5 -93.3 12.4-164.8 82.4-178.1 174.7C-14.3 310.5 71.4 417.1 193 435c10.7 1.6 21.7 2.4 32.7 2.4 0 0 0 0 0 0 111.7 0 208.7-75.9 225.6-176.6 9.8-58-11.3-121.7-57.9-174.7C353.9 41.1 296.3 16.4 231.2 16.4zM244.3 68.3c43.4 3.1 81.1 21 112.1 53.5 36.4 38.2 52.7 91.9 42.4 140.1 -13.1 61.4-77.6 123.5-175.7 123.5 -11.4 0-22.6-1-33.3-3 -90.1-16.5-151.1-99.7-135.9-185.4 13.1-73.5 77.7-124.8 157.3-124.8 5.4 0 10.8 0.2 16.2 0.7C234.1 73.5 239.8 71.8 244.3 68.3z"/>
                </svg>
            </button>
            <label class="c-button__label" for="">{{ $t("resetMarks") }}</label>
        </div>
        <div class="c-button">
            <button @click="alertResetWheel" type="button" class="el-button el-button--primary is-circle">
                <svg class="icon-reset" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 487.4 487.4">
                    <path d="M438.7 179.1c-3.8 3.6-7.5 7.2-11.1 10.9 -6.2-33.6-19.8-65.6-44.5-94.3 -66.7-77.4-187.1-108.5-275-49.5C30.2 98.6-12.7 197.8 3.4 288.9 21.2 390.4 104.4 484.2 220.3 470.5c63.1-7.4 119.9-38.6 159.6-83.7 0.8-0.7 1.5-1.5 2.3-2.3 0.9-1 1.7-2 2.4-3.1 1.6-2.5 2.8-5.3 3.4-8.3l0.5-2.5c2.7-13.8-7.2-27.7-21.7-30.5 -8.5-1.6-16.9 0.9-23 6.1 -2.4 2-4.4 4.5-5.9 7.3 -0.3 0.6-0.8 1.2-1 1.9 -0.1-0.1-0.3-0.1-0.4-0.2 -39.2 45-98.6 74.4-160.2 63C74.4 399.2 38 282.1 62.2 197.4 83.2 124.3 152.9 50.5 240.3 68.8c52.1 11 105.6 47.6 125.1 96.5 2 5.1 3.8 10.2 5.3 15.4 -7.1-5.9-14.6-11.5-22.4-16.7 -12.3-8-27.7-9.4-38.2 2.1 -8.7 9.5-9.4 28.5 2.9 36.5 16.4 10.8 30.7 23.1 43.2 37 7.5 8.4 14.4 17.5 20.5 27.2 1.3 2.1 2.7 4.3 4 6.5 6.2 10.7 16.1 13.6 25.2 11.7 7.4-0.1 14.6-2.7 18.9-8.5 3-4 6-7.9 9-11.8 3.3-4.3 6.7-8.5 10.1-12.6 11.1-13.5 22.9-26.5 35.8-38.6C504.5 190.4 463.3 156.1 438.7 179.1z"/>
                </svg>
            </button>
            <label class="c-button__label" for="">{{ $t("resetWheel") }}</label>
        </div>
        <div class="c-button">
            <button @click="downloadImage" type="button" class="el-button el-button--primary is-circle">
                <svg class="icon-image" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 446.3 446.3">
                    <path d="M381.9 113.2c-0.9-28.6-1.5-67.1-1.2-95.7 0-1.3-0.2-2.4-0.5-3.5 0.6-6.2-3.1-12.8-11.1-12.6C268.5 4.1 167.9 0.2 67.3 0c-8.4 0-12 7.3-11 13.8 -0.3 1.1-0.6 2.3-0.6 3.7 1.5 120.1 5.6 292.6 5.8 412.7 0 2.7 0.8 4.9 2 6.6 0.7 5.1 4.4 9.6 11 9.4 43.5-1.1 87-1.8 130.5-3.9 38.7-1.9 87 0.6 124-12 13.1-4.5 24.8-11.1 34.9-20.7 18.4-17.5 24.7-41 26.2-65.8 1.5-23.8-1.3-48.8-1.8-70.7C386.9 216.5 383.8 169.8 381.9 113.2zM318.2 327.4c-7.1 0-13.9 5.6-10.8 14.1 6.4 17.1 9.3 38.3-0.5 54.6 -11.8 19.8-33 19.2-53 21.8 -12.3 1.5-25.3 0.7-37.7 1.1 -9.6 0.3-131.6 3.2-131.6 3.7 -0.3-115.6-4.1-283.7-5.7-399.3 92.9 0.4 185.8 3.6 278.7 1.6 -0.4 94.9 8.1 232.1 8.6 307.1 -14.4-4.5-29.3-6.5-44.7-5.4C320.3 326.8 319.2 327.1 318.2 327.4zM327.3 406.4c9.3-15.9 11.7-35.4 6.8-56.6 11.2 0.4 22.3 2.6 32.8 7.1 0 0.1 0.1 0.3 0.1 0.4C363.6 382.4 347.8 397.7 327.3 406.4z"/><path d="M157.7 144.4c-1.1-0.3-2.2-0.5-3.5-0.5h-36.4c-15.1 0-15.1 23.4 0 23.4h29c1 14.2 1.4 28.5 0.4 42.8 -0.5 8-1.6 16.7-5.3 23.9 -3.5 6.7-12.7-3.3-15.9-6 -11.3-9.9-27.9 6.6-16.5 16.5 20.6 18 45.4 21.8 56.5-7.5 9.3-24.7 5.5-55.7 3.4-81.4C168.7 148.5 163.2 144.8 157.7 144.4z"/><path d="M201.8 145.6c-5 0.5-8.4 3.5-10 7.2 -1.1 1.7-1.7 3.7-1.7 6.2 0.2 27.9 2.3 55.9-2.2 83.6 -2.4 14.8 20.2 21.1 22.6 6.2 2.2-13.9 3.1-27.7 3.3-41.5 19.3-2.9 41.9-12.8 38.5-35.9C249.1 148.9 220 143.8 201.8 145.6zM229.2 176.3c-0.1 0-0.6 0.9-0.4 0.9 -0.7 0.8-1.4 1.5-2.2 2.1 -2.7 2.4-7.9 3.8-12.8 4.5 -0.1-5-0.1-10-0.2-15 3.1 0.3 6.2 0.8 9.3 1.8 2.3 0.8 0.4 0.1 2.5 1.2 -0.1-0.1 3.3 2.3 1.8 1.1 1.8 1.5 1.9 1.9 2.2 2.6C229.3 175.6 229.3 175.9 229.2 176.3z"/><path d="M337.8 240.4c0.9-2.8 1.4-5.6 1.7-8.5 0.9-5.5 1.4-11 1.4-16.5 0-3.3-1.1-5.9-2.9-7.7 -1-1.9-2.5-3.5-4.3-4.7 -1.9-1.8-4.5-3-8-2.8 -14.7 0.8-29.5 0.9-44.2 0.9 -0.4 0-0.7 0.1-1 0.1 -1.9-16 4.4-31.6 21.8-33.9 14.7-1.9 14.9-25.3 0-23.4 -67.6 8.8-54.1 118.6 12.1 117 0.6 0 1.1-0.1 1.7-0.2 3.5 0.4 7.1-0.8 10.1-3.2 5.1-4.3 8.6-9.4 10.8-14.9C337.3 241.8 337.6 241.1 337.8 240.4zM315.3 233.9c0 0 0 0 0 0 -0.6 1.2-1.2 2.4-2.1 3.5 -9.8-0.2-17.8-5.5-23.5-13 8.8 0 17.6-0.2 26.4-0.5 0 0.2 0 0.4 0.1 0.6 0.2 1.1 0.3 2.1 0.3 3.1C316.2 229.7 315.8 231.8 315.3 233.9z"/>
                </svg>
            </button>
            <label class="c-button__label" for="">{{ $t("download") }}</label>
        </div>
    </div>
</template>

<script lang="ts">
    import domToImage from 'dom-to-image'
    import Vue from 'vue'
    import { WHEEL_OF_LIFE } from '../../config/app.config'

    export default Vue.extend({
        methods: {
            add() {
                this.$store.commit('addCategory')
            },
            resetMarks() {
                this.$store.commit('resetMarks')
            },
            resetWheel() {
                this.$store.dispatch('getData', this.$i18n.locale)
            },
            downloadImage() {
                // TODO refactor this. create common loader component
                const loading = this.$loading({
                    background: 'rgba(255, 255, 255, 0.7)',
                    lock: false,
                    spinner: 'el-icon-loading',
                    text: this.$t('loading'),
                })

                const wrapperToImage = document.getElementById('main-container')
                const link = document.createElement('a')
                link.download = WHEEL_OF_LIFE

                domToImage.toJpeg(wrapperToImage, { bgcolor: 'white', quality: 0.95 })
                    .then((dataUrl: any) => {
                        link.href = dataUrl
                    }).then(() => {
                        link.click()
                        loading.close()
                    })
            },
            // TODO refactor this. Create common helper for all alerts
            alertResetMarks() {
                const that = this

                this.$confirm(this.$t('resetMarksWarning'), this.$t('warning'), {
                    cancelButtonText: this.$t('cancel'),
                    confirmButtonText: 'OK',
                    type: 'warning',
                })
                .then(() => {
                    that.resetMarks()
                })
                .catch(() => {})
            },
            alertResetWheel() {
                const that = this

                this.$confirm(this.$t('resetWheelWarning'), this.$t('warning'), {
                    cancelButtonText: this.$t('cancel'),
                    confirmButtonText: 'OK',
                    type: 'warning',
                })
                .then(() => {
                    that.resetWheel()
                })
                .catch(() => {})
            },
        },
        name: 'ActionBtn',
        props: [
            'label',
            'icon',
            'type',
        ],
    })
</script>

<style lang="scss" scoped>
    .m-action-buttons {
        display: flex;
        justify-content: center;
        text-align: center; 
        margin-bottom: 60px;
    }

    .c-button {
        margin: .3rem .7rem;
        min-width: 150px;
        
        &__label {
            display: block;
            margin-bottom: .5rem;
            margin-top: .5rem;
            color: #353535;
            font-size: 1rem;
            font-weight: 500;
            text-transform: lowercase;
        }

        &:hover {
            .c-button__label{
                color: #868686;
            }

            .el-button {
                background-color: #868686;
            }

            .icon-add,
            .icon-zero,
            .icon-reset,
            .icon-image {
                fill: #fff;
            }
        }  
    }

    .el-button {
        cursor: pointer;
        
        &:active,
        &:focus {
            outline: none;
        }

        &--primary {
            background-color: #f3f3f3;
            border: 0;
        }

        &.is-circle {
            padding: 15px;
        }
    }

    .icon-add,
    .icon-zero,
    .icon-reset,
    .icon-image {
        fill: #353535;
    }

    @media (max-width: 768px) {
        .m-action-buttons {
            flex-wrap: wrap;
        }

        .c-button {
            width: 120px;
            min-width: inherit;
        }

        .el-button {
            &.is-circle {
                padding: 10px;
            }
        }

        .button-add {
            display: none;
        }
    }
</style>