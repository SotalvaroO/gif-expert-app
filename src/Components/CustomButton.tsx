interface ButtonModel {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CustomButton({ onClick }: ButtonModel) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform transform active:scale-95"
    >
      Buscar
    </button>
  );
}
