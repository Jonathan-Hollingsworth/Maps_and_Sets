function hasDuplicate(arr) {
    const arrSet = new Set(arr)
    return arrSet.size !== arr.length
}
function vowelCount(str) {
    const vowels = "aeiou"
    const vowelMap = new Map()
    for (const letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            if (vowelMap.has(letter)) {
                const newVal = vowelMap.get(letter) + 1
                vowelMap.delete(letter)
                vowelMap.set(letter, newVal)
            } else {
                vowelMap.set(letter,1)
            }
        }
    }
    return vowelMap
}