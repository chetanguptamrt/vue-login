export default `
<div class="m-5 table-responsive">
    <div class="h3 text-center">Product List</div>
    <div class="text-end my-2">
        <button type="button" class="btn btn-sm btn-primary" @click="goToAddProduct">Add Product</button>
    </div>
    <table class="table table-bordered table-striped">
        <caption>Products List</caption>
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Created On</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product, index in products">
                <th scope="row">{{index+1}}</th>
                <td><router-link :to="'/products/'+product._id">{{product.name}}</router-link></td>
                <td>{{product.category}}</td>
                <td>{{product.createdOn}}</td>
            </tr>
        </tbody>
    </table>
</div>
`