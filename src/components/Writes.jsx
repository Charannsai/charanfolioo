import { useState, useEffect } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import fm from 'front-matter'

export default function Writes() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const loadPosts = async () => {
            const modules = import.meta.glob('../Blog/posts/*.md', { query: '?raw', import: 'default', eager: true })
            const parsedPosts = Object.entries(modules).map(([path, content]) => {
                try {
                    const { attributes, body } = fm(content)
                    return {
                        slug: path.split('/').pop().replace('.md', ''),
                        ...attributes,
                        content: body
                    }
                } catch (e) {
                    console.error(`Error parsing blog post ${path}:`, e)
                    return null
                }
            }).filter(post => post !== null)
            // Sort by date desc
            parsedPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
            setPosts(parsedPosts)
        }
        loadPosts()
    }, [])

    return (
        <div className="flex flex-col gap-4 animate-in fade-in duration-500">
            {posts.map((post) => (
                <button
                    key={post.slug}
                    onClick={() => navigate(`/blogs/${post.slug}`)}
                    className="group block text-left border-b border-portfolio-muted/10 pb-6 pt-2 last:border-0"
                >
                    <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-lg font-semibold text-portfolio-text group-hover:text-portfolio-muted transition-colors">
                            {post.title}
                        </h3>
                        <span className="text-xs text-portfolio-muted/60 font-mono shrink-0 ml-4">{post.date}</span>
                    </div>
                    <div className="flex gap-2 mb-3">
                        {post.tags && post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-portfolio-muted/5 text-portfolio-muted uppercase tracking-wider font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center text-xs text-portfolio-muted font-medium group-hover:text-portfolio-text transition-colors gap-1">
                        Read details <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                </button>
            ))}

            {posts.length === 0 && (
                <div className="text-portfolio-muted text-sm py-8 text-center italic">
                    Loading thoughts...
                </div>
            )}

            {posts.length > 0 && (
                <div className="mt-2 text-center md:text-left">
                    <button
                        onClick={() => navigate('/blogs')}
                        className="inline-flex items-center gap-1 text-xs text-portfolio-text/60 hover:text-portfolio-text transition-colors border-b border-transparent hover:border-portfolio-text/30 pb-0.5"
                    >
                        View all writings <FiArrowUpRight />
                    </button>
                </div>
            )}
        </div>
    )
}
