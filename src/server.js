import { app } from './app.js';
import { port } from './config.js';

app.get('/mssg');

app
  .listen(port, () => console.info(`Server started on port: ${port}`))
  .on('error', (e) => {
    console.error(`Server error name: ${e.name}`);
    console.error(`Server error message: ${e.message}`);
    console.error(`Server error stack: ${e.stack}`);
  });
