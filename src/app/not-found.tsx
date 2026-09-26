import Link from "next/link";

const NotFound = () => {
    return (
        <main className="min-h-screen bg-[#0d0e11] text-white flex items-center justify-center px-4">
            <div className="text-center">
                <p className="text-lime-400 text-sm font-bold tracking-widest">
                    404
                </p>

                <h1 className="text-4xl font-bold mt-3">
                    Page Not Found
                </h1>

                <p className="text-gray-500 text-sm mt-3">
                    The page you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="inline-block mt-6 bg-lime-400 text-black px-5 py-3 rounded-md font-bold text-sm"
                >
                    Back to Workouts
                </Link>
            </div>
        </main>
    );
};

export default NotFound;