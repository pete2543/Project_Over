<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Content goes here -->
            <h1>Create Student</h1>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected >ประเภทสินค้่า</option>
                        <option value="1" >Tablet</option>
                        <option value="2">Phone</option>
                        <option value="3">Smartwatch</option>
</select>
                </div>
                <div class="form-group">
                    <label for="name">name_product</label>
                    <input type="name" class="form-control" v-model="student.name_product" required>
                </div>
                <div class="form-group">
                    <label for="phone">price</label>
                    <input type="text" class="form-control" v-model="student.price" required >
                </div>
                 <div class="form-group">
                    <label for="phone">colour_product</label>
                    <input type="text" class="form-control" v-model="student.colour_product" required >
                </div>

                <div class="form-group">
                    <button class="btn btn-success btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
 import axions from 'axios';
export default {
    data() {
        return {
          student:{
            Item_category: '',
               name_producte: '',
                price: '',
                colour_product: ''
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:5000/api/create-student';
            axios.post(apiURL, this.student).then(() => {
                this.$router.push('/view');
                this.student = {
                   Item_category: '',
                   name_producte: '',
                   price: '',
                   colour_product: ''
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>