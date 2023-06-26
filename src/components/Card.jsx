import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import esLocale from "date-fns/locale/es";
import { format } from "date-fns";
import { Link } from 'react-router-dom'

const CardStyle = styled.section`
text-align: center;
border: solid 2px #000;
border-radius: 10px;
  img {
    height: 250px;
    margin: 0 auto;
  }
`

const Card = ({ post }) => {

  const formattedDate = format(new Date(post.createdAt), "dd 'de' MMMM 'de' yyyy", {
    locale: esLocale
  });

  return (
    <CardStyle>
      <p>{formattedDate}</p>
      <img src={ post.thumbnail } />
      <h3>{ post.title }</h3>
      <Link to={`/blog/${post._id}`}>Ver mas</Link>
    </CardStyle>
  );
};

export default Card;
