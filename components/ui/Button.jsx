const Button = ({ type = "submit", className, ...props }) => (
  <button
    type={type}
    className={`${className} inline-flex items-center px-4 py-2 bg-[#417ee7] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-[#123768] active:bg-bg-[#123768] focus:outline-none focus:border-bg-[#123768] focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`}
    {...props}
  />
);

export default Button;
