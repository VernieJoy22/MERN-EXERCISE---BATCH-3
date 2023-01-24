const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = React.useState(
     localStorage.getItem(key) || initialState
    );

    React.useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
    };

    const App = () => {
    ...
    const [searchTerm, setSearchTerm] = useSemiPersistentState(
      'search',
    'React'
    );
    ...
};
