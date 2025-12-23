import Navbar from "@/components/home/navbar"

interface LayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <nav className="w-full px-4 md:px-8 py-4 max-w-7xl mx-auto">
                <Navbar />
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}