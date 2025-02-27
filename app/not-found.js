import Link from "next/link";

export const metadata = {
  title: "Page Not Found - Baraco",
  description: "Sorry, the page you are looking for does not exist. Navigate to Our links instead",
};
export default function NotFound() {
  return (
    <div className="relative h-[80vh] z-50 flex  items-center justify-center bg-gray-100 text-gray-900">
      <div className="w-[700px] h-fit p-7 flex flex-col justify-center items-center gap-5">
        <h1 className="text-8xl font-bold text-[#184b72]">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 mt-2 text-center max-w-md">
        Here are some helpful links instead:
        </p>
        <ul className="flex gap-8 flex-wrap items-center justify-center">
            {["/", "about", "services", "contact"].map((item, index) => (
              <li key={index}>
                <Link
                  href={item === "/" ? "/" : `/${item}`}
                  className="text-lg font-medium text-gray-500 capitalize transition hover:text-gray-600 hover:underline"
                  aria-label={`Go to ${item}`}
                >
                  {item === "/" ? "Home" : item}
                </Link>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}
