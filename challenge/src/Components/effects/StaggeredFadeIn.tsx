import { motion } from 'framer-motion'

type ChildrenProps = {
    children: React.ReactNode
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

export function StaggeredFadeIn({ children }: ChildrenProps) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants}>
                {children}
            </motion.div>

        </motion.div>
    )
}
