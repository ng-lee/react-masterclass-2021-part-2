import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input
          type="text"
          {...register("firstName")}
          placeholder="First Name"
        />
        <input type="text" {...register("lastName")} placeholder="Last Name" />
        <input type="text" {...register("email")} placeholder="email" />
        <input type="text" {...register("username")} placeholder="username" />
        <input type="text" {...register("password")} placeholder="Password" />
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
