import { getAuthHeader } from '../../../utils/authentication.util.js';
import template from './Products.template.js'
const { ref, onMounted } = Vue;
const { useRouter } = VueRouter;

export default {
    name: 'Products',
    setup() {
        const router = useRouter()
        const products = ref([]);

        const goToAddProduct = () => router.push('/products/add')

        const getProducts = async () => {
            try {
                const res = await axios({
                    url: '/api/products',
                    method: 'GET',
                    headers: getAuthHeader()
                })
                products.value = res.data.products
            } catch (err) {
                console.error(err);
            }
        }

        onMounted(() => {
            getProducts()
        })

        return {
            products,
            goToAddProduct,
        }
    },
    template: template
}