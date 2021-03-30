import { API } from "../../utility/API";

export const getAllAnimalsAPIcall = async () => {
    //  dispatch(spinner(true));
    const result = await API.get("addresses/states").then((res) => res);
    //  dispatch(spinner(false));
    return result;
};
