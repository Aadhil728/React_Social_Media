import './leftBar.scss';
import Image from '../../assets/imgs/download.jpeg';
import MenuImg from '../../assets/imgs/2.jpeg';
import Friends from '../../assets/imgs/menuIcons/friends.png';
import Groups from '../../assets/imgs/menuIcons/groups.png';
import Marketplace from '../../assets/imgs/menuIcons/marketplace.png';
import Memories from '../../assets/imgs/menuIcons/memories.png';
import Watch from '../../assets/imgs/menuIcons/watch.png';

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={Image} alt="" />
            <span>Aadhil</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Marketplace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span className='sub'>Your Shortcuts</span>
          <div className="item">
            <img src={MenuImg} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={MenuImg} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={MenuImg} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={MenuImg} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={MenuImg} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span className='sub'>Others</span>
          <div className="item">
            <img src={MenuImg} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={MenuImg} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={MenuImg} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar