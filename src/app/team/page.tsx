export default function Team() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6">
        <div className="max-w-3xl mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Meet the passionate people behind Yazzo.io
          </p>
        </div>
        
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {/* Team Member Cards */}
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Team Member Name
              </h3>
              <span className="text-gray-500 dark:text-gray-400">Position</span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Brief description about the team member and their role at Yazzo.io
              </p>
            </div>
          </div>
          
          {/* Add more team member cards as needed */}
        </div>
      </div>
    </div>
  );
}