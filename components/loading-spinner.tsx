export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-indigo-500 to-pink-500 dark:from-indigo-800 dark:to-pink-600">
      <div className="h-9 w-9 rounded-full bg-gray-200 dark:bg-gray-600"></div>
    </div>
  );
}
