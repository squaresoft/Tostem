import React from "react";
import { Link } from "react-router-dom";
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import dataGallery from "../../../data/Gallery/gallery-construction-data.json";
import 'swiper/css/swiper.css'
const GalleryConstruction = (props) => (
  <section className="pb-0">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 section-heading">
          <h2 className="text-uppercase">{props.title}</h2>
          <hr className="text-center red-bg" />
          <p className="mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          vulputate dolor. Nullam venenatis enim in quam euismod fringilla. Donec
          in risus eget purus mattis varius. Nulla dapibus quis orci et tincidunt.
          Phasellus in rhoncus quam. Fusce a est lacinia, ultricies mi nec, rutrum
          dolor.
        </p>
        <p>
          Donec vehicula cursus metus viverra aliquet Aliquam tincidunt dolor a
          auctor finibus. Sed in sodales magna. Etiam eget velit nec urna
          facilisis fringilla sed eget purus. Ut pulvinar ullamcorper mauris non
          tristique.
        </p>
         <a className="btn btn-color btn-red btn-square" href={`${process.env.PUBLIC_URL}/products`}> Read More </a>
        </div>
      </div>
      <div className="row mt-50">
        <div className="portfolio-container text-center">
        <StyleRoot>
        <Coverflow
          width={960}
          height={600}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={true}
          media={{
        '@media (min-width:1025px)': {
          width: '100%',
          height: '300px'
        },
         '@media (max-width:1025px)': {
          width: '100%',
          height: '300px'
        },
        '@media (max-width: 900px)': {
          width: '100%',
          height: '300px',
           '.coverflow__figure__3bk_C': {
          width: '150px !important'
        }
        },
        '@media (min-width: 900px)': {
          width: '100%',
          height: '600px',
           '.coverflow__figure__3bk_C': {
          width: '150px !important'
        }
         
        }
      }}
        >
          
          {dataGallery.map((item) => (
             <img key = {item.id} src={require("../../../assets/images/" + item.image)} alt={item.title} data-action={`${process.env.PUBLIC_URL}/product-details?link=${item.id}`}/>
              
            ))}

        </Coverflow>

      </StyleRoot>
          {/*<ul id="portfolio-grid" className="three-column hover-two">
            {dataGallery.map((item) => (
              <li key={item.id} className="portfolio-item">
                <div className="portfolio photo-gallery">
                  <div className="dark-overlay"></div>
                  <img
                    src={require("../../../assets/images/" + item.image)}
                    alt=""
                  />
                  <div className="portfolio-wrap">
                    <div className="portfolio-description">
                      <h3 className="portfolio-title">{item.title}</h3>
                    </div>
                    <ul className="portfolio-details">
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/single-portfolio`}>View Project </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>*/}
        </div>
      </div>
    </div>
  </section>
);

export default GalleryConstruction;
