import http, { request } from 'http';
import { Request } from 'undici-types';

const server = http.createServer((request, response) =
console.info(request.url);
console.info(request.method);

if (request.method === 'POST') {
    Request.addListener('data', (data) => {
        response.setHeader('Content-Type', 'application/json');
        response.write(data);
        response.end();
    });
} else {
    if (request.url === '/hello') {
        response.write('hello again world!');
    } else {
        response.write('Goodbye world!');
    }
    response.end('ok');
});