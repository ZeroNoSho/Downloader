import React from "react";

function Foot() {
  return (
    <div className="box">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="ari">Downloader</h1>
            <p className="ari1">Copyright © 2022. Ari Rachman & Markus Situmorang</p>
          </div>
          <div className="column">
            <table className="tables">
              <thead>
                <tr>
                  <th>
                    <h1 className="title is-4 ari1">Downloader</h1>
                  </th>
                  <th>
                    <h1 className="title is-4 ari1">Kontak</h1>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tr">
                    <p className="ari1">Download Mp4</p>
                  </td>
                  <td className="tr ari1">Github</td>
                </tr>
                <tr>
                  <td className="tr">
                    <p className="ari1">Download Mp3</p>
                  </td>
                  <td className="tr ari1">Instagram</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="tr ari1">Tiktok</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foot;
