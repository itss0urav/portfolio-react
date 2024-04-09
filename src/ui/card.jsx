import PropTypes from "prop-types";

const Card = ({
  company = "Company",
  role = "Role",
  duration = "Duration",
  imageUrl = "",
}) => (
  <div className=" flex justify-between p-4 rounded-xl border border-gray-200 shadow-lg min-w-[20rem] w-fit h-fit min-h-[10rem] bg-black hover:bg-slate-950 bg-opacity-55 hover:scale-105 transform transition-all  backdrop-blur-md">
    <div className="w-2/3">
      <p className="text-gray-200 text-xl font-semibold mb-2">{company}</p>
      <p className="text-gray-300 text-lg">{role}</p>
      <p className="text-gray-500">{duration}</p>
    </div>
    <div className="">
      <img src={imageUrl} alt={imageUrl} className=" rounded-md w-10 h-10" />
    </div>
  </div>
);

Card.propTypes = {
  imageUrl: PropTypes.string,
  company: PropTypes.string,
  role: PropTypes.string,
  duration: PropTypes.string,
};

export default Card;
