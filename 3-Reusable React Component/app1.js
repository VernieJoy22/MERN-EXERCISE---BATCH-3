const App = () => {
    ...
    return (
      <div>
        <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch}
    />


    ...
        </div>
      );
    };
    
    