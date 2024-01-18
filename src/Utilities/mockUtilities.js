import { mockUserData } from "./mockData";
export const mockLocalStorage = (() => {
    const storage = {}
    
    return {
        setItem: (key, value) => {
            return storage[key] = value;
        },
        getItem: (key) => {
            if (storage[key]){
                return storage[key];
            }
            else {
                return null;
            }
        },
        removeItem: (key) => {
            if (storage[key]){
                return delete storage[key];
            }
            else {
                return null;
            }
        },
        clear: () => {
            return storage = {};
        }
    }
})();

export const mockLoginApi = () => {
    return Promise.resolve({
        json: () => ({
            status: 'success',
            data: mockUserData
        })
    })
}