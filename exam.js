function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

function throttle(fn, delay) {
    let canRun = true;

    return function(...arg) {
        if(!canRun) return;

        canRun = false;

        fn(...arg);

        setTimeout(() => {
            canRun = true;
        }, delay);
    };
};

