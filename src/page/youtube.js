import React, { useState } from "react";
import axios from "axios";
import Parret from "../yellow-shirt.json";
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { foto1, foto2, foto3, foto4, foto5, foto6 } from "../tutorial";
import Foot from "../components/Foot";
import "swiper/css";
import "swiper/css/pagination";

function Youtube() {
  const [url, setUrl] = useState("");
  const [url2, setUrl2] = useState();
  const [format, setFormat] = useState();
  const [format2, setFormat2] = useState();
  const [format3, setFormat3] = useState();
  const [hiden1, setHiden1] = useState([false, true]);
  const [hiden2, setHiden2] = useState([true, false]);
  const [hiden3, setHiden3] = useState([true, false]);
  const [hiden4, setHiden4] = useState("Video & Audio");

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
              <img src={foto3} alt="img" />
              <h2 className="subtitle text-center">Setelah itu akan mucul video youtubenya dan tempat download nya kamu bisa memilih mau download audio video atau keduanya</h2>
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
      .get(`https://backend-v1.vercel.app/youtube/?url=${val}`)
      .then((res) => {
        const hero = res.data.data.link.filter((e) => e.container === "mp4" && e.audioBitrate !== null && e.qualityLabel !== null);
        const hero2 = res.data.data.link.filter((e) => e.container === "mp4" && e.qualityLabel === null);
        const hero3 = res.data.data.link.filter((e) => e.container === "mp4" && e.audioBitrate === null);
        setFormat(hero);
        setFormat2(hero2);
        setFormat3(hero3);
        setUrl2(res.data.data.url);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const clickActive = () => {
    const class_a = document.getElementById("act");
    class_a.classList.toggle("is-active");
  };

  const clickDefault = (e) => {
    const data = e.target.dataset.nama;
    if (data === "Video & Audio") {
      setHiden4("Video & Audio");
      setHiden1([false, true]);
      setHiden2([true, false]);
      setHiden3([true, false]);
    } else if (data === "Video") {
      setHiden4("Video Only");
      setHiden1([true, false]);
      setHiden2([true, false]);
      setHiden3([false, true]);
    } else if (data === "Audio") {
      setHiden4("Audio Only");
      setHiden1([true, false]);
      setHiden2([false, true]);
      setHiden3([true, false]);
    }
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
              <h1 className="title is-1 text-center">Free YouTube Downloader Online</h1>
              <h2 className="subtitle text-center">Download YouTube video in MP3 or MP4 format</h2>
            </div>
            <div className="field cm1">
              <div className="control">
                <input onKeyPress={() => handle(url)} onChange={(e) => setUrl(e.target.value)} className="input inputsizing is-primary is-medium is-rounded is-focused" type="text" placeholder="Masukan Link Disini" />
                <button onClick={() => handle(url)} className="button is-primary is-inverted download">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">{url2 === undefined ? "" : <iframe className="video" width="560" height="315" src={url2} title="YouTube video player"></iframe>}</div>
        </div>
        {format === undefined ? null : (
          <div>
            <div className="columns columnbox">
              <div className="column box">
                <table className="table center">
                  <thead>
                    <tr>
                      <th className="m-1">
                        <div id="act" className="dropdown">
                          <div className="dropdown-trigger">
                            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2" onClick={clickActive}>
                              <span>{hiden4}</span>
                              <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                              </span>
                            </button>
                          </div>
                          <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                            <div className="dropdown-content">
                              <div className="dropdown-item">
                                <p className="cursor" data-nama="Video & Audio" hidden={hiden1[1]} onClick={clickDefault}>
                                  Video & Audio
                                </p>
                              </div>
                              <div className="dropdown-item">
                                <p className="cursor" data-nama="Video" hidden={hiden3[1]} onClick={clickDefault}>
                                  Video Only
                                </p>
                              </div>
                              <div className="dropdown-item">
                                <p className="cursor" data-nama="Audio" hidden={hiden2[1]} onClick={clickDefault}>
                                  Audio Only
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th className="m-1 m-2">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {format === undefined
                      ? null
                      : format.map((e, i) => (
                          <tr key={i} className="is-selected" hidden={hiden1[0]}>
                            <th className="m-1">{e.qualityLabel}</th>
                            <td className="m-1 m-2">
                              <a href={e.url}>Download</a>
                            </td>
                          </tr>
                        ))}
                    {format2 === undefined
                      ? null
                      : format2.map((e, i) => (
                          <tr key={i} className="is-selected" hidden={hiden2[0]}>
                            <th className="m-1">Audio</th>
                            <td className="m-1 m-2">
                              <a href={e.url}>Download</a>
                            </td>
                          </tr>
                        ))}

                    {format3 === undefined
                      ? null
                      : format3.map((e, i) => (
                          <tr key={i} className="is-selected" hidden={hiden3[0]}>
                            <th className="m-1">{e.qualityLabel}</th>
                            <td className="m-1 m-2">
                              <a href={e.url}>Download</a>
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

export default Youtube;
