import React, { ReactNode } from "react";
import FormInput from "../../components/Form/FormInput";
import ButtonCom from "../../components/UI/button";
import { SubmitHandler } from "react-hook-form";
import Form from "@/components/Form/Form";
import { useConfirmedSignUpMutation } from "@/redux/api/AuthApi";
import { useRouter } from "next/navigation";
import { message } from "antd";
import RootLayout from "@/components/layouts/RootLayout";

type Inputs = {
  code: string;
};

const ConfirmCode = () => {
  const [confirmedSignUp] = useConfirmedSignUpMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    try {
      console.log(data);
      const res = await confirmedSignUp({ ...data }).unwrap();
      console.log(res);
      if (res?.message) {
        message.success("User has been verified!");
        router.push("/dashboard/profile");
      }
    } catch (err: any) {
      message.error(err.data);
    }
  };
  return (
    <section>
      <div className="card w-full shadow-lg rounded-md bg-slate-100 text-slate-900 p-10">
        <h3 className="text-center">Confirm signup</h3>
        <Form submitHandler={onSubmit}>
          <FormInput
            type="text"
            label="Confirm code"
            name="confirmedCode"
            required={true}
          />
          <ButtonCom>Submit</ButtonCom>
        </Form>
      </div>
    </section>
  );
};

export default ConfirmCode;

ConfirmCode.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
