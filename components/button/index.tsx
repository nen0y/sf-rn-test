import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  onClick,
  className,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onClick}
      className={`bg-[#e5f5fd] rounded-lg py-3 px-4 text-[#0663d1] text-sm flex items-center`}
      {...props}
    >
      <Text className="text-[#0663d1] font-medium">{children}</Text>
    </TouchableOpacity>
  );
}
