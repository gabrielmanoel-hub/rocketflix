import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL, IMG_URL } from "../../components/api/Api";
import Logo from "../../imgs/favico/android-chrome-192x192.png";
import Foguete from "../../imgs/imgErro/foguete.png";
import PostImg from "../../imgs/imgErro/Screenshot.png";
import ImgButton from "../../imgs/favico/favicon.ico"
import './style/style.css'
const Main = () => {
    const [data, setData] = useState([]);
    const [num] = useState({
        id: Math.floor(Math.random() * 2880),
    });
    console.log(data)
    const [err, setErr] = useState();
    const IMG = `${IMG_URL}${data.poster_path}`;
    
    const mudarId = () => {
      return document.location.reload(true);
    };

    useEffect(()=>{
      async function getData(){
          try {
            const Get = await BASE_URL.get(`/${num.id}?api_key=${API_KEY}`)
            setData(Get.data);
        }catch(erro){
            setErr(erro.response.status);
        };
      }

      getData()
    }, []);

    return (
        <main>
            <header>
                <img className="logo" src={Logo} alt="" />
                <h1>Não sabe o que assistir?</h1>
            </header>
            {err === 404 ? (
            <section className="telaErro">
                <img src={PostImg} alt="" />
                <p>
                    Ops, hoje não é dia de assistir filme. <br /> Bora codar!
                    <img height={5} src={Foguete} alt="" />
                </p>
            </section>
            ) : (
            <section>
                <img src={IMG} alt="" />
                <div>
                    <h2>{data.original_title}</h2>
                    <p className="description  scrooll-style">{data.overview}</p>
                </div>
            </section>
            )}
            <div className="div-button">
                <button onClick={() => mudarId()}> <img src={ImgButton} alt=""/> Encontrar filme</button>
                <p>Clique em "Encontrar filme" que traremos informações de algum filme para
                    você assistir hoje.</p>
            </div>
        </main>
    );
};

export default Main;
