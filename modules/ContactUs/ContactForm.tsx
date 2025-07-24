"use client";
import { sendForm } from "@/actions/resend";
import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";
import { useFormStatus } from "react-dom";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { useActionState } from "react";

const ContactForm = () => {
  const [state, formAction] = useActionState(sendForm, {
    message: "",
  });

  return (
    <form
      className="space-y-6 bg-white text-black p-8 rounded-lg"
      action={formAction}
    >
      <div className="space-y-2">
        <p className="text-base font-extrabold">Name</p>
        <Input name="name" type="text" required />
      </div>

      <div className="space-y-2">
        <p className="text-base font-extrabold">Email</p>
        <Input name="email" type="email" required />
      </div>

      <div className="space-y-2">
        <p className="text-base font-extrabold">Phone Number</p>
        <Input name="phone" type="text" required />
      </div>

      <div className="space-y-2">
        <p className="text-base font-extrabold">Message</p>
        <textarea
          name="message"
          className="w-full bg-neutral-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>

      <div className="flex justify-center">
        <SubmitButton />
      </div>

      {state?.message === "success" && (
        <div className="flex items-center space-x-2 text-green-500">
          <BiCheckCircle color="green" />
          <p aria-live="polite" className="text-base npt-sr-only">
            Your message has been sent successfully!
          </p>
        </div>
      )}

      {state?.message === "error" && (
        <div className="flex items-center space-x-2 text-red-500">
          <BiErrorCircle color="red" />
          <p aria-live="polite" className="text-base">
            There was an error sending your message. Please try again later.
          </p>
        </div>
      )}
    </form>
  );
};
export default ContactForm;

const SubmitButton = () => {
  const { pending: isPending } = useFormStatus();
  return <Button type="submit">{isPending ? "Sending..." : "Send"}</Button>;
};
