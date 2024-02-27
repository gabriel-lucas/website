import axios from 'axios';
import cheerio from 'cheerio';

export async function load({params, fetch }) {
    // Realizar la petición.
    const response = await axios.get('https://en.wikipedia.org/wiki/Triceratops');
    var html = response.data;

    // Load the HTML into cheerio
    const $ = cheerio.load(html);
    
    // Select the head and body elements
    const headHtml = $('head').html();
    const bodyHtml = $('body').html();
    
    // Join the head and body HTML
    const fullHtml = headHtml + bodyHtml;

    //console.log("HTML ", html);
    return {
        fullHtml
    };
 }