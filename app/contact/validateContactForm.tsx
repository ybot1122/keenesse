const isValidEmail = (email: string): boolean => {
  const matches = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  return matches !== null && matches.length === 1;
};

const sanitize = (string: string): string => {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };
  const reg = /[&<>"'/]/gi;
  return string.replace(reg, (match) => map[match]);
};

export default function validateContactForm(formData: FormData): {
  status: "Valid" | "Invalid";
  error?: "Invalid Email Address" | "Missing Data";
  sanitized?: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    topics: string[];
  };
} {
  const firstName = sanitize(formData.get("firstName")?.toString() ?? "");
  const lastName = sanitize(formData.get("lastName")?.toString() ?? "");
  const email = sanitize(formData.get("email")?.toString() ?? "");
  const message = sanitize(formData.get("message")?.toString() ?? "");

  const topics = [];

  if (formData.get("coachingServices")) {
    topics.push("Coaching Services");
  }
  if (formData.get("consulting")) {
    topics.push("Consulting");
  }
  if (formData.get("speakingRequest")) {
    topics.push("Speaking Request");
  }
  if (formData.get("collaborations")) {
    topics.push("Collaborations");
  }
  if (formData.get("somethingElse")) {
    topics.push("Something Else");
  }

  if (!isValidEmail(email)) {
    return {
      status: "Invalid",
      error: "Invalid Email Address",
    };
  }

  if (!firstName || !lastName || !message || topics.length === 0) {
    return {
      status: "Invalid",
      error: "Missing Data",
    };
  }

  return {
    status: "Valid",
    sanitized: {
      firstName,
      lastName,
      message,
      email,
      topics,
    },
  };
}
