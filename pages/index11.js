import Link from 'next/link'
import baseUrl from '../helpers/baseUrl'


const Home1 = ({conorders})=>{

   

   
 const productList = conorders.map(conorder=>{
   return(
    <div className="card pcard" key={conorder._id}>
    <div className="card-image">
    <img src={conorder.mediaUrl} />
      <span className="card-content">{conorder.email}</span>
    </div>
    <div className="card-content">
      <p> ₹  {conorder.total}</p>
    </div>

    <div className="card-content">
        <p>{conorder.products.quantity}</p>
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
      {productList}
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

// export async function getServerSideProps(){
//  const res =  await fetch(`${baseUrl}/api/products`)
//  const data = await res.json()
//  return {
//    props:{
//      products:data
//    }
//  }
// }






export default Home1

this.items = this.state.cart.
map((item, key) =>   
 <li key={item.id}>
  {item.name}</li>);