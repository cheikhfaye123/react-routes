const Resume = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Currículum</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Educación</h2>
                {studies.map((study) => (
                    <div
                        key={study.id}
                        className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {study.title}
                        </h3>
                        <p className="text-gray-600 mb-1">{study.institution}</p>
                        <p className="text-gray-500">{study.date}</p>
                    </div>
                ))}
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Experiencia Laboral
                </h2>
                {experiences.map((experience) => (
                    <div
                        key={experience.id}
                        className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {experience.title}
                        </h3>
                        <p className="text-gray-600 mb-1">{experience.company}</p>
                        <p className="text-gray-500">{experience.date}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Resume