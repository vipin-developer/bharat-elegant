import Header from "../../components/common/Header/Header";
const three60Videos = () => {
  return (
    <div>
      <Header />
      <div>
        <video width="600" height="460" controls>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default three60Videos;
