var express = require('express');
var uuidv4 = require('uuid/v4');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send(todoList);
});

router.post('/', function (req, res, next) {
    todoList.push({
        "id": uuidv4(),
        "title": req.body.title,
        "completed": req.body.completed
    });
    res.send(todoList);
});

router.delete('/:id', function (req, res) {
    todoList.forEach(function (todo, index) {
        if (todo.id == req.params.id) {
            todoList.splice(index, 1);
        }
    });
    res.send(todoList);
});

const todoList = [
    {
        "id": uuidv4(),
        "title": "Wash and detail my car",
        "completed": false
    },
    {
        "id": uuidv4(),
        "title": "Take the doggo out for walk",
        "completed": false
    },
    {
        "id": uuidv4(),
        "title": "Build backend using Node/Express",
        "completed": false
    },
    {
        "id": uuidv4(),
        "title": "Go to the gym for a workout",
        "completed": false
    },
    {
        "id": uuidv4(),
        "title": "Drive mom to Costco",
        "completed": false
    },
    // {
    //     "id": 6,
    //     "title": "House viewing with mum and dad",
    //     "completed": false
    // },
    // {
    //     "id": 7,
    //     "title": "Vaccum the house",
    //     "completed": false
    // },
    // {
    //     "id": 8,
    //     "title": "Cook pasta for dinner",
    //     "completed": false
    // },
    // {
    //     "id": 9,
    //     "title": "Watch Sacred Games season 2",
    //     "completed": false
    // },
    // {
    //     "id": 10,
    //     "title": "Win division 1 in FIFA Pro Clubs",
    //     "completed": false
    // }
]

module.exports = router;