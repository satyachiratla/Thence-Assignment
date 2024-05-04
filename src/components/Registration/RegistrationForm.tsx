import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/PrimaryButton";
import { isValidEmail } from "../../../utils/helpers";

type RegistrationProps = {
  onRegistration: (error: boolean) => void;
};

type FormProps = {
  name: string;
  email: string;
};

type ErrorProps = {
  name: boolean;
  email: boolean;
};

export default function RegistrationForm({
  onRegistration,
}: RegistrationProps) {
  const [formValues, setFormValues] = useState<FormProps>({
    name: "",
    email: "",
  });

  const [error, setError] = useState<ErrorProps>({
    name: false,
    email: false,
  });

  const formChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [event.target.name]: event.target.value,
      };
    });
  };

  const registrationSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    const nameValid = formValues.name.trim() !== "";
    const emailValid = isValidEmail(formValues.email);

    setError({
      name: !nameValid,
      email: !emailValid,
    });

    if (nameValid && emailValid) {
      onRegistration(true);
    } else {
      onRegistration(false);
    }
  };

  return (
    <section className="mt-10 flex flex-col items-center">
      <div className="space-y-4">
        <h2 className="text-center font-coveredByYourGrace font-semibold text-[#2DA950] text-3xl">
          Registration Form
        </h2>
        <p className="text-center font-semibold text-4xl">
          Start your success <br></br> Journey here!
        </p>
      </div>
      <form
        onSubmit={registrationSubmitHandler}
        className="flex flex-col gap-4 mt-8"
      >
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formValues.name}
          onChange={formChangeHandler}
        />
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          error="Enter a valid email address"
          name="email"
          value={formValues.email}
          onChange={formChangeHandler}
          isError={error.email}
        />
        <Button type="submit" styleName="primary">
          Submit
        </Button>
      </form>
    </section>
  );
}
