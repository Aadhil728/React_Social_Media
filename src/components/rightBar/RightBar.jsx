import './rightBar.scss';
import Image from '../../assets/imgs/download.jpeg';


const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={Image} alt="" />
              <span>Mohamed Aadhil</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          {/* 2nd */}
          <div className="user">
            <div className="userInfo">
              <img src={Image} alt="" />
              <span>Mohamed Faras</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Lates Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={Image} alt="" />
              <p>
                <span>Mohamed Aadhil </span>Changed their cover picture.
              </p>
            </div>
            <span>1min ago</span>
          </div>
          {/* 2nd */}
          <div className="user">
            <div className="userInfo">
              <img src={Image} alt="" />
              <p>
                <span>Mohamed Aadhil </span>Changed their cover picture.
              </p>
            </div>
            <span>1min ago</span>
          </div>
          {/* 3rd */}
          <div className="user">
            <div className="userInfo">
              <img src={Image} alt="" />
              <p>
                <span>Mohamed Aadhil </span>Changed their cover picture.
              </p>
            </div>
            <span>1min ago</span>
          </div>
          {/* 4th */}
          <div className="user">
            <div className="userInfo">
              <img src={Image} alt="" />
              <p>
                <span>Mohamed Aadhil </span>Changed their cover picture.
              </p>
            </div>
            <span>1min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={Image} alt="" />
              <div className="online"></div>
              <span>Mohamed Aadhil </span>
            </div>
          </div>
          {/* 2nd */}
          <div className="user">
            <div className="userInfo">
              <img src={Image} alt="" />
              <div className="online"></div>
              <span>Mohamed Aadhil </span>
            </div>
          </div>
          {/* 3rd */}
          <div className="user">
            <div className="userInfo">
              <img src={Image} alt="" />
              <div className="online"></div>
              <span>Mohamed Aadhil </span>
            </div>
          </div>
          {/* 4th */}
          <div className="user">
            <div className="userInfo">
              <img src={Image} alt="" />
              <div className="online"></div>
              <span>Mohamed Aadhil </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RightBar