import React, { useState } from "react";
import axios from "axios";
import Parret from "../yellow-shirt.json";
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { foto1, foto2, foto4, foto5, foto6 } from "../tutorial";
import { InstagramEmbed } from "react-social-media-embed";
import Foot from "../components/Foot";
import "swiper/css";
import "swiper/css/pagination";
function Instagram() {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState();

  const swals = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: (
        <p style={{ color: "hsl(171, 100%, 41%)" }} className="title is-1 text-center">
          Tutorial Download
        </p>
      ),
      html: (
        <div className="Swiper">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={foto1} alt="img" />
              <h2 className="subtitle text-center">Masukan link video youtube nya kedalam form nya</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto2} alt="img" />
              <h2 className="subtitle text-center">Jika sudah memasukan link nya klik tombol kaca pembesar atau enter saja</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto4} alt="img" />
              <h2 className="subtitle text-center">Jika sudah menentukan pilihan yang ingin di download anda bisa memilih jenis kualitas gambar yang dii ingin kan dan mengklik download</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto5} alt="img" />
              <h2 className="subtitle text-center">Anda akan di arahkan kehalaman yang lain dan akan mucul video atau audio yang ada ingin download</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto6} alt="img" />
              <h2 className="subtitle text-center adsasd">Setelah itu klik tombol titik tiga akan di arahkan ke tombol download lagi dan setelah itu klik maka download berhasil </h2>
            </SwiperSlide>
          </Swiper>
        </div>
      ),
    });
  };

  const handle = (val) => {
    axios
      .get(`https://backend-v1.vercel.app/instagram/?url=${val}`)
      .then((res) => {
        setFormat(res.data.data.video);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="container cm1 cd1">
        <div className="heros">
          <Lottie loop={true} animationData={Parret}></Lottie>
        </div>
        <div className="columns">
          <div className="column">
            <div className="pembungkus-title">
              <h1 className="title is-1 text-center">Free instagram Downloader Online</h1>
              <h2 className="subtitle text-center">Download instagram video in MP3 or MP4 format</h2>
            </div>
            <div className="field cm1">
              <div className="control">
                <input value={url} onKeyPress={() => handle(url)} onChange={(e) => setUrl(e.target.value)} className="input inputsizing is-primary is-medium is-rounded is-focused" type="text" placeholder="Masukan Link Disini" />
                <button onClick={() => handle(url)} className="button is-primary is-inverted download">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            {format === undefined ? null : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <InstagramEmbed url={url} width={328} height={450} />
              </div>
            )}
          </div>
        </div>
        {format === undefined ? null : (
          <div>
            <div className="columns columnbox">
              <div className="column box">
                <table className="table center">
                  <thead>
                    <tr>
                      <th className="m-1">Conten Video Atau Foto</th>
                    </tr>
                  </thead>
                  <tbody>
                    {format === undefined
                      ? null
                      : format.url_list.map((e, i) => (
                          <tr key={i} className="is-selected">
                            <td className="m-1 m-2">
                              <a key={i} href={e}>
                                Download
                              </a>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        <button className="button is-primary is-outlined adsadsad" onClick={swals}>
          Tutorial Download Video & Audio
        </button>
      </div>
      <Foot></Foot>
    </div>
  );
}

export default Instagram;
