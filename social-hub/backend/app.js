const express = require('express');

const app = express();

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
})

app.use('/api/posts', (request, response, next) => {
    const posts = [
        {   
            id: 'safhsiaufgpsa23',
            title: 'First server-side post',
            content: 'This is coming from the server'
        },
        {   
            id: 'safhsiaufgpsa23',
            title: 'Second server-side post',
            content: 'This is coming from the server'
        }
    ];
    response.status(200).json({
        message: 'Posts fetched succesfully!',
        posts: posts
    });
});

module.exports = app;