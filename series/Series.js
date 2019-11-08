series = (str, n) => {
    let serie = []
    if (n >= str.length) {
        for (let i = 0; i < str.length; i++) {
            let end = i + n
            let res = str.substring(i, end)
            if (res.length >= n - 1) {
                serie.push(res);
            }
        }
        return serie

    } else {

        for (let i = 0; i < str.length; i++) {
            let end = i + n
            let res = str.substring(i, end)
            if (res.length >= n) {
                serie.push(res);
            }
        }

        return serie
    }
}

//test with

series("49142", 4)
series("49142", 3)
series("49142", 6)