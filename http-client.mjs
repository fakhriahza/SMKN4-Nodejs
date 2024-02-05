import https from "https";

const endpoint = "https://eoof96gzt66imd9.m.pipedream.net";

const request = https.request(endpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        "accept": "applivation/json",
    }
}, (response) => {
    response.addListener('data', (data) => {
        console.info(`Receive data : ${data.toString()}`);
    });
});

const body = JSON.stringify({
    name: 'Jhon Doe'
});

request.write(body);
request.end();