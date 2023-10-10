const wrap = document.getElementById('wrap');

fetch('http://api.openweathermap.org/data/2.5/weather?q=Osaka&appid=4f17ae2f33d384ade5f214837f2b4d3d&lang=ja&units=metric')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        let box = `
            <section>
                <p>都市: ${json.name}</p>
                <p>天気：${json.weather.main}</p>
                <p>現在の気温: ${json.main.temp}</p>
                <p>最高気温: ${json.main.temp_max}</p>
                <p>最低気温: ${json.main.temp_min}</p>
            </section>
        `

        wrap.innerHTML = box
    })

    // 天気のAPIはサイト色々あるからとりあえず今ここにあるリンクを使いな
    // こういうデータほしいってなれば先生とか俺にまた言って