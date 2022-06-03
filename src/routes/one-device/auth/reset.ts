import { resetAuthOneDevice } from "../../../stores/one-device/auth"

export const get = () => {
    resetAuthOneDevice()
    return {
        status: 302,
        headers: {
            location: '/one-device/auth'
        }
    }
}