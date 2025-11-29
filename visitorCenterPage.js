// get a single URL parameter
export function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);
}

// main initializer function
async function init() {
    
    // fill this in later
}

init();