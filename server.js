import express from 'express';
const app = express();
import path from 'path';
import exphbs from 'express-handlebars';
const PORT = process.env.PORT || 8080;

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.use(express.static(__dirname + '/app/public'));

import htmlRoutes from './app/routes/htmlRoutes';
import apiRoutes from './app/routes/apiRoutes';

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Friend Finder is listening on PORT ${PORT}`);
});
