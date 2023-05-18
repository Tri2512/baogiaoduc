let Parser = require('rss-parser');

let parser = new Parser();
let arr = [];

(async () => {
    let feed = await parser.parseURL('https://giaoducthoidai.vn/rss/giao-duc-17.rss');

    feed.items.forEach(item => {
        arr.push({item})});
    for(var i=0;i<arr.length;i++){
        console.log("stt "+i)
        console.log(arr[i].item.title)
        console.log(arr[i].item.link);
    }
})();



