<template>
    <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :md="24" :lg="12">
            <div v-for="(category, index) in filteredItems(1, COLUMNS)" :key="index">
                <Category 
                    :name="category.name" 
                    :description="category.description"
                    :id="category.id" 
                    :mark="category.mark" 
                    :color="category.color" />
            </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="12">
            <div v-for="(category, index) in filteredItems(2, COLUMNS)" :key="index">
                <Category 
                    :name="category.name" 
                    :description="category.description" 
                    :mark="category.mark"
                    :id="category.id" 
                    :color="category.color" />
            </div>
        </el-col>
    </el-row>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { COLUMNS_NUMBER } from '@/config/app.config'
    import { ICategory } from '@/types/category'
    import Category from './Category.vue'

    export default Vue.extend({
        components: {
            Category,
        },
        data() {
            return {
                COLUMNS: COLUMNS_NUMBER,
                firstCol: [] as ICategory[],
                secondCol: [] as ICategory[],
            }
        },
        methods: {
            filteredItems(column: number, columns: number): ICategory[] {
                const categoriesList = this.categories
                const total = categoriesList.length        // How many items
                const gap   = Math.ceil(total / columns)   // 4  How many per col
                let   top   = gap * column                 // 4 , 8  Top of the column
                const bottom = top - gap                   // 0 , 4  Bottom of the column
                top -= 1                                   // 3 , 7  Adjust top back down one

                return categoriesList.filter((item: ICategory) =>
                    categoriesList.indexOf(item) >= bottom && categoriesList.indexOf(item) <= top)
            },
        },
        name: 'Description',
        props: [ 'categories' ],
    })
</script>

<style lang="scss" scoped>
    .el-col:last-child {
        margin-left: -30px;
    }
    
    @media (max-width: 1200px) { 
        .el-col:last-child {
            margin-left: 0;
        }
    }
</style>