const clock = document.getElementById("clock");
const hoursSelect = document.getElementById("hours");
const minutesSelect = document.getElementById("minutes");
const secondsSelect = document.getElementById("seconds");
const ampmSelect = document.getElementById("ampm");
const setAlarmBtn = document.getElementById("setAlarmBtn");
const clearAlarmBtn = document.getElementById("clearAlarmBtn");
const alarmAudio = document.getElementById("alarmAudio");

let alarmTime = null;
let alarmTimeout = null;


for (let i = 1; i <= 12; i++) {
  hoursSelect.innerHTML += `<option value="${i}">${String(i).padStart(2, '0')}</option>`;
}
for (let i = 0; i < 60; i++) {
  minutesSelect.innerHTML += `<option value="${i}">${String(i).padStart(2, '0')}</option>`;
  secondsSelect.innerHTML += `<option value="${i}">${String(i).padStart(2, '0')}</option>`;
}


setInterval(() => {
  const now = new Date();
  let hr = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const ampm = hr >= 12 ? 'PM' : 'AM';
  hr = hr % 12 || 12;

  const currentTime = `${String(hr).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')} ${ampm}`;
  clock.textContent = currentTime;

  if (alarmTime === currentTime) {
    alarmAudio.play();
  }
}, 1000);

setAlarmBtn.addEventListener("click", () => {
  const hour = hoursSelect.value;
  const minute = minutesSelect.value;
  const second = secondsSelect.value;
  const ampm = ampmSelect.value;

  const now = new Date();
  let hr = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const ampmi = hr >= 12 ? 'PM' : 'AM';
  hr = hr % 12 || 12;

  if((hour < hr && ampm === ampmi )|| (hour >= hr && minute < min && ampm === ampmi) || (hour >= hr && minute >= min && second <= sec && ampm === ampmi)){
    alert("Can't set Alarm : Set the TIME greater than current Time")
  }
  else{

  alarmTime = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:${second.padStart(2, '0')} ${ampm}`;
  alert(`Alarm set for ${alarmTime}`);
  }
});


clearAlarmBtn.addEventListener("click", () => {
  alarmTime = null;
  alarmAudio.pause();
  alarmAudio.currentTime = 0;
  alert("Alarm cleared!");
});
