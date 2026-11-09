
import React from "react";

const ContactUs = () => (
  <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-2xl p-4 sm:p-8 my-10">
    {/* Title */}
    <div className="flex justify-center mb-6">
      <h3 className="text-2xl sm:text-3xl font-bold text-blue-500">
        Contact Us
      </h3>
    </div>

    {/* Main Content */}
    <div className="text-gray-800 space-y-5 text-base sm:text-lg">
      {/* Recruiters / Employers */}
      <div>
        <p>
          <strong>Recruiters/Employers:</strong> Want to post a job
          ad on our platforms? Contact us for our paid job
          posting service.
        </p>

        <p className="mt-3">
          <strong>Contact:</strong>{" "}
          <a
            href="mailto:jobads@hrpostingpartner.com"
            className="text-blue-600 underline hover:text-blue-800 break-words"
          >
            jobads@hrpostingpartner.com
          </a>
        </p>
      </div>

      {/* Job Seekers */}
      <div>
        <p>
          <strong>Job Seekers:</strong> Please contact us only
          to report fake/scam job ads so we can take action.
        </p>
      </div>

      {/* Important Notice */}
      <p className="italic text-gray-600 text-sm sm:text-base">
        <strong>Important:</strong> Job Seekers are requested
        NOT to send us their resumes, as HRPP does not
        collect resumes.
      </p>
    </div>
  </section>
);

export default ContactUs;
