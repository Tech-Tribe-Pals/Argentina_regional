import { useEffect, useState } from "react";
import { Card } from "../components/Cards";
import styled from "styled-components";
import NavBlog from "../components/NavBlog";
import postsAPI from "../api/postsAPI";
import Pagination from "../components/Pagination";
import { useNavigate, useLocation } from "react-router-dom";
import MostViews from "../components/MostViews";

const ForoStyled = styled.main`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 25rem;
  aside {
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: #4e6247;
    align-items: center;
    .expand {
      display: none;
      img {
        display: none;
      }
    }
    h3 {
      margin: 20px 0;
      color: #fff;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      align-self: flex-start;
      margin-left: 2rem;
    }

    nav {
      align-self: flex-start;
      background-color: #4e6247;
      border-bottom-right-radius: 0.7rem;
      border-top-right-radius: 0.7rem;
      width: 90%;
      height: 85px;
      margin-bottom: 2rem;
      border-bottom: 8px solid #374433;
    }
    margin-top: 3rem;
    width: 80%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (width < 990px) {
    aside {
      width: 200px;
      position: fixed;
      z-index: 2;
      border: none;
      right: -200px;
      transition: ease-in-out 0.3s;
      border-radius: 0 0 20px 20px;
      .expand {
        width: 30px;
        height: 35px;
        background-color: #4e6247;
        position: absolute;
        left: -20px;
        top: 0;
        display: flex;
        justify-content: start;
        align-items: center;
        border-radius: 5px;
        z-index: 3;
        img {
          display: flex;
          width: 25px;
          filter: invert(1);
        }
      }
    }
    section {
      width: 100%;
      nav {
        border-top-right-radius: 0;
        height: auto;
        width: auto;
        padding: 15px;
        position: fixed;
        top: 88px;
        left: -255px;
        flex-direction: column;
      }
    }
  }
`;

const Blogs = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const page = location.search.split('')[location.search.split('').length - 1] || 1

  const [posts, setPosts] = useState({
    docs: [],
    currentPage: 1,
    totalPages: 0,
    news: []
  });
  const [filter, setFilter] = useState({
    search: "",
    filter: -1,
    limit: 4,
    page: page || 1,
  });

  const fetchPosts = async (filterConfig) => {
    try {
      const newFilter = filterConfig ? filterConfig : { ...filter, page: page }
      setFilter(newFilter)
      const response = await postsAPI.filterPosts(newFilter);
      setPosts(response);
    } catch (error) {
      console.error("Error al obtener las publicaciones", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const handlePageChange = (page) => {
    window.scrollTo(0, 0);
    navigate(`/blog?q=page=${page}`);
  };

  const filterChange = async (newFilter) => {
    if (newFilter.search !== filter.search) {
      fetchPosts(newFilter)
      navigate(`/blog?q=page=1`);
    } else {
      fetchPosts(newFilter)
    }
  }

  return (
    <ForoStyled>
      <MostViews posts={posts.views} />
      <section>
        <NavBlog sendFilter={filterChange} actualPage={filter.page} />
        <h2>Publicaciones</h2>
        {posts.docs.length !== 0 ? (
          posts.docs.map((post) => <Card key={post._id} post={post} />)
        ) : (
          <p>Cargando...</p>
        )}
        <Pagination
          currentPage={Number(page)}
          totalPages={posts.totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </ForoStyled>
  );
};

export default Blogs;