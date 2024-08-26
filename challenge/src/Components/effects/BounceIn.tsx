import { motion } from 'framer-motion'

type ChildrenProps = {
    children: React.ReactNode
}

export function BounceIn({ children }: ChildrenProps) {
    return (
        <motion.div
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
        >
            {children}
        </motion.div>
    )
}
