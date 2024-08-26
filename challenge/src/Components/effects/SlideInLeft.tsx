import { motion } from 'framer-motion'

type ChildrenProps = {
    children: React.ReactNode
}

export function SlideInLeft({ children }: ChildrenProps) {
    return (
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}
