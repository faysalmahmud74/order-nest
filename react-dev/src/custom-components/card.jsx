export default function Card({ children, className = "", onClick }) {
    return (
        <div 
            className={`w-full bg-white shadow rounded ${className}`} 
            onClick={onClick}
        >
            <main>
                {children}
            </main>
        </div>
    );
}