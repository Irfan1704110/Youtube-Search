import axios from 'axios';
const KEY ='AIzaSyBb_whrr8UKOZ1a5PYVQpF_bpHxlCDYhKs';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',

params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY


}


});
