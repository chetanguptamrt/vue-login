export default `
<div class="row justify-content-center m-4">
    <div class="col-sm-5">
        <h3 class="text-center">Add Product</h3>
        <form @submit="handleAddProduct">
            <div class="mt-2">
                <label for="name" class="form-label">Name</label>
                <v-field type="text" as='input' name='name' :rules="{required: true}"
                    validateOnInput="true" class="form-control" id="name" />
            </div>
            <small><error-message name="name" class="text-danger" /></small>

            <div class="mt-2">
                <label for="category" class="form-label">Category</label>
                <v-field type="text" as='input' name='category' class="form-control" :rules="{required: true}"
                    validateOnInput="true" id="category" />
            </div>
            <small><error-message name="category" class="text-danger" /></small>

            <div class="mt-2">
                <label for="description" class="form-label">Description</label>
                <v-field as='textarea' name='description' class="form-control resize-none" :rules="{required: true}"
                    validateOnInput="true" id="description" />
            </div>
            <small><error-message name="description" class="text-danger" /></small>

            <div class="mt-4 text-center">
                <button type="submit" class="btn btn-primary px-3" :disabled='isSubmitting'>Add Product</button>
            </div>
        </form>
    </div>
</div>
`