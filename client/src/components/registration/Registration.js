import template from './Registration.template.js'
const { Form, Field, ErrorMessage, useForm } = VeeValidate;
console.log('registration')

export default {
    name: 'registration',
    components: {
        'v-form': Form,
        'v-field': Field,
        'error-message': ErrorMessage,
    },
    setup() {
        const { setErrors, handleSubmit, isSubmitting } = useForm();
        const { useRouter } = VueRouter
        const router = useRouter()

        const handleRegistration = handleSubmit(async (data) => {
            try {
                await axios({
                    url: '/api/signup',
                    method: 'POST',
                    data: data,
                });
                router.replace('/login')
            } catch (err) {
                console.error(err)
                if (err?.response?.data?.status === "EMAIL_ALREADY_EXISTS")
                    setErrors({
                        email: 'Email Already Exists!'
                    })
            }
        })

        return {
            handleRegistration,
            isSubmitting,
        }
    },
    template: template
}