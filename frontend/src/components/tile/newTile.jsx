import { useDispatch, useSelector } from "react-redux";
import { updateEditTileObject } from "./tileSlice";
import { DropdownComponent } from "../dropdown";
import { putTile, postTile } from "../../utils/http";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { isoStringDateFunc } from "../../utils/helpers";

export const NewTile = () => {
  const dispatch = useDispatch();
  const { editTile: editTileBoolean, editTileObject } = useSelector(
    (state) => state.tile
  );

  const handleProperty = (e) => {
    const isoStringDate = isoStringDateFunc(e);
    dispatch(
      updateEditTileObject({
        type: "UPDATE_PROPERTY",
        property: "launchDate",
        value: isoStringDate,
      })
    );
  };

  const handleOptionSelect = (selectedOption) => {
    dispatch(
      updateEditTileObject({
        type: "UPDATE_PROPERTY",
        property: "status",
        value: selectedOption,
      })
    );
  };

  const handleTileUpdateSubmisssion = async (e) => {
    e.preventDefault();
    const tilePayload = {
      id: editTileObject.tileID,
      launch_date: editTileObject.launchDate,
      status: editTileObject.status,
    };
    editTileBoolean
      ? await putTile(editTileObject.tileID, tilePayload)
      : await postTile(tilePayload);
    window.location.reload();
  };

  return (
    <section className="bg-white  w-[300px] rounded-xl p-4">
      <h1 className="text-2xl mb-3">
        {editTileBoolean
          ? `Update Tile ${editTileObject.tileID}`
          : "Create Tile"}
      </h1>
      <form onSubmit={(e) => handleTileUpdateSubmisssion(e)}>
        <label>Launch Date</label>
        <br />
        <DateTimePicker
          className="mb-3"
          dateOnly="true"
          format="yy-MM-dd"
          value={new Date(editTileObject.launchDate)}
          onChange={(e) => handleProperty(e)}
        />
        <br />
        <label>Status</label>
        <DropdownComponent
          options={["live", "pending", "archived"]}
          onSelect={handleOptionSelect}
          defaultValue={editTileObject.status}
        />
        <button
          type="submit"
          disabled={!editTileObject.status}
          className="bg-slate-400 rounded-lg p-2 text-lg hover:bg-slate-300 disabled:bg-red-600"
        >
          {editTileBoolean ? "Update" : "Create"}
        </button>
      </form>
    </section>
  );
};
