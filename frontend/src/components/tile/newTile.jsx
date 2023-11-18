import { useDispatch, useSelector } from "react-redux";
import { updateEditTileObject } from "./tileSlice";
import { DropdownComponent } from "../dropdownComponent";
import { editTile } from "../../utils/http";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

export const NewTile = () => {
  const dispatch = useDispatch();
  const { editTile: editTileBoolean, editTileObject } = useSelector(
    (state) => state.tile
  );

  const handleProperty = (e) => {
    const date = new Date(e);
    const isoStringDate = date.toISOString().split("T")[0];
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

  const handleTileUpdateSubmisssion = (e) => {
    const tilePayload = {
      id: editTileObject.id,
      launch_date: editTileObject.launchDate,
      status: editTileObject.status,
    };
    // e.preventDefault();
    editTile(editTileObject.id, tilePayload);
  };

  return (
    <section className="bg-white h-[500px] w-[300px] rounded-xl p-4">
      <h1 className="text-2xl mb-5">Update Tile</h1>
      <form onSubmit={(e) => handleTileUpdateSubmisssion(e)}>
        <label>Launch Date</label>
        <br />
        <DateTimePicker
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
          className="bg-slate-400 rounded-lg p-2 text-lg hover:bg-slate-300"
        >
          Update
        </button>
      </form>
    </section>
  );
};
