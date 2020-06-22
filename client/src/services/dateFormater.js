//amount of miliseconds in a day
const msInDay = 86400000

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

export function dateFormater(dateString) {
    //now
    const fechaActual = new Date()
    //date to evaluate
    const fecha = new Date(Date.parse(dateString))
    //cut off of yesterday
    const yesterday = (new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() - 1, 23, 59, 59))
    //if it was today
    if (fecha.getTime() >= yesterday.getTime()) {
        return `${(fecha.getHours() + 1) % 12 === 0 ? 12 : (fecha.getHours() + 1) % 12}:${fecha.getMinutes() < 10 ? `0${fecha.getMinutes()}` : fecha.getMinutes()} ${fecha.getHours() < 11 ? 'am' : 'pm'}`
    }

    //fist second of yesterday
    const yesterday00 = new Date(yesterday.getTime() - msInDay)
    //if it was between the last second of yesterday and the first second of yesterday
    if (fecha.getTime() < yesterday.getTime() && fecha.getTime() > yesterday00.getTime())
        return 'Yesterday'

    //else
    return `${months[fecha.getMonth()]} ${fecha.getDate()}`
}