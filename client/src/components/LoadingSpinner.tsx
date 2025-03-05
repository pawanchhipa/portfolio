import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className="h-8 w-8 text-primary" />
      </motion.div>
    </div>
  );
}
