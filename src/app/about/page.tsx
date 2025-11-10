export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6">
        <div className="max-w-3xl mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            About Yazzo.io
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Our mission is to empower businesses with innovative solutions
          </p>
        </div>

        <div className="space-y-8">
          <div className="border-l-4 border-gray-300 pl-4 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Our Vision
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              To revolutionize the industry through innovative technology solutions that make a real difference.
            </p>
          </div>

          <div className="border-l-4 border-gray-300 pl-4 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Our Values
            </h3>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li>Innovation at the core</li>
              <li>Customer-centric approach</li>
              <li>Quality and reliability</li>
              <li>Continuous improvement</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-300 pl-4 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Our Story
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Founded with a vision to create impactful solutions, Yazzo.io has grown into a leading provider of innovative technology products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}