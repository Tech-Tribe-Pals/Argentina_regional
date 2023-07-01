import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import esLocale from "date-fns/locale/es";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const CardStyle = styled.article`
  text-align: center;
  border-radius: 10px;
  position: relative;
  width: 90%;
  height: 50vh;
  margin-right: 2rem;
  margin-top: 1.5rem;
  color:white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  p {
    z-index: 1;
  }

  .info-card {
    width: 100%;
    display: flex;
    flex-direction: row;
    
    z-index:1;
    justify-content: space-between;
    align-items: center;

    a {
      margin-right: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  .img-card {
    filter: brightness(50%);
    border-radius: 10px;
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0; 
    z-index: 0;
  }
`;

const Card = ({ post }) => {
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
      <img className="img-card" src={post.thumbnail} />

      <div className="info-card">
        <h3>{post.title}</h3>
        <Link to={`/blog/${post._id}`}>
          <img src="/Arrow.svg" width={40} alt="" />
        </Link>
      </div>
    </CardStyle>
  );
};

export default Card;
