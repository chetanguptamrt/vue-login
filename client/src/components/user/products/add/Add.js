import template from './Add.template.js'
import { getAuthHeader } from "../../../../utils/authentication.util.js";
const { useForm, Field, ErrorMessage } = VeeValidate
const { useRouter } = VueRouter

export default {
    name: 'Add',
    components: {
        'v-field': Field,
        'error-message': ErrorMessage,
    },
    setup() {
        const { handleSubmit, isSubmitting } = useForm();
        const router = useRouter()

        const handleAddProduct = handleSubmit(async (data) => {
            try {
                await axios({
                    url: '/api/products',
                    method: 'POST',
                    data: data,
                    headers: getAuthHeader()
                })
                router.push('/products')
            } catch (err) {
                console.error(err)
            }
        })

        return {
            handleAddProduct,
            isSubmitting,
        }
    },
    template: template
}