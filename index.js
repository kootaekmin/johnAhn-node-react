const express = require('express');
const app = express();
const PORT = 5000;

const mongoose = require('mongoose');

mongoose
	.connect(
		`mongodb+srv://kootaekmin:doit0317@johnahn.njpos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useUnifiedTopology: false,
		}
	)
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log(err));

app.get('/', (res, req) => res.send);

app.listen(PORT, () => console.log(`listening on port:${PORT}`));
