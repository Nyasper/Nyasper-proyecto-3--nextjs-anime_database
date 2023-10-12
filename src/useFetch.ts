const headers = new Headers()
headers.append("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 Edg/117.0.2045.43")
headers.append("Content-Type","text/html; charset=UTF-8")
headers.append("Accept","application/json")
export const useFetch = async(url:string)=>{
  const res = await fetch(url,{headers})
  if(!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}
