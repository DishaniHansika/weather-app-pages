(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(33),r=a.n(s),i=(a(44),a(45),a(18)),o=a(3),d=a(11),j=a.n(d),l=a(13),h=a(6),b=a(12),m=a.n(b),u=a(17),p=a.n(u),x=a(0),O=function(e){var t=e.weatherData,a=Math.floor(t.main.temp-273);return Object(x.jsxs)("div",{className:"weather-data",children:[Object(x.jsx)("div",{className:"location",children:t.name}),Object(x.jsxs)("div",{className:"date",children:[p()().format("dddd"),", ",p()().format("LL")]}),Object(x.jsxs)("div",{className:"temperature",children:[a,"\xb0C"]}),Object(x.jsx)("div",{className:"weatherChange",children:"Rain"===t.weather[0].main?Object(x.jsxs)("div",{className:"rain",children:[Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/color/96/000000/rain--v2.png"})}),"Take an umbrella or a raincoat"]}):"Clouds"===t.weather[0].main?Object(x.jsxs)("div",{className:"clouds",children:[Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/color/96/000000/clouds.png"})}),"Make sure you wear a jacket"]}):"Clear"===t.weather[0].main?Object(x.jsxs)("div",{className:"clear",children:[Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/emoji/96/000000/sun-emoji.png"})}),"Don't forget your sunglasses"]}):"Thunderstorm"===t.weather[0].main?Object(x.jsxs)("div",{className:"thunderstorm",children:[Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-thunderstorm-weather-justicon-flat-justicon.png"})}),"Wear rubber boots if going outdoors"]}):"Drizzle"===t.weather[0].main?Object(x.jsxs)("div",{className:"drizzle",children:[Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/color/96/000000/light-rain-2--v1.png"})}),"Wear a hoodie"]}):"Snow"===t.weather[0].main?Object(x.jsxs)("div",{className:"snow",children:[Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/color/48/000000/snow--v1.png"})}),"Put on a sweater"]}):Object(x.jsx)("div",{})}),Object(x.jsxs)("div",{className:"description",children:[t.weather[0].main,Object(x.jsx)("br",{}),"(",t.weather[0].description,")"]}),Object(x.jsxs)("div",{className:"humidity",children:[Object(x.jsx)("div",{className:"humidityIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/offices/30/000000/humidity.png"})}),t.main.humidity," %"]})]})},g=a(87),f=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(h.a)(s,2),i=r[0],o=r[1],d=Object(c.useState)([]),b=Object(h.a)(d,2),u=b[0],p=b[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude),o(e.coords.longitude)})),e.prev=1,e.next=4,m.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(i,"&appid=").concat("9dac5b7f2f2e92ced2f1d3d6f391be4e"));case 4:t=e.sent,p(t.data),console.log(t.data),e.next=15;break;case 9:return e.prev=9,e.t0=e.catch(1),e.next=13,m.a.get("https://api.openweathermap.org/data/2.5/weather?lat=6.9271&lon=79.8612&appid=".concat("9dac5b7f2f2e92ced2f1d3d6f391be4e"));case 13:c=e.sent,p(c.data);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[a,i]),Object(x.jsx)("div",{children:"undefined"!=typeof u.main?Object(x.jsx)("div",{className:"locationWeather",children:Object(x.jsx)(O,{weatherData:u})}):Object(x.jsx)(g.a,{})})},v=a.p+"static/media/weather.54445acb.png",w=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),r=Object(h.a)(s,2),i=r[0],d=r[1],b=function(){var e=Object(l.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat("9dac5b7f2f2e92ced2f1d3d6f391be4e"));case 3:c=e.sent,d(c.data),n("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=Object(o.f)();return Object(x.jsxs)("div",{className:"cityDiv",style:{backgroundImage:"url(".concat(v,")"),backgroundSize:"cover",padding:"10%"},children:[Object(x.jsxs)("form",{className:"search",onSubmit:b,children:[Object(x.jsx)("input",{type:"text",placeholder:"Enter City",value:a,onChange:function(e){n(e.target.value)}}),Object(x.jsx)("button",{style:{margin:"8px",border:"none",padding:"10px",borderRadius:"4px",fontWeight:"bold",backgroundColor:"rgba(200, 200, 210, 0.9)"},children:"Get Weather"}),Object(x.jsx)("button",{onClick:function(){window.location.reload()},style:{margin:"5px",border:"none",padding:"10px",backgroundColor:"rgba(0, 0, 0, 0)"},children:Object(x.jsx)("img",{src:"https://img.icons8.com/android/24/000000/refresh.png"})})]}),Object(x.jsx)("br",{}),"undefined"!=typeof i.main?Object(x.jsx)("div",{className:"locationWeather",children:Object(x.jsx)(O,{weatherData:i})}):Object(x.jsxs)("div",{children:[Object(x.jsx)(f,{}),Object(x.jsx)("div",{style:{margin:"25px 15px"},children:Object(x.jsx)("button",{className:"forecastBtn",onClick:function(){return u.push("/weeklyforecast")},children:"7 - Day Forecast"})})]})]})},y=function(e){var t=e.weatherChartData;return Object(x.jsx)(x.Fragment,{children:[0,1,2,3,4,5,6].map((function(e){return Object(x.jsxs)("div",{className:"weatherDataWeek",children:[Object(x.jsx)("div",{class:"day",children:p()(1e3*t.daily[e].dt).format("ddd")}),Object(x.jsx)("div",{className:"weatherChangeWeek",children:"Rain"===t.daily[e].weather[0].main?Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/color/96/000000/rain--v2.png"})}):"Clear"===t.daily[e].weather[0].main?Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/emoji/96/000000/sun-emoji.png"})}):"Thunderstorm"===t.daily[e].weather[0].main?Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-thunderstorm-weather-justicon-flat-justicon.png"})}):"Drizzle"===t.daily[e].weather[0].main?Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/color/96/000000/light-rain-2--v1.png"})}):"Snow"===t.daily[e].weather[0].main?Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/color/48/000000/snow--v1.png"})}):Object(x.jsx)("div",{})}),Object(x.jsxs)("div",{className:"temperatureWeek",children:["Day: ",t.daily[e].temp.day,"\xb0C"]}),Object(x.jsxs)("div",{className:"temperatureWeek",children:["Night: ",t.daily[e].temp.night,"\xb0C"]}),Object(x.jsxs)("div",{className:"wind",children:[Object(x.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/wind.png"})," ",t.daily[e].wind_speed," ms",Object(x.jsx)("sup",{children:"-1"})]})]})}))})},N=a.p+"static/media/weather5.d0faf579.jpg",k=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(h.a)(s,2),i=r[0],d=r[1],b=Object(c.useState)([]),u=Object(h.a)(b,2),p=u[0],O=u[1],f=Object(o.f)();return Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude),d(e.coords.longitude)})),e.prev=1,e.next=4,m.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=0ww".concat(a,"&lon=").concat(i,"&exclude=minutely,hourly&units=metric&appid=").concat("9dac5b7f2f2e92ced2f1d3d6f391be4e"));case 4:t=e.sent,O(t.data),e.next=14;break;case 8:return e.prev=8,e.t0=e.catch(1),e.next=12,m.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=6.9271&lon=79.8612&exclude=minutely,hourly&units=metric&appid=".concat("9dac5b7f2f2e92ced2f1d3d6f391be4e"));case 12:c=e.sent,O(c.data);case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[a,i]),Object(x.jsx)("div",{className:"dataDiv",style:{backgroundImage:"url(".concat(N,")"),backgroundSize:"cover",padding:"10%",height:"1200px"},children:"undefined"!=typeof p.daily?Object(x.jsxs)("div",{className:"chartWeather",children:[Object(x.jsx)("button",{onClick:function(){return f.goBack()},style:{backgroundColor:"rgba(0,0,0,0)",border:"none",float:"left"},children:Object(x.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/circled-left-2.png"})}),Object(x.jsx)("h2",{children:"7-Day Forecast"}),Object(x.jsx)("br",{}),Object(x.jsx)(y,{weatherChartData:p})]}):Object(x.jsx)(g.a,{})})};var C=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(i.a,{basename:"/weather-app-pages",children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",children:Object(x.jsx)("div",{children:Object(x.jsx)(w,{})})}),Object(x.jsx)(o.a,{path:"/weeklyforecast",children:Object(x.jsx)(k,{})})]})})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,88)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))},I=a(4),S=Object(I.a)();r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(o.b,{history:S,children:Object(x.jsx)(C,{})})}),document.getElementById("root")),D()}},[[76,1,2]]]);
//# sourceMappingURL=main.682967dc.chunk.js.map