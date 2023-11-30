import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import ButtonCom from "@/components/UI/button";
import RootLayout from "@/components/layouts/RootLayout";
import { useResetPasswordMutation } from "@/redux/api/AuthApi";
import { Divider, message } from "antd";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";

type Inputs = {
  confirmedCode: string;
};

const ResetPassword = () => {
  const router = useRouter();
  const token = router.query.token as string;
  const [resetPassword] = useResetPasswordMutation();
  const onSubmit: SubmitHandler<Inputs> = async (values: any) => {
    const data = {
      token: token,
      values: values,
    };
    try {
      const res = await resetPassword({ ...data }).unwrap();
      if (res) {
        message.success("Password has been changed!");
        router.push('/auth/signin');
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <section>
      <div className="card w-full shadow-lg rounded-md bg-slate-100 text-slate-900">
        <div className="p-10">
          <h2 className="text-center">Reset password</h2>
          <Divider className="bg-[#dee2e6]" />
          <Form submitHandler={onSubmit}>
            <FormInput
              type="text"
              label="Reset password"
              name="password"
              required={true}
            />
            <ButtonCom>Reset password</ButtonCom>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;

ResetPassword.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
