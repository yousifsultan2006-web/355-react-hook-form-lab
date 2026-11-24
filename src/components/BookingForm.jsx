import {useForm} from "react-hook-form";


import { TIMES } from "../data/tonight.js";
import RenderBadge from "./RenderBadge.jsx";

function BookingForm({ onBook }) {
  const {register, handleSubmit, reset} = useForm();



  function savebooking(data) {
    console.log(JSON.stringify(data, null, 2));
    const booking = {id: crypto.randomUUID(), ...data, 
      partySize: Number(data.partySize),
    };
  onBook(booking);
  reset();
  }
  


  return (
    <section className="panel">
      <div className="panel-head">
        <h2 className="panel-title">Book a table</h2>
        <RenderBadge />
      </div>
      <form className="booking-form" onSubmit={handleSubmit(savebooking)}>
        <div className="field">
          <label className="field-label" htmlFor="name">Name</label>
          <input
            id="name"
            className="input"
            {...register("name")}
           
          />
        </div>

        <div className="field">
          <label className="field-label" htmlFor="phone">Phone</label>
          <input
            id="phone"
            className="input"
            type="tel"
            {...register("phone")}
            
          />
        </div>

        <div className="field-row">
          <div className="field">
            <label className="field-label" htmlFor="partySize">Party size</label>
            <input
              id="partySize"
              className="input"
              type="number"
              min="1"
              max="12"
              {...register("partySize")}
              
            />
          </div>

          <div className="field">
            <label className="field-label" htmlFor="time">Time</label>
            <select
              id="time"
              className="input"
              {...register("time")}
            >
              <option value="">Choose a time</option>
              {TIMES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>


        <div className="field">
    <span className="field-label">Seating</span>
    <div className="choices">
        <label className="choice">
            <input type="radio" value="indoor" {...register("seating")} />
            Indoor
        </label>

        <label className="choice">
            <input type="radio" value="patio" {...register("seating")} />
            Patio
        </label>

        <label className="choice">
            <input type="radio" value="bar" {...register("seating")} />
            Bar
        </label>
    </div>
</div>


            <label className="choice">
    <input
        id="celebrating"
        type="checkbox"
        {...register("celebrating")}
    />
    Celebrating something
</label>


        <div className="field">
          <label className="field-label" htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            className="input"
            rows="3"
            {...register("notes")}
          />
        </div>


        <button className="book-button">Book the table</button>
      </form>
    </section>
  );
}

export default BookingForm;
