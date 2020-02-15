import React from 'react';
import {Link} from "react-router-dom";
import background from "../../../assets/img/footer-bg.svg";

export default class Footer extends React.Component{
    render(){
    return (
        <footer className="site-footer" id="footer" style={{background:`url(${background})`,backgroundSize:"cover"}} >
         
        <div className="container" >
            
        <div className="row-">
          <div className="col brand">
            <p className="footer-bold" style={{color:"#183185", fontFamily:"'Source Serif Pro', serif", fontWeight:"500"}}>Realtime patient gesture monitoring</p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/1996AKS/"
                rel="noopener noreferrer"
                target="_blank"
                className="facebook"
              >
                
                <svg version="1.1" x="0px" y="0px" width="25px"
	                  viewBox="0 0 155.139 155.139"  xmlSpace="preserve" fill="#4342D2">
                    <g>
                      <path id="f_1_" fill="#4342D2" d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184
                        c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452
                        v20.341H37.29v27.585h23.814v70.761H89.584z"/>
                    </g>
                  </svg>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/_akshay_sharma_"
                className="twitter"
              >
                
                <svg version="1.1" x="0px" y="0px" width="25px"
	                viewBox="0 0 512 512" xmlSpace="preserve" fill="#4342D2">
                    
                    <path fill="#4342D2" d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                      c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                      c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                      c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                      c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                      c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                      C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                      C480.224,136.96,497.728,118.496,512,97.248z"/>
                  </svg>
                
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/aks1996/"
                className=" linkedin"
              >
                <svg version="1.1" x="0px" y="0px"
                    width="25px" viewBox="0 0 430.117 430.117" fill="#4342D2"
                    xmlSpace="preserve">
                    <path id="LinkedIn" fill="#4342D2" d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707
                      c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21
                      v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824
                      C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463
                      c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z
                      M5.477,420.56h92.184v-277.32H5.477V420.56z"/>
                  </svg>

              </a>
            </div>
          </div>
          <div className="col products hidden-xs">
          </div>
          <div className="col products hidden-xs">
          </div>

          <div className=" col products">
            <h5 className="" style={{color:"#183185", fontFamily:"'Source Serif Pro', serif", fontWeight:"500"}}>Product</h5>
            <ul className=" content">
              <li className="">
                <a style={{color:"#183185", fontFamily:"'Source Serif Pro', serif", fontWeight:"500"}} href="/#">
                  About
                </a>
              </li>
              <li className="">
                <Link style={{color:"#183185", fontFamily:"'Source Serif Pro', serif", fontWeight:"500"}} to="/#">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className=" col products">
            <h5 className="" style={{color:"#183185", fontFamily:"'Source Serif Pro', serif", fontWeight:"500"}}>Resources</h5>
            <ul className=" content">
              <li className="">
                <a style={{color:"#183185", fontFamily:"'Source Serif Pro', serif", fontWeight:"500"}} href="/#">
                  Chat
                </a>
              </li>
              <li className="">
                <Link style={{color:"#183185", fontFamily:"'Source Serif Pro', serif", fontWeight:"500"}} to="/#">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <span className="">
            MIT License © 2020.
          </span>
        </div>
      </div> 
      
      </footer>
      );
    }
}
