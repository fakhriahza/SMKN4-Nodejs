import https from "https";

const endpoint = "https://eoof96gzt66imd9.m.pipedream.net";

const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "content-Type": "application/json",
        accept: "application/json",
    }
}
    
})
