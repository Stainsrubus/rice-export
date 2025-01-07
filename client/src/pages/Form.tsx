import { useState, ChangeEvent, FormEvent } from "react";
import { _axios } from "../lib/_axios";
import { toast } from "react-toastify";
import { ImSpinner2 } from "react-icons/im";
import { useMutation } from "@tanstack/react-query";

type FormDataType = {
  email: string;
  phone: string;
  message: string;
};

type FormErrorsType = {
  email?: string;
  phone?: string;
  message?: string;
};

type ApiResponse = {
  message: string;
};

type ApiError = {
  response?: {
    data?: {
      message?: string;
    };
  };
};

function Form() {
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrorsType>({});

  const validate = (): FormErrorsType => {
    const newErrors: FormErrorsType = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors(prev => ({
      ...prev,
      [name]: undefined
    }));
  };

  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (data: FormDataType): Promise<ApiResponse> => {
      const response = await _axios.post('/send-email', data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message || "Form submitted successfully!");
      setFormData({
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    },
    onError: (error: ApiError) => {
      toast.error(error?.response?.data?.message || "Failed to submit the form. Please try again.");
      console.error('Error submitting form:', error);
    }
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    mutate(formData); 
  };

  return (
    <section className="px-20 py-24 flex justify-center items-center">
      <div className="bg-[#F3F4F3] w-5/6 py-8 px-20 rounded-lg shadow-md">
        <h1 className="text-4xl text-center font-bold font-anderson text-[#282C4B] mb-8">
          Inquiry Form
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isPending}
                className={`w-full px-4 py-4 border ${
                  errors.email ? "border-red-500" : "border-[#B0B0B0]"
                } rounded-xl font-ubuntu focus:outline-none ${
                  isPending ? "bg-gray-100" : ""
                }`}
                placeholder="Email ID"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                inputMode="numeric"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isPending}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10); 
                }}
                className={`w-full px-4 py-4 border ${
                  errors.phone ? "border-red-500" : "border-[#B0B0B0]"
                } rounded-xl font-ubuntu focus:outline-none ${
                  isPending ? "bg-gray-100" : ""
                }`}
                placeholder="Phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              disabled={isPending}
              className={`w-full px-4 py-2 border ${
                errors.message ? "border-red-500" : "border-[#B0B0B0]"
              } rounded-xl font-ubuntu focus:outline-none ${
                isPending ? "bg-gray-100" : ""
              }`}
              placeholder="Message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-2">{errors.message}</p>
            )}
          </div>

          {isError && (
            <div className="text-red-500 text-sm text-center">
              An error occurred while submitting the form. Please try again.
            </div>
          )}

          <div className="text-right">
            <button
              type="submit"
              disabled={isPending}
              className={`bg-[#017807] drop-shadow-btn text-lg text-white font-bold py-5 px-12 
                ${isPending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#015605] cursor-pointer'} 
                rounded-full font-ubuntu transition-all duration-200`}
            >
              {isPending ? (
                <span className="flex items-center gap-2">
                  Submitting
                  <ImSpinner2 className="animate-spin" size={20} />
                </span>
              ) : (
                <span>Submit</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;