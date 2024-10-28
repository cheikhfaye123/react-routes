import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="max-w-3xl mx-auto text-center p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
                ¡Bienvenido a mi Portfolio!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
                Soy un desarrollador web apasionado por crear experiencias digitales excepcionales.
                Explora mis proyectos y conoce más sobre mi experiencia profesional.
            </p>
            <div className="flex justify-center gap-4">
                <Link
                    to="/projects"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Ver Proyectos
                </Link>
                <Link
                    to="/resume"
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                    Ver Currículum
                </Link>
            </div>
        </div>
    )
}

export default Home