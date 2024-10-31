import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from "./components/nav";

const Layout = ({ children }) => {
    return (
        <div className="relative">
            <Header />

            <div className="flex">

                {/* Sidebar */}
                <div className="w-64">
                    <Sidebar />
                </div>

                <div className="flex-1 bg-gray-100 min-h-screen">
                    <main className="pt-10 pb-16 mt-12">
                        {children}
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;