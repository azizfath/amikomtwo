import MikomOneDevice from "@binsarjr/apiamikomone"
import { getAuthData, isLogged } from "../../stores/one-device/auth"

export const get = async () => {
    if (!(await isLogged())) {
        return {
            status: 302,
            headers: { location: '/one-device/auth' }
        }
    }
    const { nim, password, deviceId } = await getAuthData()
    const { access_token, api_key } = await MikomOneDevice.Auth(nim, password, deviceId)
    const user = await MikomOneDevice.Mahasiswa.Bio(access_token, api_key)
    
    return {
        body: {user}
    }

}