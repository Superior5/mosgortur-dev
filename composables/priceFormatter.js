export const priceFormatter = price => price && price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")