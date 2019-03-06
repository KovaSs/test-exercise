/* 3) Напишите функцию, которая берет целое число и возвращает новое целое число являющее обратным порядком чисел. */

func = (n) => {
  if(n < 0 && n %1 == 0) {
    let num1 = n.split('').reverse()
    num1.pop()
    console.log('-' + num1.join().replace(/,/g, ''))
  } else if(n > 0 && n %1 == 0) {
    console.log(+n.toString().split('').reverse().join().replace(/,/g, ''))
  } else if (n == 0) {
    console.log(n)
  } else {
    console.log(`Число ${n} не целое`)
  }
}

func(-106)