import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiPenTool } from 'react-icons/fi'
import { motion } from 'framer-motion'
import fm from 'front-matter'
import ThemeToggle from '../components/ThemeToggle'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export default function BlogList() {
    const [posts, setPosts] = useState([])
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system')

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            root.classList.add(systemTheme)
        } else {
            root.classList.add(theme)
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        const loadPosts = async () => {
            const modules = import.meta.glob('./posts/*.md', { query: '?raw', import: 'default', eager: true })
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

            parsedPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
            setPosts(parsedPosts)
        }
        loadPosts()
    }, [])

    return (
        <div className="min-h-screen bg-portfolio-bg text-portfolio-text font-sans px-6 py-12">
            <div className="max-w-2xl mx-auto">
                <header className="flex justify-between items-center mb-16">
                    <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-portfolio-text hover:opacity-80 transition-opacity">
                        Charan Writes <FiPenTool className="w-5 h-5" />
                    </Link>
                </header>

                <main>
                    <div className="mb-12 relative">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-portfolio-text to-portfolio-muted pb-2">
                            Writings
                        </h1>
                        <p className="text-lg text-portfolio-muted max-w leading-relaxed">
                            You can find my thoughts on various aspects and domains, I write my side of point of views and share my thoughts with you.
                        </p>
                        <div className="w-full h-px bg-portfolio-muted/10 mt-8" />
                    </div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col gap-4"
                    >
                        {posts.map((post) => (
                            <motion.div key={post.slug} variants={item}>
                                <Link
                                    to={`/blogs/${post.slug}`}
                                    className="group block border dark:border-portfolio-muted/10 border-portfolio-muted/5 p-6 -mx-6 rounded-2xl transition-all hover:bg-portfolio-muted/5 relative overflow-hidden"
                                >
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3 gap-2">
                                        <h3 className="text-xl font-bold text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                                            {post.title}
                                        </h3>
                                        <span className="text-xs text-portfolio-muted/60 font-mono shrink-0">{post.date}</span>
                                    </div>

                                    {/* Abstract/Preview could go here if available, using title as main hook for now */}

                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex gap-2">
                                            {post.tags && post.tags.slice(0, 3).map(tag => (
                                                <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-portfolio-muted/10 text-portfolio-text/80 font-medium tracking-wide">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center text-xs font-semibold text-portfolio-muted group-hover:text-portfolio-text transition-colors gap-1 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                                            Read Article <FiArrowUpRight />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Footer Section matching App.jsx */}
                    <section className="py-6 border-t border-portfolio-muted/10 mt-16 mb-6">
                        <div className="flex flex-col justify-end items-end gap-2 text-sm text-portfolio-muted">
                            <ThemeToggle theme={theme} setTheme={setTheme} />
                            <p className="text-xs opacity-60">Last updated on: November 2025</p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
