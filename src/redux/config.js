export const URL = 'http://37.46.135.194';
export const API_URL = "http://localhost:3000/api";


export const config = () => {
    return {
        headers: {
            "Content-Type": 'application/json'
        },
        include: true,
        withCredentials: true,
    };
};