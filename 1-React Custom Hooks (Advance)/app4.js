const useSemiPersistentState = (initialState) => {
    const [value, setValue] = React.useState(
     localStorage.getItem('value') || initialState
    );

    React.useEffect(() => {
     localStorage.setItem('value', value);
    }, [value]);
    
    return [value, setValue];
    };