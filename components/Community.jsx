import React, { useEffect } from "react";
import { Container } from "reactstrap";
import Footer from "./pages/home/Footer";
import Menu from "./pages/home/Menu";
import group377141 from './assets/images/ellipse-17-1@2x.png';
import overlapGroup1 from './assets/images/rectangle-538-1@2x.png';
import group368961 from "./assets/images/rectangle-448-4@2x.png";
import overlapGroup2 from "./assets/images/rectangle-446-4@2x.png";
import rectangle571 from "./assets/images/rectangle-57-1@2x.png";
import line11 from "./assets/images/line-1-4@2x.png";
import rectangle4521 from "./assets/images/rectangle-452-4@2x.png";
import image1 from "./assets/images/image-20@2x.png";
import image2 from "./assets/images/image-21@2x.png";
import badge1 from "./assets/images/badge-8@2x.png";
import badge2 from  "./assets/images/badge-8@2x.png";
import imageBox2 from "./assets/images/image-1-4@2x.png";
import maskGroup from "./assets/images/mask-group-3@2x.png";
import imageGroup3 from "./assets/images/image-17@2x.png"
import imageGroup6 from "./assets/images/banner-4@2x.png";
import whiteLine from "./assets/images/line-49-2@2x.png";
import menuOpt from "./assets/images/menu-1@2x.png";
import { GetCommunity } from "./API/Global/community";
import {useLocation, useParams} from "react-router-dom";

import './assets/CommunityPage';

function Community (props) {

    const spanText10 =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci blandit nisl eu. At adipiscing non et magnis ultrices mauris, pellentesque pellentesque. Adipiscing imperdiet tellus congue nunc pharetra, etiam. Amet malesuada conadipiscing";
    const data = {
        spanText13: "'क'",
        spanText14: <>से <br />किताब</>,
        spanText16: <>&#x27;क&#x27; से किताब : चर्चा पंकज त्रिपाठी की<br />पसंदीदा किताबों पे</>,
        spanText17: "27 Nov 21   l   06:30 PM",
        spanText18: "Himanshu Bajpai and Pankaj Tripathi",
    }

    const {id} = useParams();

    useEffect(() => {
        GetCommunity(id, function callback(result, error){
            if (typeof error !== 'undefined' && error !== null) {
                console.log('no data found--', error);
              } else {
                  console.log(result);
            }
        });
    },[]);

    return(
        <div className="container-center-horizontal">
        <div className="w1-a1-cue-detail screen">
            <Menu/>

            <div className="group-38692">
              <div className="group-38674">
                <div className="flex-row">
                  <div className="group-37714-1" style={{ backgroundImage: `url(${group377141})` }}></div>
                  <div className="flex-col">
                    <div className="turtle-money-circle valign-text-middle poppins-normal-white-18px">
                      <span>
                        <span className="poppins-normal-white-18px">Turtle Money Circle</span>
                      </span>
                    </div>
                    <div className="finance valign-text-middle poppins-normal-pink-swan-18px">
                      <span>
                        <span className="poppins-normal-pink-swan-18px">Finance</span>
                      </span>
                    </div>
                  </div>
                  <div className="group-37824">
                    <div className="flex-col-1">
                      <div className="com-overlap-group-2" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                        <div className="accept valign-text-middle poppins-normal-peach-cream-16px">
                          <span>
                            <span className="poppins-normal-peach-cream-16px">Join</span>
                          </span>
                        </div>
                      </div>
                      <div className="x155k-members valign-text-middle poppins-normal-pink-swan-14px">
                        <span>
                          <span className="poppins-normal-pink-swan-14px">15.5k Members</span>
                        </span>
                      </div>
                    </div>
                    {/* <img className="menu" src={menuOpt} /> */}
                  </div>
                </div>
                <p className="started-playing-tabl poppins-normal-white-16px">
                  <span className="poppins-normal-white-16px">Started playing tabla player at the age of 9 after being inspired by the Indian tabla virtuoso Zakhir Hussain. Sharing my love for tabla here weekly."</span>
                </p>
              </div>
              <img className="line-49" src={whiteLine} />
            </div>


            <div className="group-38693">
                <div className="group-38633">
                <div className="about valign-text-middle poppins-normal-white-24px">
                    <span>
                    <span className="poppins-normal-white-24px">About</span>
                    </span>
                </div>
                <div className="com-overlap-group-3 border-0-5px-white-2">
                    <p className="com-ipsum-dolor-si poppins-normal-granite-gray-14px">
                    <span className="poppins-normal-granite-gray-14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci blandit nisl eu. At adipiscing non et magnis ultrices mauris, pellentesque pellentesque. Adipiscing imperdiet tellus congue nunc pharetra, etiam. Amet malesuada condimentum egestas dictum sed. Elit dignissim sem condimentum in. Rutrum mattis accumsan tristique congue adipiscing. Est et auctor erat vel enim consectetur. Nec eget malesuada eget ut pulvinar. Nibh sagittis sed curabitur purus, id augue faucibus arcu nibh. Aenean dui nunc nullam quis eros. Odio potenti eget adipiscing dolor auctor sed. Mi nibh dui sed fames quam morbi. Sapien sed dolor dolor augue arcu sollicitudin nibh elementum pellentesque. Ullamcorper in varius in viverra neque. Sapien sed dolor dolor augue arcu sollicitudin </span>
                    <span className="poppins-normal-granite-gray-14px">{spanText10}</span>
                    <span className="poppins-normal-eerie-black-14px">Read More</span>
                    </p>
                </div>
                </div>

                <div className="group-container">
                    <div className="group-38573">
                    <div className="cues-by-turtle-money-circle valign-text-middle poppins-normal-white-24px">
                        <span>
                        <span className="poppins-normal-white-24px">Cues by Turtle Money Circle</span>
                        </span>
                    </div>

                    <div className="group-38567">
                        <div className="com-overlap-group-container">
                        <div className="com-overlap-group3">
                            <div className="rectangle-447 border-0-5px-white-2"></div>
                            <div className="banner border-1px-eerie-black">
                            <div className="com-overlap-group1">
                                <div className="group-36896" style={{ backgroundImage: `url(${group368961})` }}>
                                <div className="com-overlap-group" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                                    <img className="com-rectangle-57" src={rectangle571} />
                                    <div className="group-36889">
                                    <div className="group-36888">
                                        <h1 className="com-text valign-text-middle poppins-bold-sunshade-48px">
                                        <span>
                                            <span className="poppins-bold-sunshade-48px">{data.spanText13}</span>
                                        </span>
                                        </h1>
                                        <div className="com-text-1 valign-text-middle poppins-normal-white-18px">
                                        <span>
                                            <span className="poppins-normal-white-18px">{data.spanText14}</span>
                                        </span>
                                        </div>
                                    </div>
                                    <img className="line-1" src={line11} />
                                    <div className="com-text-2 valign-text-middle poppins-normal-white-12px">
                                        <span>
                                        <span className="poppins-normal-white-12px">हिमांशु बाजपेई</span>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <img className="rectangle-452" src={rectangle4521} />
                            </div>
                            </div>
                            <div className="com-text-3 valign-text-middle poppins-normal-white-18px">
                            <span>
                                <span className="poppins-normal-white-18px">{data.spanText16}</span>
                            </span>
                            </div>
                            <div className="com-overlap-group2">
                            <p className="com-address valign-text-middle poppins-normal-white-13px">
                                <span>
                                <span className="poppins-normal-white-13px">{data.spanText17}</span>
                                </span>
                            </p>
                            </div>
                        </div>
                        <div className="com-overlap-group4">
                            <div className="card-event-images">
                            <img className="com-image" src={image1} />
                            <img className="com-image-1" src={image2} />
                            <p className="himanshu-bajpai-and-pankaj-tripathi valign-text-middle poppins-normal-white-14px">
                                <span>
                                <span className="poppins-normal-white-14px">{data.spanText18}</span>
                                </span>
                            </p>
                            </div>
                            <img className="badge" src={badge1} />
                            <img className="badge-1" src={badge2} />
                        </div>
                        </div>

                        <div className="group-38418 border-0-5px-white-2">
                        <div className="group-38359">
                            <div className="banner-2 border-1px-eerie-black">
                            <div className="overlap-group-6">
                                <div className="kahani-ki-kaksha poppins-bold-finn-36px">
                                <span className="span-3 poppins-bold-finn-36px">Kahani ki kaksha</span>
                                </div>
                                <img className="image-1-1" src={imageBox2} />
                                <img className="mask-group" src={maskGroup} />
                            </div>
                            </div>
                            <div className="tag-container">
                            <div className="com-time-tag">
                                <p className="address-2 valign-text-middle poppins-normal-white-13px">
                                <span>
                                    <span className="span-3 poppins-normal-white-13px">27 Nov 21&nbsp;&nbsp; l&nbsp;&nbsp; 06:30 PM</span>
                                </span>
                                </p>
                            </div>
                            <div className="community-tag border-0-5px-white">
                                <div className="kommune valign-text-middle poppins-normal-white-13px">
                                <span>
                                    <span className="span-3 poppins-normal-white-13px">Kommune</span>
                                </span>
                                </div>
                            </div>
                            </div>
                            <div className="kommune-presents-20 valign-text-middle poppins-normal-white-18px">
                            <span>
                                <span className="span-3 poppins-normal-white-18px">Kommune presents बैठक 2.0</span>
                            </span>
                            </div>
                        </div>
                        <div className="card-event-images-1">
                            <img className="image-2" src={imageGroup3} />
                            <div className="divya-prakash-dubey valign-text-middle poppins-normal-white-14px">
                            <span>
                                <span className="span-3 poppins-normal-white-14px">Divya Prakash Dubey</span>
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="group-38567">
                        <div className="com-overlap-group-container">
                        <div className="com-overlap-group3">
                            <div className="rectangle-447 border-0-5px-white-2"></div>
                            <div className="banner border-1px-eerie-black">
                            <div className="com-overlap-group1">
                                <div className="group-36896" style={{ backgroundImage: `url(${group368961})` }}>
                                <div className="com-overlap-group" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                                    <img className="com-rectangle-57" src={rectangle571} />
                                    <div className="group-36889">
                                    <div className="group-36888">
                                        <h1 className="com-text valign-text-middle poppins-bold-sunshade-48px">
                                        <span>
                                            <span className="poppins-bold-sunshade-48px">{data.spanText13}</span>
                                        </span>
                                        </h1>
                                        <div className="com-text-1 valign-text-middle poppins-normal-white-18px">
                                        <span>
                                            <span className="poppins-normal-white-18px">{data.spanText14}</span>
                                        </span>
                                        </div>
                                    </div>
                                    <img className="line-1" src={line11} />
                                    <div className="com-text-2 valign-text-middle poppins-normal-white-12px">
                                        <span>
                                        <span className="poppins-normal-white-12px">हिमांशु बाजपेई</span>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <img className="rectangle-452" src={rectangle4521} />
                            </div>
                            </div>
                            <div className="com-text-3 valign-text-middle poppins-normal-white-18px">
                            <span>
                                <span className="poppins-normal-white-18px">{data.spanText16}</span>
                            </span>
                            </div>
                            <div className="com-overlap-group2">
                            <p className="com-address valign-text-middle poppins-normal-white-13px">
                                <span>
                                <span className="poppins-normal-white-13px">{data.spanText17}</span>
                                </span>
                            </p>
                            </div>
                        </div>
                        <div className="com-overlap-group4">
                            <div className="card-event-images">
                            <img className="com-image" src={image1} />
                            <img className="com-image-1" src={image2} />
                            <p className="himanshu-bajpai-and-pankaj-tripathi valign-text-middle poppins-normal-white-14px">
                                <span>
                                <span className="poppins-normal-white-14px">{data.spanText18}</span>
                                </span>
                            </p>
                            </div>
                            <img className="badge" src={badge1} />
                            <img className="badge-1" src={badge2} />
                        </div>
                        </div>

                        <div className="group-38418 border-0-5px-white-2">
                        <div className="group-38359">
                            <div className="banner-2 border-1px-eerie-black">
                            <div className="overlap-group-6">
                                <div className="kahani-ki-kaksha poppins-bold-finn-36px">
                                <span className="span-3 poppins-bold-finn-36px">Kahani ki kaksha</span>
                                </div>
                                <img className="image-1-1" src={imageBox2} />
                                <img className="mask-group" src={maskGroup} />
                            </div>
                            </div>
                            <div className="tag-container">
                            <div className="com-time-tag">
                                <p className="address-2 valign-text-middle poppins-normal-white-13px">
                                <span>
                                    <span className="span-3 poppins-normal-white-13px">27 Nov 21&nbsp;&nbsp; l&nbsp;&nbsp; 06:30 PM</span>
                                </span>
                                </p>
                            </div>
                            <div className="community-tag border-0-5px-white">
                                <div className="kommune valign-text-middle poppins-normal-white-13px">
                                <span>
                                    <span className="span-3 poppins-normal-white-13px">Kommune</span>
                                </span>
                                </div>
                            </div>
                            </div>
                            <div className="kommune-presents-20 valign-text-middle poppins-normal-white-18px">
                            <span>
                                <span className="span-3 poppins-normal-white-18px">Kommune presents बैठक 2.0</span>
                            </span>
                            </div>
                        </div>
                        <div className="card-event-images-1">
                            <img className="image-2" src={imageGroup3} />
                            <div className="divya-prakash-dubey valign-text-middle poppins-normal-white-14px">
                            <span>
                                <span className="span-3 poppins-normal-white-14px">Divya Prakash Dubey</span>
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="group-38567">
                        
                     <div className="com-overlap-group-container">
                        <div className="com-overlap-group3">
                            <div className="rectangle-447 border-0-5px-white-2"></div>
                            <div className="banner border-1px-eerie-black">
                            <div className="com-overlap-group1">
                                <div className="group-36896" style={{ backgroundImage: `url(${group368961})` }}>
                                <div className="com-overlap-group" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                                    <img className="com-rectangle-57" src={rectangle571} />
                                    <div className="group-36889">
                                    <div className="group-36888">
                                        <h1 className="com-text valign-text-middle poppins-bold-sunshade-48px">
                                        <span>
                                            <span className="poppins-bold-sunshade-48px">{data.spanText13}</span>
                                        </span>
                                        </h1>
                                        <div className="com-text-1 valign-text-middle poppins-normal-white-18px">
                                        <span>
                                            <span className="poppins-normal-white-18px">{data.spanText14}</span>
                                        </span>
                                        </div>
                                    </div>
                                    <img className="line-1" src={line11} />
                                    <div className="com-text-2 valign-text-middle poppins-normal-white-12px">
                                        <span>
                                        <span className="poppins-normal-white-12px">हिमांशु बाजपेई</span>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <img className="rectangle-452" src={rectangle4521} />
                            </div>
                            </div>
                            <div className="com-text-3 valign-text-middle poppins-normal-white-18px">
                            <span>
                                <span className="poppins-normal-white-18px">{data.spanText16}</span>
                            </span>
                            </div>
                            <div className="com-overlap-group2">
                            <p className="com-address valign-text-middle poppins-normal-white-13px">
                                <span>
                                <span className="poppins-normal-white-13px">{data.spanText17}</span>
                                </span>
                            </p>
                            </div>
                        </div>
                        <div className="com-overlap-group4">
                            <div className="card-event-images">
                            <img className="com-image" src={image1} />
                            <img className="com-image-1" src={image2} />
                            <p className="himanshu-bajpai-and-pankaj-tripathi valign-text-middle poppins-normal-white-14px">
                                <span>
                                <span className="poppins-normal-white-14px">{data.spanText18}</span>
                                </span>
                            </p>
                            </div>
                            <img className="badge" src={badge1} />
                            <img className="badge-1" src={badge2} />
                        </div>
                        </div>
                    
                        <div className="com-overlap-group-container ml15">
                        <div className="com-overlap-group3">
                            <div className="rectangle-446 border-0-5px-white-2"></div>
                            <div className="border-1px-eerie-black">
                            <div className="com-overlap-group1">
                                <div className="group-36896" style={{ backgroundImage: `url(${imageGroup6})` }}>
                               
                                </div>
                            </div>
                            </div>
                            <div className="com-text-3 valign-text-middle poppins-normal-white-18px">
                            <span>
                                <span className="poppins-normal-white-18px">{data.spanText16}</span>
                            </span>
                            </div>
                            <div className="com-overlap-group2">
                            <p className="com-address valign-text-middle poppins-normal-white-13px">
                                <span>
                                <span className="poppins-normal-white-13px">{data.spanText17}</span>
                                </span>
                            </p>
                            </div>
                        </div>
                        <div className="com-overlap-group4">
                            <div className="card-event-images">
                            <img className="com-image" src={image1} />
                            <img className="com-image-1" src={image2} />
                            <p className="himanshu-bajpai-and-pankaj-tripathi valign-text-middle poppins-normal-white-14px">
                                <span>
                                <span className="poppins-normal-white-14px">{data.spanText18}</span>
                                </span>
                            </p>
                            </div>
                            <img className="badge" src={badge1} />
                            <img className="badge-1" src={badge2} />
                        </div>
                        </div>
                    
                    </div>


                    </div>
                </div>

                <div class="overlap-group-15 border-1px-pink-swan"><div class="load-more-1 valign-text-middle poppins-normal-pink-swan-16px">
                    <span><span class="poppins-normal-pink-swan-16px">Load More</span></span></div></div>
                
            </div>
        
            <Footer/>
        </div>
        </div>
    )
}

export default Community