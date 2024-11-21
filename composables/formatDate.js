export const formatDate = (date, duration) => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + duration);
 
    const zeroOfDate = (date) => {
       if (date < 10) {
          return `0${date}`
       } else {
          return date
       }
    }
 
    return `${zeroOfDate(new Date(date).getDate())}.${zeroOfDate(new Date(date).getMonth() + 1)} - ${zeroOfDate(currentDate.getDate())}.${zeroOfDate(currentDate.getMonth() + 1)}`
 }