<template>
    <el-row>
        <el-col :span="12">
            <div v-for="(category, index) in categories" :key="index">
                <Category :name="category.name" :description="category.description" :mark="category.mark" :id="category.id" :color="category.color" />
            </div>
        </el-col>
        <!-- <el-col :span="12">
            <div v-for="(category, index) in secondCol" :key="index">
                <Category :name="category.name" :description="category.description" :mark="category.mark" :id="category.id" />
            </div>
        </el-col> -->
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