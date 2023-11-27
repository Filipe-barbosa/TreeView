interface CustomLabelProps extends React.HTMLProps<HTMLLabelElement> {
  label: string;
}

export const CustomLabel = ({
  label,
  className,
  ...props
}: CustomLabelProps) => {
  return (
    <label
      className={className}
      {...props}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  );
};
