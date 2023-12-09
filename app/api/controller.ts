import { API } from "./model"

export const data = async (param: string) => {
    const { data } = await API(param);
    return data
}