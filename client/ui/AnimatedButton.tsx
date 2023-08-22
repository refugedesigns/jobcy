import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

type Props = {
  buttonText: string;
};

type otherProps = {
  [key: string]: any;
};

const AnimatedButton = ({ buttonText, ...props }: Props & otherProps) => {
  return (
    <motion.div className="w-full mx-auto py-5" whileHover={{ y: -5 }} transition={{ duration: 0.5, ease: "easeOut" }}>
      <Button {...props}>{buttonText}</Button>
    </motion.div>
  );
};

export default AnimatedButton;
