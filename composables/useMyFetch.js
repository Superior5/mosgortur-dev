export const useMyFetch = async (request, opts) => {
   const config = useRuntimeConfig()
   const route = useRoute()
   let port = ':8000'
   let url = request

   if (route.name === 'kids' || route.name === 'kids-test') port = ':7000'
   if (route.name === 'tours-low-cost') port = ':7800'
   if (!url.includes('http')) url = config.public.baseURL + port + url

   const response = await fetch(url, { ...opts })
   return { ...response, data: await response.json() }
   // return useFetch(request, { baseURL: config.public.baseURL, ...opts })
}