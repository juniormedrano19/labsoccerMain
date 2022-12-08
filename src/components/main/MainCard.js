import React from "react";

export const MainCard = () => {
  return (
    <div className="main__card">
      <div className="main__cardBox">
        <div className="main__box">
          <h3 className="main__text">Team o Country in the world</h3>
          <div>
            <div className="container-3">
              <span className="icon">
                <i class="fa fa-search"></i>
              </span>
              <input type="search" id="search" placeholder="Liverpool FC" />
            </div>
          </div>
          <button className="main__btn">Buscar</button>
        </div>
      </div>
    </div>
  );
};
