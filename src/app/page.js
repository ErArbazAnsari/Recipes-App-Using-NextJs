import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100 dark:bg-black dark:text-white">
            <header className="text-center mb-8">
                <h1 className="text-5xl font-extrabold ">
                    Welcome to the Recipe App
                </h1>
            </header>
            <section>
                <Link
                    href="/recipes"
                    className="inline-block bg-blue-500 text-white text-lg font-medium py-3 px-6 rounded-xl 
                        hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-700 
                        transition duration-200"
                    aria-label="Explore Recipe List"
                >
                    Explore Recipe List
                </Link>
            </section>
        </main>
    );
}
