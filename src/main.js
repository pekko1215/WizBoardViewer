import * as riot from 'riot';
import App from './tags/app.riot';



(async ()=>{
    let Cups = await WBWrapper.GetCups();
    riot.register('app',App);
    riot.mount('app',{
        Cups
    });
})();