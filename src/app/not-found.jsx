import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, page does not exist.</p>
      <Link href={"/"}>return Home</Link>
    </div>
  )
}

export default NotFound  
