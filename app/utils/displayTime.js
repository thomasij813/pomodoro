export default function displayTime(timeMs) {
  let time = new Date(timeMs)
  let minutes = time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`
  let seconds = time.getSeconds() > 9 ? time.getSeconds() : `0${time.getSeconds()}`
  return `${minutes}:${seconds}`
}
