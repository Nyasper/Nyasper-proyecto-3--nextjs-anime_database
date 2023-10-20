export default async function SearchFormComponent(props:props){
  return(
    <form  action={props.action} className="text-lg my-6">
      <input className="text-black w-96 rounded-md p-1" type="text" name="search" placeholder={props.placeHolder} />
      <button type="submit" className="bg-sky-400  px-4 py-1 ml-2 rounded-md">Search</button>
    </form>
  )
}
interface props{
    action:((formData: FormData) => void),
    placeHolder:string
}