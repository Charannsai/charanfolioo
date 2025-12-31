import { useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const freelancers = [
    {
        name: 'TechCorp Solutions',
        link: 'https://protractors.studio',
        description: 'E-commerce Platform',
    },
    {
        name: 'Infinity Code Nexus',
        link: 'https://infinitycodenexus.com',
        description: 'Portfolio Website',
    },
    {
        name: 'Alpha Stream',
        link: 'https://linear.app',
        description: 'SaaS Dashboard',
    },
    {
        name: 'NextGen AI',
        link: 'https://openai.com',
        description: 'Landing Page',
    },
    {
        name: 'Stripe',
        link: 'https://stripe.com',
        description: 'Fintech',
    },
];

const FreelanceCard = ({ project }) => {
    // Using simple thum.io for screenshots. 
    // Note: Caching might delay updates for brand new sites, and some sites might block bots.
    const screenshotUrl = `https://image.thum.io/get/width/600/crop/800/noanimate/${project.link}`;

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-none w-[300px] md:w-[450px] aspect-video rounded-xl overflow-hidden border border-portfolio-border group cursor-pointer bg-portfolio-card"
        >
            {/* Website Screenshot */}
            <div className="w-full h-full bg-portfolio-muted/10">
                <img
                    src={screenshotUrl}
                    alt={project.name}
                    loading="eager"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Hover Overlay with Name */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.name}
                </h3>
                <span className="text-white/70 text-sm mt-2 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    Visit Website <FiExternalLink />
                </span>
            </div>
        </a>
    );
};

export default function FreelanceCarousel() {
    useEffect(() => {
        // Preload images for smoother marquee experience
        freelancers.forEach((project) => {
            const img = new Image();
            img.src = `https://image.thum.io/get/width/600/crop/800/noanimate/${project.link}`;
        });
    }, []);

    return (
        <div className="w-full overflow-hidden relative group/carousel">
            {/* Fade Gradients */}
            <div className="absolute top-0 left-0 h-full w-8 md:w-20 bg-gradient-to-r from-portfolio-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-8 md:w-20 bg-gradient-to-l from-portfolio-bg to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            {/* pause animation on hover of the specific card or the whole track? User asked: "corousel should stop if i hover on them" */}
            <div
                className="flex gap-4 py-2 w-max animate-marquee hover:[animation-play-state:paused]"
            >
                {/* Quadruple the items to ensure smooth infinite scroll even on wide screens */}
                {[...freelancers, ...freelancers, ...freelancers, ...freelancers].map((project, idx) => (
                    <FreelanceCard key={`${project.name}-${idx}`} project={project} />
                ))}
            </div>
        </div>
    );
}
