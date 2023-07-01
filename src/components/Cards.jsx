import styled from "styled-components";
import esLocale from "date-fns/locale/es";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const CardStyle = styled.section`
  text-align: center;
  border: solid 2px #000;
  border-radius: 10px;
  img {
    height: 250px;
    margin: 0 auto;
  }
`;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top: 1px solid #34422f;
  border-right: 4px solid #34422f;
  border-bottom: 4px solid #34422f;
  border-left: 1px solid #34422f;
  border-radius: 10px;
  margin: 10px;
  width: 90%;
  height: 100px;
  position: relative;
  h3 {
    background-color: #6e8467;
    width: 100%;
    position: absolute;
    bottom: -20px;
    border-radius: 0 0 10px 10px;
    text-align: center;
  }
`;

export const Card = ({ post }) => {
  const formattedDate = format(
    new Date(post.createdAt),
    "dd 'de' MMMM 'de' yyyy",
    {
      locale: esLocale,
    }
  );

  return (
    <CardStyle>
      <p>{formattedDate}</p>
      <img src={post.thumbnail} />
      <h3>{post.title}</h3>
      <Link to={`/blog/${post._id}`}>Ver mas</Link>
    </CardStyle>
  );
};

export const CardView = ({ post }) => {
  return (
    <Aside style={{backgroundImage: `url(${post.thumbnail})`}}>
      <h3>{post.title}</h3>
    </Aside>
  );
};
