import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import ButtonCom from "@/components/UI/button";
import RootLayout from "@/components/layouts/RootLayout";
import { useForgetPasswordMutation } from "@/redux/api/AuthApi";
import { Divider, message } from "antd";
import React, { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";

type Inputs = {
  confirmedCode: string;
};

const ForgetPassword = () => {
  const [forgetPassword] = useForgetPasswordMutation();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    try {
      const res = await forgetPassword({ ...data }).unwrap();
      if (res?.message) {
        message.success("Verify code sent on your mail!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <section>
      <div className="card w-full shadow-lg rounded-md bg-slate-100 text-slate-900">
        <div className="p-10">
          <h2 className="text-center">Forget password</h2>
          <Divider className="bg-[#dee2e6]" />
          <Form submitHandler={onSubmit}>
            <FormInput type="text" label="Email" name="email" required={true} />
            <ButtonCom>Forget password</ButtonCom>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;

ForgetPassword.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
