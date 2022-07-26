import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"

interface IForm {
  firstName: string
  lastName: string
  email: string
  password: string
}

const schema = yup.object({
  firstName: yup.string().required("First Name cannot be empty"),
  lastName: yup.string().required("Last Name cannot be empty"),
  email: yup.string().email("Please enter a valid email").required("Email cannot be empty").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Please enter a valid email"),
  password: yup.string().required("Password cannot be empty").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
})

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<IForm>({ resolver: yupResolver(schema) })
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <div className="bg-white p-6 gap-4 flex flex-col rounded-md lg:p-8">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4"
      >
        <label>
          <input placeholder="First Name" {...register("firstName")} className={`w-full ${errors.firstName && "ring-2 ring-[#ff7a7a]"}`} />
          {errors.firstName &&
            <>
              <img
                src="./icon-error.svg"
                alt="error icon"
                className="sticky float-right -mt-10 mr-4"
              />
              <p className="error">{errors.firstName?.message}</p>
            </>
          }
        </label>

        <label>
          <input placeholder="Last Name" {...register("lastName")} className={`w-full ${errors.firstName && "ring-2 ring-[#ff7a7a]"}`} />
          {errors.lastName &&
            <>
              <img
                src="./icon-error.svg"
                alt="error icon"
                className="sticky float-right -mt-10 mr-4"
              />
              <p className="error">{errors.lastName?.message}</p>
            </>
          }
        </label>

        <label>
          <input placeholder="Email Address" {...register("email")} className={`w-full ${errors.firstName && "ring-2 ring-[#ff7a7a]"}`} />
          {errors.email &&
            <>
              <img
                src="./icon-error.svg"
                alt="error icon"
                className="sticky float-right -mt-10 mr-4"
              />
              <p className="error">{errors.email?.message}</p>
            </>
          }
        </label>

        <label>
          <input placeholder="Password" type="password" {...register("password")} className={`w-full ${errors.firstName && "ring-2 ring-[#ff7a7a]"}`} />
          {errors.password &&
            <>
              <img
                src="./icon-error.svg"
                alt="error icon"
                className="sticky float-right -mt-10 mr-4"
              />
              <p className="error max-w-sm">{errors.password?.message}</p>
            </>
          }
        </label>

        <button className="bg-[#38cc8c] uppercase text-white p-4 rounded-md font-semibold tracking-wide transition-all hover:bg-[#14c478] shadow-[0_0.4em_0_0_#2da470]">claim your free trial</button>
      </form>

      <p className="text-xs text-[#b9b6d3] text-center">By clicking the button, you are agreeing to our <a href="#" className="font-bold text-[#ff7a7a]">Terms and Services</a></p>

    </div>
  )
}