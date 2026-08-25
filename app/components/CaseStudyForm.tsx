"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

type CloudType =
  | "Sales Cloud"
  | "Service Cloud"
  | "Community Cloud"
  | "CPQ"
  | "Marketing Cloud"
  | "Revenue Cloud";

interface CaseStudyFormProps {
  onClose: () => void;
}

const pdfMap: Record<CloudType, string> = {
  "Sales Cloud": "/documents/sales-cloud-case-study.pdf",
  "Service Cloud": "/documents/service-cloud-case-study.pdf",
  "Community Cloud": "/documents/community-cloud-case-study.pdf",
  CPQ: "/documents/cpq-case-study.pdf",
  "Marketing Cloud": "/documents/marketing-cloud-case-study.pdf",
  "Revenue Cloud": "/documents/revenue-cloud-case-study.pdf",
};

const clouds: CloudType[] = [
  "Sales Cloud",
  "Service Cloud",
  "Community Cloud",
  "CPQ",
  "Marketing Cloud",
  "Revenue Cloud",
];

export default function CaseStudyForm({
  onClose,
}: CaseStudyFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cloud, setCloud] = useState<CloudType | "">("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // =========================
  // VALIDATION
  // =========================

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // NAME
    const trimmedName = name.trim();

    if (!trimmedName) {
      newErrors.name = "Please enter your full name.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
      newErrors.name = "Please enter a valid name.";
    }

    // EMAIL
    const trimmedEmail = email.trim();

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!trimmedEmail) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // PHONE
    const trimmedPhone = phone.trim();

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!trimmedPhone) {
      newErrors.phone = "Please enter your contact number.";
    } else if (!phoneRegex.test(trimmedPhone)) {
      newErrors.phone =
        "Please enter a valid 10-digit Indian mobile number.";
    }

    // CLOUD
    if (!cloud) {
      newErrors.cloud = "Please select a cloud.";
    }

    // DESCRIPTION
    const trimmedDescription = description.trim();

    if (!trimmedDescription) {
      newErrors.description = "Please enter a description.";
    } else if (trimmedDescription.length < 10) {
      newErrors.description =
        "Description must be at least 10 characters.";
    } else if (trimmedDescription.length > 1000) {
      newErrors.description =
        "Description cannot exceed 1000 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setErrors({});

    if (!validate()) {
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        "service_7isxnke",
        "template_k86qqds",
        {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          cloud,
          description: description.trim(),
          subject: `Case Study Request - ${cloud}`,
        },
        "Nyne2oTRE0UX0KKSA"
      );

      setSubmitted(true);

      // GTM tracking
      if (
        typeof window !== "undefined" &&
        (window as any).dataLayer
      ) {
        (window as any).dataLayer.push({
          event: "generate_lead",
          form_name: "case_study_form",
          cloud_selected: cloud,
        });
      }
    } catch (error) {
      console.error("Case Study EmailJS Error:", error);

      setErrors({
        submit:
          "Something went wrong while submitting. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const selectedPdf = cloud ? pdfMap[cloud] : "";

  // =========================
  // CLEAR FIELD ERROR
  // =========================

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* =========================
            HEADER
        ========================= */}

        <div className="flex shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6 py-5">
          <div className="pr-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#003E95]">
              Case Studies
            </p>

            <h2 className="mt-1 text-xl font-semibold text-[#1a1a2e] sm:text-2xl">
              Explore Our Case Study
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Get insights into our Salesforce implementations.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* =========================
            CONTENT
        ========================= */}

        <div className="overflow-y-auto">
          {submitted ? (
            /* =========================
               SUCCESS
            ========================= */

            <div className="px-6 py-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-green-200 bg-green-50">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#16A34A"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-[#1a1a2e]">
                Thank You!
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-500">
                Your request has been received successfully.
                You can now preview or download the selected case
                study.
              </p>

              {/* Selected Cloud */}
              {cloud && (
                <div className="mx-auto mt-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-[#003E95]">
                  {cloud}
                </div>
              )}

              {/* PDF Buttons */}
              {selectedPdf && (
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  {/* Preview */}
                  <a
                    href={selectedPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#003E95] bg-white px-6 py-3 text-sm font-semibold text-[#003E95] transition hover:bg-[#003E95] hover:text-white"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
                      />
                      <circle cx="12" cy="12" r="2.5" />
                    </svg>

                    Preview Case Study
                  </a>

                  {/* Download */}
                  <a
                    href={selectedPdf}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#003E95] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#0052BF]"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16"
                      />
                    </svg>

                    Download PDF
                  </a>
                </div>
              )}

              <button
                type="button"
                onClick={onClose}
                className="mt-6 text-sm text-gray-400 transition hover:text-[#003E95]"
              >
                Close
              </button>
            </div>
          ) : (
            /* =========================
               FORM
            ========================= */

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5 px-6 py-6"
            >
              {/* =========================
                  NAME + EMAIL
              ========================= */}

              <div className="grid gap-5 sm:grid-cols-2">
                {/* NAME */}

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      clearError("name");
                    }}
                    placeholder="John Smith"
                    autoComplete="name"
                    className={`case-input ${
                      errors.name ? "case-input-error" : ""
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* EMAIL */}

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      clearError("email");
                    }}
                    placeholder="john@company.com"
                    autoComplete="email"
                    className={`case-input ${
                      errors.email ? "case-input-error" : ""
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* =========================
                  PHONE + CLOUD
              ========================= */}

              <div className="grid gap-5 sm:grid-cols-2">
                {/* PHONE */}

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Contact Number
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);

                      setPhone(value);
                      clearError("phone");
                    }}
                    placeholder="9876543210"
                    maxLength={10}
                    inputMode="numeric"
                    autoComplete="tel"
                    className={`case-input ${
                      errors.phone ? "case-input-error" : ""
                    }`}
                  />

                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* CLOUD */}

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Select Cloud
                  </label>

                  <select
                    value={cloud}
                    onChange={(e) => {
                      setCloud(e.target.value as CloudType | "");
                      clearError("cloud");
                    }}
                    className={`case-input cursor-pointer ${
                      errors.cloud ? "case-input-error" : ""
                    }`}
                  >
                    <option value="">Select a cloud</option>

                    {clouds.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  {errors.cloud && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.cloud}
                    </p>
                  )}
                </div>
              </div>

              {/* =========================
                  DESCRIPTION
              ========================= */}

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Description
                  </label>

                  <span
                    className={`text-xs ${
                      description.length >= 1000
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  >
                    {description.length}/1000
                  </span>
                </div>

                <textarea
                  rows={5}
                  value={description}
                  onChange={(e) => {
                    const value = e.target.value.slice(0, 1000);

                    setDescription(value);
                    clearError("description");
                  }}
                  maxLength={1000}
                  placeholder="Tell us what you would like to know about this case study..."
                  className={`case-input resize-none ${
                    errors.description ? "case-input-error" : ""
                  }`}
                />

                {errors.description && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.description}
                  </p>
                )}
              </div>

              {/* =========================
                  SUBMIT ERROR
              ========================= */}

              {errors.submit && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {errors.submit}
                </div>
              )}

              {/* =========================
                  SUBMIT BUTTON
              ========================= */}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#003E95] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#0052BF] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="3"
                      />

                      <path
                        fill="white"
                        d="M12 3a9 9 0 019 9h-3a6 6 0 00-6-6V3z"
                      />
                    </svg>

                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Get Case Study

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14m-6-6 6 6-6 6"
                      />
                    </svg>
                  </span>
                )}
              </button>

              <p className="text-center text-[11px] text-gray-400">
                Your information is confidential and will only be
                used to process your request.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* =========================
          INPUT STYLES
      ========================= */}

      <style jsx>{`
        .case-input {
          width: 100%;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          padding: 0.75rem 0.9rem;
          color: #1a1a2e;
          font-size: 0.875rem;
          outline: none;
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .case-input::placeholder {
          color: #9ca3af;
        }

        .case-input:hover {
          border-color: #d1d5db;
        }

        .case-input:focus {
          border-color: #003e95;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(0, 62, 149, 0.08);
        }

        .case-input-error {
          border-color: #ef4444 !important;
        }

        .case-input-error:focus {
          border-color: #ef4444 !important;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.08);
        }

        select.case-input {
          color: #1a1a2e;
        }

        select.case-input option {
          background: #ffffff;
          color: #1a1a2e;
        }

        textarea.case-input {
          min-height: 120px;
        }

        @media (max-width: 640px) {
          .case-input {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}