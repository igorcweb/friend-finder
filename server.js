import express from 'express';
const app = express();
import path from 'path';
const PORT = process.env.PORT || 3000;
import hbs from 'express-handlebars';

app.set('views', path.join(__dirname, 'app/views'));
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + 'app/public'));

import htmlRoutes from './app/routes/htmlRoutes';
import apiRoutes from './app/routes/apiRoutes';

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Friend Finder is listening on PORT ${PORT}`);
});
