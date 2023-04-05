import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import axios from "axios";

const HotCollections = () => {
  const [posts, setPost] = useState([]);
  let navigate = useNavigate()

  async function fetchingUsers (userId) {
    const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`)
    setPost(data)
    console.log(posts)
  }

  useEffect(() => {
    fetchingUsers()

  }, [])




  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          {posts.map((post, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}
            onClick={() => navigate(`/${post.nftId}`)}>
            <div className="nft_coll">
              <div className="nft_wrap">
                <Link to="/item-details">
                  <img src={post.nftImage} className="lazy img-fluid" alt="" />
                </Link>
              </div>
              <div className="nft_coll_pp">
                <Link to="/author">
                  <img className="lazy pp-coll" src={AuthorImage} alt="" />
                </Link>
                <i className="fa fa-check"></i>
              </div>
              <div className="nft_coll_info">
                <Link to="/explore">
                  <h4>{post.title}</h4>
                </Link>
                <span>ERC-192</span>
              </div>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
