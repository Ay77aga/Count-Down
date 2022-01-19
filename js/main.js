let start = document.querySelector('.start');
let clear = document.querySelector('.clear');
let month_s = document.getElementById('month');
let day_s = document.getElementById('day');
let year_s = document.getElementById('year');
let time_s = document.getElementById('time');
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let cu_m = new Date().getMonth();
window.onload = () => {
  clear.setAttribute('disabled', '');
  creatOpt();
  start.addEventListener('click', function() {
    start.setAttribute('disabled', '');
    clear.removeAttribute('disabled');
    let t = `${month_s.value} ${day_s.value}, ${year_s.value} ${time_s.value}:00`;
    let date = new Date(t).getTime();
    let count_down = setInterval(() => {
      let dateNow = new Date().getTime();
      let dateDifferent = date - dateNow;
      let days = Math.floor(dateDifferent / (1000 * 60 * 60 * 24));
      let hours = Math.floor(dateDifferent % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      let minutes = Math.floor(dateDifferent % (1000 * 60 * 60) / (1000 * 60));
      let seconds = Math.floor(dateDifferent % (1000 * 60) / 1000);
      // console.log(`${days}:${hours}:${minutes}:${seconds}`);
      document.querySelector('[data-name=Day]').innerHTML = days;
      document.querySelector('[data-name=Hours]').innerHTML = hours;
      document.querySelector('[data-name=Minutes]').innerHTML = minutes;
      document.querySelector('[data-name=Seconds]').innerHTML = seconds;
      if (dateDifferent <= 1) {
        cler(count_down);
      }
    }, 1000);
    clear.addEventListener('click', () => {
      cler(count_down);
    });

  });
}



function creatOpt() {
  let month_now = new Date().getMonth();
  for (let i = 0; i < months.length; i++) {
    let opt = document.createElement('option');
    opt.textContent = months[i];
    if (months[i] == months[month_now]) {
      // console.log(months[month_now])
      opt.setAttribute('selected', '')
    }
    month_s.appendChild(opt);
  }
  let day_now = new Date().getDate();
  for (let i = 1; i <= 31; i++) {
    let opt = document.createElement('option');
    opt.textContent = i;
    if (i == day_now + 2) {
      opt.setAttribute('selected', '')
    }
    day_s.appendChild(opt);
  }
  for (let i = 0; i <= 3; i++) {
    let y = new Date().getFullYear()
    let opt = document.createElement('option');
    opt.textContent = y + i;
    year_s.appendChild(opt);
  }

}

function cler(count) {
  start.removeAttribute('disabled');
  clearInterval(count);
  document.querySelector('[data-name=Day]').innerHTML = '0';
  document.querySelector('[data-name=Hours]').innerHTML = '0';
  document.querySelector('[data-name=Minutes]').innerHTML = '0';
  document.querySelector('[data-name=Seconds]').innerHTML = '0';
  clear.setAttribute('disabled', '');

}