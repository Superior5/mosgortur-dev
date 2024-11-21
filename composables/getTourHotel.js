export const getTourHotel = tour => {
   return tour.Services?.find(el => el.Hotel)
}