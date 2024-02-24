import template from './Add.template.js'
import { getAuthHeader } from "../../../../utils/authentication.util.js";
const { useForm, Field, ErrorMessage } = VeeValidate;
const { useRouter } = VueRouter;

import TheNumberInput from '../../../../libraries/custom-number-input.js'
import VueformMultiselect from '../../../../libraries/multiselect@2.6.6.js'
import TheFlatPickr from '../../../common/flatpickr/TheFlatPickr.js';

export default {
    name: 'Add',
    components: {
        'Field': Field,
        'ErrorMessage': ErrorMessage,
        'TheNumberInput': TheNumberInput,
        'VueformMultiselect': VueformMultiselect,
        TheFlatPickr: TheFlatPickr,
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