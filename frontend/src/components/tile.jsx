import PropTypes from "prop-types";

export const Tile = ({ id = "null", launchDate = "null", status = "null" }) => {
  return (
    <section className="border border-gray-600 rounded-md w-[200px] p-5 text-center text-lg bg-white">
      <p>Tile {id}</p>
      <p>{launchDate}</p>
      <p>{status}</p>
      <button className="text-red-700 bg-slate-300 hover:bg-slate-200 p-2 rounded-lg">
        View Tasks
      </button>
    </section>
  );
};

Tile.propTypes = {
  id: PropTypes.number,
  launchDate: PropTypes.string,
  status: PropTypes.string,
};
