import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import ButtonCom from "@/components/UI/button";
import RootLayout from "@/components/layouts/RootLayout";
import { useLoginMutation } from "@/redux/api/AuthApi";
import { loginSchema } from "@/schemas/loginSchemas";
import { storeUserInfo } from "@/services/auth.services";
import { yupResolver } from "@hookform/resolvers/yup";
import { Divider, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsFacebook, BsGoogle } from "react-icons/bs";

type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [userLogin] = useLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      if (res?.accessToken) {
        router.push("/dashboard/profile");
        message.success("User logged in successfully!");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <section>
      <div className="card w-full shadow-lg rounded-md bg-slate-100 text-slate-900">
        <div className="p-10">
          <h2 className="text-center">Sign in</h2>
          <Divider className="bg-[#dee2e6]" />
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <FormInput
              type="email"
              label="Email"
              name="email"
              required={true}
            />
            <FormInput
              type="password"
              label="Password"
              name="password"
              required={true}
            />
            <ButtonCom>Sign in</ButtonCom>
          </Form>

          <div className="flex flex-col">
            <Link
              className="text-slate-900 no-underline my-2"
              href="/auth/signup"
            >
              Create new account?
            </Link>
            <Link
              className="text-slate-900 no-underline my-2"
              href="/auth/forget-password"
            >
              Forget password?
            </Link>
          </div>
          <Divider className="bg-[#dee2e6]" />
          <div>
            <h3 className="text-center">Social Login</h3>
            <div className="flex flex-col justify-center">
              <ButtonCom>
                <BsFacebook className="text-4xl" />
              </ButtonCom>
              <ButtonCom>
                <BsGoogle className="text-4xl" />
              </ButtonCom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
