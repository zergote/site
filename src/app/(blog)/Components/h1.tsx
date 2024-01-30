import { withHeadingId } from "./utils";

export function H1({ children }: { children: any }) {
  return (
    <h1 className="text-2xl font-bold mb-1 dark:text-gray-100 text-blue-700">
      {withHeadingId(children)}
    </h1>
  );
}
