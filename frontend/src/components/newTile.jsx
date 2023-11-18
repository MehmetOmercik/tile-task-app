export const NewTile = () => {
  return (
    <section className="bg-white h-[500px] w-[300px] rounded-xl p-4">
      <h1 className="text-2xl mb-5">Update Tile</h1>
      <form>
        <label>Launch Date</label>
        <input className="w-full bg-gray-200 rounded-md"></input>
        <label>Status</label>
        <input className="w-full bg-gray-200 rounded-md mb-4"></input>
        <button
          type="submit"
          className="bg-slate-400 rounded-lg p-2 text-lg hover:bg-slate-300"
        >
          Update
        </button>
      </form>
    </section>
  );
};
