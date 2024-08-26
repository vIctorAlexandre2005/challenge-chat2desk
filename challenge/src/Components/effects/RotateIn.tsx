import { motion } from 'framer-motion'

type ChildrenProps = {
    children: React.ReactNode
}

export function RotateIn({ children }: ChildrenProps) {
    return (
        <motion.div
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}
