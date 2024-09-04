import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy } from "@awesome.me/kit-ab0c8eeb38";

export default function Navigation() {
  return (
    <>
      <h1 className="text-xl md:text-2xl">
        <Link
          href="/"
          title="Home"
          aria-label="Go to homepage"
        >
          <i className="fa-duotone fa-pen-fancy text-[1rem] text-blue-600 dark:text-blue-800" />
          <FontAwesomeIcon icon="fa-duotone fa-solid fa-pen-fancy" />
        </Link>
        h<span className="underline underline-offset-4 text-">ai</span>ku
        generator
      </h1>
    </>
  );
}
