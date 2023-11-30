import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPropertyName } from "@/utils/schema-validation";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  defaultValue?: string | string[] | undefined;
  id?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  options: any;
}

const RadioInput = ({
  name,
  value,
  label,
  defaultValue,
  required,
  options,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      <p className="my-2 text-slate-900">
        {label ? label : null}
        {required ? (
          <span
            style={{
              color: "red",
              marginLeft: "4px",
            }}
          >
            *
          </span>
        ) : null}
      </p>

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Radio.Group
            {...field}
            defaultValue={defaultValue}
            value={value ? value : field.value}
          >
            {options.map((option: { key: string; value: string }) => (
              <Radio className="text-slate-900" key={option.key} value={option.key}>
                {option.value}
              </Radio>
            ))}
          </Radio.Group>
        )}
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default RadioInput;
