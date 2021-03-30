import { devUrl } from "../utility/baseurls";

export const getBaseUrl = () => {
    if (process.env.NODE_ENV === "development") {
        return devUrl;
    } else {
        return "";
    }
};
