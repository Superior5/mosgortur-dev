export const createParams = ([arr, name, funKey = el => el.Key]) => {
   let res = '';

   for (let i = 0; i < arr.length; i++) res += name + '=' + funKey(arr[i]) + '&';
   return res
}