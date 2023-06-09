import { useSession } from "next-auth/react";
import Image from "next/image";

const Avatar = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session?.user?.image) {
    return (
      <div className="rounded-full overflow-hidden">
        <Image
          src={session.user.image}
          width={36}
          height={36}
          alt="Profile picture"
        />
      </div>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2"
    >
      <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
      <circle cx="12" cy="10" r="3" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};

export default Avatar;