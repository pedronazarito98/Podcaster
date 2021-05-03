export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600); //dividindo por horas
    const minutes = Math.floor((duration % 3600) / 60);  // pegando o resto da hora e convertendo em minutos
    const seconds  = duration % 60; // convertendo o resto para segundos


    const timeString = [hours, minutes, seconds] 
        .map(unit => String(unit).padStart(2, '0'))
        .join(':');

    return timeString;

    //timeString = mapea e converte o tempo em uma string no 
    //formato de 2 caracteres sendo 0 o primeiro, caso seja só um numero.
   
}