import { App } from './app';


const PORT = process.env.APP_PORT || 3006;

new App().start(PORT);
