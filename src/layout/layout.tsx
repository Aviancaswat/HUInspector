import Navbar from "@/layout/navbar"
import Footer from "./footer"

interface LayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <nav className="w-full md:px-8 py-4 max-w-7xl mx-auto">
                <Navbar />
            </nav>
            <main>
                {children}
            </main>
            <footer className="w-full md:px-8 py-4 max-w-7xl mx-auto">
                <Footer />
            </footer>
        </div>
    )
}