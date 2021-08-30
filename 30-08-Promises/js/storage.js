const CONTACTS_KEY = 'CONTACTS';

class Store {

    static save(contact) {
        return this.getAll().then(res => {
            return new Promise(resolve => {
                setTimeout(() => {
                    res.push(contact);
                    this.updateLocalStorage(res);
                    resolve(res)
                }, 1000)
            })
        })
    }

    static getAll() {
        return new Promise((resolve) => {
            setTimeout(() => {
                let str = localStorage.getItem(CONTACTS_KEY);
                const contacts = (str) ? JSON.parse(str) : [];
                resolve(contacts);
            }, 1500)
        })

    }

    static updateLocalStorage(contacts) {
        localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts))
    }

    static remove(index) {
        return this.getAll().then(res => {
            return new Promise(resolve => {
                res.splice(index, 1);
                if (res.length === 0) {
                    localStorage.removeItem(CONTACTS_KEY)
                } else {
                    this.updateLocalStorage(res);
                }
                resolve(res)
            })
        });
    }
}