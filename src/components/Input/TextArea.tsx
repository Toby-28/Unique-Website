const TextArea: React.FC<any> = () => {
  return (
    <textarea
      className="w-full h-24 p-2 outline-none border-b border-blue-300 mb-1 bg-blue-900"
      placeholder="Message"
    ></textarea>
  );
};

export default TextArea;
