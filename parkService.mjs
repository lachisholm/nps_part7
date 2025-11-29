

// generic JSON fetch helper
async function getJson(endpoint) {
    const baseUrl = "https://developer.nps.gov/api/v1/";
    const apiKey = "Y4ehKlRiC48UV0vFbh5ygd97irtGn5fhdvhsCHO1P"; 
    const response = await fetch(`${baseUrl}${endpoint}&api_key=${apiKey}`);
    const data = await response.json();
    return data;
}

// get details for ONE visitor center
export async function getParkVisitorCenterDetails(id) {
    const result = await getJson(`visitorcenters?id=${id}`);
    return result.data[0];
}
