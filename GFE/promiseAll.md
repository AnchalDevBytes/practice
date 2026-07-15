```bash

export default function promiseAll(iterable) {
    let complete = 0;
    let result = [];

    return new Promise((resolve, reject) => {
        if(iterable.length === 0) return resolve([]);

        for(let i=0; i<iterable.length; i++) {
            Promise.resolve(iterable[i])
                .then((value) => {
                    result[i] = value;

                    complete++;

                    if(complete === iterable.length) {
                        resolve(result);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        }
    });
}
```
