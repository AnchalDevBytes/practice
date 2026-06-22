# Q2. Shallow Copy and Deep Copy

## Shallow Copy

```bash
    const original = { name: 'Anchal', address: { city: 'Bangalore' } };

    const shallowCopy = {...original};
    # const shallowCopy = Object.assign({}, original);

    shallowCopy.address.city = 'Coimbatore';

    console.log(original.address.city); // Coimbatore - changed

```

## Deep Copy 

```bash
    const originalObj = { name: 'Anchal', address: { city: 'Bangalore' } };

    # const deepCopy = JSON.parse(JSON.stringify(originalObj));
    const deepCopy = structuredClone(originalObj);
    deepCopy.address.city = 'Delhi';

    console.log(originalObj.address.city); // Bangalore - unchanged
```

TRICKY :- Why not always use JSON.parse(JSON.stringify()) ?
- Losses Function :- undefined, Date, objects become strings, Map/Set, circular refernce throw. 
- Fixes :- To fix this we use structuredClone. But it still not clone function/class methods. for these we need to use external library like lodash.
