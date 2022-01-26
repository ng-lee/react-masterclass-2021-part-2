import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  passwordConfirmation: string;
  extraError?: string;
}

function ToDoList() {
  const { register, watch, handleSubmit, formState, setError } = useForm<IForm>(
    {
      defaultValues: {
        email: "@naver.com",
      },
    }
  );
  console.log(formState.errors);
  const onValid = (data: IForm) => {
    if (data.password !== data.passwordConfirmation) {
      setError(
        "passwordConfirmation",
        {
          message: "Passwords are not the same.",
        },
        {
          shouldFocus: true,
        }
      );
      setError("extraError", { message: "Server offline" });
    }
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          type="text"
          {...register("firstName", {
            required: "Write here",
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
              noNicL: (value) =>
                value.includes("nick") ? "no nicks allowed" : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{formState.errors?.firstName?.message}</span>
        <input
          type="text"
          {...register("lastName", { required: true, minLength: 10 })}
          placeholder="Last Name"
        />
        <span>{formState.errors?.lastName?.message}</span>
        <input
          type="text"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="email"
        />
        <span>{formState.errors?.email?.message}</span>
        <input type="text" {...register("username")} placeholder="username" />
        <span>{formState.errors?.username?.message}</span>
        <input
          type="text"
          {...register("password", {
            required: "Password is needed",
            minLength: {
              value: 10,
              message: "Password should be longer than 10 letters",
            },
          })}
          placeholder="Password"
        />
        <span>{formState.errors?.password?.message}</span>
        <input
          type="text"
          {...register("passwordConfirmation")}
          placeholder="Password Confirmation"
        />
        <span>{formState.errors?.passwordConfirmation?.message}</span>
        <span>{formState.errors?.extraError?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
