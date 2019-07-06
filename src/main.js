import * as riot from 'riot';
import App from './tags/app.riot';



(async() => {
    const Cups = await WBWrapper.GetCups();
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

    console.log(`
%c\nMMMMMMMMMMMMMMMMMMMMMMMMMMUzZOv<<<+-...-(-<<+--.. _......._.~_(++&xzwwOdHkqgHHZXWMM@@@HbkpppWXzzwXQM
MMMMMMMMMMMMMMMMMMMMMMMMSXXVC!' .+++z<(z<-_(=zzo---:<<<<<+(++udWUUOwZVWMgH@@HWXHHMH@MMHHHHqWXuXXHMMM
MMMMNgMMMMMMMMMMMMMMMMHk0Cj0_+dXkbkWkds1wwwo+wuXC! '''.(z++zdUOtOwwzwwuWMH@@HWHHM8I?TWHHMHHkWHMMMMMM
MMMMMMMMMMMMMMNNMBTWHC<1wW6X+dHH011zRdNwXXWVTWkC++---(zOwwXkwwwwuuXZZyyXXHWUHHHMHI<:::;:(vMMMMMMMMMM
MHMMMMMMMMMMMMMNIwwdI(jdf--+0C~(OXv>'_?XT7<OwdIjvwwXXk>(dWgkwZyuuZyyWWkWWHHWWXHNWk+<;<:;;:dHMqkkkbWW
MHZyWHMMHMMMMMMNmwI+d&zjA+OzIwwX0V<(+zw>(+gkkXzzXXkXkWkXWHHWWyyZXyyyWHgHW@HkyyWW9YT7O<;::+dMM@MHHHWX
WXyyZyZZyXZZZXXUUUUWUXAx<<<<?OVz+dk+z>1+dgHC?wAjXWH7WgHY<jWHqWHWkyyyWHHgHMHHHHkWQkkXV<<<<jHTMHM@@HHH
XXyZyyZZyZuuuuvzzvvrwwWHHHWAJ-_<!~~?7777zZO&jMMRvUWQWHC;:+WWWHqqHWyyyfHM@MHH@HWyWHZI;<><+XS0J+H@M@@g
MkyyyZyZZZuuuzzzzrvwXqkqqHWWqqHma+-..'''._~~~__vUwzv73::+(gMMMHHgmHmHHMMHMMHHWWk@Hkkz><1dS1jHMMHHHqk
yZyyZyyZZZuuzzzzzwXkHqqqkWWqqqqkqHqme-..''''.'._jZzUXXZWMMMMHMMMMHUZyVWWMHHHMMHHWWHHHkyUV=uWMHHWHHHH
yyyZyZZZZuuuzuuzwXpHqqqqqqqqHqqqHWqkqHHm+..''''.._<<?7zOOwVWKIlltvwuyXWgmHfH@mqHWWWMWkzzlzWMMMHkVyyy
ZyyZyyZZZuuzzXzwWXWqqqkqqkkqqqHkHWqqqqqqHm&--..''''. ._-__.(XOztrvuuyWHHHppVHHHWpWpHHWXwOtOdM@MHHWyV
ZyZyyyZZZuuuuXwKXkqkkqqkkqkqkkHkWqqqqkqqqHqmgk-.' ' -+i(zIzzzWkyrvzXyyyffpppWHffW0XgkXXZwtzdMMMM@HHk
yZyyyyyZZZuuuXHXWkbkHkHkbkkbkkkkbkkkkkkkkqqqqHHkQm+-._' .-_~__?TWWXXXWWWffffWHHWkkHXUWUHWyWMMNMNNMMM
ZyyZyZyyZZZuXWXpbWHWWpWppppbbbpbbbpbbbkbbkbbkbqHHbHHk+-'''''''' _??777UXWpWVUXHUUVC<?OuuXuZZuZXUWHMM
ZyZyyyyZyZZZWSXppSXWfSXWffffffffpfWffpfWWffffpkHWWWbWbbm+---.'..''''.._?UWWXVUI!_<<~~_<?zCOVXXZZZZXw
yZyyZyZyyZZXWdVW0<zOC=OtOOtOwXZwOOzzOZUVZXyyyVmSWfWkSVffpHHA:..''.'.'''._<_<-._<..~~~~~____~jXAzz<1O
ZyZZyyyWyyZWXyX0<::z1+zllltOXZllO=<:+1z1<<1XuXHXuZXHuyyWfSXWk-.- ''''''''._~<1<<<<~_._~(UUC~__?17C<:
yyyyyZUXZZXSXuZ1zll?<:<z+lOwkz?=z>++?zz?<++=zXHvzXWUuZZZXwXkkXUU6-.'.'..''.'._<_......---__~(+J&--_~
yZyZWXwdZyWXwZOltt1z+zl<:+OX0=zz==???z?????1dk01Od0vzuXkkWUUOI===OXQm.. '.'''''..'.....<<_~~~??T7TC_
NHkWkkQQkW0wWOtOllzOzOzzzzwWIlzv==???1>>>>?zWWIjlwwwXHpWUI======?=1zkHpm+-.''.'''''....._jae+~~<wuXV
MMBYY"7?!jOXZOwOtOvzwttlOzXSlzwz???>?<>;;++dpS1AXWWWXUXS1??=<<;+zz1zHfppkHHA..''..''.'---_~~_---_~~j
''  '   '(wSwXZOtwZOuOttwXW0lzS????>+<;;;+dHWkXUOZUyyUZOwwQQgkW9H$_(HXWWpHK0WX+.  ''..JbWs,-.?Svw&-~
++(--....jSOXROzOuZwZwtOwXKZ=dSwzz+>+<<+xd0wVI1=?+1zAQkHMMMM8! .6<~jHXSzXWHzXW@HWHaJ--<v7TT~.._zwXXw
 _<<?1=1dHXdHSrrwZwwywtwukSwzWOzOwOwQkUVz1?1??>+?1d#=!''(wZv>'.__~(XWZuvwWW0XHqHmHHqqHeWkmaa&.-.(gg+
-   _?==dKwkWkrrwWuZykrwXHuwdXwuQXHWWkAxz??????>?<<~ ''   .((<<__(JWXurzXH0IXHqHHHHqqqqqqqHHHNmggMMM
_(_- ' _OSXwWWvvXkXZXykyWHXWM9TYYTYMMHBUz??<<<<<~~~..~_~~~~_::<::jXWuVrr0CjXWWkHfHHHqqmHqqkHMMMMMMMM
(;;;<_. jZC?WVXzXHXXkXSVWHK0vU+'  ?717! <<~~~~~~.~.~..~..~_:~::<jOXXXrOdQkWZWHkHWWHWHHHHHkHWMMMMMMNM
;:<<<~' zX!'jWWXXHWXXuXWHWWkz;?<-....-~~~~~.~...~..~.~.~.~~~~~<+CjSuXOdHHHWZWgHNWHWHHWWkkWY' ?TMNMMW
''    ''jk-.+0XVyHVyXXWHWUWWmx::(((__~~....~...~.~..~.~...~.~(<<(duXwX9>?79XWHMHHHqkkHU0C!   .(vUXWH
'' ..((+wHI+>zwwUWkWW9<<vy<vTHy<<;;;:~~..~...___.~~..~.~_(_~.~~(juuwW0~_(zx<Wky+_(dSC71(J+ggdHmQkHHM
Jzlz1=??=vz>>>>jUWWHH<+(jWHa&xWA+;<<~~.~~.~.(z<~~..~._(JdHr_~~_dkXHHSIz&dXVkdHkmXHkWmH@@HHqqkHHHHHMM
XXWWWkkQQQQAAQAgWkHMNzwXdU0TWHHMR<~~~..~.~.~~~~..~_((dUXXX$~~~_<jWMNXXWWKC<<dHqH9SUdH@@HgHHHWXUXXXD'
lltrwwXUUUWHHHHHWUWmmHmkw+jgHHHWXk.~_~~~~.~(--((JdX0wrrwX9~~_:(jWHHHkOVW6<+gHkWkwQHHMMMHWXXuuvzzXk!
OtttrwAXkWUU0wrvXXWH@MMHMMMMH@M9WHHn-~_~~_~_?WM0VvwwvrZC<~__(jdHSWvHqHHkkWMMHHHMMMHHHWkkXXuwXXWfWN_
11OOOZWWkAwrtttwXUUUZXWM#MMMHH#! _~~??1+_:~:~~~~<<<<<~~~::(uWHWyXWwWHfWXWMMMHM@HWWWMHHgHWWffpWWMMM{'
(+zttwwXXWHkHHkQQQmQXH@MMMH@@M%.'' ..+??TX&+__:_~:~~~::(+gHHyyyyyWwtv1+dWMMHWWHHHXzXUHHfWHHMMmHHWWb-
<+ztwXZyyVppbqqqqqmHqHHmHqqgH0~.(((dwOz&. _?Cw&+:::;;+dWHWyWXyyyXWuXyz+XbHMHZZZXUSzvzvXUUXwvXUWkwuUW
(+zttrrwXXXUWWWWHHHHHHHkqHHSdwZ>~~_:~<zWW; ' _?7UagQXHWWyyZyZyyZ0XkwUXOXkHHHXXzzzvvrrrttOrtrrXXWHkkU
?zzttrrZwwwzuuZZZZZXHpWHHWXVC<__..~~.~_<OWo. .. .JMHWZyyyyyyyZXZ<?9TVXHWkbWMHkwwrrtrOwwAAmXkQkWHHHWk
trI?<+zOwwwXWWUUZXWHWHMbWXC~~.~~.~...~~_(dUUUOwXkllzWZXWXyWyyXC<::<<:<1dWWWWHHHHQQkHqHMMHHkXZZZUUUUU
1<__(+wXWHUXuXZZZW@HHHWWV<_.~..~.~~.~..(rllOwwrXXkwOwUC1+XUy0I<;<;:<<+1zUfHkXWMHHqHWUUXXwvrwZOtltttl`, "font-size:2pt");
    console.log("%cJavaScriptを知るものを募集しています。@eakonnsamui", "");

})();