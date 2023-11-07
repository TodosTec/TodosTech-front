import "./style.less";
import logo from "../../assets/logo.png";
import { NavBarFooter } from "../../components/NavBarFooter";
import { Post } from "../../components/Post";
import { CircleFlutuamteButton } from "../../components/CircleFlutuanteButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { PostEmpresa } from "../../components/PostEmpresa";
import { idAtom, usernameAtom, urlFotoPerfilAtom } from "../../states";
import { useAtom } from "jotai";

export function Home() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [postsArray, setPostsArray] = useState([]);
  const [postRepetido, setPostRepetido] = useState(false);
  const [loading, setLoading] = useState(false);
  const [idAtomValue, setIdAtomValue] = useAtom(idAtom);
  const [usernameAtomValue, setUsernameAtomValue] = useAtom(usernameAtom);
  const [urlFotoPerfilAtomValue, setUrlFotoPerfilAtomValue] =
    useAtom(urlFotoPerfilAtom);

  function getFotoPerfil() {
    axios({
      method: "get",
      url: `https://api-3wfy.onrender.com/api/todostec/selecionar/username/${usernameAtomValue}`,
    })
      .then((promisse) => {
        setUrlFotoPerfilAtomValue(promisse.data.clinkfoto);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function getPosts() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api-3wfy.onrender.com/api/todostec/post/find/posts/${idAtomValue}`
      );
      // console.log(response.data);
      const newPosts = response.data.content;
      setPostsArray((prevPosts) => [...prevPosts, ...newPosts]);
      if (response.data.length < 50 && postsArray.length >= 50) {
        // console.log('entrou');
        setPostRepetido(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollHeight - scrollTop === clientHeight) {
        // console.log('Chegou no final do scroll');
        getPosts();
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  useEffect(() => {
    if (postsArray.length < 50) {
      getPosts();
    }
  }, []);

  return (
    <div className="Home">
      <img src={logo} alt="" />
      <div
        className="container"
        ref={containerRef}
        style={{ height: "400px", overflowY: "scroll" }}
      >
        {postsArray.map((post, index) =>
          post.usuario !== null ? (
            post.usuario.clinksite === "null" ||
            post.usuario.clinksite === null ? (
              <Post
                key={index}
                nome={post.usuario.cnome}
                text={post.ctexto}
                username={post.usuario.cusername}
                fotoPerfil={post.usuario.clinkfoto}
                aoClicar={() => {}}
              />
            ) : (
              <PostEmpresa
                key={index}
                nome={post.usuario.cnome}
                texto={post.ctexto}
                username={post.usuario.cusername}
                link={
                  post.usuario.clinksite == null ? "" : post.usuario.clinksite
                }
              />
            )
          ) : null
        )}

        {loading ? <p className="carregando">Carregando Posts...</p> : null}
      </div>
      <div className="bottomItens">
        {loading ? (
          ""
        ) : (
          <CircleFlutuamteButton
            aoClicar={() => {
              navigate("/fazerPost");
              // console.log(postsArray);
            }}
          />
        )}
        <NavBarFooter
          classe={1}
          aoClicar5={() => {
            navigate("/Perfil");
          }}
          aoClicar4={() => {
            navigate("/chat");
          }}
        />
      </div>
    </div>
  );
}
