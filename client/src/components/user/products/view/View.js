import { getAuthHeader } from '../../../../utils/authentication.util.js';
import template from './View.template.js'
const { ref, onMounted } = Vue;
const { useRoute } = VueRouter;

export default {
    name: 'Products',
    setup() {
        const route = useRoute()
        const product = ref({});

        const getProductById = async () => {
            try {
                const res = await axios({
                    url: `/api/products/${route.params.id}`,
                    method: 'GET',
                    headers: getAuthHeader()
                })
                product.value = res.data.product
            } catch (err) {
                console.error(err);
            }
        }

        onMounted(() => {
            getProductById()
        })

        return {
            product,
        }
    },
    template: template
}