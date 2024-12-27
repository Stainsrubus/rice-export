import  { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);

      // Simulate form submission (replace this with actual API call)
      console.log("Form submitted:", formData);

      // Reset form fields
      setFormData({
        email: "",
        phone: "",
        message: "",
      });

      // Reset submission status after some time (optional)
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="px-20 py-24 flex justify-center items-center">
      <div className="bg-[#F3F4F3] w-5/6 py-8 px-20 rounded-lg shadow-md">
        <h1 className="text-4xl text-center font-bold font-anderson text-[#282C4B] mb-8">Inquiry Form</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email and Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-4 border ${
                  errors.email ? "border-red-500" : "border-[#B0B0B0]"
                } rounded-xl font-ubuntu focus:outline-none`}
                placeholder="Email ID"
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>
            <div>
           
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-4 border ${
                  errors.phone ? "border-red-500" : "border-[#B0B0B0]"
                } rounded-xl font-ubuntu focus:outline-none`}
                placeholder="Phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
           
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.message ? "border-red-500" : "border-[#B0B0B0]"
              } rounded-xl font-ubuntu  focus:outline-none`}
              placeholder="Message"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
                className="bg-[#017807] drop-shadow-btn text-lg text-white font-bold py-5 px-12 rounded-full font-ubuntu transition"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Success Message */}
        {isSubmitted && (
          <p className="text-green-500 text-center mt-4">Your inquiry has been submitted successfully!</p>
        )}
      </div>
    </section>
  );
}

export default Form;
