import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
}