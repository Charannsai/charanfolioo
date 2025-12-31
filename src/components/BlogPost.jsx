import React, { useState } from 'react'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { FiArrowLeft, FiClock, FiCalendar, FiShare2, FiBookmark, FiArrowUpRight, FiCopy, FiCheck } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import 'highlight.js/styles/github-dark.css'

const extractText = (node) => {
    if (typeof node === 'string') return node
    if (Array.isArray(node)) return node.map(extractText).join('')
    if (node && node.props && node.props.children) return extractText(node.props.children)
    return ''
}

const PreBlock = ({ children, ...props }) => {
    const [isCopied, setIsCopied] = useState(false)

    // children is the <code> element. Access its props for className.
    // Safely handle if children is not what we expect
    const codeProps = children?.props || {}
    const className = codeProps.className || ''
    const match = /language-(\w+)/.exec(className)
    const language = match ? match[1] : 'code'

    const handleCopy = async () => {
        const text = extractText(children)
        await navigator.clipboard.writeText(text)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
    }

    return (
        <div className="relative group my-6 rounded-xl overflow-hidden border border-portfolio-muted/10 bg-[#0d1117]">
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                <span className="text-xs font-mono text-white/60 lowercase">{language}</span>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
                >
                    {isCopied ? (
                        <>
                            <FiCheck className="text-green-400" />
                            <span className="text-green-400">Copied!</span>
                        </>
                    ) : (
                        <>
                            <FiCopy />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="!bg-transparent !m-0 !p-0 font-mono text-sm leading-relaxed" {...props}>
                    {children}
                </pre>
            </div>
        </div>
    )
}



const CustomCode = ({ node, inline, className, children, ...props }) => {
    if (inline) {
        return (
            <code className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded px-1.5 py-0.5 font-mono text-[0.9em] font-medium" {...props}>
                {children}
            </code>
        )
    }
    return (
        <code className={className} {...props}>
            {children}
        </code>
    )
}

export default function BlogPost({ post, onBack }) {
    if (!post) return null

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl mx-auto pb-12"
        >
            {/* Back Button */}
            <button
                onClick={onBack}
                className="group flex items-center gap-2 text-sm text-portfolio-muted mb-16 hover:text-portfolio-text transition-colors"
            >
                <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                Back to writings
            </button>

            {/* Header Info */}
            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-portfolio-muted mb-6 font-mono">
                <div className="flex gap-2">
                    {post.tags && post.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-portfolio-muted/10 rounded text-portfolio-text/80">
                            {tag}
                        </span>
                    ))}
                </div>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                    <FiCalendar className="w-3.5 h-3.5" />
                    {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                    <FiClock className="w-3.5 h-3.5" />
                    {post.readTime}
                </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-portfolio-text mb-8 tracking-tight leading-tight">
                {post.title}
            </h1>

            {/* Author Bar */}
            <div className="flex items-center justify-between border-y border-portfolio-muted/10 py-6 mb-12">
                <div className="flex items-center gap-4">
                    <img
                        src={post.authorImage || "/profile2.png"}
                        alt={post.author}
                        className="w-10 h-10 rounded-full bg-portfolio-muted/10 object-cover"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-portfolio-text">{post.author}</span>
                        <span className="text-xs text-portfolio-muted">{post.role}</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-portfolio-muted">
                    <button className="hover:text-portfolio-text transition-colors p-2 hover:bg-portfolio-muted/5 rounded-full"><FiShare2 /></button>
                    <button className="hover:text-portfolio-text transition-colors p-2 hover:bg-portfolio-muted/5 rounded-full"><FiBookmark /></button>
                </div>
            </div>

            {/* Content */}
            {/* Content */}
            {/* Content */}
            <div className="max-w-none text-portfolio-text">
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                        pre: PreBlock,
                        code: CustomCode,
                        h1: ({ node, ...props }) => <h1 className="text-3xl md:text-4xl font-bold border-b border-portfolio-muted/20 pb-2 mt-10 mb-6" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-2xl md:text-3xl font-semibold border-b border-portfolio-muted/20 pb-2 mt-10 mb-4" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4" {...props} />,
                        h4: ({ node, ...props }) => <h4 className="text-lg md:text-xl font-semibold mt-6 mb-3" {...props} />,
                        p: ({ node, ...props }) => <p className="mb-5 leading-7 md:leading-8 text-base md:text-[1.05rem] text-portfolio-text/90" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-5 space-y-2 text-portfolio-text/90" {...props} />,
                        ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-5 space-y-2 text-portfolio-text/90" {...props} />,
                        li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                        blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-portfolio-muted/30 pl-4 my-6 text-portfolio-muted italic" {...props} />,
                        a: ({ node, ...props }) => <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium" {...props} />,
                        hr: ({ node, ...props }) => <hr className="my-10 border-portfolio-muted/20" {...props} />,
                        img: ({ node, ...props }) => <img className="rounded-xl shadow-lg my-8 max-w-full h-auto" {...props} />
                    }}
                >
                    {post.content}
                </Markdown>
            </div>



            {/* Newsletter */}
            <div className="mt-8 border border-portfolio-muted/10 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-portfolio-card to-portfolio-bg shadow-sm">
                <h4 className="text-lg font-bold text-portfolio-text mb-2">Subscribe to the newsletter</h4>
                <p className="text-sm text-portfolio-muted mb-6">Get the latest posts on engineering, design, and tech delivered straight to your inbox.</p>
                <div className="flex gap-3">
                    <input
                        type="email"
                        placeholder="email@example.com"
                        className="flex-1 bg-portfolio-bg border border-portfolio-muted/20 rounded-lg px-4 py-2 text-sm text-portfolio-text placeholder:text-portfolio-muted/50 focus:outline-none focus:border-portfolio-text/50 transition-colors"
                    />
                    <button className="bg-portfolio-text text-portfolio-bg text-sm font-medium px-5 py-2 rounded-lg transition-transform active:scale-95 hover:opacity-90">
                        Subscribe
                    </button>
                </div>
            </div>

        </motion.article>
    )
}
