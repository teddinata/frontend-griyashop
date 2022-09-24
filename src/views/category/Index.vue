<template>
    <div class="container-fluid mt-5mb-4">
        <div class="row">
            <div v-for="category in categories" :key="category.id" class="col-md-2 col-4 mb-3">
                <router-link :to="{name: 'detail_category', params:{slug: category.slug}}">
                <div class="card h-100 border-0 shadow rounded-md">
                    <div class="card-body text-center">
                        <img :src="category.image" style="width: 100px;">
                        <hr>
                        <label class="font-weight-bold">{{ category.name }}</label>
                    </div>
                    <!-- <div class="card-body">
                        <router-link :to="{name: 'detail_category', params:{slug: category.slug }}" class="card-title font-weight-bold" style="font-size:20px">
                            {{ category.name }}
                        </router-link>
                    </div> -->
                    
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { computed, onMounted } from 'vue'
    import { useStore } from 'vuex'
        
    export default {
        name: 'CategoryIndexComponent',
        
        setup(){
            const store = useStore()
            
            onMounted(() => {
                store.dispatch('category/getCategories')
            })
            
            const categories = computed(() => {
                return store.state.category.categories
            })
            
            return { 
                categories,
            }
        }
    }
</script>