import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  
    const { data: blogs, isPending, error } = useFetch("https://dojo-json-server.vercel.app/blogs");

  
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <Bloglist blogs={blogs} /> }
    </div>
  );
}
 
export default Home;