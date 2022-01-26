import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  console.log(formState.errors);
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          {...register("firstName")}
          placeholder="First Name"
        />
        <input
          type="text"
          {...register("lastName", { required: true, minLength: 10 })}
          placeholder="Last Name"
        />
        <input type="text" {...register("email")} placeholder="email" />
        <input type="text" {...register("username")} placeholder="username" />
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
        <input
          type="text"
          {...register("passwordConfirmation")}
          placeholder="Password Confirmation"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
