import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go <Link to="/products">products</Link>.
      </p>
    </>
  );
};

export default Home;
