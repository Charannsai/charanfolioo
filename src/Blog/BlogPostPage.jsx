import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import fm from 'front-matter'
import BlogPost from '../components/BlogPost'
import ThemeToggle from '../components/ThemeToggle'

export default function BlogPostPage() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const isWrites = window.location.hostname.startsWith('writes.')
    const backPath = isWrites ? '/' : '/blogs'
    const [post, setPost] = useState(null)
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
        const loadPost = async () => {
            try {
                // Eager loading all MD files is okay for a small blog. 
                // For simplified dynamic import in logic:
                const modules = import.meta.glob('./posts/*.md', { query: '?raw', import: 'default', eager: true })
                // Find module matching slug
                const matchedPath = Object.keys(modules).find(path => path.includes(`${slug}.md`))

                if (matchedPath) {
                    const content = modules[matchedPath]
                    const { attributes, body } = fm(content)
                    setPost({ ...attributes, content: body })
                }
            } catch (e) {
                console.error("Post not found", e)
            }
        }
        loadPost()
    }, [slug])

    if (!post) {
        return <div className="min-h-screen bg-portfolio-bg flex items-center justify-center text-portfolio-muted">Loading...</div>
    }

    return (
        <div className="min-h-screen bg-portfolio-bg text-portfolio-text font-sans px-6 py-12">
            <div className="max-w-2xl mx-auto">
                <BlogPost post={post} onBack={() => navigate(backPath)} />

                {/* Footer Section matching App.jsx */}
                <section className="py-6 border-t border-portfolio-muted/10 mt-16 mb-6">
                    <div className="flex flex-col justify-end items-end gap-2 text-sm text-portfolio-muted">
                        <ThemeToggle theme={theme} setTheme={setTheme} />
                        <p className="text-xs opacity-60">Last updated on: November 2025</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
