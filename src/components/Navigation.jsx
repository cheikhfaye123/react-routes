import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex space-x-8">
                        <Link
                            to="/"
                            className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500"
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/projects"
                            className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500"
                        >
                            Proyectos
                        </Link>
                        <Link
                            to="/resume"
                            className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500"
                        >
                            Currículum
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation