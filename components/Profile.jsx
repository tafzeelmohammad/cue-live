import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Footer from "./pages/home/Footer";
import Menu from "./pages/home/Menu";
import overlapGroup1 from './assets/images/rectangle-538-1@2x.png';
import badge2 from  "./assets/images/badge-8@2x.png";
import imageGroup6 from "./assets/images/banner-4@2x.png";
import whiteLine from "./assets/images/line-49-2@2x.png";
import verifiedBadge from "./assets/images/badge-9@2x.png";
import communityImage from "./assets/images/community-1@2x.png";
import menuOpt from "./assets/images/menu-1@2x.png";
import { UserProfile } from "./API/Global/profile";
import { get } from 'lodash';
import { datePipe } from "../utils/Global";
import avatar from "./assets/images/avatar.jpg";
import { nameCombined } from "../utils/Global";

import './assets/CommunityPage';
import { Link } from "react-router-dom";

function Profile (props) {

    const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci blandit nisl eu. At adipiscing non et magnis";
    const spanText10 =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci blandit nisl eu. At adipiscing non et magnis ultrices mauris, pellentesque pellentesque. Adipiscing imperdiet tellus congue nunc pharetra, etiam. Amet malesuada conadipiscing";

    const [user, setUser] = useState([]);
    const [community, setCommunity] = useState([]);
    const [cues, setCue] = useState([]);
    const [fname, setFname] = useState();

    const splitFName = (name) => {
        const firstName = name.split(' ').slice(0, -1).join(' ');
        setFname(firstName);
    }

    useEffect(() => {
        UserProfile('20016', function callback(result, error){
            console.log(result);
            const userData = get(result, 'users.data.item', null);
            const communityData = get(result, 'community.data', null);
            const cuesData = get(result, 'cues.data.items', null);
            setUser(userData);
            setCommunity(communityData);
            setCue(cuesData);
            splitFName(userData.full_name);
        });
    },[]);

    return(
        <div className="container-center-horizontal">
        <div className="w1-a1-cue-detail screen">
            <Menu/>

            <div className="group-38692">
              <div className="group-38674">
                <div className="flex-row">
                  <div className="group-37714-3" style={{ backgroundImage: `url(${user.image_url})` }}>
                      { user.is_verified &&
                      <img class="badge-4" src={verifiedBadge} />
                      }
                  </div>
                  <div className="flex-col-2">
                    <div className="artist-user valign-text-middle poppins-normal-white-18px">
                        <span className="poppins-normal-white-18px">{user.full_name}</span>
                    </div>
                    <div className="artist-user valign-text-middle poppins-normal-white-18px">
                        <span className="poppins-normal-white-18px">{'@'+ user.username}</span>
                    </div>
                    <div className="finance valign-text-middle poppins-normal-pink-swan-18px">
                        <span className="poppins-normal-pink-swan-18px">Artist</span>
                    </div>
                  </div>
                  <div className="group-37824">
                    <div className="flex-col-1">
                      <div className="com-overlap-group-2" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                        <div className="accept valign-text-middle poppins-normal-peach-cream-16px">
                            <Link to='/'>
                                <span className="poppins-normal-peach-cream-16px">Follow</span>
                            </Link>
                        </div>
                      </div>
                      <div className="x155k-members valign-text-middle poppins-normal-pink-swan-14px">
                        <span>
                          <span className="poppins-normal-pink-swan-14px">{user.following_count} Members</span>
                        </span>
                      </div>
                    </div>
                    {/* <img className="menu" src={menuOpt} /> */}
                  </div>
                </div>
                <p className="started-playing-tabl poppins-normal-white-16px mT30">
                  <span className="poppins-normal-white-16px">{bio}</span>
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
                    <span className="poppins-normal-granite-gray-14px">{user.about_me}</span>
                    <span className="poppins-normal-granite-gray-14px">{spanText10}</span>
                    {/* <span className="poppins-normal-eerie-black-14px">Read More</span> */}
                    </p>
                </div>
                </div>
                
                <div className="group-38693">
                <div className="about valign-text-middle poppins-normal-white-24px">
                    <span>
                    <span className="poppins-normal-white-24px">{fname}'s Communities</span>
                    </span>
                </div>

                <Row>
                
                {community.map(commu => (
                <Link to='/community' params={{ id: commu.id }}>
                    <Col md="6">
                        <div className="group-38427">
                            <div className="group-38401 border-0-5px-white-2">
                                <img className="community" src={communityImage} />
                                <div className="group-37753">
                                    <div className="crypto-ninja valign-text-middle poppins-normal-eerie-black-18px">
                                        <span>
                                            <span className="span-8 poppins-normal-eerie-black-18px">{commu.title}</span>
                                        </span>
                                    </div>
                                    <div className="address-6 valign-text-middle poppins-normal-eerie-black-14px">
                                        <span>
                                            <span className="span-8 poppins-normal-eerie-black-14px">{commu.member_count} Members</span>
                                        </span>
                                    </div>
                                </div>
                                <p className="lorem-ipsum-dolor-si-16 poppins-normal-granite-gray-14px">
                                    <span className="poppins-normal-granite-gray-14px">{commu.bio}</span>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Link>
                ))}

                <div class="overlap-group-15 border-1px-pink-swan"><div class="load-more-1 valign-text-middle poppins-normal-pink-swan-16px">
                    <Link to='/'>
                    <span><span class="poppins-normal-pink-swan-16px">Load More</span></span></Link>
                    </div>
                    </div>
                </Row>
                
                </div>
                
                <div className="group-container">
                    <div className="group-38573">
                    <div className="cues-by-turtle-money-circle valign-text-middle poppins-normal-white-24px">
                        <span>
                        <span className="poppins-normal-white-24px">Cues by {fname}</span>
                        </span>
                    </div>
                

                    <div className="group-38567">
                    <Row>
                    {cues.filter((cue, idx) => idx < 6).map(cue => (
                        <Col md="6">
                            <div className="com-overlap-group-container mb20">
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
                                    <span className="poppins-normal-white-18px">{cue.title}</span>
                                </span>
                                </div>
                                <div className="com-overlap-group2">
                                <p className="com-address valign-text-middle poppins-normal-white-13px">
                                    <span>
                                    <span className="poppins-normal-white-13px">{datePipe(cue.start_at)}</span>
                                    </span>
                                </p>
                                </div>
                            </div>
                            <div className="com-overlap-group4">
                                <div className="card-event-images">
                                {(cue.speakers).filter((cue, idx) => idx < 2).map(speaker => (
                                <span className="mr5" title={speaker.username || speaker.full_name}>
                                    <img className="com-image" src={speaker.image_url || avatar} />
                                    { speaker.is_verified &&
                                        <img className="badge-1" src={badge2} />
                                    }
                                </span>
                                ))}
                                <p className="himanshu-bajpai-and-pankaj-tripathi valign-text-middle poppins-normal-white-14px">
                                    <span className="poppins-normal-white-14px">{nameCombined(cue)}</span>
                                </p>
                                
                                </div>
                            </div>
                            </div>
                        </Col>
                    ))}
                    </Row>
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

export default Profile