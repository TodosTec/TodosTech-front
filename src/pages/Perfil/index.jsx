import "./style.less";
import { useState, useEffect } from "react";
import { BottomMenu } from "../../components/BottomMenu";
import { NavBarFooter } from "../../components/NavBarFooter";
import { SettingsOutline } from "react-ionicons";
import { EditarPerfil } from "../../pages/EditarPerfil";
import { useNavigate } from "react-router-dom";
import { Post } from "../../components/Post";
import { urlFotoPerfilAtom, usernameAtom } from "../../states";
import { useAtom } from "jotai";
import axios from "axios";
export function Perfil() {
  const navigate = useNavigate();
  const [showConfig, setShowConfig] = useState(true);
  const [tooglePrincipalComponent, setTooglePrincipalComponent] =
    useState(false);
  const [usernameAtomValue, setUsernameAtomValue] = useAtom(usernameAtom);
  const [userObject, setUserObject] = useState({});
  const [arrayPosts, setArrayPosts] = useState([]);
  const [urlFotoPerfilAtomValue, setUrlFotoPerfilAtomValue] = useAtom(urlFotoPerfilAtom)
  function getUserAllPosts() {
    axios({
      method: "get",
      url: `http://localhost:8080/api/todostec/post/selecionar/${usernameAtomValue}`,
    })
      .then((promise) => {
        setArrayPosts(promise.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getUser() {
    axios({
      method: "get",
      url: `http://localhost:8080/api/todostec/selecionar/username/${usernameAtomValue}`,
    })
      .then((promise) => {
        setUrlFotoPerfilAtomValue(promise.data.clinkfoto)
        setUserObject(promise.data);
        let updatedNcdpronome = "";
        switch (promise.data.ncdpronome) {
          case 1:
            updatedNcdpronome = "Masculino";
            break;
          case 2:
            updatedNcdpronome = "Feminino";
            break;
          case 3:
            updatedNcdpronome = "Neutro";
            break;
          case 4:
            updatedNcdpronome = "Não Binário";
            break;
          default:
            updatedNcdpronome = "Outro";
        }
        setUserObject((prev) => ({ ...prev, ncdpronome: updatedNcdpronome }));

        let updatedNcdgenero = "";
        switch (promise.data.ncdgenero) {
          case 1:
            updatedNcdgenero = "Masculino";
            break;
          case 2:
            updatedNcdgenero = "Feminino";
            break;
          case 3:
            updatedNcdgenero = "Não Binário";
            break;
          case 4:
            updatedNcdgenero = "Outro";
            break;
          default:
            updatedNcdgenero = "Outro";
        }
        setUserObject((prev) => ({ ...prev, ncdgenero: updatedNcdgenero }));

        let updatedNcdsexualidade = "";
        switch (promise.data.ncdsexualidade) {
          case 1:
            updatedNcdsexualidade = "Heterossexual";
            break;
          case 2:
            updatedNcdsexualidade = "Homossexual";
            break;
          case 3:
            updatedNcdsexualidade = "Bissexual";
            break;
          case 4:
            updatedNcdsexualidade = "Panssexual";
            break;
          case 5:
            updatedNcdsexualidade = "Assexual";
            break;
          case 6:
            updatedNcdsexualidade = "Outro";
            break;
          default:
            updatedNcdsexualidade = "Outro";
        }
        setUserObject((prev) => ({
          ...prev,
          ncdsexualidade: updatedNcdsexualidade,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getUserAllPosts();
    getUser();
    if (localStorage.getItem("status") === "deslogado") {
      navigate("/login");
    } else if (localStorage.getItem("status") === "logado") {
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="conserto">
      <div className={tooglePrincipalComponent ? "Perfil zindex" : "Perfil"}>
        <div className="conig">
          <SettingsOutline
            color="white"
            width="30px"
            height="30px"
            onClick={() => {
              setShowConfig(false);
            }}
          />
        </div>
        <div className="container">
          <div className="info">
            <div
              className="foto"
              style={{ backgroundImage: `url(${userObject.clinkfoto})` }}
            ></div>
            <h1>{userObject.cnome}</h1>
            <div className="textos">
              <p className="username">@{userObject.cusername}</p>
              <p>{userObject.cdescricao}</p>
              <div className="complementos">
                <span>
                  <span className="campo">Pron:</span> {userObject.ncdpronome}
                </span>
                <span> · </span>
                <span>
                  <span className="campo">Gên:</span> {userObject.ncdgenero}
                </span>
                <span> · </span>
                <span>
                  <span className="campo">Sex:</span>{" "}
                  {userObject.ncdsexualidade}
                </span>
              </div>
            </div>
          </div>
          <div className="posts-container">
            {arrayPosts.map((post, index) => (
              <Post
                key={index}
                nome={post.usuario.cnome}
                text={post.ctexto}
                username={post.usuario.cusername}
                fotoPerfil={userObject.clinkfoto}
                aoClicar={() => {
                    console.log(post.usuario.clinkfoto);
                }}
              />
            ))}
          </div>
          <BottomMenu
            classe={showConfig ? "mostrar" : ""}
            aoClicarRetangulo={() => {
              setShowConfig(true);
            }}
            aoClicarOpt1={() => {
              setTooglePrincipalComponent(true);
            }}
            aoClicarSair={() => {
              navigate("/login");
              localStorage.setItem("status", "deslogado");
            }}
            aoClicarOpt2={() => {
              navigate("/redefinirsenha");
            }}
          />
          <NavBarFooter
            classe={5}
            aoClicar4={() => {
              navigate("/chat");
            }}
            aoClicar1={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
      <EditarPerfil
        classe={tooglePrincipalComponent ? "" : "zindex"}
        aoClicarRetangulo={() => {
          setTooglePrincipalComponent(false);
        }}
        aoClicarCancelar={() => {
          setTooglePrincipalComponent(false);
        }}
      />
    </div>
  );
}
