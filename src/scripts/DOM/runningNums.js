export default () => {
  const numbers = document.querySelectorAll('[data-number]')
  runningNums(numbers[0], 2020)
  runningNums(numbers[1], 5, 1)
  runningNums(numbers[2], 500)
  runningNums(numbers[3], 100, 1)

  function runningNums (el, number, step = 10, time = 1000) {
    let n = 0;
    let runningTime = Math.round(time / (number / step))
    let interval = setInterval(() => {
      n += step;
      if (n == number) {
        clearInterval(interval)
      }
      el.innerHTML = n;
    }, runningTime)
  }
}
