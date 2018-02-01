import Env from './../environments';

export class DbService {

    static baseUrl = Env.baseUrl;
    static parseUrl = (url) => DbService.baseUrl + url;

    static getItems = () => {
        let url = DbService.parseUrl('/api/items');
        console.log(url);
        return fetch(url).then(res => res.json());
    }

    static addItem = (item) => {
        let url = DbService.parseUrl('/api/items');
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then(res => res.json());
    }
}

export default DbService;