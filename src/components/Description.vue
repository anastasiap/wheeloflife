<template>
    <el-row>
        <el-col :span="12">
            <div v-for="category in filteredItems(1, 2)" :key="category.id">
                <Category :name="category.name" :description="category.description" :mark="category.mark" :id="category.id" :color="category.color" />
            </div>
        </el-col>
        <el-col :span="12">
            <div v-for="category in filteredItems(2, 2)" :key="category.id">
                <Category :name="category.name" :description="category.description" :mark="category.mark" :id="category.id" :color="category.color" />
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
        created() {
            //this.splitData(this.categories);
        },
        data() {
            return {
                categories: this.$store.state.categories,
                firstCol: [] as ICategory[],
                secondCol: [] as ICategory[],
            }
        },
        methods: {
            // TODO refactor this
            filteredItems(column, columns): any {
                const self  = this;                         // Enables us to pass this to the method
                const total = this.categories.length;            // How many items
                const gap   = Math.ceil(total / columns);   // How many per col
                let top     = (gap * column);               // Top of the col
                const bottom = ((top - gap) + 1);           // Bottom of the col
                top -= 1;                                   // Adjust top back down one

                // Return the items for the given col
                return self.categories.filter(item =>
                        self.categories.indexOf(item) >= bottom && self.categories.indexOf(item) <= top);
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

</style>