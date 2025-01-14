import store from './redux/store.js'
import getCurrentTime from './utils/getCurrentTime.js'

const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
  store.dispatch({
    type: 'ADD_CURRENT_TIME',
    payload: getCurrentTime(),
  })
})

const clearBtn = document.getElementById('clear-btn')
clearBtn.addEventListener('click', () => {
  store.dispatch({
    type: 'CLEAR_ALL_TIMES',
  })
})

const timeList = document.getElementById('timeList')

store.subscribe(() => {
  timeList.innerHTML = ''
  const times = store.getState()
  times.forEach((time) => {
    let li = document.createElement('li')
    li.innerText = time
    timeList.appendChild(li)
  })
})

// store.subscribe(() =>
//   console.log(`Redux store just changed! ${store.getState()}`)
// )

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:30:00',
// })

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:32:00',
// })

// store.dispatch({
//   type: 'CLEAR_ALL_TIMES',
// })
