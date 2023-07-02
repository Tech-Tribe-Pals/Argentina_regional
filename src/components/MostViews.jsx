import { useState } from "react";
import { CardView } from "./Cards";

const MostViews = ({ posts = [] }) => {
  const [show, setShow] = useState(false);

  return (
    <aside style={show ? { right: 0 } : {}}>
      <div onClick={() => setShow(!show)} className="expand" />
      <h3>Los más vistos</h3>
      {posts.length !== 0 ? (
        posts.map((post) => <CardView key={post._id} post={post} />)
      ) : (
        <p>Cargando...</p>
      )}
    </aside>
  );
};

export default MostViews;
