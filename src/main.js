import * as riot from 'riot';
import App from './tags/app.riot';



(async() => {
    let Cups = await WBWrapper.GetCups();
    const FavoriteList = (() => {
        let f = localStorage.getItem('favorites');
        if (!f) return [];
        return JSON.parse(f).map(d => {
            d.__proto__ = Ranker.prototype;
            return d;
        });
    })();
    riot.register('app', App);
    riot.mount('app', {
        Cups,
        FavoriteList
    });
    window.FavoriteList = FavoriteList;
})();