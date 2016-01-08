// polyfills
import * as path from 'path';
import * as express from 'express';
import * as universal from 'angular2-universal-preview';
// Angular 2
import {App} from './app';

let app = express();
let root = path.join(path.resolve(__dirname, '..'));

// Express View
app.engine('.ng2.html', universal.ng2engine);
app.set('views', __dirname);
app.set('view engine', 'ng2.html');

// static files
app.use(express.static(root));


app.use('/', (req, res) => {
  res.render('index', { App });
});



app.listen(3000, () => {
  console.log('Listen on http://localhost:3000');
});