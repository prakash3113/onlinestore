import Link from 'next/link'
import baseUrl from '../helpers/baseUrl'

const Home1 = ({conorders})=>{


 const conorderList = conorders.map(conorder=>{
   return(
    <div className="card pcard" key={conorder._id}>
    <div className="card-image">
      <img src={conorder.mediaUrl} />
      <span className="card-title">{conorder.name}</span>
    </div>
    <div className="card-content">
      <p> ₹  {conorder.price}</p>
    </div>
    <div className="card-action">
      <Link href={'/conorder/[id]'} as={`/conorder/${conorder._id}`}><a>View Product</a></Link>
    </div>
  </div>
   )
 })

  // console.log(products)
  return(
    <div className="rootcard">
      {conorderList}
    </div>
  )
}

export async function getStaticProps(){
    const res =  await fetch(`${baseUrl}/api/conorders`)
    const data = await res.json()
    return {
      props:{
        conorders:data
      }
    }
   }

export default Home1