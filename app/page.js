'use client';
import { useFormik } from "formik"
import Image from "next/image";
import * as yup from "yup";
import formImage from "../public/penten.png"
import { useRouter } from 'next/navigation';




export default function Home() {

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      terms: "",
      country: "" || "United Emirates"
    },

    validationSchema: yup.object({
      name: yup.string().required("Name Is Required").max(60, "Max Length Is 60 number"),
      email: yup.string().required("Email Is Required").email("invalid email Here").max(60, "Max Length Is 60 number"),
      terms: yup.array().required("Checkbox Must Be Checked"),
      country: yup.string().required("You Have To Choose A Country ElseIf United Emirates")
    }),

    onSubmit: (values) => {
      console.log(values);
      console.log(formik);
      router.push('/success', { query: values })
    }
  })





  return (

    <main className="items-center flex justify-center w-full">

      <form className=" bg-white flex rounded-lg flex-wrap" onSubmit={formik.handleSubmit}>

        <div className="text-gray-700 p-20 max-w-[500px] ">
          <h1 className="text-3xl pb-2 font-latoBold">
            Lets get started 👋
          </h1>
          <p className="text-lg  text-gray-500">
            Join our E-learning platform today and unlock over 500+ courses
            and digital assets ready to download.
          </p>

          <div className="mt-6 ">

            {/* Name input field */}
            <div className="pb-4">
              <label
                htmlFor="name"
                className={`block font-latoBold text-sm pb-2 ${formik.touched.name && formik.errors.name
                  ? "text-red-400"
                  : ""
                  } `}
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "Name"}
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-3/4 focus:border-teal-500 focus:ring-teal-500 "
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* Email input field */}
            <div className="pb-4">
              <label
                htmlFor="email"
                className={`block font-latoBold text-sm pb-2 ${formik.touched.email && formik.errors.email
                  ? "text-red-400"
                  : ""
                  }`}
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </label>

              <p></p>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-3/4 focus:border-teal-500 focus:ring-teal-500"
                type="email"
                name="email"
                placeholder="Enter your email address"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* Country input field */}
            <div className="pb-4">
              <label
                htmlFor="country"
                className="block font-latoBold text-sm pb-2"
              >
                Country
              </label>
              <select
                className="border-2 border-gray-500 p-2 rounded-md w-3/4 focus:border-teal-500 focus:ring-teal-500"
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
              >
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
              </select>
            </div>
            {/* Terms of service*/}
            <div className="pb-4">
              <label
                htmlFor="terms"
                className={`block font-latoBold text-sm pb-2 ${formik.touched.terms && formik.errors.terms
                  ? "text-red-400"
                  : ""
                  }`}
              >
                {formik.touched.terms && formik.errors.terms
                  ? formik.errors.terms
                  : "Terms of service"}
              </label>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  value="checked"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="h-5 w-5 text-teal-500 border-2  background-gray-500 focus:border-teal-500 focus:ring-teal-500"
                />
                <p className="text-sm font-latoBold text-gray-500">
                  I agree to the Terms and Service that my data will be taken
                  and sold.
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
            >
              Start learning today!
            </button>
          </div>

        </div>

        <div className="m-auto">
          <Image
            priority
            src={formImage}
            alt="form-learn"
            width={400}
            height={400}
            className="rounded hue-rotate-[45deg]"
          />
        </div>

      </form>

    </main>

  )
}
