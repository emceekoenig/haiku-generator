import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-ab0c8eeb38/icons";

export default function Header() {
  return (
    <header className="ps-2 py-1">
      <h1 className="text-xl md:text-2xl">
        <Link
          href="/"
          title="Home"
          aria-label="Go to homepage"
        >
          {/* <i className="fa-duotone fa-pen-fancy text-[1rem] text-blue-600 dark:text-blue-800" /> */}
          {/* <FontAwesomeIcon icon="fa-duotone fa-solid fa-pen-fancy" /> */}
          <FontAwesomeIcon
            icon={byPrefixAndName.fad["pen-fancy"]}
            className="text-[1rem] text-blue-600 dark:text-blue-800"
          />
        </Link>{" "}
        h<span className="underline underline-offset-4 text-">ai</span>ku
        generator
      </h1>
    </header>
  );
}
