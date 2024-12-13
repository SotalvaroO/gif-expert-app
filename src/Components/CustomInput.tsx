interface InputModel {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

export default function CustomButton({
  value,
  onChange,
  placeholder = "",
  type = "text",
}: InputModel) {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className="flex-grow border rounded-md border-slate-800 p-2"
        aria-label="Buscar GIFs"
      />
    </>
  );
}
