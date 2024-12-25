import React from 'react'
import { MdSell } from "react-icons/md";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { FaShopify } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Headings from '../components/Headings';
// import Featured from '../components/Featured';

const About = () => {

    const developers = [
        {
            id: '1',
            name: 'Olawoyin Yusuf',
            image: '../../Images/avatar-ali.png',
            stack: 'Frontend Development',
            socials: {
                twitter: "hello x",
                insta: "hi insta",
                linkeIn: "hey LinkeIn",
            } 
        },
        {
            id: '2',
            name: 'Keneth Dev',
            image: '../../Images/avatar-anisha.png',
            stack: 'Backend Development',
            socials: {
                twitter: "hello x",
                insta: "hi insta",
                linkeIn: "hey LinkeIn",
            } 
        },
        {
            id: '2',
            name: 'Other Dev',
            image: '../../Images/avatar-shanai.png',
            stack: 'Backend Development',
            socials: {
                twitter: "hello x",
                insta: "hi insta",
                linkeIn: "hey LinkeIn",
            } 
        },
    ]


  return (
    <div className='py-4 about-section'>
        <div className="container px-2 p-sm-0">
            <div className="gap-4 flex-column-reverse flex-md-row align-items-center d-flex m-0 mt-3 ">
                <div className="col">
                    <Headings heading={"About Us"} />
                    <p>Welcome to Pizza Rush, where every slice is made with love and served with a smile. We’re more than just a pizza place—we’re your neighborhood spot for fresh, delicious meals that bring people together. Whether you’re grabbing a quick bite, sharing a family dinner, or celebrating with friends, Pizza Rush is here to make every moment special. <br />

                    We take pride in using only the freshest ingredients to craft pizzas that burst with flavor. From timeless classics like Margherita to bold, gourmet creations, we’ve designed a menu that caters to every craving. Our secret? A perfect blend of tradition and innovation, topped with our signature sauce and baked to perfection. And it’s not just about pizza—our sides, desserts, and drinks complete the experience. <br />

                    At Pizza Rush, you’re not just a customer—you’re family. That’s why we’re committed to fast, friendly service and ensuring every order leaves you smiling. Whether you’re dining in, picking up, or getting delivery, we’re here to make your day better, one slice at a time. So come on in and join the rush—we can’t wait to serve you! 🍕</p>
                </div>
                <div className="col">
                    <img src="../../Images/pizz.png" alt="" />
                </div>
            </div>


            <div className="grid my-4 py-4">
                <div className="grid-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center">
                    <MdSell size={27} />
                    <p className='fw-bold'>10.5k </p>
                    <small>Sellers active on our site</small>
                </div>
                <div className="grid-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center">
                    <HiMiniCurrencyDollar size={27} />
                    <p className='fw-bold'>33k</p>
                    <small>Monthly Product Sale</small>
                </div>
                <div className="grid-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center">
                    <FaShopify size={27} />
                    <p className='fw-bold'>45.5k</p>
                    <small>Customer active in our site</small>
                </div>
                <div className="grid-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center">
                    <FaSackDollar size={27} />
                    <p className='fw-bold'>25k</p>
                    <small>Anual gross sale in our site</small>
                </div>
            </div>


            <div className="grid container2">
                {
                    developers.map((dev)=> (
                        <div className="item ">
                            <div className="coloured">

                                <div className="member-image d-flex align-items-center justify-content-center">
                                    <img src={dev.image} alt="" />                   
                                </div>
                            </div>
                            {/* <h5></h5> */}

                            <div className="item-details d-flex align-items-center justify-content-center flex-column gap-2 p-3 mt-5">
                                <p className="fw-bold m-0">{dev.name}</p>
                                <small>{dev.stack}</small>
                                <div className="d-flex align-items-center gap-2">
                                    <Link className='nav-link' to="/"><FaXTwitter /></Link>
                                    <Link className='nav-link' to="/"><FaLinkedin /></Link>
                                    <Link className='nav-link' to="/"><FaInstagram /></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>



        </div>
    </div>
  )
}

export default About