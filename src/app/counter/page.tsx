'use client'

export default function Counter() {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

    }

    return (
        <main className= "flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
            <h1 className= "text-6xl font-bold text-gray-800">Counter</h1>
            <form onSubmit={handleSubmit}>
                <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-800 transition-colors"
                >
                    Increment
                </button>
            </form>
        </main>
    )
}