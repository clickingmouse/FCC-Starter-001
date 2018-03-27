const express = require('express')
const app=express();


app.get('/api/customers', (req,res) => {
    const customers=[
{id:1, firstName: 'john', lastName: 'Doe'},
{id:2, firstName: 'steve', lastName:'Smith'}
    ];
    res.json(customers);
});


const port=5000;
app.listen(port,()=> console.log(`Server started on port ${port}`));