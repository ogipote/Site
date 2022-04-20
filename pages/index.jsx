import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from "next/script";
import { HiOutlineNewspaper, HiOutlineLink, HiX, HiOutlineExclamation, HiOutlineFolder, HiOutlineMenuAlt2, HiOutlineFire, HiOutlineCode } from 'react-icons/hi';

import config from '../config';
import style from '../styles/home.module.css';
import '../public/js/handle';

export default function render({ user, cards, error }) {
    return (
        <>
        <div style={{ paddingTop: "8rem", paddingBottom: "36rem" }}>
            <div style={{ color: "white", fontSize: "24px", top: "48%", left: "50%", position: "absolute", display: "inline-grid", transform: "translate(-50%, -50%)", justifyContent: "center" }}>
                <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=1024`} height={200} width={200} alt="logo" style={{ borderRadius: "50%", border: "5px solid #ffeb3b", margin: "auto" }}/>
                <h2 style={{ display: "inline", textAlign: "center", paddingTop: "10px", fontWeight: "600" }}>{config.name}</h2>
                <h2 style={{ display: "inline", textAlign: "center", fontSize: 18, padding: 10}}>{config.description}</h2>
                <div style={{ justifyContent: "space-evenly", display: "flex", width: "250px", margin: "auto" }}>
                    <a href="https://twitter.com/KingCh1ll" style={{ color: "white" }}>
                        <i className="fab fa-twitter" style={{ fontSize: "22px" }}></i>
                    </a>
                    <a href="https://github.com/KingCh1ll" style={{ color: "white" }}>
                        <i className="fab fa-github" style={{ fontSize: "22px" }}></i>
                    </a>
                    <a href="https://discord.com/users/571811686617710592" style={{ color: "white" }}>
                        <i className="fab fa-discord" style={{ fontSize: "22px" }}></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCvOB4pLdL7V4FmPdyNdfFeQ" style={{ color: "white" }}>
                        <i className="fab fa-youtube" style={{ fontSize: "22px" }}></i>
                    </a>
                    <a href="https://open.spotify.com/artist/anx4tm5z1m6lpg1ulxfbmxele" style={{ color: "white" }}>
                        <i className="fab fa-spotify" style={{ fontSize: "22px" }}></i>
                    </a>
                </div>
            </div>
        </div>

        <section className="container-sm" id="features" style={{ paddingBottom: "100px", maxWidth: "700px" }}>
            <div style={{ background: "#000d2b", borderRadius: "15px", padding: "30px", fontFamily: "Rubik, sans-serif" }}>
                <h1 className="aos-init aos-animate" style={{ fontWeight: "600", color: "rgba(255, 255, 255, 1)", textAlign: "center" }} data-aos="zoom-in">👋 About Me</h1>
                <div className="aos-init aos-animate" style={{ color: "rgba(255, 255, 255, 1)", textAlign: "center" }} data-aos="zoom-in">  
                    <p className="aos-init aos-animate" style={{ fontSize: "17px" }} data-aos="zoom-in">Hi, I'm KingCh1ll! I'm a passionate <strong>Software Engineer</strong>, living in the <strong>United States</strong>! I love making <strong>websites</strong> and <strong>Discord bots</strong>.</p>
                    <h2 className="aos-init aos-animate" style={{ fontWeight: "600", color: "rgba(255, 255, 255, 1)", textAlign: "center" }} data-aos="zoom-in">🪄 Languages</h2>
                    <p style={{ fontSize: "17px" }}>
                        <li className="aos-init aos-animate" data-aos="zoom-in">JavaScript</li>
                        <li className="aos-init aos-animate" data-aos="zoom-in">Lua (Roblox Edition)</li>
                        <li className="aos-init aos-animate" data-aos="zoom-in">Html, Css, Scss</li>
                    </p>
                    <h2 className="aos-init aos-animate" style={{ fontWeight: "600", color: "rgba(255, 255, 255, 1)", textAlign: "center" }} data-aos="zoom-in">📇 Contact</h2>
                    <p className="aos-init aos-animate" style={{ fontSize: "17px" }} data-aos="zoom-in">If you want to contact me, you can join my <a href="https://discord.gg/PPtzT8Mu3h">Discord server</a>.</p>
                </div>
            </div>
        </section>

        <section className={user?.activities.length > 0 ? "container-sm" : ""} style={{ paddingBottom: "100px", maxWidth: "700px" }}>
            {user?.activities.map((activity) => (
            <div style={{ background: "#000d2b", borderRadius: "15px", padding: "30px", fontFamily: "Rubik, sans-serif" }}>
                <div className="row aos-init aos-animate" style={{ color: "rgba(255, 255, 255, 1)", maxWidth: "600px", background: "#000a23", margin: "auto", borderRadius: "20px", padding: "20px 0px 0px 0px", height: "165px" }} data-aos="zoom-in">
                        <div className="col-2" style={{ marginLeft: "10px" }}>
                            <img src={activity.assets.large.image} alt={activity.name} className="img-fluid" style={{ height: "80px", borderRadius: "15px" }} />
                        </div>
                        <div className="col" style={{ fontFamily: "Rubik, sans-serif" }}>
                            <span style={{ textAlign: "center", fontSize: "larger", fontWeight: "600" }}>{activity.name}</span>
                            <p style={{ display: "flex", flexDirection: "column", textSlign: "center", marginBottom: "0", paddingBottom: "10px" }}>
                                <span>
                                    <HiOutlineFolder style={{ minHeight: 22, minWidth: 22, marginInlineEnd: "5px" }} />
                                    {activity.details}
                                </span>
                                <span>
                                    <HiOutlineMenuAlt2 style={{ minHeight: 22, minWidth: 22, marginInlineEnd: "5px" }} />
                                    {activity.state}
                                </span>
                            </p>
                        </div>
                    </div>
            </div>
            ))}
        </section>

        <section className="container-sm" id="portfolio" style={{ paddingBottom: "100px", maxWidth: "700px" }}>
            <div style={{ background: "#000d2b", borderRadius: "15px", padding: "30px", fontFamily: "Rubik, sans-serif" }}>
                <h1 style={{ fontWeight: "600", color: "rgba(255, 255, 255, 1)", textAlign: "center" }} data-aos="fade-up">🌐 Projects</h1>
                <div className="row" style={{ color: "rgba(255, 255, 255, 1)", textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <p className="aos-init aos-animate" style={{ fontSize: "17px", paddingBottom: "30px" }} data-aos="fade-up">I have many projects, including some you might know!</p>
                        
                    {config.projects?.map(card => (
                    <div className="col m-4 row aos-init aos-animate" style={{ maxWidth: "600px", background: "#000a23", margin: "auto", borderRadius: "20px", padding: "20px 0px 0px 0px", height: "165px" }} data-aos="zoom-in">
                        <div className="col-3" style={{ marginLeft: "10px" }}>
                            <img src={card.image} alt={card.name} className="img-fluid" style={{ borderRadius: "15px" }} />
                        </div>
                        <div className="col" style={{ fontFamily: "Rubik, sans-serif" }}>
                            <span style={{ textAlign: "center", fontSize: "xx-large", fontWeight: "600" }}>
                                {card.name}
                                {card.bot === true ? 
                                    <span style={{ backgroundColor: "rgb(88, 101, 242)", fontFamily: "sans-serif", fontSize: "14px", padding: "2px 6px 2px 6px", borderRadius: "4px", marginLeft: "5px" }}>
                                        <svg aria-label="Verified Bot" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
                                            <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"></path>
                                        </svg>
                                        BOT
                                    </span>
                                : <></>
                                }
                            </span>
                            <small style={{ marginInlineStart: "10px", color: "grey", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }}>{card.role}</small>
                            <p style={{ display: "flex", flexDirection: "column", textSlign: "center", marginBottom: "0", paddingBottom: "10px" }}>
                                <span>
                                    <HiOutlineNewspaper style={{ minHeight: 22, minWidth: 22, marginInlineEnd: "5px" }} />
                                    {card.description}
                                </span>
                                <span>
                                    <i className="fa-solid fa-link" style={{ fontSize: "medium", marginInlineEnd: "5px" }}></i>
                                    <a href={card.link}>{card?.linkName ? card.linkName : card.link.split("https://")[1]}</a>
                                </span>
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.min.js"></Script>
        {/* <Script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></Script> */}
        <Script src="https://cdn.jsdelivr.net/npm/aos/dist/aos.js"></Script>

        <Script src="/js/handle.js"></Script>
        </>
    );
};

// Special thanks to Luna for this code.
// https://github.com/Luna-devv/Luna-Site/blob/main/pages/index.jsx
// Her code helped me learn NextJS a lot.
render.getInitialProps = async () => {
    let user = {};
    let error = false;

    if (config.api) {
        try {
            user = await fetch(config.api).then(res => res.json()).catch(() => { return; });
        } catch (err) {
            error = err;
        }

        if (user?.status !== 200 || !user?.content?.id) {
            return user = { content: config.user, error: true }
        }
    }

    return { user: user?.content, error: error };
};