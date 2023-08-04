import axios from 'axios';


export async function load({params, fetch }) {
    // Realizar la petición.
    const response = await axios.get('https://en.wikipedia.org/wiki/Triceratops');
    var html = response.data;
    //console.log("HTML ", html);
    return {
        html
    };
 }