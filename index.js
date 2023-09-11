import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

var categories = [
    {   
        id: "0",
        categoryName: "category 0"
    },
    {   
        id: "1",
        categoryName: "category 1"
    },
];

var selectedCategory = 0;

var todo = [
    [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit hic esse vero.",
        "Lorem ipsum 1",
        "Lorem ipsum 2",
        "Lorem ipsum 3",
        "Lorem ipsum 4"
    ],
    [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit hic esse vero.",
        "Lorem ipsum 5",
        "Lorem ipsum 6",
        "Lorem ipsum 7",
        "Lorem ipsum 8"
    ]
];

var done = [];

app.use(express.static('public'));

app.get("/", (req, res)=>{
    res.render('index.ejs', {
        selected: selectedCategory, 
        categories: categories, 
        todo: todo});
});

app.listen(port, ()=>{
    console.log(`app listening on port ${port}.`);
})


//Capstone 3 ToDo List