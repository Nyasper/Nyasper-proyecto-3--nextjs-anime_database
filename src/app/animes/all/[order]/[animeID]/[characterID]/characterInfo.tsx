export default function CharacterInfo({props}:props){
  return(
    <ul className="flex flex-col items-start justify-start lg:w-11/12 max-lg:w-full lg:m-8 lg:px-4 lg:pt-8 text-justify overflow-auto p-4">
    
    <li className="p-1">
    {props.name.first?(
      <>
        <span className="text-center font-bold text-lg mr-1">Firstname:</span>
        <span>{props.name.first}</span>
      </>
    ):null}
    </li>

    <li className="p-1">
    {props.name.last?(
      <>
        <span className="text-center font-bold text-lg mr-1">Lastname:</span>
        <span>{props.name.last}</span>
      </>
    ):null}
    </li>
   
    <li className="p-1">
      {props.name.native?(
        <>
            <span className="text-center font-bold text-lg mr-1">Native Name:</span>
        <span>{props.name.native}</span>
        </>
      ):null}
    </li>

    <li className="p-1">
      {props.gender?(
        <>
        <span className="text-center font-bold text-lg mr-1">Gender:</span>
        <span>{props.gender}</span>
        </>
      ):null}
    </li>

    <li className="p-1">
      {props.age?(
        <>
        <span className="text-center font-bold text-lg mr-1">Age:</span>
        <span>{props.age}</span>
        </>
      ):null}
    </li> 

   
    <li className="p-1">
    {props.dateOfBirth.day?(
      <>
        <span className="text-center font-bold text-lg mr-1">Date of Birth:</span>
        <span>{props.dateOfBirth.day}/{props.dateOfBirth.month}</span>
      </>
    ):null}
    </li>

    <li className="p-1">
    {props.siteUrl?(
      <>
        <span className="text-center font-bold text-lg mr-1">URL to original page:</span>
        <span>
          <a href={props.siteUrl} target="_blank">{props.siteUrl}</a>
        </span>
      </>
    ):null}
    </li>

    <li className="p-1">
      {props.description?(
        <>
        <span className="text-center font-bold text-lg mr-1">Description:</span>
        <span dangerouslySetInnerHTML={{ __html: props.description }} />
        </>
      ):null}
    </li>
  </ul>
  )
}


interface props{
  props: {
    id:number,
    name: { 
      first:string,last:string,
      full:string,
      native:string
    },
    gender:string,
    age:string,
    image: {
      medium:string,
      large:string
    },
    dateOfBirth:{
      day:number,
      month:number
    },
    siteUrl:string,
    description:string
  }
}