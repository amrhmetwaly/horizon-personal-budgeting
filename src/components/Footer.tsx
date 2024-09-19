import React from 'react';

const Footer: React.FC = () => {
    const tools = [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Firebase',
        'Framer Motion',
        'Lucide React Icons',
        'React Icons'
    ];

    return (
        <footer className="bg-blue-900 text-white py-4 mt-auto">
            <div className="container mx-auto px-4">
                <p className="text-center mb-2">Built with:</p>
                <div className="flex flex-wrap justify-center">
                    {tools.map((tool, index) => (
                        <span key={index} className="mx-2 mb-2 px-2 py-1 bg-blue-800 rounded-full text-sm">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;