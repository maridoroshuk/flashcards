import { useSession } from "next-auth/react";
import { useEffect, useState } from "react/cjs/react.production.min";

export default function Secret() {
  const { data: session, status } = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("api/pages");
      const data = await res.json();

      if (data.content) {
        setContent(data.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && status === "loading") {
    return null;
  }
  if (!session) {
    return (
      <main>
        <div>
          <h1>Please sign in first</h1>
        </div>
      </main>
    );
  }
  return <>{content}</>;
}
