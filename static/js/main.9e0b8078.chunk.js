(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(33),s=a.n(r),i=(a(44),a(45),a(18)),o=a(3),d=a(7),j=a.n(d),l=a(12),h=a(6),u=a(13),b=a.n(u),m=a(17),p=a.n(m),x=a(0),O=function(e){var t=e.weatherData,a=Math.floor(t.main.temp-273);return Object(x.jsxs)("div",{className:"weather-data",children:[Object(x.jsx)("div",{className:"location",children:t.name}),Object(x.jsxs)("div",{className:"date",children:[p()().format("dddd"),", ",p()().format("LL")]}),Object(x.jsxs)("div",{className:"temperature",children:[a,"\xb0C"]}),Object(x.jsx)("div",{className:"weatherChange",children:"Rain"===t.weather[0].main?Object(x.jsxs)("div",{className:"rain",children:[Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/color/96/000000/rain--v2.png"})}),"Take an umbrella or a raincoat"]}):"Clouds"===t.weather[0].main?Object(x.jsxs)("div",{className:"clouds",children:[Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/color/96/000000/clouds.png"})}),"Make sure you wear a jacket"]}):"Clear"===t.weather[0].main?Object(x.jsxs)("div",{className:"clear",children:[Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/emoji/96/000000/sun-emoji.png"})}),"Don't forget your sunglasses"]}):"Thunderstorm"===t.weather[0].main?Object(x.jsxs)("div",{className:"thunderstorm",children:[Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-thunderstorm-weather-justicon-flat-justicon.png"})}),"Wear rubber boots if going outdoors"]}):"Drizzle"===t.weather[0].main?Object(x.jsxs)("div",{className:"drizzle",children:[Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/color/96/000000/light-rain-2--v1.png"})}),"Wear a hoodie"]}):"Snow"===t.weather[0].main?Object(x.jsxs)("div",{className:"snow",children:[Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/color/48/000000/snow--v1.png"})}),"Put on a sweater"]}):Object(x.jsx)("div",{})}),Object(x.jsxs)("div",{className:"description",children:[t.weather[0].main,Object(x.jsx)("br",{}),"(",t.weather[0].description,")"]}),Object(x.jsxs)("div",{className:"humidity",children:[Object(x.jsx)("div",{className:"humidityIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/offices/30/000000/humidity.png"})}),t.main.humidity," %"]})]})},g=a(87),f=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(h.a)(r,2),i=s[0],o=s[1],d=Object(c.useState)([]),u=Object(h.a)(d,2),m=u[0],p=u[1];Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude),o(e.coords.longitude)})),e.next=3,b.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(i,"&appid=").concat("9dac5b7f2f2e92ced2f1d3d6f391be4e"));case 3:void 0==(t=e.sent)?f():(p(t.data),console.log(t.data));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a,i]);var f=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.openweathermap.org/data/2.5/weather?q=Colombo&appid=".concat("9dac5b7f2f2e92ced2f1d3d6f391be4e"));case 2:t=e.sent,p(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{children:"undefined"!=typeof m.main?Object(x.jsx)("div",{className:"locationWeather",children:Object(x.jsx)(O,{weatherData:m})}):Object(x.jsx)(g.a,{})})},v=a.p+"static/media/weather.54445acb.png",w=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),s=Object(h.a)(r,2),i=s[0],d=s[1],u=function(){var e=Object(l.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat("9dac5b7f2f2e92ced2f1d3d6f391be4e"));case 3:c=e.sent,d(c.data),n("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=Object(o.f)();return Object(x.jsxs)("div",{className:"cityDiv",style:{backgroundImage:"url(".concat(v,")"),backgroundSize:"cover",padding:"10%"},children:[Object(x.jsxs)("form",{className:"search",onSubmit:u,children:[Object(x.jsx)("input",{type:"text",placeholder:"Enter City",value:a,onChange:function(e){n(e.target.value)}}),Object(x.jsx)("button",{style:{margin:"8px",border:"none",padding:"10px",borderRadius:"4px",fontWeight:"bold",backgroundColor:"rgba(200, 200, 210, 0.9)"},children:"Get Weather"}),Object(x.jsx)("button",{onClick:function(){window.location.reload()},style:{margin:"5px",border:"none",padding:"10px",backgroundColor:"rgba(0, 0, 0, 0)"},children:Object(x.jsx)("img",{src:"https://img.icons8.com/android/24/000000/refresh.png"})})]}),Object(x.jsx)("br",{}),"undefined"!=typeof i.main?Object(x.jsx)("div",{className:"locationWeather",children:Object(x.jsx)(O,{weatherData:i})}):Object(x.jsxs)("div",{children:[Object(x.jsx)(f,{}),Object(x.jsx)("div",{style:{margin:"25px 15px"},children:Object(x.jsx)("button",{className:"forecastBtn",onClick:function(){return m.push("/weeklyforecast")},children:"7 - Day Forecast"})})]})]})},y=function(e){var t=e.weatherChartData;return Object(x.jsx)(x.Fragment,{children:[0,1,2,3,4,5,6].map((function(e){return Object(x.jsxs)("div",{className:"weatherDataWeek",children:[Object(x.jsx)("div",{class:"day",children:p()(1e3*t.daily[e].dt).format("ddd")}),Object(x.jsx)("div",{className:"weatherChangeWeek",children:"Rain"===t.daily[e].weather[0].main?Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/color/96/000000/rain--v2.png"})}):"Clear"===t.daily[e].weather[0].main?Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/emoji/96/000000/sun-emoji.png"})}):"Thunderstorm"===t.daily[e].weather[0].main?Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-thunderstorm-weather-justicon-flat-justicon.png"})}):"Drizzle"===t.daily[e].weather[0].main?Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/color/96/000000/light-rain-2--v1.png"})}):"Snow"===t.daily[e].weather[0].main?Object(x.jsx)("div",{className:"weatherIcon",children:Object(x.jsx)("img",{src:"https://img.icons8.com/color/48/000000/snow--v1.png"})}):Object(x.jsx)("div",{})}),Object(x.jsxs)("div",{className:"temperatureWeek",children:["Day: ",t.daily[e].temp.day,"\xb0C"]}),Object(x.jsxs)("div",{className:"temperatureWeek",children:["Night: ",t.daily[e].temp.night,"\xb0C"]}),Object(x.jsxs)("div",{className:"wind",children:[Object(x.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/wind.png"})," ",t.daily[e].wind_speed," ms",Object(x.jsx)("sup",{children:"-1"})]})]})}))})},N=a.p+"static/media/weather5.d0faf579.jpg",k=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(h.a)(r,2),i=s[0],d=s[1],u=Object(c.useState)([]),m=Object(h.a)(u,2),p=m[0],O=m[1],f=Object(o.f)();Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude),d(e.coords.longitude)})),e.next=3,b.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(i,"&exclude=minutely,hourly&units=metric&appid=").concat("9dac5b7f2f2e92ced2f1d3d6f391be4e"));case 3:void 0==(t=e.sent)?v():O(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a,i]);var v=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=6.9271&lon=79.8612&exclude=minutely,hourly&units=metric&appid=".concat("9dac5b7f2f2e92ced2f1d3d6f391be4e"));case 2:t=e.sent,O(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"dataDiv",style:{backgroundImage:"url(".concat(N,")"),backgroundSize:"cover",padding:"10%",height:"1200px"},children:"undefined"!=typeof p.daily?Object(x.jsxs)("div",{className:"chartWeather",children:[Object(x.jsx)("button",{onClick:function(){return f.goBack()},style:{backgroundColor:"rgba(0,0,0,0)",border:"none",float:"left"},children:Object(x.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/circled-left-2.png"})}),Object(x.jsx)("h2",{children:"7-Day Forecast"}),Object(x.jsx)("h3",{children:p.sys.name}),Object(x.jsx)("br",{}),Object(x.jsx)(y,{weatherChartData:p})]}):Object(x.jsx)(g.a,{})})};var C=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(i.a,{basename:"/weather-app-pages",children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",children:Object(x.jsx)("div",{children:Object(x.jsx)(w,{})})}),Object(x.jsx)(o.a,{path:"/weeklyforecast",children:Object(x.jsx)(k,{})})]})})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,88)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},I=a(4),S=Object(I.a)();s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(o.b,{history:S,children:Object(x.jsx)(C,{})})}),document.getElementById("root")),D()}},[[76,1,2]]]);
//# sourceMappingURL=main.9e0b8078.chunk.js.map