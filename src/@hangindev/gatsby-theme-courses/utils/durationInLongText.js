import secondsToHMS from "./secondsToHMS"

function durationInLongText(seconds) {
  const { h, m, s } = secondsToHMS(seconds)
  return h > 0
    ? `${h} hora${h !== 1 ? "s" : ""} ${m} minuto${m !== 1 ? "s" : ""}`
    : `${m} minuto${m !== 1 ? "s" : ""} ${s} segundo${s !== 1 ? "s" : ""}`
}

export default durationInLongText
