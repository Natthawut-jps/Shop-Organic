import { FormEvent, FunctionComponent, useState } from "react";

interface reset_password_Type {
  new_password: string;
  confirm_password: string;
}

const Reset_password: FunctionComponent = () => {
  const [data, setData] = useState<reset_password_Type>(
    {} as reset_password_Type
  );
  const [err, setError] = useState<string>("");

  const handlerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (
      data.new_password === data.confirm_password &&
      data.new_password !== undefined &&
      data.confirm_password !== undefined
    ) {
      setError('"success"');
    } else {
      setError('"new_password and confirm_password incorrect"');
    }
  };

  return (
    <div className=" absolute w-full top-[10%] items-start left-[40%] flex flex-col gap-5">
      <span className=" text-branding-error">{err}</span>
      <div className=" flex flex-row items-center justify-start gap-2">
        <label htmlFor="new_password">New Password</label>
        <input
          form="reset_password"
          type="password"
          className="border border-black border-solid outline-none rounded-sm relative left-[37px]"
          id="new_password"
          name="new_password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, new_password: e.target.value })
          }
          required
        />
      </div>
      <div className=" flex flex-row items-center justify-start gap-2">
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          form="reset_password"
          type="password"
          name="confirm_password"
          id="confirm_password"
          className="border border-black border-solid outline-none rounded-sm relative left-[15px]"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, confirm_password: e.target.value })
          }
          required
        />
      </div>
      <form
        id="reset_password"
        className=" relative left-[220px] top-[15px]"
        onSubmit={handlerSubmit}
      >
        <button
          type="submit"
          className=" bg-green-50 p-2 text-green-500 rounded-md cursor-pointer font-sans font-semibold"
        >
          reset password
        </button>
      </form>
    </div>
  );
};

export default Reset_password;
