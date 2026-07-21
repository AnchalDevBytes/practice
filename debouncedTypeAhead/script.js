const input = document.getElementById("search");
const loading = document.getElementById("loading");
const suggestionList = document.getElementById("suggestions");

let controller = null;

function debounce(func, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

function renderSuggestions(products) {
    suggestionList.innerHTML = "";

    products.forEach((product) => {
        const li = document.createElement("li");
        li.textContent = product.title;

        li.addEventListener("click", () => {
            input.value = product.title;
            suggestionList.innerHTML = "";
        });

        suggestionList.appendChild(li);
    });
}

async function search(query) {
    if(!query.trim()) {
        suggestionList.innerHTML = "";
        loading.textContent = "";
        return;
    }

    if(controller) {
        controller.abort();
    }

    controller = new AbortController();

    loading.textContent = "loading...";

    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}`, {
            signal: controller.signal
        });

        const data = await response.json();
        loading.textContent = "";

        renderSuggestions(data.products);
    } catch (error) {
        if(error === "AbortError") {
            console.error("Previous request abort");
        } else {
            console.error("Error while searching..", error);
        }
    }
}

const debouncedSearch = debounce(search, 300);

input.addEventListener("input", (e) => {
    debouncedSearch(e.target.value);
});


