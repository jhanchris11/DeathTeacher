export const dateNow = () => {

    let hoy = new Date();
    let hour = hoy.getHours();
    let minutes = hoy.getMinutes();
    let seconds = hoy.getSeconds();


    return hour + ':' + minutes + ':' + seconds
}