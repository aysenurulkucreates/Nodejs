const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write('<html>');
        res.write('<head><title>My First Exercise with Node.Js</title></head>');
        res.write('<body>')
        res.write('<h2>Welcome to Homepage</h2>');
        res.write('<ul><li>User 1</li></ul>');
        res.write('<form action="/create-user" method="POST">')
        res.write('<input type="text" name="username">Username');
        res.write('<button type="submit">Create User</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
        
    }
    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
       return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        console.log("username:", message);

         res.statusCode = 302;
         res.setHeader('Location', '/');
         return res.end();

       });
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<html>');
    res.write('<head><title>404 - Not found</title></head>');
    res.write('<body><h1>404 - Not found</h1></body>');
    res.write('</html>');
    res.end();

});

server.listen(3000);

console.log("Port is working in 3000");