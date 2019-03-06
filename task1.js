/* 1) Напишите функцию, которая принимает строку — текст на любом языке и возвращает массив из 5 наиболее часто встречающихся слов в этом тексте.
Ключ массива — слово, значение — количество. */

let text = "А я гуляю по Москве гуляю здесь гуляю гуляю по москве гуляю здесь и я"

findOftenWords = text => {
  sortWords = (a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1
    } else {
      return -1
    };
  }
  
  createArr = arr => {
    let newObj = {}, sortable = []
    arr.forEach( element => {
      newObj[`${element.toLowerCase()}`] ? newObj[`${element.toLowerCase()}`] += 1 : newObj[`${element.toLowerCase()}`] = 1
    });

    for (var key in newObj) {
      sortable.push([key, newObj[key]]);
    }

    let sort = sortable.sort(function(a, b) {
      return a[1] - b[1];
    }).reverse().slice(0,5);
    
    sort.map(item => console.log(`Слово "${item[0]}" встречается ${item[1]}`))
  }
  
  let textArr = text.split(' ').sort(sortWords)
  createArr(textArr)
}

findOftenWords(text)