const InputWithLabel = ({
    id,
    value,
    type = 'text',
    onInputChange,
    isFocused,
    children,
}) => {
    // A
    const inputRef = React.useRef();
    // C
    React.useEffect(() => {
      if (isFocused && inputRef.current) {
      // D
      inputRef.current.focus();
     }
}, [isFocused]);
    
return (
    <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    {/* B */}
    <input
      ref={inputRef}
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
    />
  </>  
 );
};
    