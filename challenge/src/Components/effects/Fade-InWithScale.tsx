import { motion } from 'framer-motion'

type ChildrenProps = {
    children: React.ReactNode
}

export function FadeInWithScale({ children }: ChildrenProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
};