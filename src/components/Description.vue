<template>
    <el-row :gutter="40">
        <el-col :xs="24" :lg="12">
            <div v-for="(category, index) in filteredItems(1, 2)" :key="index">
                <Category 
                    :name="category.name" 
                    :description="category.description" 
                    :mark="category.mark" 
                    :id="category.id" 
                    :color="category.color" />
            </div>
        </el-col>
        <el-col :xs="24" :lg="12">
            <div v-for="(category, index) in filteredItems(2, 2)" :key="index">
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
import { ICategory } from '../configs/app.config'
    import Category from './Category'

    export default {
        components: {
            Category,
        },
        data() {
            return {
                firstCol: [] as ICategory[],
                secondCol: [] as ICategory[],
            }
        },
        props: [ 'categories' ],
        methods: {
            // TODO refactor this
            filteredItems(column, columns): any {
                const self  = this;                         // Enables us to pass this to the method
                const total = this.categories.length;       // How many items
                const gap   = Math.ceil(total / columns);   // 4  How many per col
                let   top   = gap * column;                 // 4 , 8  Top of the column
                const bottom = top - gap;           // 0 , 4  Bottom of the column
                top -= 1;                                   // 3 , 7 Adjust top back down one


                const result = self.categories.filter(item => 
                    self.categories.indexOf(item) >= bottom  
                    && self.categories.indexOf(item) <= top);
                
                // Return the items for the given col
                return result;
                
            },

            // orderData(d){
            //     // todo sort array by order key before splitting
            // },
            // splitData(d: ICategory[]) {
            //     const pivot = Math.ceil(d.length / 2);

            //     while (d.length > pivot) {
            //         this.firstCol.push(d.shift());
            //     }
            //     this.secondCol = d;
            // },
        },
        name: 'Description',
    }
</script>

<style scoped>
    .el-col:last-child {
        margin-left: -30px;
    }
</style>