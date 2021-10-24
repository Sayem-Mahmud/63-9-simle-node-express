const express = require('express')  //1st step
const app = express();  //2nd step
const cors = require('cors');
const port = process.env.port || 5000;  //3rd step

//middle wire
app.use(cors())

//express.json() middilewire er kaj hocche stringify er data k json er datai auto updated rakha 
app.use(express.json());

// const handler = (req, res) => {
//     res.send('Hello from node');
// }


const users = [{ id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '017143120599' },
{ id: 1, name: 'Salma', email: 'Salma@gmail.com', phone: '017145620599' },
{ id: 2, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '017678120599' },
{ id: 3, name: 'Sonia', email: 'Sonia@gmail.com', phone: '017143134599' },
{ id: 4, name: 'Sushmita', email: 'Sushmita@gmail.com', phone: '01843120599' },]

app.get('/', (req, res) => {
    res.send('Hello love weee automatic restart');
});

//after giving url /users?search="sh" it will show which row has sh cnsist of wrd
app.get('/users', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else { res.send(users); }
});
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send('mango shshshsh eekek');
});
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tor marka fazil');
});

//app.Method(post)
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)

    // res.send(JSON.stringify(newUser)) 
    //alternative of stringify kore posting....  res.send(JSON.stringify(newUser))  
    res.json(newUser);
})


app.listen(port, () => {
    console.log('listening to port', port)
});
