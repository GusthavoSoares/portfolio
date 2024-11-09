import moment from 'moment';


export function createFormattedDate(date: string) {
  const baseDate = new Date(date)

  const formattedDate = moment(baseDate).format("YYYY/MM/DD") 

  return formattedDate
}
