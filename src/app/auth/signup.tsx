import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import RadioInput from "@/components/Form/RadioInput";
import ButtonCom from "@/components/UI/button";
import RootLayout from "@/components/layouts/RootLayout";
import { useSignupMutation } from "@/redux/api/AuthApi";
import { signupSchema } from "@/schemas/signupSchema";
import { storeUserInfo } from "@/services/auth.services";
import { yupResolver } from "@hookform/resolvers/yup";
import { Divider, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";
import { BsFacebook, BsGoogle } from "react-icons/bs";

enum roleField {
  buyer = "Buyer",
  seller = "Seller",
}

type Inputs = {
  role: roleField;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const options = [
  {
    key: "BUYER",
    value: "Buyer",
  },
  {
    key: "SELLER",
    value: "Seller",
  },
];

const Signup = () => {
  const [signup] = useSignupMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    try {
      const res = await signup({ ...data }).unwrap();
      if (res) {
        message.success("Verify with your email!");
        router.push("/auth/confirm-signup");
      }
      storeUserInfo({ accessToken: res });
    } catch (err: any) {
      message.error(err.data);
    }
  };
  return (
    <section>
      <div className="card w-full shadow-lg rounded-md bg-slate-100 text-slate-900">
        <div className="">
          <div className="p-10">
            <h2 className="text-center">Sign up</h2>
            <Divider className="" />
            <Form submitHandler={onSubmit} resolver={yupResolver(signupSchema)}>
              <RadioInput
                name="role"
                options={options}
                label="Select you role here:"
              />
              <FormInput
                type="text"
                label="First name"
                name="firstName"
                required={true}
              />
              <FormInput
                type="text"
                label="Last name"
                name="lastName"
                required={true}
              />
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
              <ButtonCom>Sign up</ButtonCom>
            </Form>
            <Link
              className="text-slate-900 no-underline my-2"
              href="/auth/signin"
            >
              Already have an account?
            </Link>

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
      </div>
    </section>
  );
};

export default Signup;

Signup.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
