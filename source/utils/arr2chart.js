import RandomColor from 'just.randomcolor';

export function arr2chart(arr) {

    let formattedData = {
        labels: [],
        datasets: []
    };

    let map = {};

    arr.forEach((item, i, a) => {
        formattedData.labels.push(item.name)        // 1
        for (let prop in item) {
            if (prop !== 'name') {
                if (!map[prop]) map[prop] = [];
                map[prop].push(item[prop]);         // 2
            }
        }
    })

    for (let prop in map) {
        let color = new RandomColor().toRGBA();
        let borderColor = color.toCSS();
        let borderWidth = 2;
        color.value.a = .5;
        let backgroundColor = color.toCSS();

        formattedData.datasets.push({
            backgroundColor,
            borderColor,
            borderWidth,
            label: prop,
            data: map[prop]
        })
    }
    return formattedData;
}

// 1 -  fill in the labels property (array) with 'name'
// 2 -  create an intermediary object (map) holding all the data EXCEPT 'name'
//         {
//             "Fun": ["81","2","68","72","77","90","79","80","81","82","82"],
//             "Smart": ["24","8","70","44","34","87","93","12","16","19","100"],
//             "Witty": ["99","0","70","27","47","95","93","72","81","68","90"]
//         }