//server file is all about running that server, implement some logging
import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Listening on http://localhost:${PORT}`);
});
