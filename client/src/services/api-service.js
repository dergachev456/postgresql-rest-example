export default class ApiService {

    _apiBase = 'http://localhost:4000';

    async getData(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async postData(body, url) {
        await fetch(`${this._apiBase}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
    }

    async putData(body, url, id) {
        await fetch(`${this._apiBase}${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
    }

}