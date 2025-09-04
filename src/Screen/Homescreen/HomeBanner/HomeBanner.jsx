import React from "react";
import "./HomeBanner.css";
import homeBannerItemproduct from "../../../Homeproduct.json";
const HomeBanner = () => {
  return (
    <div className="homeBanner">
    <img className='homeBannerimg' src='https://m.media-amazon.com/images/I/61Dr+oVuClL._SX3000_.jpg' />
    <div className="grayBackgroundHomeBanner"></div>

    <div className="homeBannerItemDiv">

        {
           homeBannerItemproduct.product.map((item, ind) => {
                return (
                    <div className="homeBannerItemDivCard">
                        <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                        <div className="imgHomeBannerItemDivCard">
                            {
                                item.img.map((it, ind )=> {
                                    return (
                                        <div className="imgBannerHomeDiv">
                                            <img className='imgBannerHomeDivImg' src={it} />
                                            <div className="imgBannerImgName">boAt Stone 1800 Bluet</div>
                                        </div>
                                    );

                                })
                            }
                        </div>

                        <div className="seeMoreHomeBanner">See More</div>
                    </div>
                );
            })
        }

      </div>
    </div>
  );
};
export default HomeBanner;
