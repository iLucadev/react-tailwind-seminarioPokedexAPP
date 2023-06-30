import PropTypes from "prop-types";
import Button from "../components/Button";
export default function SignIn({ data, handleFormChange, handleFormSubmit }) {
  return (
    <form className="flex flex-col gap-4 px-16 py-8 border-2 w-96 border-slate-950">
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="email" className="w-1/6 font-semibold">
          {"email"}:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={data.email}
          onChange={handleFormChange}
          className="border-b-2 outline-none grow bg-orange-50 border-slate-950"
        />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="password" className="w-1/6 font-semibold">
          {"password"}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={handleFormChange}
          className="border-b-2 outline-none grow bg-orange-50 border-slate-950"
        />
      </fieldset>
      <div className="flex justify-end gap-4">
        <Button
          color="positive"
          func={(e) => {
            e.preventDefault();
            handleFormSubmit();
          }}
        >
          Login
        </Button>
      </div>
    </form>
  );
}
SignIn.propTypes = {
  data: PropTypes.object,
  handleFormChange: PropTypes.func,
  handleFormSubmit: PropTypes.func,
};
