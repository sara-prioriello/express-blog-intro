const express = require('express');
const { title } = require('node:process');
const app = express();
const port = 3000;


//create first array
const post = [
    {
        title: 'Post 1',
        content: 'Contenuto del post 1',
        image: 'image1',
        tags: ['tag1', 'tag2'],
    },
    {
        title: 'Post 2',
        content: 'Contenuto del post 2',
        image: 'image2',
        tags: ['tag3', 'tag4'],
    },
    {
        title: 'Post 3',
        content: 'Contenuto del post 3',
        image: 'image3',
        tags: ['tag5', 'tag6'],
    },
    {
        title: 'Post 4',
        content: 'Contenuto del post 4',
        image: 'image4',
        tags: ['tag7', 'tag8']
    },
    {
        title: 'Post 5',
        content: 'Contenuto del post 5',
        image: 'image5',
        tags: ['tag9', 'tag10']
    }
];

//add listener
app.listen(port, () => {
    console.log(`Server listener http://localhost:${port}`);
});

//add routes
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

//add bacheca route
app.get('/bacheca', (req, res) => {
    res.json(post);
});