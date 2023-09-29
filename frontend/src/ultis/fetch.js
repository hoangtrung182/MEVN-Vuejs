import axios from 'axios';
import { ref } from 'vue';


export const useFetch = (url) => {
    const data = ref([]);
    const getData = async () => {
        const res = await axios.get(url);
        const data = res.data;
        data.value = data;
    }
    return { data, getData }
}