leftRotation = (array, d) => {
    d= 1
    while (d--) {
        array.join(' ')
        array.unshift(array.pop())
    }
    return array.join(' ')
}

//testing with
array = [1, 2, 3, 4, 5]

leftRotation(array,4)