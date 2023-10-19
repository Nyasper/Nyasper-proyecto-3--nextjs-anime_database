export default function CharacterInfo({props}:props){
  return(
    <ul className="flex flex-col items-start justify-center w-11/12 m-8 p-4 text-justify">
    <li className="p-1">
      <span className="text-center font-bold text-lg mr-1">Name:</span>
      <span>{props.name.first}</span>
    </li>
    <li className="p-1">
      <span className="text-center font-bold text-lg mr-1">Lastname:</span>
      <span>{props.name.last}</span>
    </li>
    <li className="p-1">
      <span className="text-center font-bold text-lg mr-1">Native Name:</span>
      <span>{props.name.native}</span>
    </li>
    <li className="p-1">
      <span className="text-center font-bold text-lg mr-1">Gender:</span>
      <span>{props.gender}</span>
    </li>
    <li className="p-1">
      <span className="text-center font-bold text-lg mr-1">Age:</span>
      <span>{props.age}</span>
    </li>
    <li className="p-1">
      <span className="text-center font-bold text-lg mr-1">Date of Birth:</span>
      <span>{props.dateOfBirth.day}/{props.dateOfBirth.month}</span>
    </li>
    <li className="p-1">
      <span className="text-center font-bold text-lg mr-1">URL to original page:</span>
      <span>
        <a href={props.siteUrl} target="_blank">{props.siteUrl}</a>
      </span>
    </li>
    <li className="p-1">
      <span className="text-center font-bold text-lg mr-1">Description:</span>
      <span dangerouslySetInnerHTML={{ __html: props.description }} />
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