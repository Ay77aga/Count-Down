let start = document.querySelector('.start');
let clear = document.querySelector('.clear');
let month_s = document.getElementById('month');
let day_s = document.getElementById('day');
let year_s = document.getElementById('year');
let time_s = document.getElementById('time');
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let cu_m = new Date().getMonth();


window.onload = () => {
  creatOpt();
  clear.setAttribute('disabled', '');
  // Get and render local storege
  if (localStorage.date) {
    start.setAttribute('disabled', '');
    clear.removeAttribute('disabled');
    let count_down = setInterval(() => {
      let date = new Date(localStorage.date).getTime();
      let dateNow = new Date().getTime();
      let dateDifferent = date - dateNow;
      get_time(dateDifferent);
      if (dateDifferent <= 1) {
        cler(count_down);
      }
    }, 1000);
    clear.addEventListener('click', () => {
      cler(count_down);
    });
  }

  start.addEventListener('click', function() {
    start.setAttribute('disabled', '');
    clear.removeAttribute('disabled');
    let t = `${month_s.value} ${day_s.value}, ${year_s.value} ${time_s.value}:00`;
    let date = new Date(t).getTime();
    //  add LS
    window.localStorage.date = t;
    // render Count Down
    let count_down = setInterval(() => {
      let dateNow = new Date().getTime();
      let dateDifferent = date - dateNow;
      get_time(dateDifferent);
      if (dateDifferent <= 1) {
        cler(count_down);
      }
    }, 1000);
    // Clear btn
    clear.addEventListener('click', () => {
      cler(count_down);
    });
  });
}