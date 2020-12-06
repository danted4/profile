import axios from 'axios';

// const JSON_PATH='https://raw.githubusercontent.com/danted4/profile/master/public/json/content.json';
const JSON_PATH='json/content.json';

const REQUEST_HANDLER = {
    updateAppState : (fn,component) => {
        axios.get(JSON_PATH)
        .then(res => {
            fn(res.data[component]);
        })
        .catch(err => {
            console.log(err);
        })
    }

}

export default REQUEST_HANDLER;