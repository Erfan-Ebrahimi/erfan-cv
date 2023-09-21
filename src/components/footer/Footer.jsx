import "./footer.scss";
import me from "../../assets/ME.gif";


const Footer = () => {

  const clickHandle = () => {
    alert("Call & Hire me -- 09918790969 --");
  }


  return (
    <div className=" w-full mx-auto mt-10">
      <div className="content w-[270px] mx-auto text-center flex items-center justify-center mb-5">
        <a href="#09918790969" onClick={clickHandle}><img src={me} className="w-8 ml-4 rounded-md pt-1" alt="me" /></a>
        <h3>Designed With <span>&#128151;</span> By </h3>
      </div>
    </div>
  )
}

export default Footer;